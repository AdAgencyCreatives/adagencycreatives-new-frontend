import LinkWrapper from 'components/LinkWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SpotlightLoopItem = ({ spotlight, itemClassName='' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LinkWrapper href={`/spotlight-reels/${spotlight?.href || ''}`} className='group transition-all w-full'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`bg-black max-sm:w-[64px] max-sm:rounded-[4px] rounded-2xl outline max-sm:outline-3 outline-16 outline-white group-hover:outline-brand-yellow shadow-(--ad-box-shadow) transition relative max-sm:mx-[0px] mx-[16px] aspect-square max-sm:mb-0 md:mb-8`}>
        {/* <Image src={spotlight.image} width="257" height="257" alt="" className="rounded-2xl bg-black w-full invisible" /> */}
        <div className="absolute inset-0 flex max-sm:items-start items-center justify-center">
          {/* <Image src="/favicon-white.png" width="36" height="36" alt="" className='max-sm:mt-3 max-sm:w-[18px] max-sm:aspect-square' /> */}
        </div>
        <div className="absolute bottom-0 max-sm:p-1 p-4">
          <p className="max-sm:text-[0.5rem] md:text-[1.5rem] xl:text-[1.7rem] 2xl:text-[1.85rem] 3xl:text-[2.25rem] pb-[0.15em] text-white group-hover:text-brand-yellow uppercase font-bold force-break-word">{spotlight.name}</p>
          <p className="max-sm:text-[0.5rem] md:text-[1.275rem] xl:text-[1.445rem] 2xl:text-[1.57rem] 3xl:text-[2.25rem] text-white group-hover:text-brand-yellow lowercase force-break-word">{spotlight.title}</p>
        </div>
      </div>
    </LinkWrapper>
  );
};

export default SpotlightLoopItem;