import { ArrowUpRight, FileText, Target } from 'lucide-react';
import { assetPath } from '../../utils/assets';
import { assignmentData } from './assignmentData';

export default function AssignmentStory({ number }: { number: number }) {
  const assignment = assignmentData[number - 1];

  return (
    <article className="mx-auto w-full max-w-6xl">
      <header className="relative overflow-hidden rounded-[2rem] bg-[#17372d] px-6 py-9 text-white shadow-[0_28px_80px_rgba(23,55,45,0.2)] sm:px-10 sm:py-12">
        <div className="absolute -right-20 -top-24 size-72 rounded-full border-[54px] border-[#3d6657]/50" aria-hidden="true" />
        <div className="relative max-w-4xl">
          <div className="flex items-center gap-3 text-sm font-bold text-[#b9d9c5]">
            <span className="grid size-11 place-items-center rounded-2xl bg-[#f3c95c] text-[#17372d]">{String(number).padStart(2, '0')}</span>
            <span>{assignment.label}</span>
          </div>
          <h1 className="mt-7 text-3xl font-black leading-tight tracking-tight sm:text-5xl">{assignment.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#d8e7dd] sm:text-lg">Tóm tắt những nội dung chính của bài tập, đi cùng hình ảnh từ bài làm để người xem có thể theo dõi kết quả mà không cần đọc toàn bộ báo cáo.</p>
        </div>
      </header>

      <section className="mt-8 grid gap-5 rounded-[1.5rem] border border-[#dce1e8] bg-white p-7 shadow-[0_12px_30px_rgba(30,40,60,0.10)] sm:grid-cols-[auto_1fr] sm:p-9">
        <span className="grid size-12 place-items-center rounded-2xl bg-[#dcefe4] text-[#185742]"><Target size={23} /></span>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#37745d]">Mục tiêu</p>
          <p className="mt-3 text-lg leading-8 text-[#4b5563]">{assignment.objective}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#37745d]">Tóm tắt nội dung</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#17372d]">Những nội dung chính của bài</h2>
          </div>
          <span className="hidden text-sm font-semibold text-[#60756d] sm:block">{assignment.stages.length} giai đoạn</span>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {assignment.stages.map((stage, index) => (
            <section key={stage.title} className="overflow-hidden rounded-[1.5rem] border border-[#dce1e8] bg-white shadow-[0_12px_30px_rgba(30,40,60,0.10)]">
              <div className="flex items-start gap-4 p-6 sm:gap-5 sm:p-8">
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#e0d6f7] bg-[#f1edfb] text-sm font-black text-[#765dc8]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-extrabold leading-snug text-[#1f2937] sm:text-2xl">{stage.title}</h3>
                  <p className="mt-3 leading-8 text-[#4b5563]">{stage.description}</p>
                </div>
              </div>
              {stage.images?.length ? (
                <div className="space-y-4 border-t border-[#dce1e8] bg-[#f5f6f2] p-3 sm:p-5">
                  {stage.images.map((image) => (
                    <figure key={image.src} className="group overflow-hidden rounded-[1.1rem] border border-[#dce1e8] bg-white shadow-[0_6px_18px_rgba(30,40,60,0.07)]">
                      <div className="flex min-h-56 items-center justify-center overflow-hidden bg-white">
                        <img src={assetPath(image.src)} alt={image.caption} className="max-h-[500px] w-full object-contain transition duration-500 group-hover:scale-[1.01]" />
                      </div>
                      <figcaption className="border-t border-[#dce1e8] bg-[#f7f8f5] px-4 py-3 text-center text-xs font-semibold leading-5 text-[#5b6572] sm:text-sm">{image.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-[#e7d08d] bg-[#fff4cf] p-7 shadow-[0_12px_30px_rgba(90,70,25,0.09)] sm:p-9">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#8a6511]">Kết luận</p>
        <h2 className="mt-3 text-2xl font-black text-[#493b19]">Điều mình học được</h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-[#665a3a]">{assignment.conclusion}</p>
      </section>

      <footer className="mt-8 flex flex-col items-start justify-between gap-5 rounded-[1.5rem] border border-[#dce1e8] bg-white p-7 shadow-[0_12px_30px_rgba(30,40,60,0.10)] sm:flex-row sm:items-center sm:p-9">
        <div className="flex items-center gap-4">
          <span className="grid size-12 place-items-center rounded-2xl bg-[#edf3ee] text-[#185742]"><FileText size={22} /></span>
          <div>
            <p className="font-bold text-[#17372d]">Bài làm đầy đủ</p>
            <p className="mt-1 text-sm text-[#60756d]">Mở file PDF để xem toàn bộ nội dung và minh chứng của bài.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={assetPath(assignment.file)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#245b49] px-7 py-3.5 font-extrabold text-white shadow-[0_8px_20px_rgba(36,91,73,0.22)] transition duration-300 hover:-translate-y-[3px] hover:bg-[#2d6c57] hover:shadow-[0_13px_28px_rgba(36,91,73,0.28)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#9dc8ae] sm:w-auto">
            Xem file <ArrowUpRight size={18} />
          </a>
          {assignment.extraFiles?.map((extra) => (
            <a key={extra.file} href={assetPath(extra.file)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#245b49] bg-white px-7 py-3.5 font-extrabold text-[#245b49] transition duration-300 hover:-translate-y-[3px] hover:bg-[#edf3ee] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#9dc8ae] sm:w-auto">
              {extra.label} <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
      </footer>
    </article>
  );
}
