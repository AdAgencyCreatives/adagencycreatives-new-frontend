import PageHeader from "components/PageHeader";
import JobLoopItem from "./loop/item";
import Link from "next/link";
import { featuredJobs } from "constants/jobs";

const JobsDirectory = () => {
  return (
    <div className="bg-black text-white pt-[100px]">
      <section className="2xl:max-w-[1000px] 3xl:max-w-[1300px] 4xl:max-w-[1800px] mx-auto px-10 md:pt-40 flex items-center justify-center">
        <div className="text-center space-y-6 w-full mx-auto pt-30 md:pt-40 relative">
          <PageHeader
            page="jobs"
            heading="Directory"
          />

          <div className="w-full sm:w-[75%] 2xl:w-[90%] sm:ms-16 lg:ms-46 xl:ms-56 2xl:ms-14 3xl:ms-20 4xl:ms-32 sm:mx-auto me-0 sm:me-auto mb-40 z-2 relative text-left">
            <label className="font-wix text-xs md:text-base 2xl:text-[22px] 3xl:text-3xl 4xl:text-[40px] text-[#c2c2c2]">Search</label>
            <div className="flex items-center justify-center">
              <input
                type="email"
                placeholder="title, name, location, etc."
                className="bg-transparent border-b border-white outline-none w-full text-white placeholder-white font-wix py-[12px] md:py-[16px] 2xl:py-[22px] 3xl:py-[30px] 4xl:py-[40px] focus:bg-black/50 text-sm md:text-lg 2xl:text-[22px] 3xl:text-3xl 4xl:text-[40px]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Featured Jobs */}
      <section className="p-6 md:my-20 2xl:my-16 3xl:my-50 4xl:my-80 md:px-10 mx-auto relative z-1">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredJobs.map((job, idx) => (
            <>
              {idx === 6 && (
                <div className="col-span-2 text-center flex flex-col justify-around gap-10 max-md:py-10">
                  <h2 className="relative z-1 text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px]">Haven't<br />Found<br />The Perfect<br />Job?</h2>
                  <div>
                  <Link href="/" className="border-yellow-400 border-2 md:border-4 uppercase text-yellow-400 rounded-full font-sans sm:font-semibold md:font-hass75 md:font-bold text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-8 py-4 3xl:px-12 4xl:px-16 4xl:py-6 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white">Advanced Search</Link>
                  </div>
                </div>
              )}
            
              <JobLoopItem key={idx} job={job} />
            </>
          ))}
        </div>
      </section>
      </div>
  );
};

export default JobsDirectory;