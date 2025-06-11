import LinkWrapper from 'components/LinkWrapper';
import Image from 'next/image';

const ResourceLoopItem = ({ resource }) => {
  return (
    <LinkWrapper href={resource.href} className='group transition-all'>
      <div className="max-sm:rounded-[0.146rem] rounded-[0.4rem] md:rounded-[0.488rem] xl:rounded-[0.534rem] 2xl:rounded-[0.563rem] 3xl:rounded-[0.75rem] 4xl:rounded-[1rem] outline max-sm:outline-[0.192rem] outline-[0.525rem] md:outline-[0.641rem] xl:outline-[0.701rem] 2xl:outline-[0.739rem] 3xl:outline-[0.985rem] 4xl:outline-[1.313rem] outline-white group-hover:outline-brand-yellow shadow-light md:shadow-(--ad-box-shadow) transition relative bg-black pt-3 md:pt-0 ">
        <Image src={resource.image} width="257" height="257" alt="" className="bg-black w-full invisible" />
        <div className="absolute bottom-2 left-2 md:bottom-5 md:left-5">
          <Image
            src={'/aac-logo-white.avif'}
            width="48" height="48" alt=""
            className="w-[12px] h-[12px] md:w-[48px] md:h-[48px] 3xl:w-[55px] 3xl:h-[55px] 4xl:w-[73px] 4xl:h-[73px]"
          />
          <p className="leading-[1.33em] text-white lowercase font-bold font-inter max-sm:text-[0.625rem] text-[1.1rem] md:text-[1.342rem] xl:text-[1.467rem] 2xl:text-[1.547rem] 3xl:text-[2.063rem] 4xl:text-[2.75rem] max-sm:mt-[0.22rem] mt-[0.6rem] md:mt-[0.732rem] xl:mt-[0.8rem] 2xl:mt-[0.844rem] 3xl:mt-[1.125rem] 4xl:mt-[1.5rem]">{resource.title}</p>
        </div>
      </div>
    </LinkWrapper>
  );
};

export default ResourceLoopItem;