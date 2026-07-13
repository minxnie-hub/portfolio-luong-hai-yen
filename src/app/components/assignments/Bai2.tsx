import { useEffect, useMemo, useState } from 'react';
import AssignmentFrame from './AssignmentFrame';
import { StructuredBody } from './StructuredTextAssignment';

const rows = [
  {
    stt: '1',
    author: 'Pham, T. N. & Dang, T. X. (2025). An Investigation into the Application of Artificial Intelligence for Language Teaching and Learning in Vietnam',
    type: 'B\u00e0i b\u00e1o khoa h\u1ecdc (Vietnam Journal of Education)',
    review: '\u0110\u00e2y l\u00e0 ngu\u1ed3n c\u00f3 \u0111\u1ed9 tin c\u1eady r\u1ea5t cao v\u00ec nghi\u00ean c\u1ee9u \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n tr\u1ef1c ti\u1ebfp t\u1ea1i Vi\u1ec7t Nam v\u1edbi quy m\u00f4 kh\u1ea3o s\u00e1t l\u1edbn g\u1ed3m kho\u1ea3ng 200 gi\u1ea3ng vi\u00ean v\u00e0 700 sinh vi\u00ean t\u1ea1i nhi\u1ec1u tr\u01b0\u1eddng \u0111\u1ea1i h\u1ecdc. C\u00f4ng tr\u00ecnh \u0111\u01b0\u1ee3c c\u00f4ng b\u1ed1 tr\u00ean t\u1ea1p ch\u00ed h\u1ecdc thu\u1eadt c\u00f3 DOI ch\u00ednh th\u1ee9c v\u00e0 s\u1eed d\u1ee5ng c\u00e1c ph\u01b0\u01a1ng ph\u00e1p ph\u00e2n t\u00edch th\u1ed1ng k\u00ea r\u00f5 r\u00e0ng. D\u1eef li\u1ec7u th\u1ef1c nghi\u1ec7m ph\u1ea3n \u00e1nh tr\u1ef1c ti\u1ebfp th\u1ef1c tr\u1ea1ng s\u1eed d\u1ee5ng AI trong d\u1ea1y v\u00e0 h\u1ecdc ngo\u1ea1i ng\u1eef t\u1ea1i Vi\u1ec7t Nam.',
    rank: 'R\u1ea5t cao',
  },
  {
    stt: '2',
    author: 'Li, B., Lowell, V. L., Wang, C. & Li, X. (2024). A Systematic Review of the First Year of Publications on ChatGPT and Language Education',
    type: 'B\u00e0i b\u00e1o khoa h\u1ecdc qu\u1ed1c t\u1ebf (Elsevier)',
    review: '\u0110\u00e2y l\u00e0 nghi\u00ean c\u1ee9u t\u1ed5ng quan h\u1ec7 th\u1ed1ng s\u1eed d\u1ee5ng ph\u01b0\u01a1ng ph\u00e1p PRISMA \u0111\u1ec3 \u0111\u00e1nh gi\u00e1 to\u00e0n b\u1ed9 c\u00e1c c\u00f4ng tr\u00ecnh nghi\u00ean c\u1ee9u v\u1ec1 ChatGPT trong gi\u00e1o d\u1ee5c ng\u00f4n ng\u1eef giai \u0111o\u1ea1n 2022-2023. C\u00f4ng tr\u00ecnh \u0111\u01b0\u1ee3c xu\u1ea5t b\u1ea3n tr\u00ean t\u1ea1p ch\u00ed thu\u1ed9c h\u1ec7 th\u1ed1ng Elsevier v\u00e0 c\u00f3 t\u00ednh h\u1ecdc thu\u1eadt r\u1ea5t cao nh\u1edd quy tr\u00ecnh t\u1ed5ng h\u1ee3p d\u1eef li\u1ec7u nghi\u00eam ng\u1eb7t.',
    rank: 'R\u1ea5t cao',
  },
  {
    stt: '3',
    author: "Hieu, H. H. & Thao, L. T. (2024). Exploring the Impact of AI in Language Education: Vietnamese EFL Teachers' Views on Using ChatGPT for Fairy Tale Retelling Tasks",
    type: 'B\u00e0i b\u00e1o khoa h\u1ecdc qu\u1ed1c t\u1ebf',
    review: 'Nghi\u00ean c\u1ee9u t\u1eadp trung v\u00e0o g\u00f3c nh\u00ecn c\u1ee7a gi\u1ea3ng vi\u00ean ti\u1ebfng Anh Vi\u1ec7t Nam \u0111\u1ed1i v\u1edbi vi\u1ec7c s\u1eed d\u1ee5ng ChatGPT trong ho\u1ea1t \u0111\u1ed9ng h\u1ecdc t\u1eadp. Ph\u01b0\u01a1ng ph\u00e1p ph\u1ecfng v\u1ea5n b\u00e1n c\u1ea5u tr\u00fac gi\u00fap cung c\u1ea5p d\u1eef li\u1ec7u \u0111\u1ecbnh t\u00ednh c\u00f3 chi\u1ec1u s\u00e2u. Ngu\u1ed3n ph\u00f9 h\u1ee3p \u0111\u1ec3 ph\u00e2n t\u00edch t\u00e1c \u0111\u1ed9ng th\u1ef1c ti\u1ec5n c\u1ee7a AI trong l\u1edbp h\u1ecdc ngo\u1ea1i ng\u1eef.',
    rank: 'Cao',
  },
  {
    stt: '4',
    author: 'Pham, V. P. H. & Le, A. Q. (2024). ChatGPT in Language Learning: Perspectives from Vietnamese Students in Vietnam and the USA',
    type: 'B\u00e0i b\u00e1o khoa h\u1ecdc qu\u1ed1c t\u1ebf',
    review: 'Nghi\u00ean c\u1ee9u kh\u1ea3o s\u00e1t nh\u1eadn th\u1ee9c c\u1ee7a sinh vi\u00ean Vi\u1ec7t Nam v\u1ec1 ChatGPT trong h\u1ecdc ngo\u1ea1i ng\u1eef. \u0110i\u1ec3m m\u1ea1nh l\u00e0 d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c thu th\u1eadp t\u1eeb c\u1ea3 sinh vi\u00ean h\u1ecdc t\u1eadp trong n\u01b0\u1edbc v\u00e0 qu\u1ed1c t\u1ebf, t\u1ea1o c\u01a1 s\u1edf \u0111\u1ed1i chi\u1ebfu \u0111a chi\u1ec1u v\u1ec1 tr\u1ea3i nghi\u1ec7m s\u1eed d\u1ee5ng AI trong h\u1ecdc t\u1eadp.',
    rank: 'Cao',
  },
  {
    stt: '5',
    author: 'Tri, P. M. & Tu, C. T. X. (2025). The Practice of ChatGPT in English Teaching and Learning in Vietnam: A Systematic Review',
    type: 'B\u00e0i b\u00e1o khoa h\u1ecdc (Systematic Review)',
    review: 'C\u00f4ng tr\u00ecnh t\u1ed5ng h\u1ee3p 12 nghi\u00ean c\u1ee9u li\u00ean quan \u0111\u1ebfn vi\u1ec7c \u1ee9ng d\u1ee5ng ChatGPT trong d\u1ea1y v\u00e0 h\u1ecdc ti\u1ebfng Anh t\u1ea1i Vi\u1ec7t Nam. Ph\u01b0\u01a1ng ph\u00e1p systematic review gi\u00fap h\u1ec7 th\u1ed1ng h\u00f3a xu h\u01b0\u1edbng nghi\u00ean c\u1ee9u v\u00e0 \u0111\u00e1nh gi\u00e1 th\u1ef1c tr\u1ea1ng tri\u1ec3n khai AI trong gi\u00e1o d\u1ee5c ngo\u1ea1i ng\u1eef.',
    rank: 'Cao',
  },
  {
    stt: '6',
    author: "Phuong, H. P. X. (2024). Using ChatGPT in English Language Learning: A Study on I.T. Students' Attitudes, Habits, and Perceptions",
    type: 'B\u00e0i b\u00e1o khoa h\u1ecdc',
    review: 'Nghi\u00ean c\u1ee9u s\u1eed d\u1ee5ng kh\u1ea3o s\u00e1t v\u00e0 ph\u1ecfng v\u1ea5n \u0111\u1ec3 ph\u00e2n t\u00edch h\u00e0nh vi v\u00e0 nh\u1eadn th\u1ee9c c\u1ee7a sinh vi\u00ean Vi\u1ec7t Nam khi s\u1eed d\u1ee5ng ChatGPT trong h\u1ecdc ti\u1ebfng Anh. D\u1eef li\u1ec7u th\u1ef1c nghi\u1ec7m c\u00f3 gi\u00e1 tr\u1ecb trong vi\u1ec7c \u0111\u00e1nh gi\u00e1 l\u1ee3i \u00edch v\u00e0 h\u1ea1n ch\u1ebf c\u1ee7a AI \u0111\u1ed1i v\u1edbi ng\u01b0\u1eddi h\u1ecdc.',
    rank: 'Cao',
  },
  {
    stt: '7',
    author: 'Nguyen, N. H. V. & Pham, V. P. H. (2024). AI Chatbots for Language Practices',
    type: 'B\u00e0i b\u00e1o khoa h\u1ecdc qu\u1ed1c t\u1ebf',
    review: 'C\u00f4ng tr\u00ecnh t\u1eadp trung v\u00e0o kh\u1ea3 n\u0103ng h\u1ed7 tr\u1ee3 k\u1ef9 n\u0103ng giao ti\u1ebfp c\u1ee7a AI chatbot trong h\u1ecdc ngo\u1ea1i ng\u1eef. Nghi\u00ean c\u1ee9u c\u00f3 gi\u00e1 tr\u1ecb th\u1ef1c ti\u1ec5n cao khi ph\u00e2n t\u00edch vi\u1ec7c s\u1eed d\u1ee5ng AI nh\u01b0 c\u00f4ng c\u1ee5 luy\u1ec7n speaking v\u00e0 ph\u1ea3n h\u1ed3i ng\u00f4n ng\u1eef theo th\u1eddi gian th\u1ef1c.',
    rank: 'Kh\u00e1 cao',
  },
  {
    stt: '8',
    author: 'Nguyen, H. D., Pham, N. T. & Dinh, T. H. (2025). Application of Artificial Intelligence in Foreign Language Teaching and Learning: A Comparative Study',
    type: 'B\u00e0i b\u00e1o khoa h\u1ecdc',
    review: 'Nghi\u00ean c\u1ee9u so s\u00e1nh g\u00f3c nh\u00ecn c\u1ee7a gi\u1ea3ng vi\u00ean v\u00e0 sinh vi\u00ean \u0111\u1ed1i v\u1edbi AI trong gi\u00e1o d\u1ee5c ngo\u1ea1i ng\u1eef. M\u1eabu nghi\u00ean c\u1ee9u l\u1edbn v\u00e0 \u0111\u01b0\u1ee3c c\u00f4ng b\u1ed1 tr\u00ean t\u1ea1p ch\u00ed khoa h\u1ecdc c\u1ee7a \u0110\u1ea1i h\u1ecdc S\u01b0 ph\u1ea1m TP.HCM, t\u1ea1o \u0111\u1ed9 tin c\u1eady \u0111\u00e1ng k\u1ec3 cho k\u1ebft qu\u1ea3 nghi\u00ean c\u1ee9u.',
    rank: 'Cao',
  },
];

