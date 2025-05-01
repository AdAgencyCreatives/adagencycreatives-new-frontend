
import Image from 'next/image';

const CreativeLoopItem2 = ({ creative }) => {
  return (
    <div className="relative py-2 md:py-6 4xl:py-20 rounded-2xl md:rounded-4xl border-white border-2 shadow-(--ad-box-shadow) text-center flex flex-col justify-between items-center gap-16     ">
      <div className="relative flex items-center">
        <Image src={creative.image} width="360" height="311" alt={creative.title} className="image-mask w-full" />
      </div>
      <div className="w-[37px] h-[37px] md:w-[68px] md:h-[68px] absolute top-0 right-0 left-0 bottom-0 flex justify-center mx-auto my-auto">
          <Image src="/aac-logo-yellow.png" width="67" height="67" alt={creative.title} className="hover:rotate-45 transition-transform duration-3000" />
      </div>
      <div className="px-2 md:px-2 4xl:px-8">
        <div className="font-alta text-base md:text-2xl 3xl:text-[32px] 4xl:text-[42px] hover:text-yellow-400">{creative.agency}</div>
        <div className="text-white font-semibold text-[10px] md:text-[18px] 3xl:text-2xl 4xl:text-[32px] hover:text-yellow-400 lowercase">{creative.title}</div>
        <div className="my-3 border-b-2 w-[60%] mx-auto" />
        <div className="font-alta font-bold text-[10px] md:text-[10px] 3xl:text-sm 4xl:text-[20px] hover:text-yellow-400">{creative.location}</div>
      </div>
    </div>
  );
};

export default CreativeLoopItem2;