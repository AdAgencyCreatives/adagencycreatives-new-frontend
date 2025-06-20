'use client';

import ImageLoader from "components/ImageLoader";
import LinkOrDiv from "components/LinkOrDiv";
import parse from "html-react-parser";

/**
 * @param {{ agency: { image: string, name: string, location: string, item?:any }, className?: string }} props
 */
const AgencyLoopItem = ({ agency, className }) => {

  const agency_url = agency?.item?.slug ? `/agency/${agency.item.slug}` : '';
  const city_url = agency?.item?.location?.city ? `/job-location-city/${agency.item.location.city}` : '';
  const state_url = agency?.item?.location?.state ? `/job-location-state/${agency.item.location.state}` : '';

  return (
    <div className={`z-1 agency card relative text-center flex flex-col justify-between items-center ${className}`}>
      <div className='relative flex items-center justify-center h-[142px] md:h-[200px] 2xl:h-[224px] 3xl:h-[310px] 4xl:h-[416px]'>
        <div className="">
          <ImageLoader src={agency.image} alt="" className='agency-box-shadow rounded-full h-auto object-cover aspect-square max-sm:w-[6rem] w-[9.05rem] md:w-[11.039rem] xl:w-[12.073rem] 2xl:w-[12.727rem] 3xl:w-[16.969rem] 4xl:w-[22.625rem]' />
        </div>
        <div className="absolute -bottom-[1rem] flex justify-center">
          <img src="/aac-logo-white.avif" alt={agency.name} className='w-[37px] h-[37px] lg:w-[45px] lg:h-[45px] xl:w-[48px] xl:h-[48px] md:w-[50px] md:h-[50px] 2xl:w-[61px] 2xl:h-[61px] 3xl:w-[81px] 3xl:h-[81px] 4xl:w-[108px] 4xl:h-[108px]' />
        </div>
      </div>
      <div className="w-full">
        <LinkOrDiv href={agency_url} className={`font-inter font-bold text-base ${agency_url?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : ''} name uppercase`}>{agency?.item?.name}</LinkOrDiv>
        <LinkOrDiv href={agency_url} className={`text-white font-inter font-bold lowercase title`}>{agency?.item?.open_jobs > 0 ? 'Open Jobs (' + agency?.item?.open_jobs + ')' : ''}</LinkOrDiv>
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

export default AgencyLoopItem;