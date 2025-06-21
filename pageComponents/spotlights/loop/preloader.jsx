import ContentLinePreloader from 'components/ContentLinePreloader';
import LinkWrapper from 'components/LinkWrapper';
import Image from 'next/image';

const SpotlightLoopPreloader = ({ className = '' }) => {
    return (
        <div className={`group transition-all max-sm:w-[4.834rem] w-[13.2rem] md:w-[16.1rem] xl:w-[17.609rem] 2xl:w-[18.563rem] 3xl:w-[24.75rem] 4xl:w-[33rem] aspect-square max-w-full ${className}`}>
            <div className={`bg-black outline outline-white max-sm:outline-[0.22rem] outline-[0.6rem] md:outline-[0.732rem] xl:outline-[0.8rem] 2xl:outline-[0.844rem] 3xl:outline-[1.125rem] 4xl:outline-[1.5rem] max-sm:rounded-[0.256rem] rounded-[0.7rem] md:rounded-[0.854rem] xl:rounded-[0.934rem] 2xl:rounded-[0.984rem] 3xl:rounded-[1.313rem] 4xl:rounded-[1.75rem] group-hover:outline-brand-yellow shadow-(--ad-box-shadow) transition relative max-sm:mx-[0px] mx-[16px] aspect-square max-sm:mb-0 md:mb-8`}>
                <div className="absolute top-0 right-0 max-sm:p-[0.25rem] p-[0.684rem] md:p-[0.834rem] xl:p-[0.912rem] 2xl:p-[0.962rem] 3xl:p-[1.283rem] 4xl:p-[1.71rem]">
                    <Image src="/favicon-white.png" width={36} height={36} alt="" className={`aspect-square max-sm:w-[0.659rem] w-[1.8rem] md:w-[2.196rem] xl:w-[2.401rem] 2xl:w-[2.531rem] 3xl:w-[3.375rem] 4xl:w-[4.5rem]`} />
                </div>
                <div className="absolute w-full bottom-0 max-sm:p-[0.25rem] p-[0.684rem] md:p-[0.834rem] xl:p-[0.912rem] 2xl:p-[0.962rem] 3xl:p-[1.283rem] 4xl:p-[1.71rem]">
                    <div className='leading-[1.15em] h-[2.3em] max-sm:text-[0.625rem] text-[1.3rem] md:text-[1.586rem] xl:text-[1.734rem] 2xl:text-[1.828rem] 3xl:text-[2.438rem] 4xl:text-[3.25rem] text-white uppercase font-bold force-break-word'>
                        <ContentLinePreloader className='w-[50%]!' />
                    </div>
                    <div className='leading-[1.15em] h-[3.45em] max-sm:text-[0.625rem] text-[0.94rem] md:text-[1.147rem] xl:text-[1.254rem] 2xl:text-[1.322rem] 3xl:text-[1.763rem] 4xl:text-[2.35rem] text-white lowercase force-break-word'>
                        <ContentLinePreloader className='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotlightLoopPreloader;