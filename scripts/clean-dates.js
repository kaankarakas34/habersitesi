const fs = require('fs');
const path = require('path');

const STORAGE_PATH = path.join(__dirname, '..', 'data', 'storage.json');
const data = JSON.parse(fs.readFileSync(STORAGE_PATH, 'utf8'));

const list = [
  'art-master-11', 'art-master-12', 'art-master-14', 'art-master-15', 'art-master-16',
  'art-master-17', 'art-master-18', 'art-master-21', 'art-master-22', 'art-master-23'
];

list.forEach(id => {
  const a = data.articles.find(x => x.id === id);
  if (a) {
    a.content = a.content.replace(/26 Nisan 2025 tarihli 30123 sayılı eski yönetmelik yürürlükten kaldırılmıştır\./g, "13 Temmuz 2017 tarihli ve 30123 sayılı eski yönetmelik yürürlükten kaldırılmıştır.");
  }
});

fs.writeFileSync(STORAGE_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log('Fixed accurate historical reference in 10 articles.');
