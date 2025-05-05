
import Image from 'next/image';

const JobLoopItem = ({ job }) => {
  return (
    <div className="relative p-2 md:px-4 md:py-6 4xl:px-8 4xl:py-20 rounded-4xl border-white border-2 shadow-(--ad-box-shadow) text-center flex flex-col justify-between items-center gap-2 4xl:gap-4">
      {/* <div className="relative w-[124px] h-[124px] md:w-[256px] md:h-[256px] 4xl:w-[416px] flex items-center px-4">
        <Image src={job.image} width="256" height="162" alt={job.title} className="image-mask mx-auto" />
      </div> */}
      {/* <div className="w-[37px] h-[37px] md:w-[68px] md:h-[68px] absolute top-0 right-0 left-0 bottom-0 flex justify-center mx-auto my-auto">
          <Image src="/aac-logo-yellow.png" width="67" height="67" alt={job.title} className="hover:rotate-45 transition-transform duration-3000" />
      </div> */}
      <div className='relative flex items-center justify-center py-3 h-[142px] md:h-[200px] 2xl:h-[224px] 3xl:h-[310px] 4xl:h-[416px]'>
        <img src={job.image} alt="" className='image-mask w-[123px] md:w-[190px] lg:w-[200px] 2xl:w-[204px] 3xl:w-[270px] 4xl:w-[362px] h-auto' />
        <div className="absolute top-[110px] md:top-[160px] lg:top-[145px] xl:top-[165px] 2xl:top-[180px] 3xl:top-[245px] 4xl:top-[328px] flex justify-center">
            <img src="/aac-logo-yellow.png"  alt={job.title} className='w-[37px] h-[37px] lg:w-[45px] lg:h-[45px] xl:w-[48px] xl:h-[48px] md:w-[50px] md:h-[50px] 2xl:w-[61px] 2xl:h-[61px] 3xl:w-[81px] 3xl:h-[81px] 4xl:w-[108px] 4xl:h-[108px]'/>
        </div>
      </div>
      <div className='mt-2.5 2xl:mt-4 3xl:mt-5.5 4xl:mt-7'>
        <div className="font-alta text-base sm:text-[16px] md:text-[20px] 2xl:text-[28px] 3xl:text-[38px] 4xl:text-[50px] hover:text-yellow-400">{job.agency}</div>
        <div className="text-white font-bold text-[10px] md:text-[14px] 2xl:text-[16px] 3xl:text-[20px] 4xl:text-[25.21px] hover:text-yellow-400 lowercase">{job.title}</div>
        <div className="my-3 border-b-2 w-[60%] mx-auto" />
        <div className="font-alta font-bold text-[10px] md:text-[12px] 2xl:text-[14px] 3xl:text-[18px] 4xl:text-[22.97px] hover:text-yellow-400">{job.location}</div>
      </div>
    </div>
  );
};

export default JobLoopItem;