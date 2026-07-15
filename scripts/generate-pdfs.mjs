import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

const root = process.cwd();
const assets = path.join(root, 'public', 'assets');
const output = path.join(assets, 'files');
const chromePaths = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
];

const reports = [
  { number: 2, title: 'Tìm kiếm và đánh giá thông tin học thuật', source: 'bai2-source.txt', images: ['thumb2.png'] },
  { number: 3, title: 'Thực hành Prompt Engineering', source: 'bai3-source.txt', images: ['thumb3.png'] },
  { number: 4, title: 'Hợp tác trực tuyến trong dự án nhóm', source: 'bai4-source.txt', images: ['evidence/bai4-1-Image25.jpg', 'evidence/bai4-2-Image28.png', 'evidence/bai4-3-Image31.jpg', 'evidence/bai4-4-Image34.png', 'evidence/bai4-7-Image48.png', 'evidence/bai4-9-Image54.png'] },
  { number: 5, title: 'AI tạo sinh trong sáng tạo nội dung số', source: 'bai5-source.txt', images: ['evidence/bai5-1-Image34.png', 'evidence/bai5-2-Image35.png', 'evidence/bai5-3-Image38.jpg', 'evidence/bai5-4-Image41.jpg', 'evidence/bai5-5-Image44.jpg', 'evidence/bai5-6-Image51.jpg', '5.1.png'] },
  { number: 6, title: 'Sử dụng AI có trách nhiệm trong học thuật', source: 'bai6-source.txt', images: ['evidence/bai6-1-Image34.png', 'evidence/bai6-2-Image47.jpg', '6.1.png'] },
  { number: 7, title: 'Học liệu ngoại ngữ cá nhân hóa bằng AI', source: 'bai7-source.txt', images: ['thumb7.png'] },
];

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const imageData = async (relativePath) => {
  const extension = path.extname(relativePath).slice(1).replace('jpg', 'jpeg');
  const data = await fs.readFile(path.join(assets, relativePath));
  return `data:image/${extension};base64,${data.toString('base64')}`;
};

const documentHtml = (report, text, images) => `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <style>
    @page { size: A4; margin: 18mm 16mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #23332d; font: 12px/1.65 Arial, sans-serif; }
    header { margin-bottom: 24px; padding-bottom: 18px; border-bottom: 3px solid #17372d; }
    .number { color: #37745d; font-size: 13px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
    h1 { margin: 7px 0 0; color: #17372d; font-size: 25px; line-height: 1.25; }
    .student { margin-top: 8px; color: #60756d; }
    pre { margin: 0; white-space: pre-wrap; overflow-wrap: anywhere; font: inherit; }
    .evidence { break-before: page; }
    h2 { color: #17372d; font-size: 20px; }
    figure { margin: 0 0 18px; break-inside: avoid; border: 1px solid #d7e4dc; border-radius: 10px; overflow: hidden; }
    img { display: block; width: 100%; max-height: 235mm; object-fit: contain; }
    figcaption { padding: 8px 12px; background: #edf3ee; color: #526960; font-size: 10px; }
  </style>
</head>
<body>
  <header>
    <div class="number">Bài ${report.number}</div>
    <h1>${report.title}</h1>
    <div class="student">Lương Hải Yến · MSSV 25041239</div>
  </header>
  <pre>${escapeHtml(text)}</pre>
  ${images.length ? `<section class="evidence"><h2>Hình ảnh minh chứng</h2>${images.map((src, index) => `<figure><img src="${src}" alt="Minh chứng ${index + 1}"><figcaption>Minh chứng ${index + 1} trong bài làm</figcaption></figure>`).join('')}</section>` : ''}
</body>
</html>`;

await fs.mkdir(output, { recursive: true });
const executablePath = chromePaths.find(existsSync);

const browser = await puppeteer.launch({ headless: true, executablePath });
const page = await browser.newPage();
page.setDefaultTimeout(120000);

await page.goto(`file:///${path.join(assets, '1.html').replaceAll('\\', '/')}`, { waitUntil: 'networkidle0' });
await page.pdf({ path: path.join(output, 'bai1.pdf'), format: 'A4', printBackground: true, margin: { top: '14mm', right: '14mm', bottom: '14mm', left: '14mm' } });

for (const report of reports) {
  const text = await fs.readFile(path.join(assets, report.source), 'utf8');
  const images = await Promise.all(report.images.map(imageData));
  await page.setContent(documentHtml(report, text, images), { waitUntil: 'load', timeout: 120000 });
  await page.evaluate(() => Promise.all([...document.images].map((image) => image.complete
    ? Promise.resolve()
    : new Promise((resolve) => {
      image.addEventListener('load', resolve, { once: true });
      image.addEventListener('error', resolve, { once: true });
    }))));
  await page.pdf({ path: path.join(output, `bai${report.number}.pdf`), format: 'A4', printBackground: true });
}

await browser.close();
console.log(`Generated 7 PDF files in ${output}`);
