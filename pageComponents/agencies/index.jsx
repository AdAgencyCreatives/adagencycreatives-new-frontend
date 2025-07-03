'use client';

import Image from 'next/image';
import Link from 'next/link';
import DirectoryPageHeader from 'components/DirectoryPageHeader';
import ResourceLoopItem from 'pageComponents/resources/loop/item';
import CreativeLoopItem from 'pageComponents/creatives/loop/item';
import CreativeLoopItem2 from 'pageComponents/creatives/loop/item2';
import { useEffect, useState } from 'react';
import React from 'react';
import TmText from 'components/TmText';
import useFeaturedCreatives from 'hooks/useFeaturedCreatives';
import AnimatedBackdrop from 'components/AnimatedBackdrop';
import CallToActionLink from 'components/CallToActionLink';
import SectionHeading from 'components/SectionHeading';
import CreativeLoopPreloader from 'pageComponents/creatives/loop/preloader';

const Agencies = () => {

  const FEATURED_CREATIVES_PER_PAGE = 16;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { featuredCreatives } = useFeaturedCreatives(FEATURED_CREATIVES_PER_PAGE);

  return (
    <div className="text-white">
      {/* Hero */}
      <DirectoryPageHeader
        page=""
        heading="Agencies"
      >
        <div className="font-bold space-x-6 2xl:space-x-[36px] 3xl:space-x-[48px] 4xl:space-x-[64px] text-sm md:text-2xl 3xl:text-[32px] 4xl:text-[42.67px] text-primary relative z-1">
          <a href="#creatives" className="sub-heading">hire creatives</a>
          <a href="#plans" className="sub-heading">choose a plan</a>
          <a href="#post-a-job" className="sub-heading">post a job</a>
        </div>
      </DirectoryPageHeader>

      {/* Featured Creatives */}
      <div className="bg-black heading-wrap relative z-1" id="creatives">
        <SectionHeading headingContent={'Featured Creatives'} className='' />
      </div>
      <section className="featured-jobs card-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {(featuredCreatives && featuredCreatives?.length > 0) ? (<>
            {featuredCreatives.map((creative, idx) => (
              <React.Fragment key={`creative-${creative.id || idx}`}>
                {(width < 768 && idx === 6) || (width >= 768 && idx === 6) ? (
                  <div id={`perfect-${idx}`} className="relative col-span-2 text-center flex flex-col justify-center gap-5 max-md:py-10">
                    <AnimatedBackdrop className={''} />
                    <h2 className="relative z-1 pb-0 pt-6 2xl:pb-14 2xl:pt-20 3xl:pb-20 3xl:pt-26 4xl:py-15 font-arial font-bold  md:leading-[58.5px] 3xl:leading-[78px] 4xl:leading-[104px]">Haven't<br />Found<br />The Perfect<br />Match?</h2>
                    <div className='relative z-1 '>
                      <CallToActionLink href="/" className="uppercase">
                        Advanced Search
                      </CallToActionLink>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                {width >= 768 && idx === 15 && (
                  <div key={`profile-${idx}`} className="relative col-span-2 text-center flex flex-col justify-around gap-10">
                    <AnimatedBackdrop className={''} />
                    <h2 className="relative z-1 font-inter font-bold">
                      Why<br />Search?<br />Post & Attract!
                    </h2>
                    <div className='relative z-1'>
                      <CallToActionLink href="/" className="uppercase">
                        Post A Job
                      </CallToActionLink>
                    </div>
                  </div>
                )}

                <CreativeLoopItem key={idx} creative={creative} className={width < 768 && idx > 11 ? 'md:flex hidden' : ''} />

                {width < 768 && idx === 11 && (
                  <div key={`profile-${idx}`} className="relative col-span-2 text-center flex flex-col justify-center gap-6 md:gap-10">
                    <AnimatedBackdrop className={'block md:hidden w-[70%]'} />
                    <h2 className="z-1 text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px] font-bold mt-[48px] md:mt-0 font-inter"
                    >Why<br />Search?<br />Post & Attract!</h2>
                    <div className='z-1'>
                      <CallToActionLink href="/" className="uppercase">
                        See How
                      </CallToActionLink>
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

      {/* Plans */}
      <section id="plans" className="border-y-0 border-white relative plans">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
          >
            <source src="/videos/plans-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-1">
          <div className='heading-wrap'>
            <SectionHeading headingContent={'Plans'} className='text-right' />
          </div>
          <div className="grid grid-cols-4 gap-x-[12px] md:gap-x-[54px] 3xl:gap-x-[72px] 4xl:gap-x-[92px] w-full items-center">
            {/* <!-- Column 1: 1 item --> */}
            <div>
              <ResourceLoopItem
                resource={{ title: 'single', image: '/resource1.avif', href: '/resources-internship' }}
              />
            </div>

            {/* <!-- Column 2: 4 items stacked vertically --> */}
            <div className="col-span-2 grid grid-cols-2 items-center gap-[14px] md:gap-[54px] 3xl:gap-[72px] 4xl:gap-[92px]">
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
        </div>
      </section>
      <div className="bg-black flex items-center justify-end max-sm:px-[1.172rem] px-[3.2rem] md:px-[3.903rem] xl:px-[4.269rem] 2xl:px-[4.5rem] 3xl:px-[6rem] 4xl:px-[8rem] relative max-sm:py-[1.4rem] py-[1.4rem] md:py-[1.708rem] xl:py-[1.868rem] 2xl:py-[1.969rem] 3xl:py-[2.625rem] 4xl:py-[3.5rem]">
        <CallToActionLink href="/" className="uppercase max-sm:mb-[0.366rem] mb-[1rem] md:mb-[1.22rem] xl:mb-[1.334rem] 2xl:mb-[1.406rem] 3xl:mb-[1.875rem] 4xl:mb-[2.5rem]">
          Get Featured
        </CallToActionLink>
        <div className="absolute bottom-0 left-[50%] transform -translate-x-[50%] translate-y-0 border-white border-1 w-full md:w-[90%] h-px m-auto block"></div>
      </div>

      {/* Post a Job */}
      <div className="bg-[#040404] post-a-job" id="post-a-job">
        <SectionHeading headingContent={'Post a Job'} className='max-sm:px-[1.5rem] px-[1.5rem] md:px-[1.83rem] xl:px-[2.001rem] 2xl:px-[2.109rem] 3xl:px-[2.813rem] 4xl:px-[3.75rem]' />
      </div>
      <section className="bg-black">
        <div className="flex flex-col md:gap-[7.5rem] 3xl:gap-[10rem] 4xl:gap-[13.333rem]">
          <div className="clients">
            <p className="max-sm:text-[0.75rem] text-[1.35rem] md:text-[1.647rem] xl:text-[1.801rem] 2xl:text-[1.898rem] 3xl:text-[2.531rem] 4xl:text-[3.375rem] max-sm:mb-[1.41rem] mb-[3.85rem] md:mb-[4.696rem] xl:mb-[5.136rem] 2xl:mb-[5.414rem] 3xl:mb-[7.219rem] 4xl:mb-[9.625rem] uppercase font-inter font-bold">Our Method</p>
            <p className="max-sm:text-[0.875rem] text-[1.875rem] md:text-[2.287rem] xl:text-[2.501rem] 2xl:text-[2.637rem] 3xl:text-[3.516rem] 4xl:text-[4.688rem] text-white font-arial font-bold">Post. Attract. <span className="text-primary">Hire!</span></p>
          </div>
          <div className="steps">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-left">
              <div className="font-inter flex flex-col  max-sm:gap-[0.348rem] gap-[0.95rem] md:gap-[1.159rem] xl:gap-[1.267rem] 2xl:gap-[1.336rem] 3xl:gap-[1.781rem] 4xl:gap-[2.375rem]">
                <h3 className="leading-none max-sm:text-[2.375rem] text-[6.35rem] md:text-[7.745rem] xl:text-[8.471rem] 2xl:text-[8.93rem] 3xl:text-[11.906rem] 4xl:text-[15.875rem] font-bold">1</h3>
                <p className="text-primary font-bold step-heading font-inter ">CREATE A JOB</p>
                <p className="max-sm:text-[0.75rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] text-white font-inter font-normal">Don’t chase - attract.<br />Instantly connect with top creative talent - no noise, no chasing. Just clarity, presence, and a clean path to the right fit. Post your role in a space built to draw in the right minds, effortlessly. Your job listing becomes more than a post - it becomes a signal. Smart. Simple. Seen.</p>
              </div>
              <div className="font-inter flex flex-col  max-sm:gap-[0.348rem] gap-[0.95rem] md:gap-[1.159rem] xl:gap-[1.267rem] 2xl:gap-[1.336rem] 3xl:gap-[1.781rem] 4xl:gap-[2.375rem]">
                <h3 className="leading-none max-sm:text-[2.375rem] text-[6.35rem] md:text-[7.745rem] xl:text-[8.471rem] 2xl:text-[8.93rem] 3xl:text-[11.906rem] 4xl:text-[15.875rem] font-bold">2</h3>
                <p className="text-primary font-bold step-heading uppercase font-inter ">GET FEATURED & SHOWCASE</p>
                <p className="max-sm:text-[0.75rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] text-white font-inter font-normal">Showcase your agency.<br />This isn’t just a listing - it’s your presence in a curated space built for visibility and recognition. Your <TmText text='ProFile' /> connects your brand, culture, and creative energy in one place that speaks volumes. Get featured. Be remembered. This is where standout agencies meet standout talent.</p>
              </div>
              <div className="font-inter flex flex-col  max-sm:gap-[0.348rem] gap-[0.95rem] md:gap-[1.159rem] xl:gap-[1.267rem] 2xl:gap-[1.336rem] 3xl:gap-[1.781rem] 4xl:gap-[2.375rem]">
                <h3 className="leading-none max-sm:text-[2.375rem] text-[6.35rem] md:text-[7.745rem] xl:text-[8.471rem] 2xl:text-[8.93rem] 3xl:text-[11.906rem] 4xl:text-[15.875rem] font-bold">3</h3>
                <p className="max-sm:text-[0.75rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] text-primary font-bold uppercase font-inter ">HIRE</p>
                <p className="max-sm:text-[0.75rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] text-white font-inter font-normal">Find who you're really looking for.<br />No endless scrolling. No guessing games. Just a curated network of standout creatives - ready to jump in, lead, or elevate your next project. Message directly. Review <span style={{ whiteSpace: 'nowrap' }}><TmText text='ProFile' />s</span>. Build your dream team. This is hiring, reimagined. On your terms, at your pace, with talent that gets it.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="creative max-sm:mt-12">
          <div className="outline outline-4 md:outline-8 2xl:outline-16 shadow-(--ad-box-shadow) outline-while rounded-lg relative mx-[4px] md:mx-[16px]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-10 justify-between">
              <div className="max-md:hidden image-wrap">
                <Image src="/jobs/job3.avif" width="720" height="720" alt="" className="image-mask" />
              </div>
              <div className="font-inter details max-sm:w-[120%]!">
                <div className='max-sm:space-y-[0.35rem] space-y-[0.35rem] md:space-y-[0.427rem] xl:space-y-[0.467rem] 2xl:space-y-[0.492rem] 3xl:space-y-[0.656rem] 4xl:space-y-[0.875rem]'>
                  <h2 className="font-inter font-bold uppercase">AD CORP.</h2>
                  <p className="lowercase font-bold text-white title">Creative Director</p>
                  <p className="location uppercase">Orlando, FL</p>
                </div>
                <div className='max-sm:space-y-[0.35rem] space-y-[0.35rem] md:space-y-[0.427rem] xl:space-y-[0.467rem] 2xl:space-y-[0.492rem] 3xl:space-y-[0.656rem] 4xl:space-y-[0.875rem]'>
                  <p className="text-white max-sm:mt-[1.8rem] mt-[1.8rem] md:mt-[2.196rem] xl:mt-[2.401rem] 2xl:mt-[2.531rem] 3xl:mt-[3.375rem] 4xl:mt-[4.5rem] mb-2 md:my-4 about-title font-bold">ABOUT</p>
                  <p className="about-desc">I'm an Associate Creative Director based in New York City; with a focus on art direction, brand storytelling, and concepting big ideas. I’ve been fortunate to work with brands like Keds, Louis XIII, Marantz, Wrangler, J.Crew, and USTA, crafting campaigns </p>
                  <Link href="/" className="max-sm:text-[0.6rem] text-[0.6rem] md:text-[0.732rem] xl:text-[0.8rem] 2xl:text-[0.844rem] 3xl:text-[1.125rem] 4xl:text-[1.5rem] text-primary hover:text-white underline mt-6">Read more...</Link>
                </div>
              </div>
              <div className="max-sm:w-[110%]">
                <div className="max-sm:w-[106px] max-w-[130px] md:max-w-[220px] 3xl:max-w-[295px] 4xl:max-w-[393px] mx-auto -mt-12 3xl:-mt-16 bg-black relative z-1">
                  <CreativeLoopItem2
                    creative={{ title: 'Creative Director', image: '/jobs/job3.avif', agency: 'AD Corp.', location: 'Orlando, FL' }}
                  />
                </div>
              </div>
            </div>
            <div className="relative text-center max-w-max bottom-0 button m-auto max-sm:px-[1.5rem]">
              <CallToActionLink href="/" className="uppercase w-full">
                Post A Job
              </CallToActionLink>
              <footer className="flex flex-row justify-center w-full z-11 py-[10px] text-gray-400 space-y-1">
                <p className="font-inter font-normal uppercase mt-2 max-sm:px-0 px-12 md:px-2 transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF]">© {(new Date()).getFullYear()} Ad Agency Creatives. All Rights Reserved.</p>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agencies;