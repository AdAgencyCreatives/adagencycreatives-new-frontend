'use client';

import ImageLoader from "components/ImageLoader";
import ActionLinkDiv from "components/ActionLinkDiv";

const JobLoopItem = ({ job, className }) => {

  const agency_url = job?.item?.agency?.slug ? `/agency/${job.item.agency.slug}` : '';
  const job_url = job?.item?.slug ? `/job/${job.item.slug}` : '';
  const city_url = job?.item?.location?.city ? `/job-location-city/${job.item.location.city}` : '';
  const state_url = job?.item?.location?.state ? `/job-location-state/${job.item.location.state}` : '';

  return (
    <div className={`card relative text-center flex flex-col justify-between items-center ${className}`}>
      <div className="relative flex items-center justify-center h-[142px] md:h-[200px] 2xl:h-[224px] 3xl:h-[310px] 4xl:h-[416px]">
        <ImageLoader src={job.image} alt="" className="agency-box-shadow rounded-full h-auto max-sm:w-[6rem] w-[9.05rem] md:w-[11.039rem] xl:w-[12.073rem] 2xl:w-[12.727rem] 3xl:w-[16.969rem] 4xl:w-[22.625rem]" />
        <div className="absolute top-[100px] md:top-[160px] lg:top-[145px] xl:top-[165px] 2xl:top-[180px] 3xl:top-[245px] 4xl:top-[328px] flex justify-center">
          <img fetchPriority="high" src="/aac-logo-white.avif" alt={job.title} className='w-[37px] h-[37px] lg:w-[45px] lg:h-[45px] xl:w-[48px] xl:h-[48px] md:w-[50px] md:h-[50px] 2xl:w-[61px] 2xl:h-[61px] 3xl:w-[81px] 3xl:h-[81px] 4xl:w-[108px] 4xl:h-[108px]' />
        </div>
      </div>
      <div className="w-full">
        <ActionLinkDiv href={agency_url} className={`text-white ${agency_url?.length > 0 ? 'hover:text-primary cursor-pointer' : ''} leading-[100%] name`}>{job.agency}</ActionLinkDiv>
        <ActionLinkDiv href={job_url} className={`text-white ${job_url?.length > 0 ? 'hover:text-primary cursor-pointer' : ''} lowercase title`}>{job.title}</ActionLinkDiv>
        <div className="separator w-full mx-auto"></div>
        {city_url?.length > 0 && state_url?.length > 0 ? (
          <div className="location">
            <ActionLinkDiv href={city_url} className={`text-white ${city_url?.length > 0 ? 'hover:text-primary cursor-pointer' : ''} uppercase`}>{job.item.location.city}</ActionLinkDiv>{', '}
            <ActionLinkDiv href={state_url} className={`text-white ${state_url?.length > 0 ? 'hover:text-primary cursor-pointer' : ''} uppercase`}>{job.item.location.state}</ActionLinkDiv>
          </div>
        ) : (<>
          <ActionLinkDiv href="" className="text-white uppercase location">{job.location}</ActionLinkDiv>
        </>)}
      </div>
    </div>
  );
};

export default JobLoopItem;