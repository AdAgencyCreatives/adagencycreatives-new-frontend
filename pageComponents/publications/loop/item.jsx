import LinkWrapper from 'components/LinkWrapper';
import Image from 'next/image';
import { useState } from 'react';

const PublicationLoopItem = ({ publication }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LinkWrapper href={`${publication?.href}`} className='group transition-all'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <div className="rounded-2xl outline outline-16 outline-white group-hover:outline-brand-yellow group-hover:scale-110 shadow-(--ad-box-shadow) transition relative mx-[16px] aspect-square w-[257px] max-w-[100%]">
      <Image src={publication.image} width="257" height="257" alt="" className="rounded-2xl bg-black w-full" />
    </div>
    </LinkWrapper>
  );
};

export default PublicationLoopItem;