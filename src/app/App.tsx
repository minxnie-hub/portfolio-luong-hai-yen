import { ArrowLeft, ArrowUpRight, Heart, Search } from 'lucide-react';
import type { ReactNode } from 'react';
import Bai1 from './components/assignments/Bai1';
import Bai2 from './components/assignments/Bai2';
import Bai3 from './components/assignments/Bai3';
import Bai4 from './components/assignments/Bai4';
import Bai5 from './components/assignments/Bai5';
import Bai6 from './components/assignments/Bai6';
import Bai7 from './components/assignments/Bai7';

type Artwork = { id: number; title: string; category: string; thumb: string };

const artworks: Artwork[] = [
  { id: 1, title: 'B\u00e0i 1: Thi\u1ebft k\u1ebf Portfolio c\u00e1 nh\u00e2n', category: 'Qu\u1ea3n l\u00fd t\u1ec7p', thumb: '/assets/thumb1.png' },
  { id: 2, title: 'B\u00e0i 2: T\u00ecm ki\u1ebfm th\u00f4ng tin h\u1ecdc thu\u1eadt', category: 'Nghi\u00ean c\u1ee9u v\u1edbi AI', thumb: '/assets/thumb2.png' },
  { id: 3, title: 'B\u00e0i 3: Prompt Engineering', category: 'Th\u1ef1c h\u00e0nh AI', thumb: '/assets/thumb3.png' },
  { id: 4, title: 'B\u00e0i 4: H\u1ee3p t\u00e1c tr\u1ef1c tuy\u1ebfn', category: 'D\u1ef1 \u00e1n nh\u00f3m', thumb: '/assets/thumb4.png' },
  { id: 5, title: 'B\u00e0i 5: S\u00e1ng t\u1ea1o n\u1ed9i dung s\u1ed1', category: 'Generative AI', thumb: '/assets/thumb5.png' },
  { id: 6, title: 'B\u00e0i 6: AI c\u00f3 tr\u00e1ch nhi\u1ec7m', category: '\u0110\u1ea1o \u0111\u1ee9c h\u1ecdc thu\u1eadt', thumb: '/assets/thumb6.png' },
  { id: 7, title: 'B\u00e0i 7: H\u1ecdc li\u1ec7u ngo\u1ea1i ng\u1eef c\u00e1 nh\u00e2n h\u00f3a', category: 'AI trong h\u1ecdc t\u1eadp', thumb: '/assets/thumb7.png' },
];

const assignments = [<Bai1 />, <Bai2 />, <Bai3 />, <Bai4 />, <Bai5 />, <Bai6 />, <Bai7 />];

const profile = [
  ['H\u1ecd v\u00e0 t\u00ean', 'L\u01b0\u01a1ng H\u1ea3i Y\u1ebfn'],
  ['MSSV', '25041239'],
  ['L\u1edbp', '25E31 \u0110\u1ea1i h\u1ecdc Ngo\u1ea1i ng\u1eef'],
  ['M\u00e3 l\u1edbp', 'VNU1001_E252060'],
];

