const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Установите пакет jsdom сначала: npm install --save-dev jsdom

async function generateStatic() {
  // Путь к HTML файлу, созданному Vite
  const indexPath = path.resolve(__dirname, '../dist/index.html');

  // Чтение HTML файла
  const html = fs.readFileSync(indexPath, 'utf8');

  // Создание DOM из HTML
  const dom = new JSDOM(html);
  const document = dom.window.document;

  // Добавление/обновление метатегов
  updateMetaTags(document);

  // Запись обновленного HTML
  fs.writeFileSync(indexPath, dom.serialize());

  console.log('Static HTML with meta tags generated successfully!');
}

function updateMetaTags(document) {
  // Функция для обновления или создания метатега
  const setMetaTag = (name, content, property = null) => {
    const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;

    let tag = document.querySelector(selector);

    if (!tag) {
      tag = document.createElement('meta');
      if (property) {
        tag.setAttribute('property', property);
      } else {
        tag.setAttribute('name', name);
      }
      document.head.appendChild(tag);
    }

    tag.setAttribute('content', content);
  };

  // Обновление стандартных метатегов
  setMetaTag(
    'description',
    'Clinically tested weight loss formula approved by British health experts. Achieve weight loss without strict diets. Limited UK supply available now.',
  );
  setMetaTag('author', 'HealthGuard UK');

  // Обновление Open Graph метатегов
  setMetaTag('og:title', 'HealthGuard UK - Revolutionary Weight Management Formula', 'og:title');
  setMetaTag(
    'og:description',
    'Clinically tested weight loss formula approved by British health experts. Achieve weight loss without strict diets. Limited UK supply available now.',
    'og:description',
  );
  setMetaTag('og:type', 'website', 'og:type');
  setMetaTag('og:image', 'https://yourdomain.com/path/to/image.jpg', 'og:image');

  // Обновление Twitter метатегов
  setMetaTag('twitter:card', 'summary_large_image');
  setMetaTag('twitter:site', '@healthguarduk');
  setMetaTag('twitter:image', 'https://yourdomain.com/path/to/image.jpg');

  // Установка заголовка страницы
  document.title = 'HealthGuard UK - Revolutionary Weight Management Formula';
}

generateStatic().catch(console.error);
