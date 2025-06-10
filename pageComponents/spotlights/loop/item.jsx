import LinkWrapper from 'components/LinkWrapper';
import Image from 'next/image';

const SpotlightLoopItem = ({ spotlight }) => {
  return (
    <LinkWrapper href={`/spotlight-reels/${spotlight?.href || ''}`} className='group transition-all w-full'>
      <div className={`bg-black outline outline-white max-sm:outline-[0.22rem] outline-[0.6rem] md:outline-[0.732rem] xl:outline-[0.8rem] 2xl:outline-[0.844rem] 3xl:outline-[1.125rem] 4xl:outline-[1.5rem] max-sm:rounded-[0.256rem] rounded-[0.7rem] md:rounded-[0.854rem] xl:rounded-[0.934rem] 2xl:rounded-[0.984rem] 3xl:rounded-[1.313rem] 4xl:rounded-[1.75rem] group-hover:outline-brand-yellow shadow-(--ad-box-shadow) transition relative max-sm:mx-[0px] mx-[16px] aspect-square max-sm:mb-0 md:mb-8`}>
        {/* <Image src={spotlight.image} width="257" height="257" alt="" className="rounded-2xl bg-black w-full invisible" /> */}
        <div className="absolute top-0 max-sm:p-[0.25rem] p-[0.684rem] md:p-[0.834rem] xl:p-[0.912rem] 2xl:p-[0.962rem] 3xl:p-[1.283rem] 4xl:p-[1.71rem]">
          <Image src="/favicon-white.png" width={36} height={36} alt="" className={`aspect-square max-sm:w-[1.125rem] w-[2.8rem] md:w-[3.415rem] xl:w-[3.735rem] 2xl:w-[3.938rem] 3xl:w-[5.25rem] 4xl:w-[7rem]`} />
        </div>
        <div className="absolute bottom-0 max-sm:p-[0.25rem] p-[0.684rem] md:p-[0.834rem] xl:p-[0.912rem] 2xl:p-[0.962rem] 3xl:p-[1.283rem] 4xl:p-[1.71rem]">
          <p className="leading-[1.15em] max-sm:text-[0.5rem] text-[1.3rem] md:text-[1.586rem] xl:text-[1.734rem] 2xl:text-[1.828rem] 3xl:text-[2.438rem] 4xl:text-[3.25rem] text-white uppercase font-bold force-break-word">{spotlight.name}</p>
          <p className="leading-[1.15em] max-sm:text-[0.5rem] text-[0.94rem] md:text-[1.147rem] xl:text-[1.254rem] 2xl:text-[1.322rem] 3xl:text-[1.763rem] 4xl:text-[2.35rem] text-white lowercase force-break-word">{spotlight.title}</p>
        </div>
      </div>
    </LinkWrapper>
  );
};

export default SpotlightLoopItem;