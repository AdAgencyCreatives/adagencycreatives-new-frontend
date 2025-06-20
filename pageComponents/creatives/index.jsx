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
import CallToActionButton from 'components/CallToActionButton';
import SectionHeading from 'components/SectionHeading';
import useMentorTopics from 'hooks/useMentorTopics';
import JobLoopPreloader from 'pageComponents/jobs/loop/preloader';
import CreativeLoopPreloader from './loop/preloader';
import FeaturedAgenciesLoopPreloader from 'pageComponents/featured_agencies/loop/preloader';
import ResourceLoopPreloader from 'pageComponents/resources/loop/preloader';

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
  const { mentorTopics } = useMentorTopics();

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
        <SectionHeading headingContent={'Featured Jobs'} className='' />
      </div>
      <section className="relative z-1 featured-jobs card-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {(featuredJobs && featuredJobs?.length > 0) ? (<>
            {featuredJobs.map((job, idx) => (
              <React.Fragment key={`job-${job.id || idx}`}>
                {idx === 6 && (
                  <div key={`perfect-${idx}`} id={`perfect-${idx}`} className="relative col-span-2 text-center flex flex-col justify-around gap-5 md:gap-10 max-md:py-10">
                    <AnimatedBackdrop className={'block'} />
                    <h2 className="relative z-1 pb-0 pt-6 2xl:pb-14 2xl:pt-20 3xl:pb-20 3xl:pt-26 4xl:py-15 font-arial font-bold  md:leading-[58.5px] 3xl:leading-[78px] 4xl:leading-[104px]">Haven't<br />Found<br />The Perfect<br />Job?</h2>
                    <div className="relative z-1">
                      <CallToActionButton href="/" className="uppercase">
                        Advanced Search
                      </CallToActionButton>
                    </div>
                  </div>
                )}

                <JobLoopItem key={idx} job={job} className={idx > 5 ? 'md:flex hidden' : ''} />
              </React.Fragment>
            ))}
          </>) : (<>
            <JobLoopPreloader className='' />
            <JobLoopPreloader className='' />
            <JobLoopPreloader className='max-sm:hidden' />
            <JobLoopPreloader className='max-sm:hidden' />
            <JobLoopPreloader className='max-sm:hidden' />
          </>)}
        </div>
      </section>

      {/* Resources */}
      <div className="bg-black heading-wrap" id="resources">
        <SectionHeading headingContent={'Resources'} className='text-right max-sm:px-5 px-10 max-sm:py-[0.659rem] py-[1.8rem] md:py-[2.196rem] xl:py-[2.401rem] 2xl:py-[2.531rem] 3xl:py-[3.375rem] 4xl:py-[4.5rem]' />
      </div>
      <section className="resources relative max-sm:px-[0rem]!">
        <div className="mx-auto max-sm:px-5 px-10 relative z-1">
          <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 max-sm:gap-3 gap-15 w-full items-center relative">
            {(mentorTopics && mentorTopics?.length > 0) ? (<>
              {mentorTopics?.length > 0 && (
                <div><ResourceLoopItem resource={mentorTopics[0]} titleClassName='uppercase!' /></div>
              )}
              {(mentorTopics?.length > 4) && (
                <div className='col-span-2 max-sm:space-y-1 space-y-4 grid grid-cols-2 max-sm:gap-3 gap-15 items-start'>
                  {mentorTopics.slice(1, 5).map((topic, idx) => (
                    <ResourceLoopItem key={idx} resource={topic} titleClassName='uppercase!' />
                  ))}
                </div>
              )}
              {mentorTopics?.length > 5 && (
                <div><ResourceLoopItem resource={mentorTopics[5]} titleClassName='uppercase!' /></div>
              )}
            </>) : (<>
              <div>
                <ResourceLoopPreloader className='' />
              </div>
              <div className='col-span-2 max-sm:space-y-1 space-y-4 grid grid-cols-2 max-sm:gap-3 gap-15 items-start'>
                <ResourceLoopPreloader className='' />
                <ResourceLoopPreloader className='' />
                <ResourceLoopPreloader className='' />
                <ResourceLoopPreloader className='' />
              </div>
              <div>
                <ResourceLoopPreloader className='' />
              </div>
            </>)}
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
            <SectionHeading headingContent={'Featured Agencies'} className='' />
          </div>
          <div className="flex overflow-x-scroll py-10 -mt-3 2xl:mx-20 3xl:mx-40 overflow-hidden">
            {(featuredAgencies && featuredAgencies?.length > 0) ? (<>
              {featuredAgencies.map((agency, idx) => (
                <FeaturedAgenciesLoopItem key={idx} agency={agency} />
              ))}
            </>) : (<>
              <FeaturedAgenciesLoopPreloader className='' />
              <FeaturedAgenciesLoopPreloader className='' />
              <FeaturedAgenciesLoopPreloader className='' />
            </>)}
          </div>
          <div className="flex items-center justify-end mt-5 md:mt-20 2xl:mt-45 3xl:mt-60 4xl:mt-80 2xl:px-10 3xl:px-18 4xl:px-30">
            <CallToActionButton href="/" className="uppercase">
              Get Featured
            </CallToActionButton>
          </div>
        </div>
      </section>

      {/* Featured Creatives */}
      <div className="bg-black heading-wrap max-sm:pt-[2.75rem]! max-sm:pb-[1rem]!">
        <SectionHeading headingContent={'Featured Creatives'} className='text-right' />
      </div>
      <section className="featured-creatives card-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {(featuredCreatives && featuredCreatives?.length > 0) ? (<>
            {featuredCreatives.map((creative, idx) => (
              <React.Fragment key={`creative-${creative.id || idx}`}>
                {idx === 6 && (
                  <div key={`ad-agency-${idx}`} id={`ad-agency-${idx}`} className="relative col-span-2 text-center flex flex-col justify-around gap-5 md:gap-10 max-md:py-10">
                    <AnimatedBackdrop className={'block'} />
                    <h2 className="relative z-1 pb-0 pt-6 2xl:pb-14 2xl:pt-20 3xl:pb-20 3xl:pt-26 4xl:py-15 md:leading-[58.5px] 3xl:leading-[78px] 4xl:leading-[104px]">
                      <span className='font-bold font-arial'>We Are</span><br />
                      <span className='font-alta uppercase'>AD AGENCY</span><br />
                      <span className='font-alta uppercase'>CREATIVES</span>
                    </h2>
                    <div className="relative z-1">
                      <CallToActionButton href="/" className="uppercase">
                        Join Us
                      </CallToActionButton>
                    </div>
                  </div>
                )}

                {width >= 767 && idx === 15 && (
                  <div key={`profile-${idx}`} className="relative col-span-2 text-center flex flex-col justify-around gap-10">
                    <AnimatedBackdrop className={''} />
                    <h2 className="relative z-1 font-inter font-bold">Want<br />Your <TmText text='ProFile' /><br />Featured?</h2>
                    <div className="relative z-1">
                      <CallToActionButton href="/" className="uppercase">
                        See How
                      </CallToActionButton>
                    </div>
                  </div>
                )}

                {/* {idx === 8 && (
                <div key={`skip-01--${idx}`} className="col-span-2 md:col-span-3 lg:col-span-5 mb-8 3xl:mb-12 4xl:mb-16"></div>
              )} */}

                <CreativeLoopItem key={idx} creative={creative} className={width < 767 && idx > 11 ? 'hidden' : ''} />

                {width < 767 && idx === 11 && (
                  <div key={`profile-02-${idx}`} className="relative col-span-2 text-center flex flex-col justify-center gap-6 md:gap-10">
                    <AnimatedBackdrop className={'max-sm:py-8'} />
                    <h2 className="z-1 text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px] font-bold mt-[48px] md:mt-0 font-inter">Want<br />Your<br /><TmText text='ProFile' /><br />Featured?</h2>
                    <div className="z-1 mb-5">
                      <Link href="/" className="border-brand-yellow border-0 outline-[2.05px] md:border-4 uppercase text-brand-yellow rounded-full font-sans sm:font-semibold md:font-inter md:font-bold text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-11.25 py-1.5 md:px-14  md:py-2.5 2xl:px-24 3xl:px-25.5 4xl:px-33.5 4xl:py-5 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white font-inter">See How</Link>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </>) : (<>
            <CreativeLoopPreloader className='' />
            <CreativeLoopPreloader className='' />
            <CreativeLoopPreloader className='max-sm:hidden' />
            <CreativeLoopPreloader className='max-sm:hidden' />
            <CreativeLoopPreloader className='max-sm:hidden' />
          </>)}
        </div>
      </section>

      {/* create ProFile */}
      <div id="create-profile" className="bg-[#040404] create-profile">
        <SectionHeading headingContent={<>Create <TmText text='ProFile' /></>} className='max-sm:px-[1.5rem] px-[1.5rem] md:px-[1.83rem] xl:px-[2.001rem] 2xl:px-[2.109rem] 3xl:px-[2.813rem] 4xl:px-[3.75rem]' />
      </div>
      <section className="bg-black">
        <div className="flex flex-col md:gap-[7.5rem] 3xl:gap-[10rem] 4xl:gap-[13.333rem]">
          <div className="clients">
            <p className="max-sm:text-[0.75rem] text-[1.35rem] md:text-[1.647rem] xl:text-[1.801rem] 2xl:text-[1.898rem] 3xl:text-[2.531rem] 4xl:text-[3.375rem] max-sm:mb-[1.41rem] mb-[3.85rem] md:mb-[4.696rem] xl:mb-[5.136rem] 2xl:mb-[5.414rem] 3xl:mb-[7.219rem] 4xl:mb-[9.625rem] uppercase font-inter font-bold">Our Method</p>
            <p className="max-sm:text-[0.875rem] text-[1.875rem] md:text-[2.287rem] xl:text-[2.501rem] 2xl:text-[2.637rem] 3xl:text-[3.516rem] 4xl:text-[4.688rem] text-white font-arial font-bold">Create. Inspire. <span className="text-brand-yellow">Get Hired!</span></p>
          </div>
          <div className="steps">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-left">
              <div className="font-inter flex flex-col max-sm:gap-[0.348rem] gap-[0.95rem] md:gap-[1.159rem] xl:gap-[1.267rem] 2xl:gap-[1.336rem] 3xl:gap-[1.781rem] 4xl:gap-[2.375rem]">
                <h3 className="leading-none max-sm:text-[2.375rem] text-[6.35rem] md:text-[7.745rem] xl:text-[8.471rem] 2xl:text-[8.93rem] 3xl:text-[11.906rem] 4xl:text-[15.875rem] font-bold">1</h3>
                <p className="text-brand-yellow font-bold step-heading font-inter ">
                  CREATE <TmText text='ProFile' />
                </p>
                <p className="max-sm:text-[0.75rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] text-white font-inter font-normal">Claim your space on the web.<br />Design your own stunning <TmText text='ProFile' /> page - crafted to impress, built to connect. Add your work, your voice, your values. You’ll instantly get a sleek webpage with your personal link and a downloadable version ready to share anywhere - from DMs to boardrooms. It's free. It’s yours. It’s the start of everything.</p>
              </div>
              <div className="font-inter flex flex-col max-sm:gap-[0.348rem] gap-[0.95rem] md:gap-[1.159rem] xl:gap-[1.267rem] 2xl:gap-[1.336rem] 3xl:gap-[1.781rem] 4xl:gap-[2.375rem]">
                <h3 className="leading-none max-sm:text-[2.375rem] text-[6.35rem] md:text-[7.745rem] xl:text-[8.471rem] 2xl:text-[8.93rem] 3xl:text-[11.906rem] 4xl:text-[15.875rem] font-bold">2</h3>
                <p className="text-brand-yellow font-bold step-heading uppercase font-inter ">GET FEATURED & SHOWCASE</p>
                <p className="max-sm:text-[0.75rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] text-white font-inter font-normal">Be seen where it matters.<br />Your <TmText text='ProFile' /> becomes part of a curated network - handpicked creatives, thinkers, and builders. Stand out in The Lounge, and The Agencies Homepage where talent is more than a portfolio - it’s a presence. No chasing. No noise. Just the right eyes on your work.</p>
              </div>
              <div className="font-inter flex flex-col max-sm:gap-[0.348rem] gap-[0.95rem] md:gap-[1.159rem] xl:gap-[1.267rem] 2xl:gap-[1.336rem] 3xl:gap-[1.781rem] 4xl:gap-[2.375rem]">
                <h3 className="leading-none max-sm:text-[2.375rem] text-[6.35rem] md:text-[7.745rem] xl:text-[8.471rem] 2xl:text-[8.93rem] 3xl:text-[11.906rem] 4xl:text-[15.875rem] font-bold">3</h3>
                <p className="max-sm:text-[0.75rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] text-brand-yellow font-bold uppercase font-inter">GET HIRED</p>
                <p className="max-sm:text-[0.75rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] text-white font-inter font-normal">Let your work open doors.<br />Brands, agencies, and visionary clients are already here - searching, browsing, booking. With a <TmText text='ProFile' />, you're instantly visible and ready to be contacted, commissioned, or called in. Whether it’s a dream gig or a long-term collab, this is where it begins. With our help, on your terms.</p>
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
                <div className='max-sm:space-y-[0.35rem] space-y-[0.35rem] md:space-y-[0.427rem] xl:space-y-[0.467rem] 2xl:space-y-[0.492rem] 3xl:space-y-[0.656rem] 4xl:space-y-[0.875rem]'>
                  <h2 className="font-inter font-bold uppercase">Matthew Marcos</h2>
                  <p className="lowercase font-bold text-white title">Creative Director</p>
                  <p className="location uppercase">NEW YORK, NY</p>
                </div>
                <div className='max-sm:space-y-[0.35rem] space-y-[0.35rem] md:space-y-[0.427rem] xl:space-y-[0.467rem] 2xl:space-y-[0.492rem] 3xl:space-y-[0.656rem] 4xl:space-y-[0.875rem]'>
                  <p className="text-white max-sm:mt-[1.8rem] mt-[1.8rem] md:mt-[2.196rem] xl:mt-[2.401rem] 2xl:mt-[2.531rem] 3xl:mt-[3.375rem] 4xl:mt-[4.5rem] about-title font-bold">ABOUT</p>
                  <p className="about-desc">I'm a Creative Director based in New York City; with a focus on art direction, brand storytelling, and concepting big ideas.I’ve been fortunate to work with brands like Keds, Louis XIII, Marantz, Wrangler, J.Crew, and USTA, crafting campaigns </p>
                  <Link href="/" className="max-sm:text-[0.6rem] text-[0.6rem] md:text-[0.732rem] xl:text-[0.8rem] 2xl:text-[0.844rem] 3xl:text-[1.125rem] 4xl:text-[1.5rem] text-brand-yellow hover:text-white underline mt-6">Read more...</Link>
                </div>
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
              <CallToActionButton href="/creatives-signup" className="w-full">
                <span className='uppercase'>Create&nbsp;</span>
                <TmText text='ProFile' />
              </CallToActionButton>
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