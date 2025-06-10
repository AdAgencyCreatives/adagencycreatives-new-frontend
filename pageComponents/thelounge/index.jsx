'use client';

import Link from 'next/link';
import SpotlightLoopItem from 'pageComponents/spotlights/loop/item';
import CreativeLoopItem from 'pageComponents/creatives/loop/item';
import ResourceLoopItem from 'pageComponents/resources/loop/item';
import React from 'react';
import TmText from 'components/TmText';
import AnimatedBackdrop from 'components/AnimatedBackdrop';
import useFeaturedCreatives from 'hooks/useFeaturedCreatives';
import useSpotlightCreatives from 'hooks/useSpotlightCreatives';
import usePublicationResources from 'hooks/usePublicationResources';
import PublicationList from 'pageComponents/publications/list';
import useScreen from 'hooks/useScreen';
import useMentorTopics from 'hooks/useMentorTopics';
import useFeaturedCities from 'hooks/useFeaturedCities';
import FeaturedCityLoopItem from 'pageComponents/featured_cities/loop/item';
import LinkOrDiv from 'components/LinkOrDiv';
import SectionHeading from 'components/SectionHeading';
import useFeaturedJobs from 'hooks/useFeaturedJobs';
import JobLoopItem from 'pageComponents/jobs/loop/item';

