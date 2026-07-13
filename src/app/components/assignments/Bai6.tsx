import StructuredTextAssignment from './StructuredTextAssignment';

export default function Bai6() {
  return (
    <StructuredTextAssignment
      number={6}
      title={'S\u1eed d\u1ee5ng AI c\u00f3 tr\u00e1ch nhi\u1ec7m v\u00e0 \u0111\u1ea1o \u0111\u1ee9c trong h\u1ecdc thu\u1eadt'}
      source="/assets/bai6-source.txt"
      images={['/assets/evidence/bai6-1-Image34.png', '/assets/evidence/bai6-2-Image47.jpg']}
      extraImages={[{ title: '6.1.png', src: '/assets/6.1.png' }]}
    />
  );
}
