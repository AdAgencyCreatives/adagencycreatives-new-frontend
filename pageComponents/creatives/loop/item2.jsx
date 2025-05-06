
import Image from 'next/image';

const CreativeLoopItem2 = ({ creative }) => {
  return (
    <div className="relative px-1 py-3 mb:py-[15.75px] 2xl:py-[33.75px] 3xl:py-[44.74px] 4xl:py-[60px] rounded-2xl md:rounded-4xl border-white border-[0.72px] md:border-2 shadow-down md:shadow-(--ad-box-shadow) text-center flex flex-col justify-between items-center gap-2 4xl:gap-4">
      <div className="relative flex items-center">
        <Image src={creative.image} width="360" height="311" alt={creative.title} className="image-mask2 w-full" />
      </div>
      {/* <div className="w-[37px] h-[37px] md:w-[68px] md:h-[68px] 4xl:w-[91px] 4xl:h-[91px]  top-0 right-0 left-0 bottom-0 flex justify-center mx-auto my-auto">
          <Image src="/aac-logo-white.avif" width="67" height="67" alt={creative.title} className="hover:rotate-45 transition-transform duration-3000 lg:w-[45px] lg:h-[45px] 3xl:w-[67px] 3xl:h-[67px] 4xl:w-[91px] 4xl:h-[91px]" />
      </div> */}
      <img src="/aac-logo-white.avif" width="25" height="25" alt={creative.title} className="hover:rotate-45 transition-transform duration-3000 'w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] xl:w-[48px] xl:h-[48px] md:w-[50px] md:h-[50px] 2xl:w-[52px] 2xl:h-[52px] 3xl:w-[67px] 3xl:h-[67px] 4xl:w-[91px] 4xl:h-[91px]" />
      <div className="w-full mt-2.5 2xl:mt-4 3xl:mt-5.5 4xl:mt-7">
        <div className="font-alta font-normal text-[11.56px] sm:text-[16px] md:text-[20px] 2xl:text-[28px] 3xl:text-[38px] 4xl:text-[42.67px] hover:text-yellow-400">{creative.agency}</div>
        <div className="text-white font-inter leading-[16px] md:leading-[20px] 2xl:leading-[24px] 3xl:leading-[25px] 4xl:leading-[34.67px] font-bold text-[8.68px] md:text-[14px] 2xl:text-[16px] 3xl:text-[20px] 4xl:text-[25.21px] hover:text-yellow-400 lowercase">{creative.title}</div>
        <div className="my-[7.63px] md:my-2 2xl:my-[12px] 3xl:my-[15.67px] 4xl:my-[22.34px] border-b-[0.91px] md:border-b-[1.15px] 2xl:border-b-[1.5px] 3xl:border-b-[1.99px] 4xl:border-b-[2.67px] w-[80%] mx-auto" />
        <div className="font-alta leading-[14px] md:leading-[16px] 2xl:leading-[20px] 3xl:leading-[28px] 4xl:leading-[36.4px] text-[5.18px] md:text-[12px] 2xl:text-[14px] 3xl:text-[18px] 4xl:text-[22.97px] hover:text-yellow-400">{creative.location}</div>
      </div>
    </div>
  );
};

export default CreativeLoopItem2;