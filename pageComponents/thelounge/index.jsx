'use client';

import Link from 'next/link';
import SpotlightLoopItem from 'pageComponents/spotlights/loop/item';
import CreativeLoopItem from 'pageComponents/creatives/loop/item';
import PublicationLoopItem from 'pageComponents/publications/loop/item';
import ResourceLoopItem from 'pageComponents/resources/loop/item';
import ListViewIcon from 'icons/ListViewIcon';
import GridViewIcon from 'icons/GridViewIcon';
import SearchIcon from 'icons/SearchIcon';
import DropdownButton from 'components/DropdownButton';
import React from 'react';
import TmText from 'components/TmText';
import AnimatedBackdrop from 'components/AnimatedBackdrop';
import useFeaturedCreatives from 'hooks/useFeaturedCreatives';
import useSpotlightCreatives from 'hooks/useSpotlightCreatives';
import usePublicationResources from 'hooks/usePublicationResources';
import PublicationList from 'pageComponents/publications/list';

const TheLounge = () => {

  const FEATURED_CREATIVES_PER_PAGE = 16;

  const handleSelect = (option) => {
    console.log('You selected:', option)
  }

  const { featuredCreatives } = useFeaturedCreatives(FEATURED_CREATIVES_PER_PAGE);
  const { spotlightCreatives } = useSpotlightCreatives();
  const { publicationResources } = usePublicationResources();

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative max-sm:pt-[0px] pt-[100px] max-sm:h-[234px] h-screen flex flex-col justify-center text-center relative">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/thelounge-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 z-1 bg-[url(/dots.gif)] bg-auto bg-repeat bg-center opacity-40"></div>
        <div className="absolute inset-0 z-2" style={{ background: 'radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 1) 100%)' }}></div>
        <div className="relative z-3">
          <h1 className="text-5xl md:text-9xl 2xl:text-[182px] 3xl:text-[242px] 4xl:text-[323.4px] font-bold text-brand-yellow">The Lounge</h1>
          <div className="hidden md:block space-x-6 2xl:space-x-[36px] 3xl:space-x-[48px] 4xl:space-x-[64px] mt-4 md:mt-10 3xl:mt-20 text-sm md:text-2xl 3xl:text-[32px] 4xl:text-[42.67px] text-white relative z-1">
            <Link href="#spotlight">spotlight</Link>
            <Link href="#chat">chat</Link>
            <Link href="#featured-creatives">featured</Link>
            <Link href="#news">news</Link>
            <Link href="#publications">publications</Link>
          </div>
          <div className="block md:hidden space-x-6 2xl:space-x-[36px] 3xl:space-x-[48px] 4xl:space-x-[64px] mt-4 md:mt-10 3xl:mt-20 text-sm md:text-2xl 3xl:text-[32px] 4xl:text-[42.67px] text-white relative z-1">
            <Link href="">hire creatives</Link>
            <Link href="">choose a plan</Link>
            <Link href="">post a job</Link>
          </div>
        </div>
      </section>

      {/* Spotlight */}
      <section id="spotlight" className="pt-[2rem] max-sm:px-[1.5rem] md:px-[3rem] mx-auto">
        <h2 className="leading-[1.25em] max-sm:text-[1.264rem] md:text-[4.313rem] xl:text-[4.603rem] 2xl:text-[4.852rem] 3xl:text-[6.469rem] 4xl:text-[8.625rem] max-sm:mb-0 font-bold text-right py:[1rem] md:py-[3.5rem] xl:py-[4rem] 2xl:py-[4.5rem] 3xl:py-[5.25rem] 4xl:py-[6rem]">Spotlight</h2>
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 max-sm:gap-[1.5rem] gap-[3rem] items-center relative max-sm:py-5 py-20">
          {/* Background */}
          <AnimatedBackdrop className={'max-sm:w-[100%]'} />
          {spotlightCreatives?.length > 0 && spotlightCreatives.slice(0, Math.min(10, spotlightCreatives.length)).map((spotlight, idx) => {
            return (
              <React.Fragment key={`spotlight-${spotlight.id || idx}`}>
                <SpotlightLoopItem key={idx} spotlight={spotlight} />
                {idx == 3 && (<><div></div></>)}
                {idx == 6 && (<><div></div><div></div></>)}
                {idx == 8 && (<><div></div><div></div><div></div></>)}
              </React.Fragment>
            );
          })}
          <div className="absolute max-sm:bottom-4 bottom-16 left-0 max-sm:text-[1.375rem] text-[5.5rem] leading-none">
            <div>Gather.</div>
            <div>Inspire.</div>
            <div className="text-brand-yellow">Do Cool $#*t!</div>
          </div>
        </div>
      </section>

      {/* Chat */}
      <section id="chat" className="py-20 border-white border-y-2 relative">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
          >
            <source src="/videos/chat-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="max-w-[1600px] mx-auto px-10 relative z-1">
          <h2 className="text-8xl font-bold mb-20">Chat</h2>
          <div className="flex justify-between">
            <div>
              <DropdownButton
                label="All members"
                options={['All members', 'Admins']}
                onSelect={handleSelect}
              />
            </div>
            <div className="flex gap-6 items-center">
              <GridViewIcon />
              <ListViewIcon />
              <div className="flex justify-between border-b-1 border-white items-center gap-2">
                <div className="flex gap-2 text-[14px] items-center">
                  <SearchIcon />
                  <input type="text" className="font-wix w-3xs m-2 outline-none" placeholder="Find a member..." />
                </div>
                <div className="bg-black rounded-full font-wix text-[14px]">0</div>
              </div>
            </div>
          </div>
          <div className="text-center min-h-[50vh] justify-center flex flex-col">
            <p className="font-wix mb-4 text-[26px]">No members found.</p>
            <p className="font-wix mb-4 text-[16px]">Try another search.</p>
          </div>
        </div>
      </section>

      {/* Featured Creatives */}
      <section id="featured-creatives" className="max-sm:py-5 py-20 max-w-[1600px] mx-auto px-10">
        <h2 className="max-sm:text-[1.375rem] max-sm:mb-0 text-8xl font-bold mb-10 text-right">Featured</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-sm:py-5">
          {featuredCreatives.map((creative, idx) => (
            <React.Fragment key={`creative-${creative.id || idx}`}>
              {idx === 6 && (
                <div key={`ad-agency-${idx}`} className="col-span-2 text-center flex flex-col justify-center gap-10">
                  <h2 className="text-[48px] leading-[62px]">
                    We are<br />
                    <span className="font-alta">AD AGENCY</span><br />
                    <span className="font-alta">CREATIVES</span>
                  </h2>
                  <div>
                    <Link href="/" className="border-brand-yellow border-4 uppercase text-brand-yellow rounded-full text-sm px-8 py-4 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white">Advanced Search</Link>
                  </div>
                </div>
              )}

              {idx === 15 && (
                <div key={`profile-${idx}`} className="col-span-2 text-center flex flex-col justify-center gap-10">
                  <h2 className="text-[48px] leading-[62px]">Want<br />Your <TmText text='ProFile' /><br />Featured?</h2>
                  <div>
                    <Link href="/" className="border-brand-yellow border-4 uppercase text-brand-yellow rounded-full text-sm px-8 py-4 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white">See How</Link>
                  </div>
                </div>
              )}

              <CreativeLoopItem key={idx} creative={creative} />
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-20 border-white border-y-2 relative">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
          >
            <source src="/videos/news-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="max-w-[1600px] mx-auto px-10 relative z-1">
          <h2 className="text-8xl font-bold">News</h2>
          <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-15 w-full items-center relative">
            {/* <!-- Column 1: 1 item --> */}
            <div>
              <ResourceLoopItem
                resource={{ title: '10 tips to get hired', image: '/resource1.avif', href: '/resources-internship' }}
              />
            </div>

            {/* <!-- Column 2: 4 items stacked vertically --> */}
            <div className="col-span-2 space-y-4 grid grid-cols-2 gap-15 items-start">
              <ResourceLoopItem
                resource={{ title: 'where is market', image: '/resource1.avif', href: '/resources-inspiration' }}
              />
              <ResourceLoopItem
                resource={{ title: 'best portfolio', image: '/resource1.avif', href: '/resources-portfolio' }}
              />
              <ResourceLoopItem
                resource={{ title: 'what to say in bio', image: '/resource1.avif', href: '/resources-writers' }}
              />
              <ResourceLoopItem
                resource={{ title: 'how to run interview', image: '/resource1.avif', href: '/resources-designers' }}
              />
            </div>

            {/* <!-- Column 4: 1 item --> */}
            <div>
              <ResourceLoopItem
                resource={{ title: '10 tips to get hired', image: '/resource1.avif', href: '/resources-business' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-20 max-w-[1600px] mx-auto px-10">
        <h2 className="text-8xl font-bold text-right">Publications</h2>
        <div className="flex gap-15 w-full items-center relative pb-20 mb-10 border-white border-b-2">
          {/* Background */}
          <AnimatedBackdrop className={''} />
          <PublicationList publications={publicationResources} />
        </div>
      </section>
    </div>
  );
};

export default TheLounge;