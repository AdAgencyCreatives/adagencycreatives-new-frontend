
const JobLoopItem = ({ job, className }) => {
  return (
    <div className={`card relative text-center flex flex-col justify-between items-center ${className}`}>
      <div className="relative flex items-center justify-center h-[142px] md:h-[200px] 2xl:h-[224px] 3xl:h-[310px] 4xl:h-[416px]">
        <img src={job.image} alt="" className="image-mask w-[123px] md:w-[190px] lg:w-[200px] 2xl:w-[204px] 3xl:w-[270px] 4xl:w-[362px] h-auto" />
        <div className="absolute top-[110px] md:top-[160px] lg:top-[145px] xl:top-[165px] 2xl:top-[180px] 3xl:top-[245px] 4xl:top-[328px] flex justify-center">
            <img src="/aac-logo-yellow.png"  alt={job.title} className='w-[37px] h-[37px] lg:w-[45px] lg:h-[45px] xl:w-[48px] xl:h-[48px] md:w-[50px] md:h-[50px] 2xl:w-[61px] 2xl:h-[61px] 3xl:w-[81px] 3xl:h-[81px] 4xl:w-[108px] 4xl:h-[108px]'/>
        </div>
      </div>
      <div className="w-full">
        <div className="hover:text-brand-yellow leading-[100%] name">{job.agency}</div>
        <div className="text-white hover:text-brand-yellow lowercase title">{job.title}</div>
        <div className="separator w-full mx-auto"></div>
        <div className="hover:text-brand-yellow uppercase location">{job.location}</div>
      </div>
    </div>
  );
};

export default JobLoopItem;