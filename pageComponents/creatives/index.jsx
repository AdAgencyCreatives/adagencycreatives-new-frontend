'use client';

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

const Creatives = () => {
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
      <section className="relative md:h-screen flex flex-col justify-center py-20 2xl:py-40 text-center px-10">
        <PageHeader
          page=""
          heading="Creatives"
        />
        <div className="space-x-4 md:space-x-6 mt-6 md:mt-20 text-sm md:text-2xl 3xl:text-[32px] 4xl:text-[42.67px] text-yellow-400 relative z-1">
          <a href="#create-profile">create pro®file</a>
          <a href="#search-jobs">search jobs</a>
          <a href="#resources">resources</a>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="p-6 md:py-10 md:px-10 mx-auto" id="search-jobs">
        <h2 className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[139px] font-bold mb-10 2xl:px-20 3xl:px-40">Featured Jobs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredJobs.map((job, idx) => (
            <>
              {idx === 6 && (
                <div key={`perfect-${idx}`} className="col-span-2 text-center flex flex-col justify-center gap-10 max-md:py-10">
                  <h2 className="text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px]">Haven't<br />Found<br />The Perfect<br />Job?</h2>
                  <div>
                  <Link 
                    href="/" 
                    className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-8 py-4 3xl:px-12 4xl:px-16 4xl:py-6 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white"
                  >
                      Advanced Search
                  </Link>
                  </div>
                </div>
              )}
            
              <JobLoopItem key={idx} job={job} />
            </>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 mx-auto px-6 md:px-10" id="resources">
        <h2 className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[139px] font-bold mb-10 text-right pb-20 2xl:px-20 3xl:px-40">Resources</h2>
        <div className="grid grid-cols-4 gap-1 md:gap-4 2xl:gap-10 w-full items-center relative py-0 md:py-20 2xl:px-20 3xl:px-40">
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
          <div className="col-span-2 space-y-4 grid grid-cols-2 gap-1 md:gap-4 2xl:gap-10 items-start">
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

      <section className="border-y-2 border-white py-20 relative">
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
          <h2 className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[139px] 2xl:px-20 3xl:px-40 font-bold">Featured Agencies</h2>
          <div className="flex gap-6 md:gap-51 3xl:gap-60 4xl:gap-90 overflow-x-scroll py-10 -mt-3 2xl:mx-20 3xl:mx-40 overflow-hidden">
            {featuredAgencies.map((agency, idx) => (
              <AgenciesLoopItem key={idx} agency={agency} />
            ))}
          </div>
          <div className="flex items-center justify-end mt-4 2xl:px-20 3xl:px-40">
            <Image src="/aac-logo-yellow.png" alt="" width="67" height="67" className="hover:rotate-45 transition-transform duration-3000" />
            <div className="border-yellow-400 border-2 w-10"></div>
            <Link href="/" className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-[8px] md:text-lg 3xl:text-2xl 4xl:text-[28px] px-8 py-4 3xl:px-12 4xl:px-16 4xl:py-6 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white">Get Featured</Link>
          </div>
        </div>
      </section>

      {/* Featured Creatives */}
      <section className="py-10 px-6 md:px-10">
        <h2 className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[139px] 2xl:px-20 3xl:px-40 font-bold mb-10 text-right">Featured Creatives</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredCreatives.map((creative, idx) => (
            <>
              {idx === 6 && (
                <div key={`ad-agency-${idx}`} className="col-span-2 text-center flex flex-col justify-center gap-10 max-md:py-10">
                  <h2 className="text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px]">
                    We are<br />
                    <span className="font-alta">AD AGENCY</span><br />
                    <span className="font-alta">CREATIVES</span>
                  </h2>
                  <div>
                    <Link 
                      href="/" 
                      className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-8 py-4 3xl:px-12 4xl:px-16 4xl:py-6 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white"
                    >Advanced Search</Link>
                  </div>
                </div>
              )}

              {width > 767 && idx === 15 && (
                <div key={`profile-${idx}`} className="col-span-2 text-center flex flex-col justify-center gap-10">
                  <h2 className="text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px]">Want<br />Your Pro®file<br />Featured?</h2>
                  <div>
                    <Link href="/" className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-8 py-4 3xl:px-12 4xl:px-16 4xl:py-6 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white">See How</Link>
                  </div>
                </div>
              )}
            
              <CreativeLoopItem key={idx} creative={creative} />

              {width < 767 && idx === 15 && (
                <div key={`profile-${idx}`} className="col-span-2 text-center flex flex-col justify-center gap-10">
                  <h2 className="text-2xl md:text-[44px] md:leading-[58.5px] 3xl:text-[57.07px] 3xl:leading-[78px] 4xl:text-[76.09px] 4xl:leading-[104px]">Want<br />Your Pro®file<br />Featured?</h2>
                  <div>
                    <Link href="/" className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-xs md:text-sm 3xl:text-lg 4xl:text-2xl px-8 py-4 3xl:px-12 4xl:px-16 4xl:py-6 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white">See How</Link>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </section>

      {/* Create Profile */}
      <section className="md:py-20 px-6 md:px-10">
        <h2 id="create-profile" className="text-[22px] md:text-[78px] 3xl:text-[104px] 4xl:text-[143px] 2xl:px-20 3xl:px-40 font-bold">Create Pro®file</h2>
        <p className="text-xs md:text-3xl 3xl:text-[40px] 4xl:text-[52.5px] uppercase font-hass65 py-20">Our Method</p>
        <p className="mt-4 text-sm md:text-[42px] 3xl:text-[56px] 4xl:text-[75px] text-gray-300">Create. Inspire. <span className="text-yellow-400">Get Hired!</span></p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-16">
          <div className="font-wix flex flex-col gap-4">
            <h3 className="text-[38px] md:text-[142px] 3xl:text-[190px] 4xl:text-[253.33px] font-bold">1</h3>
            <p className="text-yellow-400 font-hass75 text-xs md:text-lg 3xl:text-2xl 4xl:text-[32px] uppercase">CREATE PRO®FILE</p>
            <p className="text-white text-xs md:text-base 3xl:text-2xl 4xl:text-[32px]">Claim your space on the web.<br />Design your own stunning profile page - crafted to impress, built to connect. Add your work, your voice, your values. You’ll instantly get a sleek webpage with your personal link and a downloadable version ready to share anywhere - from DMs to boardrooms. It's free. It’s yours. It’s the start of everything.</p>
          </div>
          <div className="font-wix flex flex-col gap-4">
            <h3 className="text-[38px] md:text-[142px] 3xl:text-[190px] 4xl:text-[253.33px] font-bold">2</h3>
            <p className="text-yellow-400 font-hass75 text-xs md:text-lg 3xl:text-2xl 4xl:text-[32px] uppercase">GET FEATURED & SHOWCASE</p>
            <p className="text-white text-xs md:text-base 3xl:text-2xl 4xl:text-[32px]">Be seen where it matters.<br />Your Pro®file becomes part of a curated network - handpicked creatives, thinkers, and builders. Stand out in The Lounge, and The Agencies Homepage where talent is more than a portfolio - it’s a presence. No chasing. No noise. Just the right eyes on your work.</p>
          </div>
          <div className="font-wix flex flex-col gap-4">
            <h3 className="text-[38px] md:text-[142px] 3xl:text-[190px] 4xl:text-[253.33px] font-bold">3</h3>
            <p className="text-yellow-400 font-hass75 text-xs md:text-lg 3xl:text-2xl 4xl:text-[32px] uppercase">GET HIRED</p>
            <p className="text-white text-xs md:text-base 3xl:text-2xl 4xl:text-[32px]">Let your work open doors.<br />Brands, agencies, and visionary clients are already here - searching, browsing, booking. With a Pro®file, you're instantly visible and ready to be contacted, commissioned, or called in. Whether it’s a dream gig or a long-term collab, this is where it begins. With our help, on your terms.</p>
          </div>
        </div>
        
        <div className="md:px-10 2xl:px-20 3xl:px-40">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-10 justify-between outline outline-4 md:outline-8 2xl:outline-16 shadow-(--ad-box-shadow) outline-while rounded-2xl mt-30 px-2 md:px-10 py-2 pb-10 md:pb-20 mb-2 relative mx-[4px] md:mx-[16px]">
            <div className="max-md:hidden">
              <Image src="/creatives/creative17.avif" width="720" height="720" alt="" className="image-mask" />
            </div>
            <div className="space-y-4 md:pt-10 pb-20">
              <div>
                <h2 className="font-alta text-lg md:text-[34px] 3xl:text-[46px] 4xl:text-[60px]">Matthew Marcos</h2>
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
                  creative={{ title: 'Senior UX User Experience Designer', image: '/creatives/creative1.avif', agency: 'Matthew Marcos', location: 'NEW YORK, NY' }}
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

export default Creatives;