const outcomes = [
  ['Qu\u1ea3n l\u00fd t\u1ec7p v\u00e0 portfolio', 'S\u1eafp x\u1ebfp t\u00e0i li\u1ec7u h\u1ecdc t\u1eadp, tr\u00ecnh b\u00e0y s\u1ea3n ph\u1ea9m c\u00e1 nh\u00e2n d\u1ea1ng website.'],
  ['T\u00ecm ki\u1ebfm v\u00e0 \u0111\u00e1nh gi\u00e1 ngu\u1ed3n', 'L\u1ef1a ch\u1ecdn ngu\u1ed3n h\u1ecdc thu\u1eadt, \u0111\u00e1nh gi\u00e1 \u0111\u1ed9 tin c\u1eady v\u00e0 tr\u00edch d\u1eabn r\u00f5 r\u00e0ng.'],
  ['Prompt Engineering', 'Thi\u1ebft k\u1ebf prompt theo nhi\u1ec1u m\u1ee9c \u0111\u1ed9 \u0111\u1ec3 t\u1ea1o \u0111\u1ea7u ra ph\u00f9 h\u1ee3p v\u1edbi b\u1ed1i c\u1ea3nh h\u1ecdc t\u1eadp.'],
  ['H\u1ee3p t\u00e1c tr\u1ef1c tuy\u1ebfn', 'S\u1eed d\u1ee5ng Trello, Google Docs, Drive, Zalo v\u00e0 Meet \u0111\u1ec3 ph\u1ed1i h\u1ee3p d\u1ef1 \u00e1n nh\u00f3m.'],
  ['S\u00e1ng t\u1ea1o n\u1ed9i dung s\u1ed1', '\u1ee8ng d\u1ee5ng AI t\u1ea1o sinh trong poster, k\u1ebf ho\u1ea1ch n\u1ed9i dung v\u00e0 quy tr\u00ecnh ch\u1ec9nh s\u1eeda.'],
  ['AI c\u00f3 tr\u00e1ch nhi\u1ec7m', 'Nh\u1eadn di\u1ec7n v\u1ea5n \u0111\u1ec1 \u0111\u1ea1o \u0111\u1ee9c, minh b\u1ea1ch h\u00f3a vi\u1ec7c d\u00f9ng AI trong h\u1ecdc thu\u1eadt.'],
  ['H\u1ecdc li\u1ec7u c\u00e1 nh\u00e2n h\u00f3a', 'T\u1ea1o h\u1ecdc li\u1ec7u ngo\u1ea1i ng\u1eef ph\u00f9 h\u1ee3p tr\u00ecnh \u0111\u1ed9 v\u00e0 m\u1ee5c ti\u00eau h\u1ecdc t\u1eadp.'],
];

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fff9f7] font-sans text-slate-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 top-[-18rem] size-[44rem] rounded-full bg-[#ffd6e7]/70 blur-3xl" />
        <div className="absolute right-[-16rem] top-40 size-[42rem] rounded-full bg-[#ffdfb8]/70 blur-3xl" />
        <div className="absolute bottom-[-20rem] left-[18%] size-[46rem] rounded-full bg-[#dbeafe]/55 blur-3xl" />
        <div className="absolute right-[18%] top-[22rem] size-80 rounded-full bg-[#bbf7d0]/35 blur-3xl" />
      </div>
      {children}
    </div>
  );
}

