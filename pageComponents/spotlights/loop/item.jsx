import LinkWrapper from 'components/LinkWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SpotlightLoopItem = ({ spotlight }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LinkWrapper href={`/spotlight-reels/${spotlight?.href || ''}`} className='group transition-all'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-sm:w-[64px] max-sm:rounded-[4px] rounded-2xl outline max-sm:outline-3 outline-16 outline-white group-hover:outline-brand-yellow shadow-(--ad-box-shadow) transition relative max-sm:mx-[0px] mx-[16px] aspect-square">
        {/* <Image src={spotlight.image} width="257" height="257" alt="" className="rounded-2xl bg-black w-full invisible" /> */}
        <div className="absolute inset-0 flex max-sm:items-start items-center justify-center">
          <Image src="/favicon-white.png" width="36" height="36" alt="" className='max-sm:mt-3 max-sm:w-[18px] max-sm:aspect-square' />
        </div>
        <div className="absolute max-sm:bottom-1 max-sm:left-1 bottom-4 left-4">
          <p className="max-sm:text-[8px] text-white group-hover:text-brand-yellow uppercase font-alta font-bold">{spotlight.name}</p>
          <p className="max-sm:text-[8px] text-white group-hover:text-brand-yellow lowercase">{spotlight.title}</p>
        </div>
      </div>
    </LinkWrapper>
  );
};

export default SpotlightLoopItem;