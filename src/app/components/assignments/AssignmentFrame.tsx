import { FileText } from 'lucide-react';
import type { ReactNode } from 'react';

type Props = { number: number; title: string; intro: string; children: ReactNode };

export default function AssignmentFrame({ number, title, intro, children }: Props) {
  return <article className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-[0_24px_70px_rgba(136,19,55,0.12)]">
    <header className="border-b border-pink-100 bg-gradient-to-r from-rose-50 to-white px-6 py-8 sm:px-10">
      <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-pink-600 font-bold text-white">0{number}</div>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">{intro}</p>
    </header>
    <div className="space-y-8 p-6 sm:p-10">{children}</div>
  </article>;
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return <section><h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900"><FileText className="size-5 text-pink-600" />{title}</h3><div className="rounded-2xl bg-rose-50/60 p-5 leading-7 text-slate-700">{children}</div></section>;
}
