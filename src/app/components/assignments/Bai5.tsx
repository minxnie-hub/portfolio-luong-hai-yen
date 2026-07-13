import StructuredTextAssignment from './StructuredTextAssignment';

export default function Bai5() {
  return (
    <StructuredTextAssignment
      number={5}
      title={'AI t\u1ea1o sinh trong s\u00e1ng t\u1ea1o n\u1ed9i dung s\u1ed1'}
      source="/assets/bai5-source.txt"
      images={[
        '/assets/evidence/bai5-1-Image34.png',
        '/assets/evidence/bai5-2-Image35.png',
        '/assets/evidence/bai5-3-Image38.jpg',
        '/assets/evidence/bai5-4-Image41.jpg',
        '/assets/evidence/bai5-5-Image44.jpg',
        '/assets/evidence/bai5-6-Image51.jpg',
      ]}
      extraImages={[{ title: '5.1.png', src: '/assets/5.1.png' }]}
    />
  );
}
