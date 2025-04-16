'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from 'components/PageHeader';
import ResourceLoopItem from 'pageComponents/resources/loop/item';
import { featuredCreatives } from 'constants/creatives';
import CreativeLoopItem from 'pageComponents/creatives/loop/item';

const Agencies = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative py-40 text-center">
        <PageHeader
          page=""
          heading="Agencies"
        />
        <div className="space-x-5 text-[1.7rem] text-yellow-400 mt-20">
          <a href="#">hire creatives</a>
          <a href="#">choose a plan</a>
          <a href="#">post a job</a>
        </div>
      </section>

      {/* Featured Creatives */}
      <section className="py-10">
        <h2 className="text-8xl font-bold mb-10">Featured Creatives</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredCreatives.map((creative, idx) => (
            <>
              {idx === 6 && (
                <div key={`ad-agency-${idx}`} className="col-span-2 text-center flex flex-col justify-center gap-10">
                  <h2 className="text-[48px] leading-[62px]">Haven't<br />Found<br />The Perfect<br />Match?</h2>
                  <div>
                    <Link href="/" className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-sm px-8 py-4 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white">Advanced Search</Link>
                  </div>
                </div>
              )}

              {idx === 15 && (
                <div key={`profile-${idx}`} className="col-span-2 text-center flex flex-col justify-center gap-10">
                  <h2 className="text-[48px] leading-[62px]">Why<br />Search?<br />Post & Attract!</h2>
                  <div>
                    <Link href="/" className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-sm px-8 py-4 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white">Post A Job</Link>
                  </div>
                </div>
              )}
            
              <CreativeLoopItem key={idx} creative={creative} />
            </>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="py-20">
        <h2 className="text-8xl font-bold mb-10 text-right pb-40">Plans</h2>
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-20 w-full items-center mx-[16px] relative py-20">
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
              resource={{ title: 'single', image: '/resource1.avif', href: '/resources-internship' }}
            />
          </div>

          {/* <!-- Column 2: 4 items stacked vertically --> */}
          <div className="col-span-2 space-y-4 grid grid-cols-2 gap-20 items-start">
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
      </section>

      {/* Post a Job */}
      <section className="py-20">
        <h2 className="text-8xl font-bold">Post a Job</h2>
        <p className="text-3xl uppercase font-hass65 py-20">Our Method</p>
        <p className="mt-4 text-4xl text-gray-300">Post. Attract. <span className="text-yellow-400">Hire!</span></p>
        
        <div className="grid md:grid-cols-3 lg:md:grid-cols-3 gap-12 text-left mt-16">
          <div className="font-wix flex flex-col gap-4">
            <h3 className="text-[190px] font-bold leading-[171px]">1</h3>
            <p className="text-yellow-400 font-hass75 text-[14px] uppercase">CREATE A JOB</p>
            <p className="text-white text-[18px]">Don’t chase - attract.<br />Instantly connect with top creative talent - no noise, no chasing. Just clarity, presence, and a clean path to the right fit. Post your role in a space built to draw in the right minds, effortlessly. Your job listing becomes more than a post - it becomes a signal. Smart. Simple. Seen.</p>
          </div>
          <div className="font-wix flex flex-col gap-4">
            <h3 className="text-[190px] font-bold leading-[171px]">2</h3>
            <p className="text-yellow-400 font-hass75 text-[14px] uppercase">GET FEATURED & SHOWCASE</p>
            <p className="text-white text-[18px]">Showcase your agency.<br />This isn’t just a listing - it’s your presence in a curated space built for visibility and recognition. Your Pro®file connects your brand, culture, and creative energy in one place that speaks volumes. Get featured. Be remembered. This is where standout agencies meet standout talent.</p>
          </div>
          <div className="font-wix flex flex-col gap-4">
            <h3 className="text-[190px] font-bold leading-[171px]">3</h3>
            <p className="text-yellow-400 font-hass75 text-[14px] uppercase">HIRE</p>
            <p className="text-white text-[18px]">Find who you're really looking for.<br />No endless scrolling. No guessing games. Just a curated network of standout creatives - ready to jump in, lead, or elevate your next project. Message directly. Review Pro®files. Build your dream team. This is hiring, reimagined. On your terms, at your pace, with talent that gets it.</p>
          </div>
        </div>

        <div className="mx-[16px] grid grid-cols-3 gap-10 justify-between outline outline-[16px] shadow-(--ad-box-shadow) outline-while rounded-2xl mt-30 py-2 px-20 mb-10 relative">
          <div>
            <Image src="/jobs/job3.avif" width="720" height="720" alt="" className="image-mask" />
          </div>
          <div className="space-y-4 pt-10 pb-20">
            <div>
              <h2 className="font-alta font-bold text-[44px] leading-[40px]">AD CORP.</h2>
              <p className="lowercase text-yellow-400">Creative Director</p>
            </div>
            <p className="font-alta text-[16px] font-bold">NEW YORK, NY</p>
            <p className="font-alta text-[16px] text-yellow-400 font-bold">ABOUT</p>
            <p className="font-wix text-[18px]">I'm an Associate Creative Director based in New York City; with a focus on art direction, brand storytelling, and concepting big ideas. I’ve been fortunate to work with brands like Keds, Louis XIII, Marantz, Wrangler, J.Crew, and USTA, crafting campaigns that blend creativity with strategy.</p>
            <Link href="/" className="font-wix text-[18px] text-yellow-400 underline">Read more...</Link>
          </div>
          <div>
            <div className="max-w-[265px] mx-auto -mt-16 bg-black relative z-1">
              <CreativeLoopItem 
                creative={{ title: 'Creative Director', image: '/jobs/job3.avif', agency: 'AD Corp.', location: 'NEW YORK, NY' }}
              />
            </div>
          </div>
          <div className="absolute text-center w-full bottom-8">
            <Link href="/" className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-[16px] uppercase px-40 py-4 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white">CREATE PRO®FILE</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agencies;