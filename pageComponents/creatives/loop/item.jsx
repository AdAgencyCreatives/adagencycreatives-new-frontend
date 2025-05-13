
import Image from 'next/image';

/**
 * @param {{ creative: { image: string, agency: string, title: string, location: string }, className?: string }} props
 */
const CreativeLoopItem = ({ creative, className }) => {
  return (
    <div className={`creative card relative text-center flex flex-col justify-between items-center ${className}`}>
      <div className='relative flex items-center justify-center h-[142px] md:h-[200px] 2xl:h-[224px] 3xl:h-[310px] 4xl:h-[416px]'>
        <img src={creative.image} alt="" className='image-mask w-[143px] md:w-[190px] lg:w-[200px] 2xl:w-[204px] 3xl:w-[270px] 4xl:w-[362px] h-auto' />
        <div className="absolute top-[120px] md:top-[170px] lg:top-[155px] xl:top-[175px] 2xl:top-[190px] 3xl:top-[255px] 4xl:top-[328px] flex justify-center">
            <img src="/aac-logo-white.avif"  alt={creative.title} className='w-[37px] h-[37px] lg:w-[45px] lg:h-[45px] xl:w-[48px] xl:h-[48px] md:w-[50px] md:h-[50px] 2xl:w-[61px] 2xl:h-[61px] 3xl:w-[81px] 3xl:h-[81px] 4xl:w-[108px] 4xl:h-[108px]'/>
        </div>
      </div>
      <div className="w-full">
        <div className="font-inter font-bold text-base hover:text-brand-yellow name uppercase">{creative.agency}</div>
        <div className="text-white font-inter font-bold hover:text-brand-yellow lowercase title">{creative.title}</div>
        <div className="separator w-full mx-auto"></div>
        <div className="font-inter hover:text-brand-yellow uppercase location">{creative.location}</div>
      </div>
    </div>
  );
};

export default CreativeLoopItem;