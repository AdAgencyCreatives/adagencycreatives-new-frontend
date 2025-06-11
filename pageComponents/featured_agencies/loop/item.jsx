'use client';

/**
 * @param {{ agency: { image: string, name: string, location: string, item?:any }, className?: string }} props
 */
const FeaturedAgenciesLoopItem = ({ agency, className='' }) => {

  const agency_url = agency?.item?.slug ? `/agency/${agency.item.slug}` : '';
  const city_url = agency?.item?.location?.city ? `/job-location-city/${agency.item.location.city}` : '';
  const state_url = agency?.item?.location?.state ? `/job-location-state/${agency.item.location.state}` : '';

  return (
    <div className={`z-1 relative text-center flex flex-col justify-between items-center bg-black outline max-sm:outline-[0.028rem] outline-[0.075rem] md:outline-[0.092rem] xl:outline-[0.1rem] 2xl:outline-[0.106rem] 3xl:outline-[0.141rem] 4xl:outline-[0.188rem] max-sm:mx-[1.373rem] mx-[3.75rem] md:mx-[4.574rem] xl:mx-[5.002rem] 2xl:mx-[5.273rem] 3xl:mx-[7.031rem] 4xl:mx-[9.375rem] max-sm:rounded-[0.513rem] rounded-[1.4rem] md:rounded-[1.708rem] xl:rounded-[1.868rem] 2xl:rounded-[1.969rem] 3xl:rounded-[2.625rem] 4xl:rounded-[3.5rem] featured-agency-box-shadow ${className}`}>
      <div className='relative flex items-center justify-center max-sm:w-[5.5rem] w-[10.4rem] md:w-[12.685rem] xl:w-[13.873rem] 2xl:w-[14.625rem] 3xl:w-[19.5rem] 4xl:w-[26rem] aspect-square'>
        <div className="">
          <img src={agency.image} alt="" className='max-sm:w-[5.5rem] w-[10.4rem] md:w-[12.685rem] xl:w-[13.873rem] 2xl:w-[14.625rem] 3xl:w-[19.5rem] 4xl:w-[26rem] h-auto object-cover aspect-square max-sm:rounded-[0.513rem] rounded-[1.4rem] md:rounded-[1.708rem] xl:rounded-[1.868rem] 2xl:rounded-[1.969rem] 3xl:rounded-[2.625rem] 4xl:rounded-[3.5rem]' />
        </div>
      </div>
      {/* <div className="w-full">
        <LinkOrDiv href={agency_url} className={`font-inter font-bold text-base ${agency_url?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : ''} name uppercase`}>{agency?.item?.name}</LinkOrDiv>
        <div className="separator w-full mx-auto"></div>
        {city_url?.length > 0 && state_url?.length > 0 ? (
          <div className="location">
            <LinkOrDiv href={city_url} className={`text-white ${city_url?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : ''} uppercase`}>{agency.item.location.city}</LinkOrDiv>{', '}
            <LinkOrDiv href={state_url} className={`text-white ${state_url?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : ''} uppercase`}>{agency.item.location.state}</LinkOrDiv>
          </div>
        ) : (<>
          <LinkOrDiv href="" className="text-white uppercase location">{agency.location}</LinkOrDiv>
        </>)}
      </div> */}
    </div>
  );
};

export default FeaturedAgenciesLoopItem;