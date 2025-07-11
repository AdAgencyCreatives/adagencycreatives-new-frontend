import LinkWrapper from 'components/LinkWrapper';
import Image from 'next/image';

const ResourceLoopItem = ({ resource, target = '_self', showLogo = true, logoClassName = '', titleClassName = '', descriptionClassName='', showDescription=false }) => {
  return (
    <LinkWrapper href={resource.href} target={target} className='group transition-all'>
      <div className="relative max-sm:rounded-[0.146rem] rounded-[0.4rem] md:rounded-[0.488rem] xl:rounded-[0.534rem] 2xl:rounded-[0.563rem] 3xl:rounded-[0.75rem] 4xl:rounded-[1rem] outline max-sm:outline-[0.192rem] outline-[0.525rem] md:outline-[0.641rem] xl:outline-[0.701rem] 2xl:outline-[0.739rem] 3xl:outline-[0.985rem] 4xl:outline-[1.313rem] outline-white group-hover:outline-primary shadow-light md:shadow-(--ad-box-shadow) transition relative bg-black pt-0 ">
        <Image src={'/dot.png'} width="257" height="257" alt="" className="bg-black w-full invisible" />
        <div className="absolute left-0 top-0 w-full h-full">
          {showLogo && (
            <div className={`absolute right-0 max-sm:m-[0.25rem] m-[0.5rem] md:m-[0.61rem] xl:m-[0.667rem] 2xl:m-[0.703rem] 3xl:m-[0.938rem] 4xl:m-[1.25rem] ${logoClassName}`}>
              <Image src="/aac-logo-white.avif" width={36} height={36} alt="" className={`aspect-square max-sm:w-[1.5rem] w-[2.4rem] md:w-[2.927rem] xl:w-[3.202rem] 2xl:w-[3.375rem] 3xl:w-[4.5rem] 4xl:w-[6rem]`} />
            </div>
          )}
          <div className='absolute bottom-0 max-sm:p-[0.25rem] p-[0.3rem] md:p-[0.366rem] xl:p-[0.4rem] 2xl:p-[0.422rem] 3xl:p-[0.563rem] 4xl:p-[0.75rem]'>
          <p className={`leading-[1.33em] text-white lowercase font-bold font-inter overflow-hidden max-sm:h-[1.6rem] h-[3.2rem] md:h-[3.903rem] xl:h-[4.269rem] 2xl:h-[4.5rem] 3xl:h-[6rem] 4xl:h-[8rem] max-sm:text-[0.625rem] text-[1.2rem] md:text-[1.464rem] xl:text-[1.601rem] 2xl:text-[1.688rem] 3xl:text-[2.25rem] 4xl:text-[3rem] max-sm:mt-[0.22rem] mt-[0.6rem] md:mt-[0.732rem] xl:mt-[0.8rem] 2xl:mt-[0.844rem] 3xl:mt-[1.125rem] 4xl:mt-[1.5rem] ${titleClassName}`}
            dangerouslySetInnerHTML={{ __html: resource.title || '' }} />
          {showDescription && resource?.item?.description?.length > 0 && (
            <p className={`leading-[1.33em] text-white lowercase font-inter overflow-hidden max-sm:h-[2.5rem] h-[3.982rem] md:h-[4.857rem] xl:h-[5.312rem] 2xl:h-[5.6rem] 3xl:h-[7.467rem] 4xl:h-[9.956rem] max-sm:text-[0.625rem] text-[1.05rem] md:text-[1.281rem] xl:text-[1.401rem] 2xl:text-[1.477rem] 3xl:text-[1.969rem] 4xl:text-[2.625rem] ${descriptionClassName}`}
              dangerouslySetInnerHTML={{ __html: resource.item.description || '' }} />
          )}
          </div>
        </div>
      </div>
    </LinkWrapper>
  );
};

export default ResourceLoopItem;