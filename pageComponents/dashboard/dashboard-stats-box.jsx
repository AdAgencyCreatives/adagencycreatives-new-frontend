'use client';

const DashboardStatsBox = ({ title = <></>, value = <></>, icon = <></>, }) => {

  return (
    <div className="flex flex-col justify-between max-sm:gap-[1.6rem] gap-[1.6rem] md:gap-[1.952rem] xl:gap-[2.134rem] 2xl:gap-[2.25rem] 3xl:gap-[3rem] 4xl:gap-[4rem]">
      <div className="flex flex-row items-center justify-between max-sm:gap-[0.711rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
        <div className='text-white font-bold leading-none max-sm:text-[1.422rem] text-[1.422rem] md:text-[1.735rem] xl:text-[1.897rem] 2xl:text-[2rem] 3xl:text-[2.667rem] 4xl:text-[3.556rem]'>
          {value}
        </div>
        {icon}
      </div>
      <div className='text-white font-bold max-sm:text-[0.732rem] text-[0.6rem] md:text-[0.732rem] xl:text-[0.801rem] 2xl:text-[0.844rem] 3xl:text-[1.125rem] 4xl:text-[1.5rem]'>
        {title}
      </div>
    </div>
  );
};

export default DashboardStatsBox;