import StructuredTextAssignment from './StructuredTextAssignment';

export default function Bai4() {
  return (
    <StructuredTextAssignment
      number={4}
      title={'H\u1ee3p t\u00e1c tr\u1ef1c tuy\u1ebfn trong d\u1ef1 \u00e1n nh\u00f3m'}
      source="/assets/bai4-source.txt"
      images={[
        '/assets/evidence/bai4-1-Image25.jpg',
        '/assets/evidence/bai4-2-Image28.png',
        '/assets/evidence/bai4-3-Image31.jpg',
        '/assets/evidence/bai4-4-Image34.png',
        '/assets/evidence/bai4-7-Image48.png',
        '/assets/evidence/bai4-9-Image54.png',
      ]}
    />
  );
}
