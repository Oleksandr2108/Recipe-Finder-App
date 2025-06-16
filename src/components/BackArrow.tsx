import Image from "next/image";
import Link from "next/link";
import IconArrow from '@/assets/back.png'

interface PropsArrow {
  path: string;
  text: string;
}
const BackArrow: React.FC<PropsArrow> = ({ path, text }) => {
  return (
    <Link
      href={path}
      className="inline-flex items-center text-orange-900 font-bold hover:text-orange-700 mb-6"
    >
      <Image src={IconArrow} alt='' className="w-4 mr-2" />
      {text}
    </Link>
  );
};

export default BackArrow;
