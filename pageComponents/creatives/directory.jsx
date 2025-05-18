import PageHeader from "components/PageHeader";
import CreativeLoopItem from "./loop/item";
import Link from "next/link";
import { featuredCreatives } from "constants/creatives";
import React from "react";

const CreativesDirectory = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex flex-col justify-center text-center page-header directory mx-auto w-full">
        <PageHeader
          page="creatives"
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

      {/* Featured Creatives */}
      <section className="relative z-1 jobs-directory card-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {featuredCreatives.map((creative, idx) => (
            <React.Fragment key={`creative-${creative.id || idx}`}>
              {idx === 16 && (
                <div key={`perfect-${idx}`} id={`perfect-${idx}`} className="relative col-span-2 text-center flex flex-col justify-around gap-5 md:gap-10 max-md:py-10">
                  <div className="block inset-0 absolute h-full overflow-hidden mx-auto">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/videos/resources-bg.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <h2 className="relative z-1 pb-0 pt-6 2xl:pb-14 2xl:pt-20 3xl:pb-20 3xl:pt-26 4xl:py-15 font-arial font-bold  md:leading-[58.5px] 3xl:leading-[78px] 4xl:leading-[104px]">Why<br />Search?<br />Post & Attract!</h2>
                  <div className="relative z-1">
                    <Link
                      href="/"
                      className="link-button border-brand-yellow border-2 md:border-4 uppercase text-brand-yellow rounded-full font-inter sm:font-semibold md:font-hass75 md:font-bold cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white"
                    >
                      POST A JOB
                    </Link>
                  </div>
                </div>
              )}
            
              <CreativeLoopItem  key={`${idx}-3`} creative={creative} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CreativesDirectory;