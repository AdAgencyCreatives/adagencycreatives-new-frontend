'use client';

import LinkOrDiv from "components/LinkOrDiv";

const JobLoopItem = ({ job, className }) => {

  const agency_url = job?.item?.agency?.slug ? `/agency/${job.item.agency.slug}` : '';
  const job_url = job?.item?.slug ? `/job/${job.item.slug}` : '';
  const city_url = job?.item?.location?.city ? `/job-location-city/${job.item.location.city}` : '';
  const state_url = job?.item?.location?.state ? `/job-location-state/${job.item.location.state}` : '';

  return (
    <div className={`card relative text-center flex flex-col justify-between items-center ${className}`}>
      <div className="relative flex items-center justify-center h-[142px] md:h-[200px] 2xl:h-[224px] 3xl:h-[310px] 4xl:h-[416px]">
        <img src={job.image} alt="" className="image-mask w-[123px] md:w-[190px] lg:w-[200px] 2xl:w-[204px] 3xl:w-[270px] 4xl:w-[362px] h-auto" />
        <div className="absolute top-[110px] md:top-[160px] lg:top-[145px] xl:top-[165px] 2xl:top-[180px] 3xl:top-[245px] 4xl:top-[328px] flex justify-center">
          <img src="/aac-logo-yellow.png" alt={job.title} className='w-[37px] h-[37px] lg:w-[45px] lg:h-[45px] xl:w-[48px] xl:h-[48px] md:w-[50px] md:h-[50px] 2xl:w-[61px] 2xl:h-[61px] 3xl:w-[81px] 3xl:h-[81px] 4xl:w-[108px] 4xl:h-[108px]' />
        </div>
      </div>
      <div className="w-full">
        <LinkOrDiv href={agency_url} className={`text-white ${agency_url?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : ''} leading-[100%] name`}>{job.agency}</LinkOrDiv>
        <LinkOrDiv href={job_url} className={`text-white ${job_url?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : ''} lowercase title`}>{job.title}</LinkOrDiv>
        <div className="separator w-full mx-auto"></div>
        {city_url?.length > 0 && state_url?.length > 0 ? (
          <div className="location">
            <LinkOrDiv href={city_url} className={`text-white ${city_url?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : ''} uppercase`}>{job.item.location.city}</LinkOrDiv>{', '}
            <LinkOrDiv href={state_url} className={`text-white ${state_url?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : ''} uppercase`}>{job.item.location.state}</LinkOrDiv>
          </div>
        ) : (<>
          <LinkOrDiv href="" className="text-white uppercase location">{job.location}</LinkOrDiv>
        </>)}
      </div>
    </div>
  );
};

export default JobLoopItem;