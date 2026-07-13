import { useEffect, useMemo, useState } from 'react';
import AssignmentFrame from './AssignmentFrame';
import { assetPath } from '../../utils/assets';

type Props = {
  number: number;
  title: string;
  source: string;
  images?: string[];
  extraImages?: { title: string; src: string }[];
};

type Block =
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'paragraph'; text: string };

function normalizeText(text: string) {
  return text
    .replace(/\r/g, '')
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/\u2013/g, '-')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function parseBlocks(text: string): Block[] {
  const lines = normalizeText(text).split('\n').map((line) => line.trim()).filter(Boolean);
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: 'paragraph', text: paragraph.join(' ') });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (list.length) {
      blocks.push({ type: 'list', items: list });
      list = [];
    }
  };

  for (const line of lines) {
    const heading = /^(I{1,3}|IV|V|VI|VII|VIII|IX|X)\.\s+/.test(line);
    const subheading = /^(\d+\.|[A-Z]\.)\s+/.test(line) || /^[+-]\s+/.test(line);
    const bullet = /^[\u25cf\u2022]\s+/.test(line);

    if (heading) {
      flushParagraph();
      flushList();
      blocks.push({ type: 'heading', text: line });
      continue;
    }

    if (bullet) {
      flushParagraph();
      list.push(line.replace(/^[\u25cf\u2022]\s+/, ''));
      continue;
    }

    if (subheading && line.length < 120) {
      flushParagraph();
      flushList();
      blocks.push({ type: 'subheading', text: line.replace(/^[+-]\s+/, '') });
      continue;
    }

    if (list.length) {
      list[list.length - 1] = `${list[list.length - 1]} ${line}`;
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

export function StructuredBody({ text }: { text: string }) {
  const blocks = useMemo(() => parseBlocks(text), [text]);

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return <h3 key={index} className="border-l-4 border-pink-500 pl-4 text-xl font-extrabold text-slate-950">{block.text}</h3>;
        }
        if (block.type === 'subheading') {
          return <h4 key={index} className="rounded-xl bg-rose-50 px-4 py-3 text-lg font-bold text-pink-950">{block.text}</h4>;
        }
        if (block.type === 'list') {
          return (
            <ul key={index} className="space-y-3 rounded-2xl border border-pink-100 bg-white p-5 text-slate-800">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex gap-3 leading-8">
                  <span className="mt-3 size-2 shrink-0 rounded-full bg-pink-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return <p key={index} className="text-[15px] leading-8 text-slate-800 sm:text-base">{block.text}</p>;
      })}
    </div>
  );
}

export default function StructuredTextAssignment({ number, title, source, images = [], extraImages = [] }: Props) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(assetPath(source)).then((response) => response.text()).then(setContent);
  }, [source]);

  return (
    <AssignmentFrame
      number={number}
      title={title}
      intro={'N\u1ed9i dung t\u1eeb file g\u1ed1c trong ZIP \u0111\u01b0\u1ee3c d\u1ef1ng l\u1ea1i th\u00e0nh trang web c\u00f3 heading, list, b\u1ea3ng/kh\u1ed1i v\u00e0 \u1ea3nh minh ch\u1ee9ng.'}
    >
      <div className="rounded-2xl border border-pink-100 bg-white p-5 sm:p-8">
        {content ? <StructuredBody text={content} /> : <p className="text-slate-500">{'\u0110ang t\u1ea3i n\u1ed9i dung b\u00e0i l\u00e0m...'}</p>}
      </div>

      {(images.length > 0 || extraImages.length > 0) && (
        <section className="rounded-2xl border border-orange-100 bg-orange-50/70 p-5 sm:p-8">
          <h3 className="mb-5 text-lg font-bold text-slate-900">{'H\u00ecnh \u1ea3nh minh ch\u1ee9ng trong b\u00e0i n\u1ed9p'}</h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {images.map((image, index) => (
              <figure key={image} className="overflow-hidden rounded-2xl border border-white bg-white shadow-sm">
                <img src={assetPath(image)} alt={`H\u00ecnh minh ch\u1ee9ng ${index + 1}`} className="w-full object-contain" />
              </figure>
            ))}
            {extraImages.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-2xl border border-white bg-white shadow-sm">
                <figcaption className="border-b border-orange-100 px-4 py-3 text-sm font-semibold text-slate-600">{image.title}</figcaption>
                <img src={assetPath(image.src)} alt={image.title} className="w-full object-contain" />
              </figure>
            ))}
          </div>
        </section>
      )}
    </AssignmentFrame>
  );
}
