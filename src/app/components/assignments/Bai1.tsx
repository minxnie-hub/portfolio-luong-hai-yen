import AssignmentFrame from './AssignmentFrame';
import { assetPath } from '../../utils/assets';

export default function Bai1() {
  return (
    <AssignmentFrame
      number={1}
      title={'Thi\u1ebft k\u1ebf Portfolio c\u00e1 nh\u00e2n'}
      intro={'N\u1ed9i dung b\u00e0i l\u00e0m g\u1ed1c \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb nguy\u00ean v\u0103n d\u01b0\u1edbi d\u1ea1ng trang web.'}
    >
      <iframe
        title={'B\u00e0i 1 - n\u1ed9i dung g\u1ed1c'}
        src={assetPath('/assets/1.html')}
        className="h-[78dvh] min-h-[700px] w-full rounded-2xl border border-pink-100 bg-white"
      />
    </AssignmentFrame>
  );
}
