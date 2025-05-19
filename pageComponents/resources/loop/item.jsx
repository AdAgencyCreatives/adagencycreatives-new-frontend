import LinkWrapper from 'components/LinkWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ResourceLoopItem = ({ resource }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <LinkWrapper href={resource.href} className='group transition-all'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rounded-md md:rounded-2xl outline outline-3 md:outline-8 lg:outline-12 3xl:outline-16 4xl:outline-21 outline-white group-hover:outline-brand-yellow shadow-light md:shadow-(--ad-box-shadow) transition relative bg-black pt-3 md:pt-0 mb-4 md:mb-12 3xl:mb-14 4xl:mb-20 ">
        <Image src={resource.image} width="257" height="257" alt="" className="rounded-2xl bg-black w-full invisible" />
        <div className="absolute bottom-2 left-2 md:bottom-5 md:left-5">
          <Image
            src={isHovered ? '/aac-logo-yellow.png' : '/aac-logo-white.avif'}
            width="48" height="48" alt=""
            className="w-[12px] h-[12px] md:w-[48px] md:h-[48px] 3xl:w-[55px] 3xl:h-[55px] 4xl:w-[73px] 4xl:h-[73px]"
          />
          <p className="text-white group-hover:text-brand-yellow lowercase resource-title mt-1 sm:mb-4 font-bold font-inter">{resource.title}</p>
        </div>
      </div>
    </LinkWrapper>
  );
};

export default ResourceLoopItem;