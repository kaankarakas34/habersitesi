import { NextResponse } from 'next/server';
import { readStorage, writeStorage } from '@/lib/services/storage';
import { Article } from '@/lib/types';

export async function GET() {
  const data = readStorage();
  return NextResponse.json({ articles: data.articles });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      title,
      spot,
      content,
      category,
      contentType,
      status,
      featuredImage,
      imageCaption,
      imageSource,
      authorId,
      isHeadline,
      isSecondaryHeadline,
      isBreaking,
      breakingBadge,
      isEditorPick,
      isSponsored,
      sponsorName,
      tags,
      region,
      country,
      branch,
      sources,
      specialFields,
    } = body;

    if (!title || !spot || !content) {
      return NextResponse.json({ error: 'Başlık, spot ve içerik alanları zorunludur.' }, { status: 400 });
    }

    const data = readStorage();

    // Create a clean slug from title
    const slug = title
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-') + '-' + Math.floor(1000 + Math.random() * 9000);

    // If this is set as headline, unset other headlines
    if (isHeadline) {
      data.articles.forEach((a) => {
        a.isHeadline = false;
      });
    }

    const newArticle: Article = {
      id: 'art-' + Date.now(),
      slug,
      title: title.trim(),
      spot: spot.trim(),
      content: content.trim(),
      category: category || 'gundem',
      contentType: contentType || 'haber',
      status: status || 'yayimlandi',
      featuredImage:
        featuredImage ||
        'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=80',
      imageCaption: imageCaption?.trim(),
      imageSource: imageSource?.trim() || 'Sağlık Turizmi Radarı',
      publishedAt: new Date().toISOString(),
      readingTime: Math.max(3, Math.ceil(content.split(/\s+/).length / 180)),
      authorId: authorId || 'editorial',
      isHeadline: !!isHeadline,
      isSecondaryHeadline: !!isSecondaryHeadline,
      isBreaking: !!isBreaking,
      breakingBadge: breakingBadge || (isBreaking ? 'SON GELİŞME' : undefined),
      isEditorPick: !!isEditorPick,
      isSponsored: !!isSponsored,
      sponsorName: sponsorName?.trim(),
      tags: Array.isArray(tags) ? tags : typeof tags === 'string' ? tags.split(',').map((t: string) => t.trim()) : ['Gündem'],
      region: region || undefined,
      country: country?.trim() || undefined,
      branch: branch?.trim() || undefined,
      sources: Array.isArray(sources) && sources.length > 0 ? sources : [{ name: 'Sağlık Turizmi Radarı Editoryal' }],
      specialFields: specialFields || undefined,
    };

    data.articles.unshift(newArticle);
    writeStorage(data);

    return NextResponse.json({ success: true, article: newArticle });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ error: 'Haber kaydedilirken bir hata oluştu.' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, isHeadline, isSecondaryHeadline, isBreaking, breakingBadge, status } = body;

    if (!id) {
      return NextResponse.json({ error: 'Article ID is required.' }, { status: 400 });
    }

    const data = readStorage();
    const article = data.articles.find((a) => a.id === id);

    if (!article) {
      return NextResponse.json({ error: 'Haber bulunamadı.' }, { status: 404 });
    }

    if (isHeadline !== undefined) {
      if (isHeadline) {
        data.articles.forEach((a) => {
          a.isHeadline = false;
        });
      }
      article.isHeadline = isHeadline;
    }

    if (isSecondaryHeadline !== undefined) {
      article.isSecondaryHeadline = isSecondaryHeadline;
    }

    if (isBreaking !== undefined) {
      article.isBreaking = isBreaking;
      if (breakingBadge) article.breakingBadge = breakingBadge;
    }

    if (status !== undefined) {
      article.status = status;
    }

    article.updatedAt = new Date().toISOString();
    writeStorage(data);

    return NextResponse.json({ success: true, article });
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json({ error: 'Güncelleme yapılamadı.' }, { status: 500 });
  }
}
