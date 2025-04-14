
import Image from 'next/image';

const CreativeLoopItem = ({ creative }) => {
  return (
    <div className="relative px-4 py-6 rounded-2xl border-white border-2 shadow-(--ad-box-shadow) text-center flex flex-col justify-between items-center gap-10">
      <div className="relative w-[256px] h-[256px] flex items-center px-4">
        <Image src={creative.image} width="256" height="162" alt={creative.title} className="image-mask" />
      </div>
      <div className="w-[67px] h-[67px] absolute top-0 right-0 left-0 bottom-0 flex justify-center mx-auto my-auto">
          <Image src="/aac-logo-yellow.png" width="67" height="67" alt={creative.title} className="hover:rotate-45 transition-transform duration-3000" />
      </div>
      <div>
        <div className="font-alta font-bold text-[30px] hover:text-yellow-400">{creative.agency}</div>
        <div className="text-white font-semibold text-[20px] hover:text-yellow-400 lowercase leading-[26px]">{creative.title}</div>
        <div className="my-3 border-b-2 w-[60%] mx-auto" />
        <div className="font-alta font-bold text-[16px] hover:text-yellow-400">{creative.location}</div>
      </div>
    </div>
  );
};

export default CreativeLoopItem;