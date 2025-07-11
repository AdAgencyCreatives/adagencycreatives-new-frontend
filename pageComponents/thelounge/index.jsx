'use client';

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
import ActionLinkDiv from 'components/ActionLinkDiv';
import SectionHeading from 'components/SectionHeading';
import useFeaturedJobs from 'hooks/useFeaturedJobs';
import JobLoopItem from 'pageComponents/jobs/loop/item';
import CallToActionLink from 'components/CallToActionLink';
import SpotlightLoopPreloader from 'pageComponents/spotlights/loop/preloader';
import JobLoopPreloader from 'pageComponents/jobs/loop/preloader';
import CreativeLoopPreloader from 'pageComponents/creatives/loop/preloader';
import PublicationLoopPreloader from 'pageComponents/publications/loop/preloader';
import FeaturedCityLoopPreloader from 'pageComponents/featured_cities/loop/preloader';

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
          <h1 className="text-5xl md:text-9xl 2xl:text-[182px] 3xl:text-[242px] 4xl:text-[323.4px] font-bold text-primary">The Lounge</h1>
          <div className="font-bold max-sm:space-x-[0.586rem] space-x-[1.6rem] md:space-x-[1.952rem] xl:space-x-[2.134rem] 2xl:space-x-[2.25rem] 3xl:space-x-[3rem] 4xl:space-x-[4rem] mt-4 md:mt-10 3xl:mt-20 max-sm:text-[0.75rem] text-[1.05rem] md:text-[1.281rem] xl:text-[1.401rem] 2xl:text-[1.477rem] 3xl:text-[1.969rem] 4xl:text-[2.625rem] text-white relative z-1">
            <ActionLinkDiv href="#spotlight">spotlight</ActionLinkDiv>
            <ActionLinkDiv href="#chat">chat</ActionLinkDiv>
            <ActionLinkDiv href="#featured">featured</ActionLinkDiv>
            <ActionLinkDiv href="#news">news</ActionLinkDiv>
            <ActionLinkDiv href="#publications">publications</ActionLinkDiv>
            <ActionLinkDiv href="#cities">cities</ActionLinkDiv>
          </div>
        </div>
      </section>

      {/* Spotlight */}
      <section id="spotlight" className=" mx-auto max-sm:px-[0.934rem] px-[2.55rem] md:px-[3.11rem] xl:px-[3.402rem] 2xl:px-[3.586rem] 3xl:px-[4.781rem] 4xl:px-[6.375rem] max-sm:pt-[0.293rem] pt-[0.8rem] md:pt-[0.976rem] xl:pt-[1.067rem] 2xl:pt-[1.125rem] 3xl:pt-[1.5rem] 4xl:pt-[2rem] max-sm:pb-[2rem] pb-[1.4rem] md:pb-[1.708rem] xl:pb-[1.868rem] 2xl:pb-[1.969rem] 3xl:pb-[2.625rem] 4xl:pb-[3.5rem]">
        <SectionHeading headingContent={'Spotlight'} className='text-right max-sm:pb-[1.282rem] pb-[3.5rem] md:pb-[4.269rem] xl:pb-[4.669rem] 2xl:pb-[4.922rem] 3xl:pb-[6.563rem] 4xl:pb-[8.75rem]' />
        <div className='relative'>
          {/* Background */}
          <AnimatedBackdrop className={'max-sm:w-[100%]'} />
          <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 items-center relative max-sm:gap-[0.806rem] gap-[2.2rem] md:gap-[2.683rem] xl:gap-[2.935rem] 2xl:gap-[3.094rem] 3xl:gap-[4.125rem] 4xl:gap-[5.5rem] max-sm:h-[22.357rem] h-[61.05rem] md:h-[74.464rem] xl:h-[81.44rem] 2xl:h-[85.852rem] 3xl:h-[114.469rem] 4xl:h-[152.625rem]">
            {(spotlightCreatives && spotlightCreatives?.length > 0) ? (<>
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
            </>) : (<>
              <SpotlightLoopPreloader className='' />
              <SpotlightLoopPreloader className='' />
              <SpotlightLoopPreloader className='' />
              <SpotlightLoopPreloader className='' />
              <div></div>
              <SpotlightLoopPreloader className='' />
              <SpotlightLoopPreloader className='' />
              <SpotlightLoopPreloader className='' />
              <div></div>
              <div></div>
              <SpotlightLoopPreloader className='' />
              <SpotlightLoopPreloader className='' />
              <div></div>
              <div></div>
              <div></div>
              <SpotlightLoopPreloader className='' />
            </>)}
            <div className="absolute left-0 font-bold leading-none max-sm:text-[1.375rem] text-[3.95rem] md:text-[4.818rem] xl:text-[5.269rem] 2xl:text-[5.555rem] 3xl:text-[7.406rem] 4xl:text-[9.875rem] max-sm:bottom-[1.044rem] bottom-[2.85rem] md:bottom-[3.476rem] xl:bottom-[3.802rem] 2xl:bottom-[4.008rem] 3xl:bottom-[5.344rem] 4xl:bottom-[7.125rem]">
              <div>Gather.</div>
              <div>Inspire.</div>
              <div className="text-primary">Do Cool $#*t!</div>
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
                  <input type="text" className="font-inter w-3xs m-2 outline-none" placeholder="Find a member..." />
                </div>
                <div className="bg-black rounded-full font-inter text-[14px]">0</div>
              </div>
            </div>
          </div>
          <div className="text-center min-h-[50vh] justify-center flex flex-col">
            <p className="font-inter mb-4 text-[26px]">No members found.</p>
            <p className="font-inter mb-4 text-[16px]">Try another search.</p>
          </div> */}
        </div>
      </section>

      {/* Featured Jobs+Creatives */}
      <section id="featured" className="mx-auto max-sm:pt-[1.125rem] max-sm:px-[0.458rem] px-[1.25rem] md:px-[1.525rem] xl:px-[1.667rem] 2xl:px-[1.758rem] 3xl:px-[2.344rem] 4xl:px-[3.125rem]">
        <SectionHeading headingContent={'Featured'} className='text-right max-sm:pb-[1.282rem] pb-[3.5rem] md:pb-[4.269rem] xl:pb-[4.669rem] 2xl:pb-[4.922rem] 3xl:pb-[6.563rem] 4xl:pb-[8.75rem]' />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-sm:gap-[1rem] gap-[0.8rem] md:gap-[0.976rem] xl:gap-[1.067rem] 2xl:gap-[1.125rem] 3xl:gap-[1.5rem] 4xl:gap-[2rem] max-sm:py-[0.916rem] py-[2.5rem] md:py-[3.049rem] xl:py-[3.335rem] 2xl:py-[3.516rem] 3xl:py-[4.688rem] 4xl:py-[6.25rem] max-sm:px-[0.229rem] px-[0.625rem] md:px-[0.763rem] xl:px-[0.834rem] 2xl:px-[0.879rem] 3xl:px-[1.172rem] 4xl:px-[1.563rem]">
          {(featuredJobs && featuredJobs?.length > 0) ? (<>
            {featuredJobs.map((job, idx) => (
              <React.Fragment key={`job-${job.id || idx}`}>
                {idx === 6 && (
                  <div key={`ad-agency-${idx}`} className="z-1 w-full relative col-span-2 flex flex-col justify-between max-sm:py-[2rem] max-sm:gap-[1.099rem] gap-[3rem] md:gap-[3.659rem] xl:gap-[4.002rem] 2xl:gap-[4.219rem] 3xl:gap-[5.625rem] 4xl:gap-[7.5rem]">
                    <AnimatedBackdrop className={'z-0'} />
                    <div className='max-sm:gap-[3.55rem] gap-[3.55rem] md:gap-[4.33rem] xl:gap-[4.736rem] 2xl:gap-[4.992rem] 3xl:gap-[6.656rem] 4xl:gap-[8.875rem] w-max z-1 mx-auto text-center flex flex-col justify-center h-full'>
                      <h2 className="leading-[1.33em] font-bold max-sm:text-[1.5rem] text-[1.9rem] md:text-[2.317rem] xl:text-[2.535rem] 2xl:text-[2.672rem] 3xl:text-[3.563rem] 4xl:text-[4.75rem]">
                        Haven't<br />
                        Found<br />
                        The Perfect<br />
                        Job?
                      </h2>
                      <div>
                        <CallToActionLink href="/" className="uppercase">
                          Advanced Search
                        </CallToActionLink>
                      </div>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-sm:gap-[1rem] gap-[0.8rem] md:gap-[0.976rem] xl:gap-[1.067rem] 2xl:gap-[1.125rem] 3xl:gap-[1.5rem] 4xl:gap-[2rem] max-sm:py-[0.916rem] py-[2.5rem] md:py-[3.049rem] xl:py-[3.335rem] 2xl:py-[3.516rem] 3xl:py-[4.688rem] 4xl:py-[6.25rem] max-sm:px-[0.229rem] px-[0.625rem] md:px-[0.763rem] xl:px-[0.834rem] 2xl:px-[0.879rem] 3xl:px-[1.172rem] 4xl:px-[1.563rem]">
          {(featuredCreatives && featuredCreatives?.length > 0) ? (<>
            {featuredCreatives.map((creative, idx) => (
              <React.Fragment key={`creative-${creative.id || idx}`}>
                {idx === 6 && (
                  <div key={`ad-agency-${idx}`} className="relative col-span-2 flex flex-col justify-center max-sm:py-[2rem] max-sm:gap-[1.099rem] gap-[3rem] md:gap-[3.659rem] xl:gap-[4.002rem] 2xl:gap-[4.219rem] 3xl:gap-[5.625rem] 4xl:gap-[7.5rem]">
                    <AnimatedBackdrop className={'z-0'} />
                    <div className='max-sm:gap-[3.55rem] gap-[3.55rem] md:gap-[4.33rem] xl:gap-[4.736rem] 2xl:gap-[4.992rem] 3xl:gap-[6.656rem] 4xl:gap-[8.875rem] w-max z-1 mx-auto text-center flex flex-col justify-center h-full'>
                      <h2 className="leading-[1.33em] font-bold max-sm:text-[1.5rem] text-[1.9rem] md:text-[2.317rem] xl:text-[2.535rem] 2xl:text-[2.672rem] 3xl:text-[3.563rem] 4xl:text-[4.75rem]">
                        Want<br />
                        Your <TmText text='ProFile' /><br />
                        Featured?
                      </h2>
                      <div>
                        <CallToActionLink href="/" className="uppercase w-full">
                          See How
                        </CallToActionLink>
                      </div>
                    </div>
                  </div>
                )}
                <CreativeLoopItem key={idx} creative={creative} className={idx > 5 ? 'md:flex hidden' : ''} />
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

      {/* News */}
      <section id="news" className="max-sm:pb-[2.5rem] pb-[4.8rem] md:pb-[5.855rem] xl:pb-[6.403rem] 2xl:pb-[6.75rem] 3xl:pb-[9rem] 4xl:pb-[12rem] border-white border-y-2 relative">
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
              <div><ResourceLoopItem resource={{ title: '10 tips to get hired', image: '/resource1.avif', href: '/resources-internship' }} /></div>
            )}
            {(mentorTopics?.length > 4) && (
              <div className='col-span-2 max-sm:space-y-1 space-y-4 grid grid-cols-2 max-sm:gap-3 gap-15 items-start'>
                <ResourceLoopItem resource={{ title: 'where is market', image: '/resource1.avif', href: '/resources-inspiration' }} />
                <ResourceLoopItem resource={{ title: 'best portfolio', image: '/resource1.avif', href: '/resources-portfolio' }} />
                <ResourceLoopItem resource={{ title: 'what to say in bio', image: '/resource1.avif', href: '/resources-writers' }} />
                <ResourceLoopItem resource={{ title: 'how to run interview', image: '/resource1.avif', href: '/resources-designers' }} />
              </div>
            )}
            {mentorTopics?.length > 5 && (
              <div><ResourceLoopItem resource={{ title: '10 tips to get hired', image: '/resource1.avif', href: '/resources-business' }} /></div>
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
          {(publicationResources && publicationResources?.length > 0) ? (<>
            <PublicationList publications={publicationResources} />
          </>) : (<>
            <div className={`item-group space-y-16 max-sm:mt-16 mt-80 flex flex-col max-sm:gap-[0.732rem] gap-[2rem] md:gap-[2.439rem] xl:gap-[2.668rem] 2xl:gap-[2.813rem] 3xl:gap-[3.75rem] 4xl:gap-[5rem]`}>
              <PublicationLoopPreloader className='' />
              <PublicationLoopPreloader className='' />
              <PublicationLoopPreloader className='' />
            </div>
            <div className={`item-group space-y-16 flex flex-col max-sm:gap-[0.732rem] gap-[2rem] md:gap-[2.439rem] xl:gap-[2.668rem] 2xl:gap-[2.813rem] 3xl:gap-[3.75rem] 4xl:gap-[5rem]`}>
              <PublicationLoopPreloader className='' />
              <PublicationLoopPreloader className='' />
              <PublicationLoopPreloader className='' />
            </div>
            <div className={`item-group space-y-16 max-sm:mt-16 mt-80 flex flex-col max-sm:gap-[0.732rem] gap-[2rem] md:gap-[2.439rem] xl:gap-[2.668rem] 2xl:gap-[2.813rem] 3xl:gap-[3.75rem] 4xl:gap-[5rem]`}>
              <PublicationLoopPreloader className='' />
              <PublicationLoopPreloader className='' />
              <PublicationLoopPreloader className='' />
            </div>
            <div className={`item-group space-y-16 flex flex-col max-sm:gap-[0.732rem] gap-[2rem] md:gap-[2.439rem] xl:gap-[2.668rem] 2xl:gap-[2.813rem] 3xl:gap-[3.75rem] 4xl:gap-[5rem]`}>
              <PublicationLoopPreloader className='' />
              <PublicationLoopPreloader className='' />
              <PublicationLoopPreloader className='' />
            </div>
          </>)}
        </div>
      </section>

      {/* Featured Cities */}
      <section id="cities" className="max-sm:py-5 py-20 border-white border-y-2 relative max-sm:px-[0.549rem] px-[1.5rem] md:px-[1.83rem] xl:px-[2.001rem] 2xl:px-[2.109rem] 3xl:px-[2.813rem] 4xl:px-[3.75rem]">
        <div className="mx-auto relative z-1">
          <SectionHeading headingContent={'Featured Cities'} className='max-sm:pb-[1.282rem] pb-[3.5rem] md:pb-[4.269rem] xl:pb-[4.669rem] 2xl:pb-[4.922rem] 3xl:pb-[6.563rem] 4xl:pb-[8.75rem]' />
          <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 max-sm:gap-[0.732rem] gap-[2rem] md:gap-[2.439rem] xl:gap-[2.668rem] 2xl:gap-[2.813rem] 3xl:gap-[3.75rem] 4xl:gap-[5rem] max-sm:mt-[0.659rem] mt-[1.8rem] md:mt-[2.196rem] xl:mt-[2.401rem] 2xl:mt-[2.531rem] 3xl:mt-[3.375rem] 4xl:mt-[4.5rem] w-full items-center relative max-sm:mb-[0.366rem] mb-[1rem] md:mb-[1.22rem] xl:mb-[1.334rem] 2xl:mb-[1.406rem] 3xl:mb-[1.875rem] 4xl:mb-[2.5rem]">
            {(featuredCities && featuredCities?.length > 0) ? (<>
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
            </>) : (<>
              <div className='col-span-2'><FeaturedCityLoopPreloader className='' /></div>
              <div className='col-span-2 max-sm:space-y-1 space-y-4 grid grid-cols-2 items-start max-sm:gap-[0.732rem] gap-[2rem] md:gap-[2.439rem] xl:gap-[2.668rem] 2xl:gap-[2.813rem] 3xl:gap-[3.75rem] 4xl:gap-[5rem]'>
                <FeaturedCityLoopPreloader className='' />
                <FeaturedCityLoopPreloader className='' />
                <FeaturedCityLoopPreloader className='' />
                <FeaturedCityLoopPreloader className='' />
              </div>
            </>)}
          </div>
        </div>
      </section>
      <section className='creative p-[24px]!'>
        <footer className="flex flex-row justify-center w-full z-11 py-[10px] text-gray-400 space-y-1">
          <p className="font-inter text-center font-normal uppercase mt-2 px-12 md:px-2 transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF]">© {(new Date()).getFullYear()} Ad Agency Creatives. All Rights Reserved.</p>
        </footer>
      </section>
    </div>
  );
};

export default TheLounge;