function splitSource(text: string) {
  const tableStart = text.indexOf('II. B\u1ea2NG');
  const afterTable = text.indexOf('III. NH\u1eacN');
  if (tableStart === -1 || afterTable === -1) return { before: text, after: '' };
  return {
    before: text.slice(0, tableStart).trim(),
    after: text.slice(afterTable).trim(),
  };
}

export default function Bai2() {
  const [content, setContent] = useState('');
  const parts = useMemo(() => splitSource(content), [content]);

  useEffect(() => {
    fetch('/assets/bai2-source.txt').then((response) => response.text()).then(setContent);
  }, []);

  return (
    <AssignmentFrame
      number={2}
      title={'T\u00ecm ki\u1ebfm v\u00e0 \u0111\u00e1nh gi\u00e1 th\u00f4ng tin h\u1ecdc thu\u1eadt'}
      intro={'B\u00e0i n\u1ed9p g\u1ed1c trong ZIP \u0111\u01b0\u1ee3c d\u1ef1ng l\u1ea1i th\u00e0nh web: ph\u1ea7n b\u1ea3ng l\u00e0 table HTML th\u1eadt, c\u00e1c nh\u1eadn x\u00e9t v\u00e0 t\u00e0i li\u1ec7u tham kh\u1ea3o l\u00e0 text web.'}
    >
      <div className="rounded-2xl border border-pink-100 bg-white p-5 sm:p-8">
        {content ? <StructuredBody text={parts.before} /> : <p className="text-slate-500">{'\u0110ang t\u1ea3i n\u1ed9i dung b\u00e0i l\u00e0m...'}</p>}
      </div>

      <section className="rounded-2xl border border-pink-100 bg-white p-4 sm:p-6">
        <h3 className="mb-5 border-l-4 border-pink-500 pl-4 text-xl font-extrabold text-slate-950">
          {'II. B\u1ea2NG T\u1ed4NG H\u1ee2P V\u00c0 \u0110\u00c1NH GI\u00c1 \u0110\u1ed8 TIN C\u1eacY C\u1ee6A NGU\u1ed2N TH\u00d4NG TIN'}
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-[980px] border-collapse bg-white text-left text-sm text-slate-800">
            <thead className="bg-pink-50 text-pink-950">
              <tr>
                <th className="w-14 border border-slate-200 px-3 py-3 font-bold">STT</th>
                <th className="w-[260px] border border-slate-200 px-3 py-3 font-bold">T\u00e1c gi\u1ea3 & T\u00e0i li\u1ec7u</th>
                <th className="w-[180px] border border-slate-200 px-3 py-3 font-bold">Lo\u1ea1i ngu\u1ed3n</th>
                <th className="border border-slate-200 px-3 py-3 font-bold">\u0110\u00e1nh gi\u00e1 \u0111\u1ed9 tin c\u1eady</th>
                <th className="w-28 border border-slate-200 px-3 py-3 font-bold">X\u1ebfp h\u1ea1ng</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.stt} className="align-top odd:bg-white even:bg-slate-50/70">
                  <td className="border border-slate-200 px-3 py-4 font-bold text-pink-800">{row.stt}</td>
                  <td className="border border-slate-200 px-3 py-4 leading-7">{row.author}</td>
                  <td className="border border-slate-200 px-3 py-4 leading-7">{row.type}</td>
                  <td className="border border-slate-200 px-3 py-4 leading-7">{row.review}</td>
                  <td className="border border-slate-200 px-3 py-4 font-bold text-pink-800">{row.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {parts.after && (
        <div className="rounded-2xl border border-pink-100 bg-white p-5 sm:p-8">
          <StructuredBody text={parts.after} />
        </div>
      )}
    </AssignmentFrame>
  );
}