const TheLounge = () => {

  const FEATURED_JOBS_PER_PAGE = 8;
  const FEATURED_CREATIVES_PER_PAGE = 8;

  const { isMobile, isPortrait } = useScreen();

  const handleSelect = (option) => {
    console.log('You selected:', option)
  }

  const { featuredJobs } = useFeaturedJobs(FEATURED_JOBS_PER_PAGE);
  const { featuredCreatives } = useFeaturedCreatives(FEATURED_CREATIVES_PER_PAGE);
  const { spotlightCreatives } = useSpotlightCreatives();
  const { publicationResources } = usePublicationResources();
  const { mentorTopics } = useMentorTopics();
  const { featuredCities } = useFeaturedCities();

  console.log('mentorTopics', mentorTopics);

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
          <div className="font-bold max-sm:space-x-[0.586rem] space-x-[1.6rem] md:space-x-[1.952rem] xl:space-x-[2.134rem] 2xl:space-x-[2.25rem] 3xl:space-x-[3rem] 4xl:space-x-[4rem] mt-4 md:mt-10 3xl:mt-20 max-sm:text-[0.75rem] text-[1.05rem] md:text-[1.281rem] xl:text-[1.401rem] 2xl:text-[1.477rem] 3xl:text-[1.969rem] 4xl:text-[2.625rem] text-white relative z-1">
            <LinkOrDiv href="#spotlight">spotlight</LinkOrDiv>
            <LinkOrDiv href="#chat">chat</LinkOrDiv>
            <LinkOrDiv href="#featured">featured</LinkOrDiv>
            <LinkOrDiv href="#news">news</LinkOrDiv>
            <LinkOrDiv href="#publications">publications</LinkOrDiv>
          </div>
        </div>
      </section>

      {/* Spotlight */}
      <section id="spotlight" className=" mx-auto max-sm:px-[0.934rem] px-[2.55rem] md:px-[3.11rem] xl:px-[3.402rem] 2xl:px-[3.586rem] 3xl:px-[4.781rem] 4xl:px-[6.375rem] max-sm:pt-[0.293rem] pt-[0.8rem] md:pt-[0.976rem] xl:pt-[1.067rem] 2xl:pt-[1.125rem] 3xl:pt-[1.5rem] 4xl:pt-[2rem] max-sm:pb-[2rem] pb-[1.4rem] md:pb-[1.708rem] xl:pb-[1.868rem] 2xl:pb-[1.969rem] 3xl:pb-[2.625rem] 4xl:pb-[3.5rem]">
        <SectionHeading headingContent={'Spotlight'} className='text-right max-sm:pb-[1.282rem] pb-[3.5rem] md:pb-[4.269rem] xl:pb-[4.669rem] 2xl:pb-[4.922rem] 3xl:pb-[6.563rem] 4xl:pb-[8.75rem]' />
        <div className='relative'>
          {/* Background */}
          <AnimatedBackdrop className={'max-sm:w-[100%]'} />
          <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 items-center relative max-sm:gap-[0.806rem] gap-[2.2rem] md:gap-[2.683rem] xl:gap-[2.935rem] 2xl:gap-[3.094rem] 3xl:gap-[4.125rem] 4xl:gap-[5.5rem]">
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
            <div className="absolute left-0 leading-none max-sm:text-[1.375rem] text-[3.95rem] md:text-[4.818rem] xl:text-[5.269rem] 2xl:text-[5.555rem] 3xl:text-[7.406rem] 4xl:text-[9.875rem] max-sm:bottom-[1.044rem] bottom-[2.85rem] md:bottom-[3.476rem] xl:bottom-[3.802rem] 2xl:bottom-[4.008rem] 3xl:bottom-[5.344rem] 4xl:bottom-[7.125rem]">
              <div>Gather.</div>
              <div>Inspire.</div>
              <div className="text-brand-yellow">Do Cool $#*t!</div>
            </div>
          </div>
        </div>

      </section>

      {/* Chat */}
      <section id="chat" className="border-white border-y-2 relative max-sm:py-[0.801rem] py-[1.068rem] md:py-[1.424rem] xl:py-[1.898rem] 2xl:py-[2.531rem] 3xl:py-[3.375rem] 4xl:py-[4.5rem]">
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
        <div className="mx-auto relative z-1 max-sm:px-[1.5rem] px-[3rem]">
          <SectionHeading headingContent={'Chat'} className='max-sm:py-[0.659rem] py-[1.8rem] md:py-[2.196rem] xl:py-[2.401rem] 2xl:py-[2.531rem] 3xl:py-[3.375rem] 4xl:py-[4.5rem]' />
          <div className='max-sm:h-[15.985rem] h-[43.65rem] md:h-[53.241rem] xl:h-[58.228rem] 2xl:h-[61.383rem] 3xl:h-[81.844rem] 4xl:h-[109.125rem]'></div>
          {/* <div className="flex justify-between">
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
          </div> */}
        </div>
      </section>

      {/* Featured Jobs+Creatives */}
      <section id="featured" className="mx-auto max-sm:pt-[1.125rem] max-sm:px-[0.458rem] px-[1.25rem] md:px-[1.525rem] xl:px-[1.667rem] 2xl:px-[1.758rem] 3xl:px-[2.344rem] 4xl:px-[3.125rem]">
        <SectionHeading headingContent={'Featured'} className='text-right max-sm:pb-[1.282rem] pb-[3.5rem] md:pb-[4.269rem] xl:pb-[4.669rem] 2xl:pb-[4.922rem] 3xl:pb-[6.563rem] 4xl:pb-[8.75rem]' />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-sm:gap-[1rem] gap-[0.8rem] md:gap-[0.976rem] xl:gap-[1.067rem] 2xl:gap-[1.125rem] 3xl:gap-[1.5rem] 4xl:gap-[2rem] max-sm:py-[0.916rem] py-[2.5rem] md:py-[3.049rem] xl:py-[3.335rem] 2xl:py-[3.516rem] 3xl:py-[4.688rem] 4xl:py-[6.25rem] max-sm:px-[0.229rem] px-[0.625rem] md:px-[0.763rem] xl:px-[0.834rem] 2xl:px-[0.879rem] 3xl:px-[1.172rem] 4xl:px-[1.563rem]">
          {featuredJobs.map((job, idx) => (
            <React.Fragment key={`job-${job.id || idx}`}>
              {idx === 6 && (
                <div key={`ad-agency-${idx}`} className="w-max mx-auto col-span-2 text-center flex flex-col justify-center max-sm:py-[2rem] max-sm:gap-[1.099rem] gap-[3rem] md:gap-[3.659rem] xl:gap-[4.002rem] 2xl:gap-[4.219rem] 3xl:gap-[5.625rem] 4xl:gap-[7.5rem]">
                  <h2 className="leading-[1.33em] font-bold max-sm:text-[1.5rem] text-[1.9rem] md:text-[2.317rem] xl:text-[2.535rem] 2xl:text-[2.672rem] 3xl:text-[3.563rem] 4xl:text-[4.75rem]">
                    Haven't<br />
                    Found<br />
                    The Perfect<br />
                    Job?
                  </h2>
                  <div>
                    <Link href="/" className="inline-block leading-none font-bold border-brand-yellow max-sm:border-[0.125rem] border-[0.138rem] md:border-[0.168rem] xl:border-[0.184rem] 2xl:border-[0.194rem] 3xl:border-[0.258rem] 4xl:border-[0.344rem] uppercase text-brand-yellow rounded-full cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white max-sm:text-[0.75rem] text-[0.6rem] md:text-[0.732rem] xl:text-[0.8rem] 2xl:text-[0.844rem] 3xl:text-[1.125rem] 4xl:text-[1.5rem] max-sm:py-[0.137rem] py-[0.375rem] md:py-[0.458rem] xl:py-[0.501rem] 2xl:py-[0.528rem] 3xl:py-[0.704rem] 4xl:py-[0.938rem] max-sm:px-[0.879rem] px-[2.4rem] md:px-[2.927rem] xl:px-[3.202rem] 2xl:px-[3.375rem] 3xl:px-[4.5rem] 4xl:px-[6rem]">Advanced Search</Link>
                  </div>
                </div>
              )}
              <JobLoopItem key={idx} job={job} className={idx > 5 ? 'md:flex hidden' : ''} />
            </React.Fragment>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-sm:gap-[1rem] gap-[0.8rem] md:gap-[0.976rem] xl:gap-[1.067rem] 2xl:gap-[1.125rem] 3xl:gap-[1.5rem] 4xl:gap-[2rem] max-sm:py-[0.916rem] py-[2.5rem] md:py-[3.049rem] xl:py-[3.335rem] 2xl:py-[3.516rem] 3xl:py-[4.688rem] 4xl:py-[6.25rem] max-sm:px-[0.229rem] px-[0.625rem] md:px-[0.763rem] xl:px-[0.834rem] 2xl:px-[0.879rem] 3xl:px-[1.172rem] 4xl:px-[1.563rem]">
          {featuredCreatives.map((creative, idx) => (
            <React.Fragment key={`creative-${creative.id || idx}`}>
              {idx === 6 && (
                <div key={`ad-agency-${idx}`} className="w-max mx-auto col-span-2 text-center flex flex-col justify-center max-sm:py-[2rem] max-sm:gap-[1.099rem] gap-[3rem] md:gap-[3.659rem] xl:gap-[4.002rem] 2xl:gap-[4.219rem] 3xl:gap-[5.625rem] 4xl:gap-[7.5rem]">
                  <h2 className="leading-[1.33em] font-bold max-sm:text-[1.5rem] text-[1.9rem] md:text-[2.317rem] xl:text-[2.535rem] 2xl:text-[2.672rem] 3xl:text-[3.563rem] 4xl:text-[4.75rem]">
                    Want<br />
                    Your <TmText text='ProFile' /><br />
                    Featured?
                  </h2>
                  <div>
                    <Link href="/" className="block leading-none font-bold border-brand-yellow max-sm:border-[0.125rem] border-[0.138rem] md:border-[0.168rem] xl:border-[0.184rem] 2xl:border-[0.194rem] 3xl:border-[0.258rem] 4xl:border-[0.344rem] uppercase text-brand-yellow rounded-full cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white max-sm:text-[0.75rem] text-[0.6rem] md:text-[0.732rem] xl:text-[0.8rem] 2xl:text-[0.844rem] 3xl:text-[1.125rem] 4xl:text-[1.5rem] max-sm:py-[0.137rem] py-[0.375rem] md:py-[0.458rem] xl:py-[0.501rem] 2xl:py-[0.528rem] 3xl:py-[0.704rem] 4xl:py-[0.938rem] max-sm:px-[0.879rem] px-[2.4rem] md:px-[2.927rem] xl:px-[3.202rem] 2xl:px-[3.375rem] 3xl:px-[4.5rem] 4xl:px-[6rem]">See How</Link>
                  </div>
                </div>
              )}
              <CreativeLoopItem key={idx} creative={creative} className={idx > 5 ? 'md:flex hidden' : ''} />
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* News */}
      <section id="news" className="max-sm:pb-[0.879rem] pb-[2.4rem] md:pb-[2.927rem] xl:pb-[3.202rem] 2xl:pb-[3.375rem] 3xl:pb-[4.5rem] 4xl:pb-[6rem] border-white border-y-2 relative">
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
        <div className="mx-auto max-sm:px-5 px-10 relative z-1">
          <SectionHeading headingContent={'News'} className='max-sm:py-[0.659rem] py-[1.8rem] md:py-[2.196rem] xl:py-[2.401rem] 2xl:py-[2.531rem] 3xl:py-[3.375rem] 4xl:py-[4.5rem]' />
          <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 max-sm:gap-3 gap-15 w-full items-center relative">
            {mentorTopics?.length > 0 && (
              <div><ResourceLoopItem resource={mentorTopics[0]} /></div>
            )}
            {(mentorTopics?.length > 4) && (
              <div className='col-span-2 max-sm:space-y-1 space-y-4 grid grid-cols-2 max-sm:gap-3 gap-15 items-start'>
                {mentorTopics.slice(1, 5).map((topic, idx) => (
                  <ResourceLoopItem key={idx} resource={topic} />
                ))}
              </div>
            )}
            {mentorTopics?.length > 5 && (
              <div><ResourceLoopItem resource={mentorTopics[5]} /></div>
            )}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="mx-auto max-sm:px-[1.5rem] px-[1.25rem] md:px-[1.525rem] xl:px-[1.667rem] 2xl:px-[1.758rem] 3xl:px-[2.344rem] 4xl:px-[3.125rem] max-sm:pb-[1.758rem] pb-[4.8rem] md:pb-[5.855rem] xl:pb-[6.403rem] 2xl:pb-[6.75rem] 3xl:pb-[9rem] 4xl:pb-[12rem]">
        <SectionHeading headingContent={'Publications'} className='text-right' />
        <div className="flex w-full justify-center relative max-sm:gap-[0.732rem] gap-[2rem] md:gap-[2.439rem] xl:gap-[2.668rem] 2xl:gap-[2.813rem] 3xl:gap-[3.75rem] 4xl:gap-[5rem]">
          {/* Background */}
          <AnimatedBackdrop className={'max-sm:py-0 py-0'} />
          <PublicationList publications={publicationResources} />
        </div>
      </section>

      {/* Featured Cities */}
      <section id="featured-cities" className="max-sm:py-5 py-20 border-white border-y-2 relative max-sm:px-[0.549rem] px-[1.5rem] md:px-[1.83rem] xl:px-[2.001rem] 2xl:px-[2.109rem] 3xl:px-[2.813rem] 4xl:px-[3.75rem]">
        <div className="mx-auto relative z-1">
          <SectionHeading headingContent={'Featured Cities'} className='max-sm:pb-[1.282rem] pb-[3.5rem] md:pb-[4.269rem] xl:pb-[4.669rem] 2xl:pb-[4.922rem] 3xl:pb-[6.563rem] 4xl:pb-[8.75rem]' />
          <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 max-sm:gap-[0.732rem] gap-[2rem] md:gap-[2.439rem] xl:gap-[2.668rem] 2xl:gap-[2.813rem] 3xl:gap-[3.75rem] 4xl:gap-[5rem] max-sm:mt-[0.659rem] mt-[1.8rem] md:mt-[2.196rem] xl:mt-[2.401rem] 2xl:mt-[2.531rem] 3xl:mt-[3.375rem] 4xl:mt-[4.5rem] w-full items-center relative">
            {featuredCities?.length > 0 && (
              <div className='col-span-2'><FeaturedCityLoopItem featuredCity={featuredCities[0]} /></div>
            )}
            {(featuredCities?.length > 4) && (
              <div className='col-span-2 max-sm:space-y-1 space-y-4 grid grid-cols-2 items-start max-sm:gap-[0.732rem] gap-[2rem] md:gap-[2.439rem] xl:gap-[2.668rem] 2xl:gap-[2.813rem] 3xl:gap-[3.75rem] 4xl:gap-[5rem]'>
                {featuredCities.slice(1, 5).map((topic, idx) => (
                  <FeaturedCityLoopItem key={idx} featuredCity={topic} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <section className='mt-36'>
      </section>
    </div>
  );
};

export default TheLounge;