'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JobLoopItem from 'pageComponents/jobs/loop/item';
import CreativeLoopItem from './loop/item';
import DirectoryPageHeader from 'components/DirectoryPageHeader';
import ResourceLoopItem from 'pageComponents/resources/loop/item';
import { useEffect, useState } from 'react';
import CreativeLoopItem2 from './loop/item2';
import TmTextLink from 'components/TmTextLink';
import TmText from 'components/TmText';
import useFeaturedJobs from 'hooks/useFeaturedJobs';
import useFeaturedAgencies from 'hooks/useFeaturedAgencies';
import useFeaturedCreatives from 'hooks/useFeaturedCreatives';
import AnimatedBackdrop from 'components/AnimatedBackdrop';
import FeaturedAgenciesLoopItem from 'pageComponents/featured_agencies/loop/item';

const Creatives = () => {

  const FEATURED_JOBS_PER_PAGE = 8;
  const FEATURED_AGENCIES_PER_PAGE = 20;
  const FEATURED_CREATIVES_PER_PAGE = 16;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { featuredJobs } = useFeaturedJobs(FEATURED_JOBS_PER_PAGE);
  const { featuredAgencies } = useFeaturedAgencies(FEATURED_AGENCIES_PER_PAGE);
  const { featuredCreatives } = useFeaturedCreatives(FEATURED_CREATIVES_PER_PAGE);

  return (
    <div className="text-white">
      {/* Hero */}
      <DirectoryPageHeader
        page=""
        heading="Creatives"
      >
        <div className="font-bold space-x-6 2xl:space-x-[36px] 3xl:space-x-[48px] 4xl:space-x-[64px] text-sm md:text-2xl 3xl:text-[32px] 4xl:text-[42.67px] text-brand-yellow relative z-1">
          <TmTextLink
            text='create ProFile'
            href='#create-profile'
            className='sub-heading'
            tmClassName='font-inter text-[8px] md:text-[10px] xl:text-[10px] 3xl:text-[16px] 4xl:text-[18px]'
          />
          <a href="#search-jobs" className="sub-heading">search jobs</a>
          <a href="#resources" className="sub-heading">resources</a>
        </div>
      </DirectoryPageHeader>

      {/* Featured Jobs */}
      <div className="bg-black heading-wrap relative z-1" id="search-jobs">
        <h2 className="heading font-bold font-inter leading-[25.78px] 2xl:leading-[99px] 3xl:leading-[132px] 4xl:leading-[176px]">Featured Jobs</h2>
      </div>
      <section className="relative z-1 featured-jobs card-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {featuredJobs.map((job, idx) => (
            <React.Fragment key={`job-${job.id || idx}`}>
              {idx === 6 && (
                <div key={`perfect-${idx}`} id={`perfect-${idx}`} className="relative col-span-2 text-center flex flex-col justify-around gap-5 md:gap-10 max-md:py-10">
                  <AnimatedBackdrop className={'block'} />
                  <h2 className="relative z-1 pb-0 pt-6 2xl:pb-14 2xl:pt-20 3xl:pb-20 3xl:pt-26 4xl:py-15 font-arial font-bold  md:leading-[58.5px] 3xl:leading-[78px] 4xl:leading-[104px]">Haven't<br />Found<br />The Perfect<br />Job?</h2>
                  <div className="relative z-1">
                    <Link
                      href="/"
                      className="link-button border-brand-yellow border-2 md:border-4 uppercase text-brand-yellow rounded-full font-inter sm:font-semibold md:font-hass75 md:font-bold cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white"
                    >
                      Advanced Search
                    </Link>
                  </div>
                </div>
              )}

              <JobLoopItem key={idx} job={job} className={idx > 5 ? 'md:flex hidden' : ''} />
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Resources */}
      <div className="bg-black heading-wrap" id="resources">
        <h2 className="heading font-bold font-inter text-right  leading-[25.78px] 2xl:leading-[99px] 3xl:leading-[132px] 4xl:leading-[176px]">Resources</h2>
      </div>
      <section className="resources relative">
        {/* Background */}
        <AnimatedBackdrop className={''} />
        <div className="grid grid-cols-4 gap-[12px] md:gap-[54px] 3xl:gap-[72px] 4xl:gap-[92px] w-full items-center">
          {/* <!-- Column 1: 1 item --> */}
          <div>
            <ResourceLoopItem
              resource={{ title: 'internships', image: '/resource1.avif', href: '/resources-internship' }}
            />
          </div>

          {/* <!-- Column 2: 4 items stacked vertically --> */}
          <div className="col-span-2 grid grid-cols-2 items-start gap-[14px] md:gap-[54px] 3xl:gap-[72px] 4xl:gap-[92px]">
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

      {/* Agencies*/}
      <section className="border-y-0 border-white relative featured-agency max-sm:py-15">
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
          <div className='heading-wrap'>
            <h2 className="heading 2xl:px-20 3xl:px-40 font-bold mb-0 2xl:mb-20 3xl:mb-30 4xl:mb-40 absolute sm:relative sm:top-auto -top-9">Featured Agencies</h2>
          </div>
          <div className="flex overflow-x-scroll py-10 -mt-3 2xl:mx-20 3xl:mx-40 overflow-hidden">
            {featuredAgencies.map((agency, idx) => (
              <FeaturedAgenciesLoopItem key={idx} agency={agency} />
            ))}
          </div>
          <div className="flex items-center justify-end mt-5 md:mt-20 2xl:mt-45 3xl:mt-60 4xl:mt-80 2xl:px-10 3xl:px-18 4xl:px-30">
            {/* <Image src="/aac-logo-yellow.png" alt="" width="67" height="67" className="hover:rotate-45 transition-transform duration-3000" />
            <div className="border-brand-yellow border-2 w-10"></div> */}
            <Link href="/" className="border-brand-yellow bg-black border-2 md:border-4 uppercase text-brand-yellow rounded-full font-inter cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white text-center">Get Featured</Link>
          </div>
        </div>
      </section>

      {/* Featured Creatives */}
      <div className="bg-black heading-wrap max-sm:pt-[2.75rem]! max-sm:pb-[1rem]!">
        <h2 className="heading font-bold font-inter text-right max-sm:p-[0]!">Featured Creatives</h2>
      </div>
      <section className="featured-creatives card-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {featuredCreatives.map((creative, idx) => (
            <React.Fragment key={`creative-${creative.id || idx}`}>
              {idx === 6 && (
                <div key={`ad-agency-${idx}`} className="relative col-span-2 text-center flex flex-col justify-around gap-5 max-md:py-10">
                  <AnimatedBackdrop className={'max-sm:py-16 max-sm:pt-[1.5rem]'} />
                  <h2 className="relative z-1 text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px] ">
                    <span className='font-arial font-bold'>We Are</span> <br />
                    <span className="font-alta">AD AGENCY</span><br />
                    <span className="font-alta">CREATIVES</span>
                  </h2>
                  <div className="relative z-1">
                    <Link
                      href="/"
                      className="link-button border-brand-yellow border-0 outline-[2.05px] md:border-4 uppercase text-brand-yellow rounded-full font-inter sm:font-semibold md:font-bold px-12.5 py-2 md:px-14  md:py-2.5 2xl:px-24 3xl:px-25.5 4xl:px-33.5 4xl:py-5 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white"
                    >JOIN US</Link>
                  </div>
                </div>
              )}

              {width > 767 && idx === 15 && (
                <div key={`profile-${idx}`} className="relative col-span-2 text-center flex flex-col justify-around gap-10">
                  <AnimatedBackdrop className={''} />
                  <h2 className="relative z-1 font-inter font-bold">Want<br />Your <TmText text='ProFile' /><br />Featured?</h2>
                  <div className="relative z-1">
                    <Link href="/" className="border-brand-yellow border-2 md:border-4 uppercase text-brand-yellow rounded-full font-sans sm:font-semibold md:font-hass75 md:font-bold text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-12 py-2 md:px-14  md:py-2.5 2xl:px-24 3xl:px-25.5 4xl:px-33.5 4xl:py-5 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white">See How</Link>
                  </div>
                </div>
              )}

              {/* {idx === 8 && (
                <div key={`skip-01--${idx}`} className="col-span-2 md:col-span-3 lg:col-span-5 mb-8 3xl:mb-12 4xl:mb-16"></div>
              )} */}

              <CreativeLoopItem key={idx} creative={creative} />

              {width < 767 && idx === 15 && (
                <div key={`profile-02-${idx}`} className="relative col-span-2 text-center flex flex-col justify-center gap-6 md:gap-10">
                  <AnimatedBackdrop className={'max-sm:py-8'} />
                  <h2 className="z-1 text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px] font-bold mt-[48px] md:mt-0 font-inter">Want<br />Your<br /><TmText text='ProFile' /><br />Featured?</h2>
                  <div className="z-1 mb-5">
                    <Link href="/" className="border-brand-yellow border-0 outline-[2.05px] md:border-4 uppercase text-brand-yellow rounded-full font-sans sm:font-semibold md:font-hass75 md:font-bold text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-11.25 py-1.5 md:px-14  md:py-2.5 2xl:px-24 3xl:px-25.5 4xl:px-33.5 4xl:py-5 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white font-inter">See How</Link>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* create ProFile */}
      <div id="create-profile" className="bg-[#040404] heading-wrap create-profile">
        <h2 className="heading font-bold font-inter">
          Create <TmText text='ProFile' />
        </h2>
      </div>
      <section className="bg-black">
        <div className="flex flex-col md:gap-[7.5rem] 3xl:gap-[10rem] 4xl:gap-[13.333rem]">
          <div className="clients">
            <p className="text-xs md:text-3xl 3xl:text-[40px] uppercase font-inter font-bold methods">Our Method</p>
            <p className="text-white font-arial font-bold inspire">Create. Inspire. <span className="text-brand-yellow">Get Hired!</span></p>
          </div>
          <div className="steps">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-left">
              <div className="font-wix flex flex-col gap-[5.62] md:gap-2 2xl:gap-5.5 3xl:gap-7 4xl:gap-9.5">
                <h3 className="count font-bold">1</h3>
                <p className="text-brand-yellow font-bold step-heading font-inter ">
                  CREATE <TmText text='ProFile' />
                </p>
                <p className="text-white step-desc font-inter font-normal">Claim your space on the web.<br />Design your own stunning <TmText text='ProFile' /> page - crafted to impress, built to connect. Add your work, your voice, your values. You’ll instantly get a sleek webpage with your personal link and a downloadable version ready to share anywhere - from DMs to boardrooms. It's free. It’s yours. It’s the start of everything.</p>
              </div>
              <div className="font-wix flex flex-col gap-[5.62] md:gap-2 2xl:gap-5.5 3xl:gap-7 4xl:gap-9.5">
                <h3 className="count font-bold">2</h3>
                <p className="text-brand-yellow font-bold step-heading uppercase font-inter ">GET FEATURED & SHOWCASE</p>
                <p className="text-white step-desc font-inter font-normal">Be seen where it matters.<br />Your <TmText text='ProFile' /> becomes part of a curated network - handpicked creatives, thinkers, and builders. Stand out in The Lounge, and The Agencies Homepage where talent is more than a portfolio - it’s a presence. No chasing. No noise. Just the right eyes on your work.</p>
              </div>
              <div className="font-wix flex flex-col gap-[5.62] md:gap-2 2xl:gap-5.5 3xl:gap-7 4xl:gap-9.5">
                <h3 className="count font-bold">3</h3>
                <p className="text-brand-yellow font-bold step-heading uppercase font-inter ">GET HIRED</p>
                <p className="text-white step-desc font-inter font-normal">Let your work open doors.<br />Brands, agencies, and visionary clients are already here - searching, browsing, booking. With a <TmText text='ProFile' />, you're instantly visible and ready to be contacted, commissioned, or called in. Whether it’s a dream gig or a long-term collab, this is where it begins. With our help, on your terms.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="creative max-sm:mt-12">
          <div className="outline outline-4 md:outline-8 2xl:outline-16 shadow-(--ad-box-shadow) outline-while rounded-md md:rounded-xl xl:rounded-2xl 2xl:rounded-3xl 3xl:rounded-4xl 4xl:rounded-[56px]  relative mx-[4px] md:mx-[16px]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 justify-between">
              <div className="max-md:hidden">
                <Image src="/creatives/creative17.avif" width="720" height="720" alt="" className="image-mask" />
              </div>
              <div className="font-inter details max-sm:w-[120%]!">
                <div>
                  <h2 className="font-inter font-bold uppercase">Matthew Marcos</h2>
                  <p className="lowercase font-bold text-brand-yellow my-2 md:my-4 title">Creative Director</p>
                </div>
                <p className="location">NEW YORK, NY</p>
                <p className="text-brand-yellow mt-4 mb-2 md:mt-4 md:mb-4 4xl:mt-14 about-title font-bold">ABOUT</p>
                <p className="about-desc">I'm a Creative Director based in New York City; with a focus on art direction, brand storytelling, and concepting big ideas.I’ve been fortunate to work with brands like Keds, Louis XIII, Marantz, Wrangler, J.Crew, and USTA, crafting campaigns </p>
                <Link href="/" className="read-more text-brand-yellow underline mt-6">Read more...</Link>
              </div>
              <div className="max-sm:w-[70%]! max-sm:ml-[20%]!">
                <div className="max-w-[130px] md:max-w-[220px] 3xl:max-w-[295px] 4xl:max-w-[393px] mx-auto -mt-12 3xl:-mt-16 bg-black relative z-1">
                  <CreativeLoopItem2
                    creative={{ title: 'Creative Director', image: '/creatives/creative1.avif', agency: 'Matthew Marcos', location: 'NEW YORK, NY' }}
                  />
                </div>
              </div>
            </div>
            <div className="relative text-center w-full bottom-0 button">
              <TmTextLink
                text='CREATE ProFile'
                href='/creatives-signup'
                className='font-inter block m-auto border-brand-yellow border-2 md:border-4 text-brand-yellow rounded-full font-inter font-bold px-5 xl:px-30 3xl:px-40 md:py-4 py-2 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white'
              />
              <footer className="flex flex-row justify-center w-full z-11 py-[10px] text-gray-400 space-y-1">
                <p className="font-inter font-normal uppercase mt-2 px-12 md:px-2 transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF]">© {(new Date()).getFullYear()} Ad Agency Creatives. All Rights Reserved.</p>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creatives;