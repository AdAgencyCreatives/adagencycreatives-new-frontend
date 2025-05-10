import PageHeader from "components/PageHeader";
import CreativeLoopItem from "./loop/item";
import Link from "next/link";
import { featuredCreatives } from "constants/creatives";
import React from "react";

const CreativesDirectory = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-10 pt-40">
      <div className="text-center space-y-6 max-w-[1014px] mx-auto pt-40 relative">
        <PageHeader
          page="creatives"
          heading="Directory"
        />

        <div className="w-full px-10 mx-auto mb-40 z-2 relative text-left">
          <label className="font-wix text-[19px] text-[#c2c2c2]">Search</label>
          <div className="flex items-center justify-center">
            <input
              type="email"
              placeholder="title, name, location, etc."
              className="bg-transparent border-b border-white outline-none w-full text-[19px] text-white placeholder-white font-wix py-6 focus:bg-black/50"
            />
            {/* <button className="ml-2 text-white text-[37px] pb-6">
              <LiaSignInAltSolid />
            </button> */}
          </div>
        </div>
      </div>

      {/* Featured Creatives */}
      <section className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredCreatives.map((creative, idx) => (
            <React.Fragment key={`creative-${creative.id || idx}`}>
              {idx === 6 && (
                <div key={`${idx}-1`} className="col-span-2 text-center flex flex-col justify-center gap-10">
                  <h2 className="text-[48px] leading-[62px]">Haven't<br />Found<br />The Perfect<br />Match?</h2>
                  <div>
                    <Link href="/" className="border-brand-yellow border-4 uppercase text-brand-yellow rounded-full text-sm px-8 py-4 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white">Advanced Search</Link>
                  </div>
                </div>
              )}

              {idx === 15 && (
                <div  key={`${idx}-2`} className="col-span-2 text-center flex flex-col justify-center gap-10">
                  <h2 className="text-[48px] leading-[62px]">Why<br />Search?<br />Post & Attract!</h2>
                  <div>
                    <Link href="/" className="border-brand-yellow border-4 uppercase text-brand-yellow rounded-full text-sm px-8 py-4 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white">Post A Job</Link>
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