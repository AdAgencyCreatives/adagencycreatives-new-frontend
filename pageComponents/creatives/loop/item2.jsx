
import Image from 'next/image';

const CreativeLoopItem2 = ({ creative }) => {
  return (
    <div className="card design-2 relative px-1 py-3 mb:py-[15.75px] 2xl:py-[33.75px] 3xl:py-[44.74px] 4xl:py-[60px] rounded-2xl md:rounded-4xl border-white border-[0.72px] md:border-2 shadow-down md:shadow-(--ad-box-shadow) text-center flex flex-col justify-between items-center gap-2">
      <div className="relative flex items-center justify-center">
        <Image src={creative.image} width="360" height="311" alt={creative.title} className="image-mask2 max-w-full 2xl:max-w-[98%] 3xl:max-w-[94%] 4xl:max-w-[90%]" />
      </div>
      {/* <div className="w-[37px] h-[37px] md:w-[68px] md:h-[68px] 4xl:w-[91px] 4xl:h-[91px]  top-0 right-0 left-0 bottom-0 flex justify-center mx-auto my-auto">
          <Image src="/aac-logo-white.avif" width="67" height="67" alt={creative.title} className="hover:rotate-45 transition-transform duration-3000 lg:w-[45px] lg:h-[45px] 3xl:w-[67px] 3xl:h-[67px] 4xl:w-[91px] 4xl:h-[91px]" />
      </div> */}
      <img src="/aac-logo-white.avif" width="25" height="25" alt={creative.title} className="hover:rotate-45 transition-transform duration-3000 'w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] xl:w-[48px] xl:h-[48px] md:w-[50px] md:h-[50px] 2xl:w-[52px] 2xl:h-[52px] 3xl:w-[67px] 3xl:h-[67px] 4xl:w-[91px] 4xl:h-[91px]" />
      <div className="w-full mt-1.5 2xl:mt-1 3xl:mt-2.5 4xl:mt-3">
        <div className="font-inter font-bold hover:text-brand-yellow uppercase name">{creative.agency}</div>
        <div className="text-white font-inter leading-[16px] md:leading-[20px] 2xl:leading-[24px] 3xl:leading-[25px] 4xl:leading-[34.67px] font-bold hover:text-brand-yellow lowercase title">{creative.title}</div>
        <div className="my-[7.63px] md:my-2 2xl:my-[12px] 3xl:my-[15.67px] 4xl:my-[22.34px] border-b-[0.91px] md:border-b-[1.15px] 2xl:border-b-[1.5px] 3xl:border-b-[1.99px] 4xl:border-b-[2.67px] w-[80%] mx-auto" />
        <div className="font-inter font-bold leading-[14px] md:leading-[16px] 2xl:leading-[20px] 3xl:leading-[28px] 4xl:leading-[36.4px] hover:text-brand-yellow location">{creative.location}</div>
      </div>
    </div> 
  );
};

export default CreativeLoopItem2;