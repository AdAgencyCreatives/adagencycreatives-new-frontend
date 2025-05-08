'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from 'components/PageHeader';
import ResourceLoopItem from 'pageComponents/resources/loop/item';
import { featuredCreatives } from 'constants/creatives';
import CreativeLoopItem from 'pageComponents/creatives/loop/item';
import CreativeLoopItem2 from 'pageComponents/creatives/loop/item2';
import { useEffect, useState } from 'react';

const Agencies = () => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="bg-black text-white pt-[100px]">
      {/* Hero */}
      <section className="relative md:h-screen flex flex-col justify-center py-20 2xl:py-40 text-center px-4 md:px-10">
        <PageHeader
          page=""
          heading="Agencies"
        />
        <div className="space-x-6 2xl:space-x-[36px] 3xl:space-x-[48px] 4xl:space-x-[64px] mt-1 md:mt-10 3xl:mt-20 text-sm md:text-2xl 3xl:text-[32px] 4xl:text-[42.67px] text-brand-yellow relative z-1">
          <a href="#creatives" className=''>hire creatives</a>
          <a href="#plans">choose a plan</a>
          <a href="#post-job">post a job</a>
        </div>
      </section>

      {/* Featured Creatives */}
      <section className="pt-0 px-6 2xl:pt-11.5 3xl:pt-15 4xl:pt-20" id="creatives">
        <h2 className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[139px] font-bold mb-0 2xl:px-20 3xl:px-40 pt-0 pb-6.75 2xl:mb-20 3xl:mb-30 font-inter leading-[25.78px] 2xl:leading-[99px] 3xl:leading-[132px] 4xl:leading-[176px]">Featured Creatives</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredCreatives.map((creative, idx) => (
            <>
              {(width < 768 && idx === 4) || (width >= 768 && idx === 6) ? (
                <div key={`perfect-${idx}`} id={`perfect-${idx}`} className="relative col-span-2 text-center flex flex-col justify-center gap-5 md:gap-10 max-md:py-10">
                  <div className="block md:hidden inset-0 absolute h-full overflow-hidden w-[70%] mx-auto">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="inset-0 absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 object-center z-[-1]"
                      >
                      <source src="/videos/resources-bg.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <h2 className="relative z-1 pb-0 pt-10 2xl:pb-16.5 2xl:pt-14.5 3xl:pb-22.5 3xl:pt-19.5 4xl:pt-26 4xl:pb-30 font-arial font-bold text-2xl md:text-4xl 2xl:text-[42.8px] 3xl:text-[58.5px] 4xl:text-[76.09px] md:leading-[58.5px] 3xl:leading-[78px] 4xl:leading-[104px]">Haven't<br />Found<br />The Perfect<br />Match?</h2>
                  <div className='relative z-1 '>
                  <Link 
                    href="/" 
                    className="border-brand-yellow border-2 md:border-4 uppercase text-brand-yellow rounded-full font-inter sm:font-semibold md:font-hass75 md:font-bold text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-4 py-1.5 3xl:px-12 4xl:px-16 4xl:py-6 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white"
                  >
                      Advanced Search
                  </Link>
                  </div>
                </div>
              ) : (
                <></>
              )}

              {width >= 768 && idx === 15 && (
                <div key={`profile-${idx}`} className="relative col-span-2 text-center flex flex-col justify-center gap-5 md:gap-10 max-md:py-10">
                  <div className="block md:hidden inset-0 absolute h-full overflow-hidden w-[70%] mx-auto">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="inset-0 absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 object-center z-[-1]"
                      >
                      <source src="/videos/resources-bg.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <h2 className="relative z-1 pb-0 pt-10 2xl:pb-16.5 2xl:pt-14.5 3xl:pb-22.5 3xl:pt-19.5 4xl:pt-26 4xl:pb-30 font-arial font-bold text-2xl md:text-4xl 2xl:text-[42.8px] 3xl:text-[58.5px] 4xl:text-[76.09px] md:leading-[58.5px] 3xl:leading-[78px] 4xl:leading-[104px]">
                    Why<br />Search?<br />Post & Attract!
                  </h2>
                  <div>
                    <Link href="/" className="border-brand-yellow border-2 md:border-4 uppercase text-brand-yellow rounded-full font-sans sm:font-semibold md:font-hass75 md:font-bold text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-12 py-2 md:px-14  md:py-2.5 2xl:px-24 3xl:px-25.5 4xl:px-33.5 4xl:py-5 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white">POST A JOB</Link>
                  </div>
                </div>
              )}

              {width >= 768 && idx === 8 && (
                <div className="col-span-2 md:col-span-3 lg:col-span-5 mb-8 3xl:mb-12 4xl:mb-16"></div>
              )}

              <CreativeLoopItem key={idx} creative={creative} className={width < 768 && idx > 7 ? 'md:flex hidden' : ''} />

              {width < 768 && idx === 15 && (
                <div key={`profile-${idx}`} className="relative col-span-2 text-center flex flex-col justify-center gap-5 md:gap-10 mb-8.75">
                  <div className="block md:hidden inset-0 absolute h-full overflow-hidden w-[70%] mx-auto">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="inset-0 absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 object-center z-[-1]"
                      >
                      <source src="/videos/resources-bg.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <h2 
                    className="relative z-1 pb-0 pt-10 2xl:pb-16.5 2xl:pt-14.5 3xl:pb-22.5 3xl:pt-19.5 4xl:pt-26 4xl:pb-30 font-arial font-bold text-2xl md:text-4xl 2xl:text-[42.8px] 3xl:text-[58.5px] 4xl:text-[76.09px] md:leading-[58.5px] 3xl:leading-[78px] 4xl:leading-[104px]"
                  >Why<br />Search?<br />Post & Attract!</h2>
                  <div>
                    <Link href="/" className="border-brand-yellow border-0 outline-[2.05px] md:border-4 uppercase text-brand-yellow rounded-full font-sans sm:font-semibold md:font-hass75 md:font-bold text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-11.25 py-1.5 md:px-14  md:py-2.5 2xl:px-24 3xl:px-25.5 4xl:px-33.5 4xl:py-5 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white font-inter">See How</Link>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="md:my-25 py-4 md:py-10 2xl:py-15 3xl:py-20 4xl:py-26.5  relative border-white border-b-1">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
          >
            <source src="/videos/plans-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute bottom-0 left-[50%] transform -translate-x-[50%] translate-y-0 border-white border-1 w-[90%] h-px m-auto hidden sm:block"></div>
        <div className="px-10 relative z-1">
          <h2 className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[139px] font-bold text-right mb-0 2xl:px-20 3xl:px-40 pt-0 font-inter leading-[25.78px] 2xl:leading-[99px] 3xl:leading-[132px] 4xl:leading-[176px] md:px-9">Plans</h2>
          <div className="grid grid-cols-4 gap-x-[10px] md:gap-x-[48px] 3xl:gap-x-[64px] 4xl:gap-x-[86px] w-full items-center relative pt-2 pb-5 md:py-20 2xl:pb-25 2xl:pt-8.5 3xl:pb-35 3xl:pt-11 4xl:pb-45 4xl:pt-14 2xl:px-20 3xl:px-40">
            {/* <!-- Column 1: 1 item --> */}
            <div>
              <ResourceLoopItem 
                resource={{ title: 'single', image: '/resource1.avif', href: '/resources-internship' }}
              />
            </div>

            {/* <!-- Column 2: 4 items stacked vertically --> */}
            <div className="col-span-2 space-y-4 grid grid-cols-2 items-start gap-x-[10px] md:gap-x-[48px] 3xl:gap-x-[64px] 4xl:gap-x-[86px]">
              <ResourceLoopItem 
                resource={{ title: 'multiple', image: '/resource1.avif', href: '/resources-inspiration' }}
              />
              <ResourceLoopItem 
                resource={{ title: 'pro', image: '/resource1.avif', href: '/resources-portfolio' }}
              />
              <ResourceLoopItem 
                resource={{ title: 'premium', image: '/resource1.avif', href: '/resources-writers' }}
              />
              <ResourceLoopItem 
                resource={{ title: 'monthly', image: '/resource1.avif', href: '/resources-designers' }}
              />
            </div>

            {/* <!-- Column 4: 1 item --> */}
            <div>
              <ResourceLoopItem 
                resource={{ title: 'FAQs', image: '/resource1.avif', href: '/resources-business' }}
              />
            </div>
          </div>
          <div className="flex items-center justify-end 2xl:px-20 3xl:px-40">
            <Image src="/aac-logo-yellow.png" alt="" width="500" height="500" className="hover:rotate-45 transition-transform duration-3000 w-[35px] h-351px] md:w-[80px] md:h-[80px] 3xl:w-[106px] 3xl:h-[106px] 4xl:w-[142px] 4xl:h-[142px]"/>
            <div className="border-brand-yellow border-b-[1.21px] md:border-b-[4.65px] 3xl:border-b-[6.2px] 4xl:border-b-[8.27px] w-4 md:w-10"></div>
            <Link 
              href="/" 
              className="border-brand-yellow bg-black border-[1.21px] md:border-[4.65px] 3xl:border-[6.2px 4xl:border-[8.27px] md:border-4 uppercase text-brand-yellow rounded-full font-inter 4xl:font-bold 2xl:leading-[22.78px] 3xlleading-[32px] text-[10px] md:text-lg 3xl:text-2xl 4xl:text-[32px] px-5 py-1 md:px-16 md:py-[13px] 2xl:px-17.5 2xl:py-4 3xl:px-23 3xl:py-5 4xl:px-30 4xl:py-6.75 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white"
            >
              Get Featured
            </Link>
          </div>
        </div>
      </section>

      {/* Create Profile */}
      <section className="md:py-20 px-6 md:px-10 my-3" id="post-job">
        <h2 id="create-profile" className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[143px] 2xl:pl-20 3xl:pl-40 font-bold relative inline-block font-inter">Post a Job</h2>
        <p className="text-xs md:text-3xl 3xl:text-[40px] 4xl:text-[52.5px] uppercase font-inter font-bold py-3 md:pb-9 md:pb-11.5 2xl:pt-13 2xl:pb-21.5 3xl:pt-27.5 3xl:pb-29 4xl:pt-24.5 4xl:pb-39.5">Our Method</p>
        <p className="text-sm md:text-[42px] 3xl:text-[56px] 4xl:text-[75px] text-white font-arial font-bold">Post. Attract. <span className="text-brand-yellow">Hire!</span></p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-left mt-8 md:mt-16 2xl:mt-30 3xl:mt-40 4xl:mt-53">
          <div className="font-wix flex flex-col gap-[5.62] md:gap-2 2xl:gap-5.5 3xl:gap-7 4xl:gap-9.5">
            <h3 className="text-[38px] md:text-[142px] 3xl:text-[190px] 4xl:text-[253.33px] font-bold leading-[1] md:leading-[150px] 3xl:leading-[180px] 4xl:leading-[215px]">1</h3>
            <p className="text-brand-yellow font-hass75 text-xs font-bold md:text-lg 3xl:text-2xl 4xl:text-2xl font-inter ">CREATE A JOB</p>
            <p className="text-white text-[13.5px] md:text-base 3xl:text-2xl 4xl:text-[32px] font-inter font-normal">Don’t chase - attract.<br />Instantly connect with top creative talent - no noise, no chasing. Just clarity, presence, and a clean path to the right fit. Post your role in a space built to draw in the right minds, effortlessly. Your job listing becomes more than a post - it becomes a signal. Smart. Simple. Seen.</p>
          </div>
          <div className="font-wix flex flex-col gap-[5.62] md:gap-2 2xl:gap-5.5 3xl:gap-7 4xl:gap-9.5">
            <h3 className="text-[38px] md:text-[142px] 3xl:text-[190px] 4xl:text-[253.33px] font-bold leading-[1] md:leading-[150px] 3xl:leading-[180px] 4xl:leading-[215px]">2</h3>
            <p className="text-brand-yellow font-hass75 text-xs font-bold md:text-lg 3xl:text-2xl 4xl:text-2xl uppercase font-inter ">GET FEATURED & SHOWCASE</p>
            <p className="text-white text-[13.5px] md:text-base 3xl:text-2xl 4xl:text-[32px] font-inter font-normal">Showcase your agency.<br />This isn’t just a listing - it’s your presence in a curated space built for visibility and recognition. Your ProFile™ connects your brand, culture, and creative energy in one place that speaks volumes. Get featured. Be remembered. This is where standout agencies meet standout talent.</p>
          </div>
          <div className="font-wix flex flex-col gap-[5.62] md:gap-2 2xl:gap-5.5 3xl:gap-7 4xl:gap-9.5">
            <h3 className="text-[38px] md:text-[142px] 3xl:text-[190px] 4xl:text-[253.33px] font-bold leading-[1] md:leading-[150px] 3xl:leading-[180px] 4xl:leading-[215px]">3</h3>
            <p className="text-brand-yellow font-hass75 text-xs font-bold md:text-lg 3xl:text-2xl 4xl:text-2xl uppercase font-inter ">HIRE</p>
            <p className="text-white text-[13.5px] md:text-base 3xl:text-2xl 4xl:text-[32px] font-inter font-normal">Find who you're really looking for.<br />No endless scrolling. No guessing games. Just a curated network of standout creatives - ready to jump in, lead, or elevate your next project. Message directly. Review ProFile™s. Build your dream team. This is hiring, reimagined. On your terms, at your pace, with talent that gets it.</p>
          </div>
        </div>
        
        <div className="md:px-10 2xl:px-20 3xl:px-40 md:pt-10 2xl:pt-30 3xl:pt-40 4xl:pt-63">
          <div className='outline outline-4 md:outline-8 2xl:outline-16 shadow-(--ad-box-shadow) outline-while rounded-lg mt-12 md:mt-30 px-2 md:px-10 py-2 pb-4 md:pb-4 mb-2 relative mx-[4px] md:mx-[16px]'>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-10 justify-between ">
              <div className="max-md:hidden">
                <Image src="/jobs/job3.avif" width="720" height="720" alt="" className="image-mask" />
              </div>
              <div className=" md:pt-10 pb-10 md:pb-14 2xl:pb-20 3xl:pb-24 4xl:pb-28">
                <div>
                  <h2 className="font-alta text-lg md:text-[34px] 3xl:text-[46px] 4xl:text-[60px]">AD CORP.</h2>
                  <p className="lowercase font-inter text-brand-yellow text-xs md:text-2xl 3xl:text-3xl 4xl:text-[38px] my-2 md:my-4">Creative Director</p>
                </div>
                <p className="font-alta text-xs md:text-sm 3xl:text-lg 4xl:text-2xl">Orlando, FL</p>
                <p className="font-alta text-xs md:text-lg 3xl:text-[32px] 4xl:text-[32px] text-brand-yellow mt-4 mb-2 md:my-4">ABOUT</p>
                <p className="font-inter leading-[14px] md:leading-[24px] 3xl:leading-[32px] 4xl:leading-[40px] text-[11px] md:text-base 3xl:text-2xl 4xl:text-[28px]">
                  I'm an Associate Creative Director based in New York City; with a focus on art direction, brand storytelling, and concepting big ideas. I’ve been fortunate to work with brands like Keds, Louis XIII, Marantz, Wrangler, J.Crew, and USTA, crafting campaigns
                </p>
                <Link href="/" className="font-inter text-xs md:text-base 3xl:text-2xl 4xl:text-[28px] text-brand-yellow underline mt-6">Read more...</Link>
              </div>
              <div>
                <div className="max-w-[130px] md:max-w-[220px] 3xl:max-w-[295px] 4xl:max-w-[393px] mx-auto -mt-12 3xl:-mt-16 bg-black relative z-1">
                  <CreativeLoopItem2 
                    creative={{ title: 'Creative Director', image: '/jobs/job3.avif', agency: 'AD CORP.', location: 'New Orleans, LA' }}
                  />
                </div>
              </div>
            </div>
            <div className="relative  text-center w-full bottom-0">
              <Link href="/" className="block w-[80%] md:w-[40%] m-auto border-brand-yellow border-2 md:border-4 uppercase text-brand-yellow rounded-full font-inter font-bold text-xs 2xl:text-lg 3xl:text-lg 4xl:text-2xl uppercase px-5 xl:px-30 3xl:px-40 md:py-4 py-2 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white">
                POST A JOB
                {/* create ProFile<sup className='font-hass65 text-[6px] md:text-[10px] xl:text-[8px] 3xl:text-[10px] 4xl:text-[14px] relative -top-[4px] md:-top-[8px] 3xl:-top-[6px] 4xl:-top-[9px]'>TM</sup> */}
              </Link>
              <footer className="flex flex-row justify-center w-full z-11 py-[10px] text-gray-400 space-y-1">
                <p className="font-sans font-normal uppercase mt-2 px-12 md:px-2 text-[13px] xl:text-[16px] 3xl:text-[20px] 4xl:text-[26px] transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF]">© {(new Date()).getFullYear()} Ad Agency Creatives. All Rights Reserved.</p>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agencies;