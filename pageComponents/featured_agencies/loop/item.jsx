'use client';

import LinkOrDiv from "components/LinkOrDiv";

/**
 * @param {{ agency: { image: string, name: string, location: string, item?:any }, className?: string }} props
 */
const FeaturedAgenciesLoopItem = ({ agency, className }) => {

  const agency_url = agency?.item?.slug ? `/agency/${agency.item.slug}` : '';
  const city_url = agency?.item?.location?.city ? `/job-location-city/${agency.item.location.city}` : '';
  const state_url = agency?.item?.location?.state ? `/job-location-state/${agency.item.location.state}` : '';

  return (
    <div className={`z-1 agency card relative text-center flex flex-col justify-between items-center ${className}`}>
      <div className='relative flex items-center justify-center h-[142px] md:h-[200px] 2xl:h-[224px] 3xl:h-[310px] 4xl:h-[416px]'>
        <div className="image-mask">
          <img src={agency.image} alt="" className='w-[143px] md:w-[190px] lg:w-[200px] 2xl:w-[204px] 3xl:w-[270px] 4xl:w-[362px] h-auto object-cover aspect-square' />
        </div>
      </div>
      <div className="w-full">
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
      </div>
    </div>
  );
};

export default FeaturedAgenciesLoopItem;