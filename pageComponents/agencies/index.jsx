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
      <section className="relative md:h-screen flex flex-col justify-center py-20 2xl:py-40 text-center px-6 md:px-10">
        <PageHeader
          page=""
          heading="Agencies"
        />
        <div className="space-x-4 md:space-x-6 mt-6 md:mt-20 text-sm md:text-2xl 3xl:text-[32px] 4xl:text-[42.67px] text-yellow-400 relative z-1">
          <a href="#creatives">hire creatives</a>
          <a href="#plans">choose a plan</a>
          <a href="#jobs">post a job</a>
        </div>
      </section>

      {/* Featured Creatives */}
      <section id="creatives" className="py-20 px-6 md:px-10">
        <h2 className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[139px] font-bold mb-10 2xl:px-20 3xl:px-40">Featured Creatives</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredCreatives.map((creative, idx) => (
            <>
              {idx === 6 && (
                <div key={`ad-agency-${idx}`} className="col-span-2 text-center flex flex-col justify-center gap-10 max-md:py-10">
                  <h2 className="text-2xl font-bold md:text-[44px] md:leading-[58.5px] 2xl:text-[44px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px]">Haven't<br />Found<br />The Perfect<br />Match?</h2>
                  <div>
                    <Link 
                      href="/" 
                      className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-8 py-4 3xl:px-12 4xl:px-16 4xl:py-6 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white"
                    >Advanced Search</Link>
                  </div>
                </div>
              )}

              {width > 767 && idx === 15 && (
                <div key={`profile-${idx}`} className="col-span-2 text-center flex flex-col justify-center gap-10 max-md:py-10">
                  <h2 className="text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px]">Why<br />Search?<br />Post & Attract!</h2>
                  <div>
                    <Link 
                      href="/" 
                      className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-8 py-4 3xl:px-12 4xl:px-16 4xl:py-6 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white"
                    >Post A Job</Link>
                  </div>
                </div>
              )}
            
              <CreativeLoopItem key={idx} creative={creative} />

              {width < 767 && idx === 15 && (
                <div key={`profile-${idx}`} className="col-span-2 text-center flex flex-col justify-center gap-10 max-md:py-10">
                  <h2 className="text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px]">Why<br />Search?<br />Post & Attract!</h2>
                  <div>
                    <Link 
                      href="/" 
                      className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-8 py-4 3xl:px-12 4xl:px-16 4xl:py-6 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white"
                    >Post A Job</Link>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-20 relative border-white border-y-2">
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
        <div className="px-10 relative z-1">
          <h2 className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[139px] font-bold mb-10 text-right pb-20 2xl:px-20 3xl:px-40">Plans</h2>
          <div className="grid grid-cols-4 gap-1 md:gap-4 2xl:gap-10 w-full items-center relative py-0 md:py-20 2xl:px-20 3xl:px-40">
            {/* <!-- Column 1: 1 item --> */}
            <div>
              <ResourceLoopItem 
                resource={{ title: 'single', image: '/resource1.avif', href: '/resources-internship' }}
              />
            </div>

            {/* <!-- Column 2: 4 items stacked vertically --> */}
            <div className="col-span-2 space-y-4 grid grid-cols-2 gap-1 md:gap-4 2xl:gap-10 items-start">
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

      {/* Post a Job */}
      <section className="md:py-20 px-6 md:px-10">
        <h2 id="create-profile" className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[143px] 2xl:px-20 3xl:px-40 font-bold">Post a Job</h2>
        <p className="text-xs md:text-3xl 3xl:text-[40px] 4xl:text-[52.5px] uppercase font-hass65 py-20">Our Method</p>
        <p className="mt-4 text-sm md:text-[42px] 3xl:text-[56px] 4xl:text-[75px] text-gray-300">Post. Attract. <span className="text-yellow-400">Hire!</span></p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-16">
          <div className="font-wix flex flex-col gap-4">
            <h3 className="text-[38px] md:text-[142px] 3xl:text-[190px] 4xl:text-[253.33px] font-bold">1</h3>
            <p className="text-yellow-400 font-hass75 text-xs md:text-lg 3xl:text-2xl 4xl:text-[32px] uppercase">CREATE A JOB</p>
            <p className="text-white text-xs md:text-base 3xl:text-2xl 4xl:text-[32px]">Don’t chase - attract.<br />Instantly connect with top creative talent - no noise, no chasing. Just clarity, presence, and a clean path to the right fit. Post your role in a space built to draw in the right minds, effortlessly. Your job listing becomes more than a post - it becomes a signal. Smart. Simple. Seen.</p>
          </div>
          <div className="font-wix flex flex-col gap-4">
            <h3 className="text-[38px] md:text-[142px] 3xl:text-[190px] 4xl:text-[253.33px] font-bold">2</h3>
            <p className="text-yellow-400 font-hass75 text-xs md:text-lg 3xl:text-2xl 4xl:text-[32px] uppercase">GET FEATURED & SHOWCASE</p>
            <p className="text-white text-xs md:text-base 3xl:text-2xl 4xl:text-[32px]">Showcase your agency.<br />This isn’t just a listing - it’s your presence in a curated space built for visibility and recognition. Your Pro®file connects your brand, culture, and creative energy in one place that speaks volumes. Get featured. Be remembered. This is where standout agencies meet standout talent.</p>
          </div>
          <div className="font-wix flex flex-col gap-4">
            <h3 className="text-[38px] md:text-[142px] 3xl:text-[190px] 4xl:text-[253.33px] font-bold">3</h3>
            <p className="text-yellow-400 font-hass75 text-xs md:text-lg 3xl:text-2xl 4xl:text-[32px] uppercase">HIRE</p>
            <p className="text-white text-xs md:text-base 3xl:text-2xl 4xl:text-[32px]">Find who you're really looking for.<br />No endless scrolling. No guessing games. Just a curated network of standout creatives - ready to jump in, lead, or elevate your next project. Message directly. Review Pro®files. Build your dream team. This is hiring, reimagined. On your terms, at your pace, with talent that gets it.</p>
          </div>
        </div>
        
        <div className="md:px-10 2xl:px-20 3xl:px-40">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-10 justify-between outline outline-4 md:outline-8 2xl:outline-16 shadow-(--ad-box-shadow) outline-while rounded-2xl mt-30 px-2 md:px-10 py-2 pb-10 md:pb-20 mb-2 relative mx-[4px] md:mx-[16px]">
            <div className="max-md:hidden">
              <Image src="/jobs/job3.avif" width="720" height="720" alt="" className="image-mask" />
            </div>
            <div className="space-y-4 md:pt-10 pb-20">
              <div>
                <h2 className="font-alta text-lg md:text-[34px] 3xl:text-[46px] 4xl:text-[60px]">AD CORP.</h2>
                <p className="lowercase text-yellow-400 text-xs md:text-2xl 3xl:text-3xl 4xl:text-[38px]">Creative Director</p>
              </div>
              <p className="font-alta text-xs md:text-sm 3xl:text-lg 4xl:text-2xl">NEW YORK, NY</p>
              <p className="font-alta text-xs md:text-lg 3xl:text-[32px] 4xl:text-[32px] text-yellow-400">ABOUT</p>
              <p className="font-wix text-xs md:text-base 3xl:text-2xl 4xl:text-[28px]">I'm an Associate Creative Director based in New York City; with a focus on art direction, brand storytelling, and concepting big ideas. I’ve been fortunate to work with brands like Keds, Louis XIII, Marantz, Wrangler, J.Crew, and USTA, crafting campaigns that blend creativity with strategy.</p>
              <Link href="/" className="font-wix text-xs md:text-base 3xl:text-2xl 4xl:text-[28px] text-yellow-400 underline">Read more...</Link>
            </div>
            <div>
              <div className="max-w-[130px] md:max-w-[220px] 3xl:max-w-[295px] 4xl:max-w-[393px] mx-auto -mt-12 3xl:-mt-16 bg-black relative z-1">
                <CreativeLoopItem2 
                  creative={{ title: 'Creative Director', image: '/jobs/job3.avif', agency: 'AD Corp.', location: 'NEW YORK, NY' }}
                />
              </div>
            </div>
            <div className="absolute text-center w-full bottom-10">
              <Link href="/" className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-xs 3xl:text-lg 4xl:text-2xl uppercase px-10 md:px-40 py-4 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white">CREATE PRO®FILE</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agencies;