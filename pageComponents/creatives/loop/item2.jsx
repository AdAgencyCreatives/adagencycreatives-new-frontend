
import Image from 'next/image';

const CreativeLoopItem2 = ({ creative }) => {
  return (
    <div className="relative py-2 md:py-6 4xl:py-20 rounded-2xl md:rounded-4xl border-white border-2 shadow-(--ad-box-shadow) text-center flex flex-col justify-between items-center gap-6     ">
      <div className="relative flex items-center">
        <Image src={creative.image} width="360" height="311" alt={creative.title} className="image-mask2 w-full" />
      </div>
      {/* <div className="w-[37px] h-[37px] md:w-[68px] md:h-[68px] 4xl:w-[91px] 4xl:h-[91px]  top-0 right-0 left-0 bottom-0 flex justify-center mx-auto my-auto">
          <Image src="/aac-logo-white.avif" width="67" height="67" alt={creative.title} className="hover:rotate-45 transition-transform duration-3000 lg:w-[45px] lg:h-[45px] 3xl:w-[67px] 3xl:h-[67px] 4xl:w-[91px] 4xl:h-[91px]" />
      </div> */}
      <img src="/aac-logo-white.avif" width="25" height="25" alt={creative.title} className="hover:rotate-45 transition-transform duration-3000 'w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] xl:w-[48px] xl:h-[48px] md:w-[50px] md:h-[50px] 2xl:w-[52px] 2xl:h-[52px] 3xl:w-[67px] 3xl:h-[67px] 4xl:w-[91px] 4xl:h-[91px]" />
      <div className="px-2 md:px-2 4xl:px-5 mt-2 md:mt-2 3xl:mt-8">
        <div className="font-alta text-xs md:text-[30px] 3xl:text-[32px] 4xl:text-[42px] hover:text-yellow-400">{creative.agency}</div>
        <div className="text-white font-bold text-[9px] md:text-[16px] 3xl:text-[24px] 4xl:text-[32px] hover:text-yellow-400 lowercase">{creative.title}</div>
        <div className="my-3 border-b-2 w-[90%] mx-auto" />
        <div className="font-alta font-bold text-[10px] md:text-[16px] 3xl:text-[14px] 4xl:text-[20px] hover:text-yellow-400">{creative.location}</div>
      </div>
    </div>
  );
};

export default CreativeLoopItem2;