export default function App() {
  const bai = Number(new URLSearchParams(window.location.search).get('bai'));
  const current = bai >= 1 && bai <= artworks.length ? artworks[bai - 1] : null;

  if (current) {
    return (
      <Shell>
        <nav className="relative z-10 border-b border-pink-100 bg-white/80 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <a href="/" className="inline-flex items-center gap-2 font-semibold text-pink-800 hover:text-pink-600">
              <ArrowLeft size={18} />
              {'T\u1ea5t c\u1ea3 b\u00e0i t\u1eadp'}
            </a>
            <span className="text-sm font-medium text-slate-500">{'L\u01b0\u01a1ng H\u1ea3i Y\u1ebfn - 25041239'}</span>
          </div>
        </nav>
        <main className="relative z-10 px-4 py-10 sm:px-6">{assignments[bai - 1]}</main>
      </Shell>
    );
  }

  return (
    <Shell>
      <nav className="relative z-20 px-6 pt-6">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/75 px-5 shadow-[0_18px_60px_rgba(190,24,93,0.14)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-rose-100 via-pink-50 to-orange-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_28px_rgba(219,39,119,0.22)]">
              <img src="/assets/mark.png" alt="Logo Luong Hai Yen" className="size-8 object-contain" />
            </span>
            <span className="text-base font-bold tracking-tight text-pink-950 sm:text-lg">{'Portfolio CNS & AI'}</span>
          </div>
          <span className="hidden rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-700 sm:inline-flex">
            {'L\u01b0\u01a1ng H\u1ea3i Y\u1ebfn - 25041239'}
          </span>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="container mx-auto grid items-center gap-10 px-6 pb-14 pt-16 lg:grid-cols-[1fr_430px] lg:pt-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-[0_12px_32px_rgba(219,39,119,0.12)]">
              <Search className="size-4 text-pink-600" />
              <span className="text-sm text-pink-800">{'Portfolio h\u1ecdc ph\u1ea7n'}</span>
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-pink-950 sm:text-6xl lg:text-7xl">
              {'Nh\u1eadp m\u00f4n C\u00f4ng ngh\u1ec7 s\u1ed1 v\u00e0 \u1ee8ng d\u1ee5ng AI'}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              {'H\u1ed3 s\u01a1 h\u1ecdc t\u1eadp t\u1ed5ng h\u1ee3p c\u00e1c b\u00e0i th\u1ef1c h\u00e0nh, b\u00e1o c\u00e1o v\u00e0 minh ch\u1ee9ng trong h\u1ecdc ph\u1ea7n c\u1ee7a L\u01b0\u01a1ng H\u1ea3i Y\u1ebfn.'}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ['7', 'B\u00e0i n\u1ed9p'],
                ['7', 'Nh\u00f3m n\u0103ng l\u1ef1c'],
                ['1', 'Portfolio web'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-[0_14px_40px_rgba(190,24,93,0.11)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(190,24,93,0.18)]">
                  <p className="bg-gradient-to-br from-pink-600 to-orange-500 bg-clip-text text-4xl font-black text-transparent">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute -left-10 top-12 size-24 rounded-full bg-sky-200/70 blur-2xl" />
            <div className="absolute -right-8 bottom-8 size-28 rounded-full bg-orange-200/80 blur-2xl" />
            <div className="relative rounded-[2.25rem] border border-white/80 bg-white/45 p-2 shadow-[0_30px_90px_rgba(190,24,93,0.22)]">
              <div className="relative overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-white via-rose-50 to-orange-50 p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                <div className="absolute right-8 top-8 size-16 rounded-full bg-gradient-to-br from-orange-200 to-pink-200 opacity-80 blur-[1px]" />
                <div className="absolute bottom-10 left-8 size-20 rounded-full bg-gradient-to-br from-sky-200 to-emerald-100 opacity-75 blur-[1px]" />
                <div className="absolute bottom-24 right-12 size-5 rounded-full bg-pink-400/70 shadow-[0_0_34px_rgba(244,114,182,0.75)]" />
                <div className="mx-auto grid aspect-square max-w-[300px] place-items-center rounded-full bg-[radial-gradient(circle_at_35%_25%,#fff_0%,#ffe4ef_42%,#fed7aa_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_24px_80px_rgba(219,39,119,0.22)]">
                  <img src="/assets/mark.png" alt="Logo Luong Hai Yen" className="w-[78%] drop-shadow-[0_22px_28px_rgba(190,24,93,0.24)]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-14">
          <div className="rounded-[2rem] border border-white/80 bg-white/65 p-2 shadow-[0_24px_70px_rgba(190,24,93,0.12)]">
          <div className="rounded-[1.55rem] bg-white/85 p-6 md:p-8">
            <div className="mb-6">
              <p className="text-sm font-semibold text-pink-700">{'H\u1ed3 s\u01a1 sinh vi\u00ean'}</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">{'Th\u00f4ng tin c\u00e1 nh\u00e2n'}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {profile.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-pink-100/80 bg-gradient-to-br from-white to-rose-50/60 p-5 shadow-[0_12px_32px_rgba(190,24,93,0.08)]">
                  <p className="text-sm font-semibold text-pink-700">{label}</p>
                  <p className="mt-2 text-lg font-bold leading-7 text-slate-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/80 bg-gradient-to-br from-white/90 to-rose-50/80 p-7 shadow-[0_24px_70px_rgba(190,24,93,0.12)]">
              <p className="text-sm font-semibold text-pink-700">{'M\u1ee5c ti\u00eau portfolio'}</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">{'Tr\u00ecnh b\u00e0y qu\u00e1 tr\u00ecnh h\u1ecdc t\u1eadp v\u00e0 s\u1ea3n ph\u1ea9m minh ch\u1ee9ng'}</h2>
              <p className="mt-4 leading-8 text-slate-700">
                {'Portfolio n\u00e0y t\u1ed5ng h\u1ee3p c\u00e1c s\u1ea3n ph\u1ea9m trong h\u1ecdc ph\u1ea7n theo d\u1ea1ng website: m\u1ed7i b\u00e0i c\u00f3 trang ri\u00eang, n\u1ed9i dung \u0111\u01b0\u1ee3c chuy\u1ec3n th\u00e0nh text web, b\u1ea3ng HTML v\u00e0 \u1ea3nh minh ch\u1ee9ng khi c\u00f3.'}
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                {'C\u00e1ch tr\u00ecnh b\u00e0y gi\u00fap ng\u01b0\u1eddi xem theo d\u00f5i \u0111\u01b0\u1ee3c n\u0103ng l\u1ef1c c\u00f4ng ngh\u1ec7 s\u1ed1, kh\u1ea3 n\u0103ng s\u1eed d\u1ee5ng AI v\u00e0 qu\u00e1 tr\u00ecnh t\u1ef1 \u0111\u00e1nh gi\u00e1 trong h\u1ecdc t\u1eadp.'}
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/80 bg-white/75 p-7 shadow-[0_24px_70px_rgba(14,116,144,0.10)]">
              <p className="text-sm font-semibold text-pink-700">{'N\u0103ng l\u1ef1c th\u1ec3 hi\u1ec7n'}</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">{'Nh\u1eefng k\u1ef9 n\u0103ng \u0111\u01b0\u1ee3c minh ch\u1ee9ng qua b\u00e0i n\u1ed9p'}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {outcomes.map(([title, body]) => (
                  <div key={title} className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_18px_46px_rgba(190,24,93,0.12)]">
                    <h3 className="font-bold text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-24">
          <div className="mb-8">
            <p className="text-sm font-semibold text-pink-700">{'Danh m\u1ee5c s\u1ea3n ph\u1ea9m'}</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">{'C\u00e1c b\u00e0i th\u1ef1c h\u00e0nh v\u00e0 b\u00e1o c\u00e1o'}</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {artworks.map((artwork) => (
              <a
                key={artwork.id}
                href={`?bai=${artwork.id}`}
                className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.10)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 hover:rotate-[-0.35deg] hover:shadow-[0_32px_80px_rgba(190,24,93,0.20)] focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"
              >
                <span className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-pink-100 via-white to-orange-100 p-3">
                  <img src={artwork.thumb} alt="" className="size-full object-cover transition duration-500 group-hover:scale-105" />
                </span>
                <span className="flex flex-1 flex-col justify-between p-6">
                  <span className="text-lg font-semibold leading-7 text-pink-900">{artwork.title}</span>
                  <span className="mt-5 flex items-center justify-between">
                    <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700">{artwork.category}</span>
                    <ArrowUpRight className="size-5 text-pink-400" />
                  </span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-pink-200 bg-white/60 py-8 text-pink-700">
        <p className="flex items-center justify-center gap-2">
          {'Th\u1ef1c hi\u1ec7n b\u1edfi L\u01b0\u01a1ng H\u1ea3i Y\u1ebfn'}
          <Heart className="size-4 fill-pink-500 text-pink-500" />
        </p>
      </footer>
    </Shell>
  );
}
