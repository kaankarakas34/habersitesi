import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import ts from 'typescript';

const published = (id, publishedAt, extra = {}) => ({ id, slug: id, status: 'yayimlandi', publishedAt, ...extra });
function service(articles) {
  const source = fs.readFileSync('lib/services/articleService.ts', 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
  const exports = {};
  vm.runInNewContext(outputText, {
    exports,
    require: (name) => {
      assert.equal(name, './storage');
      return { readStorage: () => ({ articles }) };
    },
  });
  return exports;
}

test('new publication replaces an old pinned headline and starts the latest feed', () => {
  const old = published('old-pinned', '2026-09-17T10:00:00Z', { isHeadline: true, isSecondaryHeadline: true });
  const articles = [old, ...Array.from({ length: 12 }, (_, i) => published(`new-${i}`, `2026-10-19T08:${String(59 - i).padStart(2, '0')}:00Z`))];
  const api = service(articles);
  assert.equal(api.getHeadlineArticle().id, 'new-0');
  assert.equal(api.getSecondaryHeadlines().map(a => a.id).join(','), 'new-1,new-2,new-3,new-4');
  assert.equal(api.getLatestArticles(3).map(a => a.id).join(','), 'new-0,new-1,new-2');
  articles.push(published('just-published', '2026-10-19T09:00:00Z'));
  assert.equal(api.getHeadlineArticle().id, 'just-published');
  assert.equal(api.getLatestArticles(1)[0].id, 'just-published');
});

test('drafts stay private and empty feeds are safe', () => {
  const api = service([published('public', '2026-10-19T08:00:00Z'), published('draft', '2026-10-19T09:00:00Z', { status: 'taslak' })]);
  assert.equal(api.getAllArticles().map(a => a.id).join(','), 'public');
  assert.equal(api.getArticleBySlug('draft'), undefined);
  assert.equal(service([]).getHeadlineArticle(), undefined);
  assert.equal(service([]).getLatestArticles().length, 0);
});
