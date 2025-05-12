
import Image from 'next/image';

/**
 * @param {{ creative: { image: string, agency: string, title: string, location: string }, className?: string }} props
 */
const CreativeLoopItem = ({ creative, className }) => {
  return (
    <div className={` card relative py-5 mb:py-[15.75px] 2xl:py-[33.75px] 3xl:py-[44.74px] 4xl:py-[60px] rounded-3xl md:rounded-4xl border-white border-2 shadow-(--ad-box-shadow) text-center flex flex-col justify-between items-center gap-4 2xl:gap-8 3xl:gap-8 4xl:gap-10 ${className}`}>
      {/* <div className="relative w-[124px] h-[124px] md:w-[256px] md:h-[256px] 4xl:w-[416px] flex items-center px-4">
        <Image src={creative.image} width="256" height="162" alt={creative.title} className="image-mask mx-auto" />
      </div>
      <div className="w-[37px] h-[37px] md:w-[68px] md:h-[68px] absolute top-0 right-0 left-0 bottom-0 flex justify-center mx-auto my-auto">
          <Image src="/aac-logo-white.avif" width="67" height="67" alt={creative.title} className="hover:rotate-45 transition-transform duration-3000" />
      </div> */}
      <div className='relative flex items-center justify-center py-3 h-[142px] md:h-[200px] 2xl:h-[224px] 3xl:h-[310px] 4xl:h-[416px]'>
        <img src={creative.image} alt="" className='image-mask2 w-[143px] md:w-[190px] lg:w-[200px] 2xl:w-[204px] 3xl:w-[270px] 4xl:w-[362px] h-auto' />
        <div className="absolute top-[120px] md:top-[170px] lg:top-[155px] xl:top-[175px] 2xl:top-[190px] 3xl:top-[255px] 4xl:top-[328px] flex justify-center">
            <img src="/aac-logo-white.avif"  alt={creative.title} className='w-[37px] h-[37px] lg:w-[45px] lg:h-[45px] xl:w-[48px] xl:h-[48px] md:w-[50px] md:h-[50px] 2xl:w-[61px] 2xl:h-[61px] 3xl:w-[81px] 3xl:h-[81px] 4xl:w-[108px] 4xl:h-[108px]'/>
        </div>
      </div>
      <div className='mt-2.5 2xl:mt-4 3xl:mt-6 4xl:mt-[2.071rem] px-[9.86px] md:px-[12.38px] 2xl:px-[16.38px] 3xl:px-[21.71px] 4xl:px-[29.22px] w-full'>
        <div className="font-inter font-bold text-base hover:text-brand-yellow leading-[100%] name uppercase">{creative.agency}</div>
        <div className="text-white font-inter font-bold hover:text-brand-yellow lowercase title">{creative.title}</div>
        <div className="my-[7.63px] md:my-2 2xl:my-[12px] 3xl:my-[15.67px] 4xl:my-[22.34px] border-b-[0.91px] md:border-b-[1.15px] 2xl:border-b-[1.5px] 3xl:border-b-[1.99px] 4xl:border-b-[2.67px] w-[100%] mx-auto" />
        <div className="font-inter hover:text-brand-yellow location">{creative.location}</div>
      </div>
    </div>
  );
};

export default CreativeLoopItem;