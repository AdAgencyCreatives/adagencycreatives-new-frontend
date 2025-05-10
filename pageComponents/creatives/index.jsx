'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JobLoopItem from 'pageComponents/jobs/loop/item';
import CreativeLoopItem from './loop/item';
import PageHeader from 'components/PageHeader';
import ResourceLoopItem from 'pageComponents/resources/loop/item';
import { featuredJobs } from 'constants/jobs';
import { featuredCreatives } from 'constants/creatives';
import { featuredAgencies } from 'constants/agencies';
import AgenciesLoopItem from 'pageComponents/agencies/loop/item';
import { useEffect, useState } from 'react';
import CreativeLoopItem2 from './loop/item2';
import "styles/components/pageheader.css";
import "styles/creatives.css";

const Creatives = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative flex flex-col justify-center text-center page-header">
        <PageHeader
          page=""
          heading="Creatives"
        />
        <div className="font-bold space-x-6 2xl:space-x-[36px] 3xl:space-x-[48px] 4xl:space-x-[64px] mt-1 md:mt-10 3xl:mt-20 text-sm md:text-2xl 3xl:text-[32px] 4xl:text-[42.67px] text-brand-yellow relative z-1">
          <a href="#create-profile" className="">create ProFile<sup className='font-hass65 text-[8px] md:text-[10px] xl:text-[10px] 3xl:text-[16px] 4xl:text-[18px] relative md:-top-[12px] 3xl:-top-[16px]'>TM</sup></a>
          <a href="#search-jobs">search jobs</a>
          <a href="#resources">resources</a>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="pt-0 px-6 2xl:pt-11.5 3xl:pt-15 4xl:pt-20 mx-auto relative z-1" id="search-jobs">
        <h2 className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[139px] font-bold mb-0 2xl:px-20 3xl:px-40 pt-0 pb-6.75 2xl:mb-20 3xl:mb-30 font-inter leading-[25.78px] 2xl:leading-[99px] 3xl:leading-[132px] 4xl:leading-[176px]">Featured Jobs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredJobs.map((job, idx) => (
            <>
              {idx === 6 && (
                <div key={`perfect-${idx}`} id={`perfect-${idx}`} className="relative col-span-2 text-center flex flex-col justify-around gap-5 md:gap-10 max-md:py-10">
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
                  <h2 className="relative z-1 pb-0 pt-6 2xl:pb-14 2xl:pt-20 3xl:pb-20 3xl:pt-26 4xl:py-15 font-arial font-bold text-2xl md:text-4xl 2xl:text-[44px] 3xl:text-[57.07px] 4xl:text-[76.09px] md:leading-[58.5px] 3xl:leading-[78px] 4xl:leading-[104px]">Haven't<br />Found<br />The Perfect<br />Job?</h2>
                  <div className='relative z-1 '>
                    <Link
                      href="/"
                      className="border-brand-yellow border-2 md:border-4 uppercase text-brand-yellow rounded-full font-inter sm:font-semibold md:font-hass75 md:font-bold text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-4 py-1.5 3xl:px-12 4xl:px-16 4xl:py-6 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white"
                    >
                      Advanced Search
                    </Link>
                  </div>
                </div>
              )}

              <JobLoopItem key={idx} job={job} className={idx > 5 ? 'md:flex hidden' : ''} />
            </>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 2xl:py-35 3xl:py-50 4xl:py-65 mx-auto px-6 md:px-10" id="resources">
        <h2 className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[139px] font-bold text-right mb-0 2xl:px-20 3xl:px-40 pt-0 pb-6.75 2xl:mb-20 3xl:mb-30 font-inter leading-[25.78px] 2xl:leading-[99px] 3xl:leading-[132px] 4xl:leading-[176px] px-9">Resources</h2>
        <div className="grid grid-cols-4 gap-x-[12px] md:gap-x-[54px] 3xl:gap-x-[72px] 4xl:gap-x-[92px] w-full items-center relative py-2 md:py-20 2xl:py-22 3xl:py-25 4xl:py-30 2xl:px-20 3xl:px-40">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
            >
              <source src="/videos/resources-bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* <!-- Column 1: 1 item --> */}
          <div>
            <ResourceLoopItem
              resource={{ title: 'internships', image: '/resource1.avif', href: '/resources-internship' }}
            />
          </div>

          {/* <!-- Column 2: 4 items stacked vertically --> */}
          <div className="col-span-2 space-y-4 grid grid-cols-2 items-start gap-x-[14px] md:gap-x-[54px] 3xl:gap-x-[72px] 4xl:gap-x-[92px]">
            <ResourceLoopItem
              resource={{ title: 'inspiration', image: '/resource1.avif', href: '/resources-inspiration' }}
            />
            <ResourceLoopItem
              resource={{ title: 'portfolio', image: '/resource1.avif', href: '/resources-portfolio' }}
            />
            <ResourceLoopItem
              resource={{ title: 'WRITERS', image: '/resource1.avif', href: '/resources-writers' }}
            />
            <ResourceLoopItem
              resource={{ title: 'DESIGNERS', image: '/resource1.avif', href: '/resources-designers' }}
            />
          </div>

          {/* <!-- Column 4: 1 item --> */}
          <div>
            <ResourceLoopItem
              resource={{ title: 'business', image: '/resource1.avif', href: '/resources-business' }}
            />
          </div>
        </div>
      </section>

      <section className="border-y-0 border-white py-8 sm:py-20 relative">
        <div className="absolute top-0 left-[50%] transform -translate-x-[50%] translate-y-0 border-white border-1 w-[88%] h-px m-auto hidden sm:block"></div>
        <div className="absolute bottom-0 left-[50%] transform -translate-x-[50%] translate-y-0 border-white border-1 w-[88%] h-px m-auto hidden sm:block"></div>
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
          >
            <source src="/videos/agencies-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-1 px-6 md:px-10">
          <h2 className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[139px] 2xl:px-20 3xl:px-40 font-bold mb-0 2xl:mb-20 3xl:mb-30 4xl:mb-40 absolute sm:relative sm:top-auto -top-12 ">Featured Agencies</h2>
          <div className="flex gap-6 md:gap-51 3xl:gap-60 4xl:gap-90 overflow-x-scroll py-10 -mt-3 2xl:mx-20 3xl:mx-40 overflow-hidden">
            {featuredAgencies.map((agency, idx) => (
              <AgenciesLoopItem key={idx} agency={agency} />
            ))}
          </div>
          <div className="flex items-center justify-end mt-5 md:mt-20 2xl:mt-45 3xl:mt-60 4xl:mt-80 2xl:px-20 3xl:px-40">
            {/* <Image src="/aac-logo-yellow.png" alt="" width="67" height="67" className="hover:rotate-45 transition-transform duration-3000" />
            <div className="border-brand-yellow border-2 w-10"></div> */}
            <Link href="/" className="border-brand-yellow bg-black border-2 md:border-4 uppercase text-brand-yellow rounded-full font-sans sm:font-semibold md:font-hass75 md:font-bold text-[8.2px] md:text-lg 3xl:text-2xl 4xl:text-[28px] px-10 py-2 3xl:px-12 4xl:px-16 4xl:py-6 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white ">Get Featured</Link>
          </div>
        </div>
      </section>

      {/* Featured Creatives */}
      <section className="py-10 px-6 md:px-10">
        <h2 className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[139px] font-bold text-right mb-0 2xl:px-20 3xl:px-40 pt-0 pb-6.75 2xl:mb-20 3xl:mb-30 font-inter leading-[25.78px] 2xl:leading-[99px] 3xl:leading-[132px] 4xl:leading-[176px] px-9">Featured Creatives</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredCreatives.map((creative, idx) => (
            <React.Fragment key={idx}>
              {idx === 6 && (
                <div key={`ad-agency-${idx}`} className="relative col-span-2 text-center flex flex-col justify-around gap-5 max-md:py-10">
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
                  <h2 className="text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px] ">
                    <span className='font-arial font-bold'>We Are</span> <br />
                    <span className="font-alta">AD AGENCY</span><br />
                    <span className="font-alta">CREATIVES</span>
                  </h2>
                  <div>
                    <Link
                      href="/"
                      className="border-brand-yellow border-0 outline-[2.05px] md:border-4 uppercase text-brand-yellow rounded-full font-sans sm:font-semibold md:font-hass75 md:font-bold text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-12.5 py-2 md:px-14  md:py-2.5 2xl:px-24 3xl:px-25.5 4xl:px-33.5 4xl:py-5 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white"
                    >JOIN US</Link>
                  </div>
                </div>
              )}

              {width > 767 && idx === 15 && (
                <div key={`profile-${idx}`} className="relative col-span-2 text-center flex flex-col justify-around gap-10">
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
                  <h2 className="text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px] font-bold">Want<br />Your ProFile<sup className='font-hass65 text-[8px] md:text-[12px] xl:text-[14px] 3xl:text-[18px] 4xl:text-[20px] relative -top-[10px] md:-top-[20px] 3xl:-top-[30px] 4xl:-top-[40px]'>TM</sup><br />Featured?</h2>
                  <div>
                    <Link href="/" className="border-brand-yellow border-2 md:border-4 uppercase text-brand-yellow rounded-full font-sans sm:font-semibold md:font-hass75 md:font-bold text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-12 py-2 md:px-14  md:py-2.5 2xl:px-24 3xl:px-25.5 4xl:px-33.5 4xl:py-5 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white">See How</Link>
                  </div>
                </div>
              )}

              {idx === 8 && (
                <div key={`skip-01--${idx}`} className="col-span-2 md:col-span-3 lg:col-span-5 mb-8 3xl:mb-12 4xl:mb-16"></div>
              )}

              <CreativeLoopItem key={idx} creative={creative} />

              {width < 767 && idx === 15 && (
                <div key={`profile-02-${idx}`} className="relative col-span-2 text-center flex flex-col justify-center gap-6 md:gap-10">
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
                  <h2 className="text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px] font-bold mt-[48px] md:mt-0 font-inter">Want<br />Your <br /> ProFile<sup className='font-hass65 text-[10px] md:text-[12px] xl:text-[14px] 3xl:text-[18px] 4xl:text-[20px] relative -top-[10px] md:-top-[20px] 3xl:-top-[30px] 4xl:-top-[40px]'>TM</sup><br />Featured?</h2>
                  <div>
                    <Link href="/" className="border-brand-yellow border-0 outline-[2.05px] md:border-4 uppercase text-brand-yellow rounded-full font-sans sm:font-semibold md:font-hass75 md:font-bold text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-11.25 py-1.5 md:px-14  md:py-2.5 2xl:px-24 3xl:px-25.5 4xl:px-33.5 4xl:py-5 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white font-inter">See How</Link>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Create Profile */}
      <section className="md:py-20 px-6 md:px-10 mb-20">
        <h2 id="create-profile" className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[143px] 2xl:pl-20 3xl:pl-40 font-bold relative inline-block font-inter">Create ProFile<sup className='text-[10px] md:text-[14px] xl:text-[18px] 3xl:text-[22px] 4xl:text-[26px] relative -top-[10px] md:-top-[30px] 3xl:-top-[50px] 4xl:-top-[60px]'>TM</sup></h2>
        <p className="text-xs md:text-3xl 3xl:text-[40px] 4xl:text-[52.5px] uppercase font-inter font-bold py-3 md:pb-9 md:pb-11.5 2xl:pt-13 2xl:pb-21.5 3xl:pt-27.5 3xl:pb-29 4xl:pt-24.5 4xl:pb-39.5">Our Method</p>
        <p className="text-sm md:text-[42px] 3xl:text-[56px] 4xl:text-[75px] text-white font-arial font-bold">Create. Inspire. <span className="text-brand-yellow">Get Hired!</span></p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-left mt-8 md:mt-16 2xl:mt-30 3xl:mt-40 4xl:mt-53">
          <div className="font-wix flex flex-col gap-[5.62] md:gap-2 2xl:gap-5.5 3xl:gap-7 4xl:gap-9.5">
            <h3 className="text-[38px] md:text-[142px] 3xl:text-[190px] 4xl:text-[253.33px] font-bold leading-[1] md:leading-[150px] 3xl:leading-[180px] 4xl:leading-[215px]">1</h3>
            <p className="text-brand-yellow font-hass75 text-xs font-bold md:text-lg 3xl:text-2xl 4xl:text-2xl font-inter ">CREATE ProFile<sup className='font-hass65 text-[8px] md:text-[10px] 3xl:text-[12px] relative -top-[6px] md:-top-[10px]'>TM</sup></p>
            <p className="text-white text-[13.5px] md:text-base 3xl:text-2xl 4xl:text-[32px] font-inter font-normal">Claim your space on the web.<br />Design your own stunning profile page - crafted to impress, built to connect. Add your work, your voice, your values. You’ll instantly get a sleek webpage with your personal link and a downloadable version ready to share anywhere - from DMs to boardrooms. It's free. It’s yours. It’s the start of everything.</p>
          </div>
          <div className="font-wix flex flex-col gap-[5.62] md:gap-2 2xl:gap-5.5 3xl:gap-7 4xl:gap-9.5">
            <h3 className="text-[38px] md:text-[142px] 3xl:text-[190px] 4xl:text-[253.33px] font-bold leading-[1] md:leading-[150px] 3xl:leading-[180px] 4xl:leading-[215px]">2</h3>
            <p className="text-brand-yellow font-hass75 text-xs font-bold md:text-lg 3xl:text-2xl 4xl:text-2xl uppercase font-inter ">GET FEATURED & SHOWCASE</p>
            <p className="text-white text-[13.5px] md:text-base 3xl:text-2xl 4xl:text-[32px] font-inter font-normal">Be seen where it matters.<br />Your ProFile™ becomes part of a curated network - handpicked creatives, thinkers, and builders. Stand out in The Lounge, and The Agencies Homepage where talent is more than a portfolio - it’s a presence. No chasing. No noise. Just the right eyes on your work.</p>
          </div>
          <div className="font-wix flex flex-col gap-[5.62] md:gap-2 2xl:gap-5.5 3xl:gap-7 4xl:gap-9.5">
            <h3 className="text-[38px] md:text-[142px] 3xl:text-[190px] 4xl:text-[253.33px] font-bold leading-[1] md:leading-[150px] 3xl:leading-[180px] 4xl:leading-[215px]">3</h3>
            <p className="text-brand-yellow font-hass75 text-xs font-bold md:text-lg 3xl:text-2xl 4xl:text-2xl uppercase font-inter ">GET HIRED</p>
            <p className="text-white text-[13.5px] md:text-base 3xl:text-2xl 4xl:text-[32px] font-inter font-normal">Let your work open doors.<br />Brands, agencies, and visionary clients are already here - searching, browsing, booking. With a ProFile™, you're instantly visible and ready to be contacted, commissioned, or called in. Whether it’s a dream gig or a long-term collab, this is where it begins. With our help, on your terms.</p>
          </div>
        </div>

        <div className="md:px-10 2xl:px-20 3xl:px-40 md:pt-10 2xl:pt-30 3xl:pt-40 4xl:pt-63">
          <div className='outline outline-4 md:outline-8 2xl:outline-16 shadow-(--ad-box-shadow) outline-while rounded-lg mt-12 md:mt-30 px-2 md:px-10 py-2 pb-4 md:pb-4 mb-2 relative mx-[4px] md:mx-[16px]'>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-10 justify-between ">
              <div className="max-md:hidden">
                <Image src="/creatives/creative17.avif" width="720" height="720" alt="" className="image-mask" />
              </div>
              <div className=" md:pt-10 pb-10 md:pb-14 2xl:pb-20 3xl:pb-24 4xl:pb-28">
                <div>
                  <h2 className="font-alta text-lg md:text-[34px] 3xl:text-[46px] 4xl:text-[60px]">Matthew Marcos</h2>
                  <p className="lowercase font-inter text-brand-yellow text-xs md:text-2xl 3xl:text-3xl 4xl:text-[38px] my-2 md:my-4">Creative Director</p>
                </div>
                <p className="font-alta text-xs md:text-sm 3xl:text-lg 4xl:text-2xl">NEW YORK, NY</p>
                <p className="font-alta text-xs md:text-lg 3xl:text-[32px] 4xl:text-[32px] text-brand-yellow mt-4 mb-2 md:my-4">ABOUT</p>
                <p className="font-inter leading-[14px] md:leading-[24px] 3xl:leading-[32px] 4xl:leading-[40px] text-[11px] md:text-base 3xl:text-2xl 4xl:text-[28px]">I'm an Associate Creative Director based in New York City; with a focus on art direction, brand storytelling, and concepting big ideas.I’ve been fortunate to work with brands like Keds, Louis XIII, Marantz, Wrangler, J.Crew, and USTA, crafting campaigns </p>
                <Link href="/" className="font-inter text-xs md:text-base 3xl:text-2xl 4xl:text-[28px] text-brand-yellow underline mt-6">Read more...</Link>
              </div>
              <div>
                <div className="max-w-[130px] md:max-w-[220px] 3xl:max-w-[295px] 4xl:max-w-[393px] mx-auto -mt-12 3xl:-mt-16 bg-black relative z-1">
                  <CreativeLoopItem2
                    creative={{ title: 'Senior UX User Experience Designer', image: '/creatives/creative1.avif', agency: 'Matthew Marcos', location: 'NEW YORK, NY' }}
                  />
                </div>
              </div>
            </div>
            <div className="relative  text-center w-full bottom-0">
              <Link href="/" className="block w-fit md:w-[40%] m-auto border-brand-yellow border-2 md:border-4 uppercase text-brand-yellow rounded-full font-inter font-bold text-xs 2xl:text-lg 3xl:text-lg 4xl:text-2xl uppercase px-5 xl:px-30 3xl:px-40 md:py-4 py-2 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white">create ProFile<sup className='font-hass65 text-[6px] md:text-[10px] xl:text-[8px] 3xl:text-[10px] 4xl:text-[14px] relative -top-[4px] md:-top-[8px] 3xl:-top-[6px] 4xl:-top-[9px]'>TM</sup></Link>
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

export default Creatives;