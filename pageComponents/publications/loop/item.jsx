import LinkWrapper from 'components/LinkWrapper';
import Image from 'next/image';
import { useState } from 'react';

const PublicationLoopItem = ({ publication }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LinkWrapper target='_blank' href={`${publication?.href}`} className='group transition-all'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <div className="max-sm:rounded-[0.22rem] rounded-[0.6rem] md:rounded-[0.732rem] xl:rounded-[0.8rem] 2xl:rounded-[0.844rem] 3xl:rounded-[1.125rem] 4xl:rounded-[1.5rem] outline outline-white max-sm:outline-[0.22rem] outline-[0.6rem] md:outline-[0.732rem] xl:outline-[0.8rem] 2xl:outline-[0.844rem] 3xl:outline-[1.125rem] 4xl:outline-[1.5rem] group-hover:outline-primary group-hover:scale-110 shadow-(--ad-box-shadow) transition relative max-sm:w-[4.349rem] w-[11.875rem] md:w-[14.484rem] xl:w-[15.841rem] 2xl:w-[16.7rem] 3xl:w-[22.266rem] 4xl:w-[29.688rem] aspect-square">
      <Image src={publication.image} width="257" height="257" alt="" className="max-sm:rounded-[0.22rem] rounded-[0.6rem] md:rounded-[0.732rem] xl:rounded-[0.8rem] 2xl:rounded-[0.844rem] 3xl:rounded-[1.125rem] 4xl:rounded-[1.5rem] bg-black w-full" />
    </div>
    </LinkWrapper>
  );
};

export default PublicationLoopItem;