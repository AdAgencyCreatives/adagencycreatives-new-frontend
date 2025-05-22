import LinkOrDiv from "components/LinkOrDiv";

/**
 * @param {{ creative: { image: string, name: string, title: string, location: string, item?:any }, className?: string }} props
 */
const CreativeLoopItem = ({ creative, className }) => {

  const creative_url = creative?.item?.slug ? `/creative/${creative.item.slug}` : '';
  const category_url = creative?.item?.category ? `/creative/search/industry-title/${creative.item.category}` : '';
  const city_url = creative?.item?.location?.city ? `/job-location-city/${creative.item.location.city}` : '';
  const state_url = creative?.item?.location?.state ? `/job-location-state/${creative.item.location.state}` : '';

  return (
    <div className={`creative card relative text-center flex flex-col justify-between items-center ${className}`}>
      <div className='relative flex items-center justify-center h-[142px] md:h-[200px] 2xl:h-[224px] 3xl:h-[310px] 4xl:h-[416px]'>
        <img src={creative.image} alt="" className='image-mask w-[143px] md:w-[190px] lg:w-[200px] 2xl:w-[204px] 3xl:w-[270px] 4xl:w-[362px] h-auto object-cover aspect-square' />
        <div className="absolute top-[120px] md:top-[170px] lg:top-[155px] xl:top-[175px] 2xl:top-[190px] 3xl:top-[255px] 4xl:top-[328px] flex justify-center">
          <img src="/aac-logo-white.avif" alt={creative.title} className='w-[37px] h-[37px] lg:w-[45px] lg:h-[45px] xl:w-[48px] xl:h-[48px] md:w-[50px] md:h-[50px] 2xl:w-[61px] 2xl:h-[61px] 3xl:w-[81px] 3xl:h-[81px] 4xl:w-[108px] 4xl:h-[108px]' />
        </div>
      </div>
      <div className="w-full">
        <LinkOrDiv href={creative_url} className={`font-inter font-bold text-base ${creative_url?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : ''} name uppercase`}>{creative.name}</LinkOrDiv>
        <LinkOrDiv href={category_url} className={`text-white font-inter font-bold ${category_url?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : ''} lowercase title`}>{creative.title}</LinkOrDiv>
        <div className="separator w-full mx-auto"></div>
        {city_url?.length > 0 && state_url?.length > 0 ? (
          <div className="location">
            <LinkOrDiv href={city_url} className={`text-white ${city_url?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : ''} uppercase`}>{creative.item.location.city}</LinkOrDiv>{', '}
            <LinkOrDiv href={state_url} className={`text-white ${state_url?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : ''} uppercase`}>{creative.item.location.state}</LinkOrDiv>
          </div>
        ) : (<>
          <LinkOrDiv href="" className="text-white uppercase location">{creative.location}</LinkOrDiv>
        </>)}
      </div>
    </div>
  );
};

export default CreativeLoopItem;