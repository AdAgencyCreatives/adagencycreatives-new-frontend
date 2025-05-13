import PageHeader from "components/PageHeader";
import JobLoopItem from "./loop/item";
import Link from "next/link";
import { jobsDirectory } from "constants/jobs";
import React from "react";

const JobsDirectory = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex flex-col justify-center text-center page-header directory mx-auto w-full">
        <PageHeader
          page="jobs"
          heading="Directory"
        />
        <div className="relative z-1 text-left search flex flex-col">
          <label className="text-[#c2c2c2]">search</label>
          <div className="flex items-center justify-center">
            <input
              type="email"
              placeholder="title, name, location, etc."
              className="bg-transparent outline-none w-full text-white placeholder-white focus:bg-black/50"
            />
          </div>
        </div>
      </section>
      {/* Featured Jobs */}
      <section className="relative z-1 jobs-directory card-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {jobsDirectory.map((job, idx) => (
            <React.Fragment key={`job-${job.id || idx}`}>
              {idx === 16 && (
                <div key={`directory-${idx}`} className="col-span-2 text-center flex flex-col justify-around gap-10 max-md:py-10">
                  <h2 className="relative z-1 text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px]">Haven't<br />Found<br />The Perfect<br />Job?</h2>
                  <div>
                  <Link href="/" className="border-brand-yellow border-2 md:border-4 uppercase text-brand-yellow rounded-full font-sans sm:font-semibold md:font-hass75 md:font-bold text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-8 py-4 3xl:px-12 4xl:px-16 4xl:py-6 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white">Advanced Search</Link>
                  </div>
                </div>
              )}
            
              <JobLoopItem key={idx} job={job} className={''}/>
            </React.Fragment>
          ))}
        </div>
      </section>
      {/* logo */}
      <section className="pt-31 pb-21 2xl:pb-36 2xl:pt-40 3xl:pb-44 3xl:pt-33 4xl:pb-40 4xl:pt-50">
        <div className="flex justify-center align-center">
          <img src="/aac-logo-white.avif"  alt={''} className="directory-logo" />
        </div>
      </section>
      </div>
  );
};

export default JobsDirectory;