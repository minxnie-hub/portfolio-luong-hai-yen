import { ArrowLeft, BookOpenText, Folder, Handshake, PenTool, Search, ShieldCheck, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import Bai1 from './components/assignments/Bai1';
import Bai2 from './components/assignments/Bai2';
import Bai3 from './components/assignments/Bai3';
import Bai4 from './components/assignments/Bai4';
import Bai5 from './components/assignments/Bai5';
import Bai6 from './components/assignments/Bai6';
import Bai7 from './components/assignments/Bai7';
import { assetPath } from './utils/assets';

type Artwork = { id: number; title: string; description: string; tags: string[]; accent: string; icon: ReactNode };

const artworks: Artwork[] = [
  { id: 1, title: 'Thao tác cơ bản với tệp tin và thư mục', description: 'Tạo cấu trúc lưu trữ, chuẩn hóa tên tệp và dựng phiên bản portfolio HTML đầu tiên.', tags: ['Finder', 'HTML'], accent: 'bg-[#dff5e7] text-[#168a48]', icon: <Folder size={24} /> },
  { id: 2, title: 'Tìm kiếm và đánh giá thông tin học thuật', description: 'Tìm tám nghiên cứu về AI trong giáo dục ngôn ngữ và đánh giá độ tin cậy của từng nguồn.', tags: ['Google Scholar', 'DOI'], accent: 'bg-[#ffefad] text-[#a97000]', icon: <Search size={24} /> },
  { id: 3, title: 'Viết prompt hiệu quả cho tác vụ học tập', description: 'So sánh prompt cơ bản, cải tiến và nâng cao qua ba tình huống học ngoại ngữ.', tags: ['Role prompting', 'IELTS'], accent: 'bg-[#dcecff] text-[#246fc9]', icon: <PenTool size={24} /> },
  { id: 4, title: 'Sử dụng công cụ hợp tác trực tuyến', description: 'Phối hợp dự án nhóm bằng Trello, Google Docs, Drive, Zalo và Google Meet.', tags: ['Trello', 'Google Drive'], accent: 'bg-[#dff5e7] text-[#168a48]', icon: <Handshake size={24} /> },
  { id: 5, title: 'Dùng AI tạo sinh để sáng tạo nội dung số', description: 'Kết hợp Claude, DALL·E và Canva để thiết kế poster quản lý thời gian.', tags: ['Claude', 'Canva AI'], accent: 'bg-[#ffdcec] text-[#d93683]', icon: <Sparkles size={24} /> },
  { id: 6, title: 'Sử dụng AI có trách nhiệm trong học tập', description: 'Đối chiếu chính sách, thử nghiệm một nhiệm vụ thật và xây dựng sáu nguyên tắc cá nhân.', tags: ['ULIS Policy', 'Liêm chính'], accent: 'bg-[#e7e0ff] text-[#6845d6]', icon: <ShieldCheck size={24} /> },
  { id: 7, title: 'Tạo học liệu ngoại ngữ cá nhân hóa bằng AI', description: 'Thiết kế bộ bài đọc, ngữ pháp, nói và viết cho người học IELTS 5.5–6.0.', tags: ['Gemini', 'IELTS'], accent: 'bg-[#dcefed] text-[#187a6b]', icon: <BookOpenText size={24} /> },
];

const assignments = [<Bai1 />, <Bai2 />, <Bai3 />, <Bai4 />, <Bai5 />, <Bai6 />, <Bai7 />];

const courseHighlights = [
  ['AI', 'Nắm vững nền tảng AI', 'Tra cứu, khai thác thông tin học tập hiệu quả và có kiểm chứng.'],
  ['Prompt', 'Viết prompt hiệu quả', 'Tối ưu hóa quá trình học tập, tư duy và sáng tạo nội dung.'],
  ['Teamwork', 'Hợp tác trong môi trường số', 'Giao tiếp linh hoạt, quản lý tài nguyên và phối hợp dự án trực tuyến.'],
  ['Ethics', 'Liêm chính học thuật', 'Sử dụng AI minh bạch, có trách nhiệm và bảo vệ dữ liệu cá nhân.'],
];

const skillChips = ['Tư duy phản biện', 'Tìm kiếm học thuật', 'Prompt engineering', 'Sáng tạo nội dung số', 'Quản lý dự án nhóm', 'Liêm chính học thuật'];

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f1f3ed] font-sans text-[#1f2937]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 top-[-18rem] size-[44rem] rounded-full bg-[#cfe6d8]/50 blur-3xl" />
        <div className="absolute right-[-16rem] top-40 size-[42rem] rounded-full bg-[#ead9c1]/48 blur-3xl" />
        <div className="absolute bottom-[-20rem] left-[18%] size-[46rem] rounded-full bg-[#d8e5dc]/45 blur-3xl" />
        <div className="portfolio-noise absolute inset-0" />
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
        <nav className="relative z-10 border-b border-[#d4dce2] bg-white shadow-[0_4px_20px_rgba(30,40,60,0.06)]">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <a href={import.meta.env.BASE_URL} className="inline-flex items-center gap-2 font-semibold text-[#185742] hover:text-[#37745d]">
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
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-[#dce1e8] bg-white px-5 shadow-[0_12px_30px_rgba(30,40,60,0.10)]">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-rose-100 via-pink-50 to-orange-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_28px_rgba(219,39,119,0.22)]">
              <img src={assetPath('/assets/mark.png')} alt="Logo Luong Hai Yen" className="size-8 object-contain" />
            </span>
            <span className="text-base font-bold tracking-tight text-pink-950 sm:text-lg">{'Portfolio CNS & AI'}</span>
          </div>
          <span className="hidden rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-700 sm:inline-flex">
            {'L\u01b0\u01a1ng H\u1ea3i Y\u1ebfn - 25041239'}
          </span>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="container mx-auto grid items-center gap-10 px-6 pb-12 pt-14 lg:grid-cols-[1fr_360px] lg:pt-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-[0_12px_32px_rgba(219,39,119,0.12)]">
              <Search className="size-4 text-pink-600" />
              <span className="text-sm text-pink-800">{'Portfolio h\u1ecdc ph\u1ea7n'}</span>
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-pink-950 sm:text-6xl lg:text-[4.4rem]">
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
                <div key={label} className="rounded-3xl border border-[#dce1e8] bg-white p-5 shadow-[0_12px_30px_rgba(30,40,60,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(30,40,60,0.14)]">
                  <p className="bg-gradient-to-br from-pink-600 to-orange-500 bg-clip-text text-4xl font-black text-transparent">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[360px]">
            <div className="absolute -left-10 top-12 size-24 rounded-full bg-sky-200/70 blur-2xl" />
            <div className="absolute -right-8 bottom-8 size-28 rounded-full bg-orange-200/80 blur-2xl" />
            <div className="relative rounded-[2.25rem] border border-white/80 bg-white/45 p-2 shadow-[0_30px_90px_rgba(190,24,93,0.22)]">
              <div className="relative overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-white via-rose-50 to-orange-50 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                <div className="absolute right-8 top-8 size-16 rounded-full bg-gradient-to-br from-orange-200 to-pink-200 opacity-80 blur-[1px]" />
                <div className="absolute bottom-10 left-8 size-20 rounded-full bg-gradient-to-br from-sky-200 to-emerald-100 opacity-75 blur-[1px]" />
                <div className="absolute bottom-24 right-12 size-5 rounded-full bg-pink-400/70 shadow-[0_0_34px_rgba(244,114,182,0.75)]" />
                <div className="mx-auto grid aspect-square max-w-[240px] place-items-center rounded-full bg-[radial-gradient(circle_at_35%_25%,#fff_0%,#ffe4ef_42%,#fed7aa_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_24px_80px_rgba(219,39,119,0.22)]">
                  <img src={assetPath('/assets/mark.png')} alt="Logo Luong Hai Yen" className="w-[74%] drop-shadow-[0_22px_28px_rgba(190,24,93,0.24)]" />
                </div>
                <div className="relative mt-7 rounded-3xl border border-white/80 bg-white/70 p-5 text-center shadow-[0_16px_44px_rgba(190,24,93,0.10)]">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">{'Student Portfolio'}</p>
                  <p className="mt-2 text-xl font-black text-slate-950">{'Lương Hải Yến'}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{'MSSV 25041239'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-14">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#37745d]">{'Định hướng học tập'}</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-[#17372d]">{'Mục tiêu học tập'}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courseHighlights.map(([tag, title, body]) => (
              <div key={title} className="rounded-[1.5rem] border border-[#dce1e8] bg-white p-7 shadow-[0_12px_30px_rgba(30,40,60,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(30,40,60,0.14)]">
                <span className="inline-flex rounded-full border border-[#bedbc9] bg-[#d7ecdf] px-3 py-1 text-xs font-extrabold text-[#185742]">{tag}</span>
                <h3 className="mt-7 text-lg font-extrabold leading-snug text-[#1f2937]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#4b5563]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 pb-16">
          <div className="grid gap-8">
            <div className="rounded-[2rem] border border-[#d7e4dc] bg-[#17372d] p-8 text-[#f7f8f2] shadow-[0_28px_70px_rgba(23,55,45,0.18)]">
              <p className="text-sm font-bold text-[#b9d9c5]">{'Tổng quan học phần'}</p>
              <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight">{'Một portfolio để đọc nhanh, mở sâu từng bài khi cần.'}</h2>
              <p className="mt-5 max-w-xl leading-8 text-[#d8e7dd]">
                {'Phần đầu trang cho biết người thực hiện, học phần, phạm vi bài nộp và trạng thái hoàn thiện. Phần dưới là danh mục 7 sản phẩm có trang chi tiết riêng.'}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  ['01', 'Bìa portfolio'],
                  ['02', 'Năng lực học phần'],
                  ['03', 'Danh mục bài'],
                ].map(([step, label]) => (
                  <div key={label} className="rounded-2xl border border-[#648477] bg-[#294a3e] p-4">
                    <p className="text-2xl font-black">{step}</p>
                    <p className="mt-1 text-sm font-semibold text-[#d8e7dd]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-24">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#37745d]">{'Danh m\u1ee5c s\u1ea3n ph\u1ea9m'}</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-[#17372d]">{'C\u00e1c b\u00e0i th\u1ef1c h\u00e0nh'}</h2>
            <p className="mt-4 leading-7 text-[#60756d]">Mỗi bài được trình bày lại theo mục tiêu, nội dung tóm tắt, minh chứng và điều mình học được.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {artworks.map((artwork) => (
              <a
                key={artwork.id}
                href={`?bai=${artwork.id}`}
                className="group relative min-h-64 overflow-hidden rounded-[1.5rem] border border-[#dce1e8] bg-white p-8 shadow-[0_12px_30px_rgba(30,40,60,0.10)] transition duration-300 hover:-translate-y-[3px] hover:border-[#ccd4df] hover:shadow-[0_20px_42px_rgba(30,40,60,0.15)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#9dc8ae] sm:p-9"
              >
                <span className="flex items-start justify-between">
                  <span className="text-3xl font-black text-[#c9b8ef]">{String(artwork.id).padStart(2, '0')}</span>
                  <span className={`grid size-12 place-items-center rounded-2xl shadow-[0_6px_16px_rgba(30,40,60,0.08)] ${artwork.accent}`}>{artwork.icon}</span>
                </span>
                <span className="mt-7 block max-w-md text-xl font-extrabold leading-7 text-[#1d2935]">{artwork.title}</span>
                <span className="mt-4 block max-w-lg text-sm leading-7 text-[#4b5563]">{artwork.description}</span>
                <span className="mt-6 flex flex-wrap gap-2">
                  {artwork.tags.map((tag) => <span key={tag} className="rounded-full border border-[#d8cff4] bg-[#ebe6fa] px-3 py-1 text-xs font-bold text-[#6f5ac9]">{tag}</span>)}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 pb-24">
          <div className="rounded-[2rem] bg-[#17372d] p-8 text-[#f7f8f2] shadow-[0_24px_70px_rgba(23,55,45,0.18)]">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b9d9c5]">{'N\u0103ng l\u1ef1c th\u1ec3 hi\u1ec7n'}</p>
                <h2 className="mt-4 max-w-xl text-4xl font-black leading-[1.05] sm:text-5xl">{'C\u00e1c k\u1ef9 n\u0103ng \u0111\u00e3 ph\u00e1t tri\u1ec3n'}</h2>
                <p className="mt-5 max-w-xl leading-7 text-[#d8e7dd]">{'Qua m\u00f4n h\u1ecdc n\u00e0y, m\u00ecnh \u0111\u00e3 l\u00e0m ch\u1ee7 t\u01b0 duy AI v\u00e0 k\u1ef9 n\u0103ng khai th\u00e1c d\u1eef li\u1ec7u \u0111\u1ec3 bi\u1ebfn c\u00f4ng ngh\u1ec7 th\u00e0nh tr\u1ee3 l\u00fd h\u1ecdc t\u1eadp \u0111\u1eafc l\u1ef1c.'}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {skillChips.map((skill) => (
                  <span key={skill} className="rounded-full border border-[#648477] bg-[#294a3e] px-4 py-3 text-center text-sm font-semibold text-[#f2f6ef]">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-24">
          <div className="overflow-hidden rounded-[2rem] border border-[#d7e4dc] bg-[#fffefa] shadow-[0_24px_70px_rgba(23,55,45,0.1)]">
            <div className="grid gap-8 border-b border-[#d7e4dc] bg-[#edf3ee] p-7 sm:p-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#37745d]">Tổng kết</p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-[#17372d] sm:text-4xl">Nhìn lại hành trình làm portfolio</h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-[#526960]">
                Portfolio này không chỉ gom lại bảy bài tập. Khi sắp xếp từng sản phẩm và đọc lại cách mình đã làm, mình nhận ra rõ hơn sự thay đổi từ chỗ dùng công cụ theo hướng dẫn sang biết lựa chọn, kiểm tra và chịu trách nhiệm với kết quả của mình.
              </p>
            </div>

            <div className="grid gap-px bg-[#d7e4dc] lg:grid-cols-3">
              <article className="bg-[#fffefa] p-7 sm:p-8">
                <span className="text-5xl font-black text-[#dcefe4]">01</span>
                <h3 className="mt-5 text-xl font-extrabold text-[#17372d]">Trải nghiệm của mình</h3>
                <p className="mt-4 leading-8 text-[#60756d]">
                  Quá trình làm portfolio buộc mình xem lại toàn bộ bài nộp thay vì chỉ đưa các tệp lên một chỗ. Có bài mình thấy kết quả khá trọn vẹn, cũng có bài cho thấy cách làm ban đầu còn dài và thiếu chọn lọc. Việc viết lại từng chặng giúp mình hiểu mình đã làm gì và vì sao kết quả thay đổi sau mỗi lần chỉnh sửa.
                </p>
              </article>

              <article className="bg-[#fffefa] p-7 sm:p-8">
                <span className="text-5xl font-black text-[#dcefe4]">02</span>
                <h3 className="mt-5 text-xl font-extrabold text-[#17372d]">Kiến thức và kỹ năng</h3>
                <p className="mt-4 leading-8 text-[#60756d]">
                  Điều quan trọng nhất mình học được là cách tìm và kiểm chứng nguồn, viết prompt có mục tiêu, phối hợp công việc trực tuyến và sử dụng AI minh bạch. Mình cũng tiến bộ ở việc quản lý tệp, trình bày thông tin ngắn gọn và đánh giá đầu ra AI trước khi đưa vào sản phẩm học tập.
                </p>
              </article>

              <article className="bg-[#fffefa] p-7 sm:p-8">
                <span className="text-5xl font-black text-[#dcefe4]">03</span>
                <h3 className="mt-5 text-xl font-extrabold text-[#17372d]">Điểm tâm đắc và thử thách</h3>
                <p className="mt-4 leading-8 text-[#60756d]">
                  Mình tâm đắc nhất với những sản phẩm có dấu ấn chỉnh sửa rõ ràng, đặc biệt là poster và bộ học liệu cá nhân hóa. Khó nhất là chọn phần thật sự cần giữ từ các báo cáo dài, ghép đúng ảnh minh chứng và duy trì cách trình bày thống nhất. Chính khâu chọn lọc này khiến portfolio phản ánh quá trình học tốt hơn một thư mục bài nộp thông thường.
                </p>
              </article>
            </div>

            <div className="flex items-center gap-4 bg-[#17372d] px-7 py-6 text-[#d8e7dd] sm:px-10">
              <span className="h-px w-10 shrink-0 bg-[#f3c95c]" />
              <p className="text-sm font-semibold leading-6">Sau cùng, điều mình muốn giữ lại không chỉ là sản phẩm hoàn thiện mà còn là thói quen làm việc có mục tiêu, có kiểm chứng và có tiếng nói riêng.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#3d6657] bg-[#17372d] text-[#f7f8f2]">
        <div className="container mx-auto grid gap-8 px-6 py-9 sm:grid-cols-2 sm:py-11">
          <div>
            <p className="text-lg font-extrabold">Lương Hải Yến</p>
            <p className="mt-2 text-sm font-medium leading-6 text-[#b9d9c5] sm:text-base">SV lớp 25E31 · MSSV: 25041239</p>
          </div>
          <div className="sm:text-right">
            <p className="text-lg font-extrabold">Trường Đại học Ngoại ngữ - ĐHQGHN</p>
            <p className="mt-2 text-sm font-medium leading-6 text-[#b9d9c5] sm:text-base">Nhập môn Công nghệ số và Ứng dụng AI · 2025-2026</p>
          </div>
        </div>
      </footer>
    </Shell>
  );
}
