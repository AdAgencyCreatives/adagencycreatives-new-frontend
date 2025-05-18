'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from 'components/PageHeader';
import ResourceLoopItem from 'pageComponents/resources/loop/item';
import { featuredCreatives } from 'constants/creatives';
import CreativeLoopItem from 'pageComponents/creatives/loop/item';
import CreativeLoopItem2 from 'pageComponents/creatives/loop/item2';
import { useEffect, useState } from 'react';
import React from 'react';
import TmText from 'components/TmText';

const Agencies = () => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="text-white">
      {/* Hero */}
      <section className="relative flex flex-col justify-center text-center page-header">
        <PageHeader
          page=""
          heading="Agencies"
        />
        <div className="font-bold space-x-6 2xl:space-x-[36px] 3xl:space-x-[48px] 4xl:space-x-[64px] text-sm md:text-2xl 3xl:text-[32px] 4xl:text-[42.67px] text-brand-yellow relative z-1">
          <a href="#creatives" className="sub-heading">hire creatives</a>
          <a href="#plans" className="sub-heading">choose a plan</a>
          <a href="#post-job" className="sub-heading">post a job</a>
        </div>
      </section>

      {/* Featured Creatives */}
      <div className="bg-black heading-wrap relative z-1">
        <h2 className="heading font-bold font-inter leading-[25.78px] 2xl:leading-[99px] 3xl:leading-[132px] 4xl:leading-[176px]">Featured Creatives</h2>
      </div>
      <section className="featured-jobs card-wrapper" id="creatives">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {featuredCreatives.map((creative, idx) => (
            <React.Fragment key={`creative-${creative.id || idx}`}>
              {(width < 768 && idx === 4) || (width >= 768 && idx === 6) ? (
                <div id={`perfect-${idx}`} className="relative col-span-2 text-center flex flex-col justify-center gap-5 max-md:py-10">
                  <div className="absolute inset-0 absolute h-full overflow-hidden">
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
                  <h2 className="relative z-1 pb-0 pt-6 2xl:pb-14 2xl:pt-20 3xl:pb-20 3xl:pt-26 4xl:py-15 font-arial font-bold  md:leading-[58.5px] 3xl:leading-[78px] 4xl:leading-[104px]">Haven't<br />Found<br />The Perfect<br />Match?</h2>
                  <div className='relative z-1 '>
                  <Link 
                    href="/" 
                    className="link-button border-brand-yellow border-2 md:border-4 uppercase text-brand-yellow rounded-full font-inter sm:font-semibold md:font-hass75 md:font-bold cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white"
                  >
                      Advanced Search
                  </Link>
                  </div>
                </div>
              ) : (
                <></>
              )}

              {width >= 768 && idx === 15 && (
                <div key={`profile-${idx}`} className="relative col-span-2 text-center flex flex-col justify-around gap-10">
                  <div className="absolute inset-0 overflow-hidden">
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
                  <h2 className="relative z-1 font-inter font-bold">
                    Why<br />Search?<br />Post & Attract!
                  </h2>
                  <div className='relative z-1'>
                    <Link href="/" className="border-brand-yellow border-2 md:border-4 uppercase text-brand-yellow rounded-full font-sans sm:font-semibold md:font-hass75 md:font-bold text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-12 py-2 md:px-14  md:py-2.5 2xl:px-24 3xl:px-25.5 4xl:px-33.5 4xl:py-5 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white">POST A JOB</Link>
                  </div>
                </div>
              )}

              {idx === 8 && (
                <div key={`skip-01--${idx}`} className="col-span-2 md:col-span-3 lg:col-span-5 mb-8 3xl:mb-12 4xl:mb-16"></div>
              )}

              <CreativeLoopItem key={idx} creative={creative} className={width < 768 && idx > 7 ? 'md:flex hidden' : ''} />

              {width < 768 && idx === 15 && (
                <div key={`profile-${idx}`} className="relative col-span-2 text-center flex flex-col justify-center gap-6 md:gap-10">
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
                  <h2 className="text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px] font-bold mt-[48px] md:mt-0 font-inter"
                  >Why<br />Search?<br />Post & Attract!</h2>
                  <div>
                    <Link href="/" className="border-brand-yellow border-0 outline-[2.05px] md:border-4 uppercase text-brand-yellow rounded-full font-sans sm:font-semibold md:font-hass75 md:font-bold text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-11.25 py-1.5 md:px-14  md:py-2.5 2xl:px-24 3xl:px-25.5 4xl:px-33.5 4xl:py-5 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white font-inter">See How</Link>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
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
            <h2 className="heading font-bold font-inter text-right leading-[25.78px] 2xl:leading-[99px] 3xl:leading-[132px] 4xl:leading-[176px]">Plans</h2>
          </div>
          <div className="grid grid-cols-4 gap-x-[12px] md:gap-x-[54px] 3xl:gap-x-[72px] 4xl:gap-x-[92px] w-full items-center">
            {/* <!-- Column 1: 1 item --> */}
            <div>
              <ResourceLoopItem 
                resource={{ title: 'single', image: '/resource1.avif', href: '/resources-internship' }}
              />
            </div>

            {/* <!-- Column 2: 4 items stacked vertically --> */}
            <div className="col-span-2 space-y-4 grid grid-cols-2 items-start gap-x-[14px] md:gap-x-[54px] 3xl:gap-x-[72px] 4xl:gap-x-[92px]">
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
      <div className="bg-black flex items-center justify-end 2xl:px-20 3xl:px-40 relative plans-button-wrap">
        <Image src="/aac-logo-yellow.png" alt="" width="500" height="500" className="hover:rotate-45 transition-transform duration-3000 w-[20.81px] h-[20.81px] md:w-[80px] md:h-[80px] 3xl:w-[106px] 3xl:h-[106px] 4xl:w-[142px] 4xl:h-[142px]"/>
        <div className="border-row border-brand-yellow border-b-[1.21px] md:border-b-[4.65px] 3xl:border-b-[6.2px] 4xl:border-b-[8.27px]"></div>
        <Link 
          href="/" 
          className="border-brand-yellow border-0 outline-[2.05px] md:border-4 uppercase text-brand-yellow rounded-full text-center font-inter sm:font-semibold md:font-bold cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white"
        >
          Get Featured
        </Link>
        <div className="absolute bottom-0 left-[50%] transform -translate-x-[50%] translate-y-0 border-white border-1 w-full md:w-[90%] h-px m-auto block"></div>
      </div>

      {/* create ProFile */}
      <div className="bg-[#040404] heading-wrap create-profile">
        <h2 className="heading font-bold font-inter">Post a Job</h2>
      </div>
      <section className="bg-black" id="post-job">
        <div className="flex flex-col md:gap-[7.5rem] 3xl:gap-[10rem] 4xl:gap-[13.333rem]">
          <div className="clients">
            <p className="text-xs md:text-3xl 3xl:text-[40px] uppercase font-inter font-bold methods">Our Method</p>
            <p className="text-white font-arial font-bold inspire">Post. Attract. <span className="text-brand-yellow">Hire!</span></p>
          </div>
          <div className="steps">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-left">
              <div className="font-wix flex flex-col gap-[5.62] md:gap-2 2xl:gap-5.5 3xl:gap-7 4xl:gap-9.5">
                <h3 className="count font-bold">1</h3>
                <p className="text-brand-yellow font-bold step-heading font-inter ">CREATE A JOB</p>
                <p className="text-white step-desc font-inter font-normal">Don’t chase - attract.<br />Instantly connect with top creative talent - no noise, no chasing. Just clarity, presence, and a clean path to the right fit. Post your role in a space built to draw in the right minds, effortlessly. Your job listing becomes more than a post - it becomes a signal. Smart. Simple. Seen.</p>
              </div>
              <div className="font-wix flex flex-col gap-[5.62] md:gap-2 2xl:gap-5.5 3xl:gap-7 4xl:gap-9.5">
                <h3 className="count font-bold">2</h3>
                <p className="text-brand-yellow font-bold step-heading uppercase font-inter ">GET FEATURED & SHOWCASE</p>
                <p className="text-white step-desc font-inter font-normal">Showcase your agency.<br />This isn’t just a listing - it’s your presence in a curated space built for visibility and recognition. Your <TmText text='ProFile' /> connects your brand, culture, and creative energy in one place that speaks volumes. Get featured. Be remembered. This is where standout agencies meet standout talent.</p>
              </div>
              <div className="font-wix flex flex-col gap-[5.62] md:gap-2 2xl:gap-5.5 3xl:gap-7 4xl:gap-9.5">
                <h3 className="count font-bold">3</h3>
                <p className="text-brand-yellow font-bold step-heading uppercase font-inter ">HIRE</p>
                <p className="text-white step-desc font-inter font-normal">Find who you're really looking for.<br />No endless scrolling. No guessing games. Just a curated network of standout creatives - ready to jump in, lead, or elevate your next project. Message directly. Review <TmText text='ProFile' />s. Build your dream team. This is hiring, reimagined. On your terms, at your pace, with talent that gets it.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="creative">
          <div className="outline outline-4 md:outline-8 2xl:outline-16 shadow-(--ad-box-shadow) outline-while rounded-lg relative mx-[4px] md:mx-[16px]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-10 justify-between">
              <div className="max-md:hidden image-wrap">
                <Image src="/jobs/job3.avif" width="720" height="720" alt="" className="image-mask" />
              </div>
              <div className="font-inter details">
                <div>
                  <h2 className="font-inter font-bold uppercase">AD CORP.</h2>
                  <p className="lowercase font-bold text-brand-yellow my-2 md:my-4 title">Creative Director</p>
                </div>
                <p className="location">Orlando, FL</p>
                <p className="text-brand-yellow mt-4 mb-2 md:my-4 about-title font-bold">ABOUT</p>
                <p className="about-desc">I'm an Associate Creative Director based in New York City; with a focus on art direction, brand storytelling, and concepting big ideas. I’ve been fortunate to work with brands like Keds, Louis XIII, Marantz, Wrangler, J.Crew, and USTA, crafting campaigns </p>
                <Link href="/" className="read-more text-brand-yellow underline mt-6">Read more...</Link>
              </div>
              <div>
                <div className="max-w-[130px] md:max-w-[220px] 3xl:max-w-[295px] 4xl:max-w-[393px] mx-auto -mt-12 3xl:-mt-16 bg-black relative z-1">
                  <CreativeLoopItem2
                    creative={{ title: 'Creative Director', image: '/jobs/job3.avif', agency: 'AD Corp.', location: 'Orlando, FL' }}
                  />
                </div>
              </div>
            </div>
            <div className="relative text-center w-full bottom-0 button">
              <Link href="/" className="block m-auto border-brand-yellow border-2 md:border-4 uppercase text-brand-yellow rounded-full font-inter font-bold uppercase px-5 xl:px-30 3xl:px-40 md:py-4 py-2 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white">post a job</Link>
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

export default Agencies;