'use client';

import Image from 'next/image';
import Link from 'next/link';
import JobLoopItem from 'pageComponents/jobs/loop/item';
import { featuredJobs } from 'constants/jobs';
import { featuredCreatives } from 'constants/creatives';
import { featuredAgencies } from 'constants/agencies';
import AgenciesLoopItem from 'pageComponents/agencies/loop/item';
import SpotlightLoopItem from 'pageComponents/spotlights/loop/item';
import CreativeLoopItem from 'pageComponents/creatives/loop/item';

const TheLounge = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative py-40 text-center relative">
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
        <div className="relative z-1">
          <h1 className="text-[197px] leading-60 font-bold">The Lounge</h1>
          <div className="space-x-6 text-[1.7rem] text-white mt-20">
            <a href="#">spotlight</a>
            <a href="#">chat</a>
            <a href="#">featured</a>
            <a href="#">news</a>
            <a href="#">publications</a>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <h2 className="text-8xl font-bold mb-10 text-right pb-40">Spotlight</h2>
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
          <SpotlightLoopItem 
            spotlight={{ title: 'art director', name: 'AnZO VALLANTE', image: '/resource1.avif', href: '/resources-internship' }}
          />
          <SpotlightLoopItem 
            spotlight={{ title: 'art director', name: 'AnZO VALLANTE', image: '/resource1.avif', href: '/resources-inspiration' }}
          />
          <SpotlightLoopItem 
            spotlight={{ title: 'art director', name: 'AnZO VALLANTE', image: '/resource1.avif', href: '/resources-inspiration' }}
          />
          <SpotlightLoopItem 
            spotlight={{ title: 'art director', name: 'AnZO VALLANTE', image: '/resource1.avif', href: '/resources-inspiration' }}
          />
          <div></div>
          <SpotlightLoopItem 
            spotlight={{ title: 'art director', name: 'AnZO VALLANTE', image: '/resource1.avif', href: '/resources-portfolio' }}
          />
          <SpotlightLoopItem 
            spotlight={{ title: 'art director', name: 'AnZO VALLANTE', image: '/resource1.avif', href: '/resources-writers' }}
          />
          <SpotlightLoopItem 
            spotlight={{ title: 'art director', name: 'AnZO VALLANTE', image: '/resource1.avif', href: '/resources-designers' }}
          />
          <div></div>
          <div></div>
          <SpotlightLoopItem 
            spotlight={{ title: 'art director', name: 'AnZO VALLANTE', image: '/resource1.avif', href: '/resources-business' }}
          />
          <SpotlightLoopItem 
            spotlight={{ title: 'art director', name: 'AnZO VALLANTE', image: '/resource1.avif', href: '/resources-inspiration' }}
          />
          <div></div>
          <div></div>
          <div></div>
          <SpotlightLoopItem 
            spotlight={{ title: 'art director', name: 'AnZO VALLANTE', image: '/resource1.avif', href: '/resources-inspiration' }}
          />
        </div>
      </section>

      {/* Featured Creatives */}
      <section className="py-10">
        <h2 className="text-8xl font-bold mb-10 text-right">Featured</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredCreatives.map((creative, idx) => (
            <>
              {idx === 6 && (
                <div key={`ad-agency-${idx}`} className="col-span-2 text-center flex flex-col justify-center gap-10">
                  <h2 className="text-[48px] leading-[62px]">
                    We are<br />
                    <span className="font-alta">AD AGENCY</span><br />
                    <span className="font-alta">CREATIVES</span>
                  </h2>
                  <div>
                    <Link href="/" className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-sm px-8 py-4 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white">Advanced Search</Link>
                  </div>
                </div>
              )}

              {idx === 15 && (
                <div key={`profile-${idx}`} className="col-span-2 text-center flex flex-col justify-center gap-10">
                  <h2 className="text-[48px] leading-[62px]">Want<br />Your Pro®file<br />Featured?</h2>
                  <div>
                    <Link href="/" className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-sm px-8 py-4 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white">See How</Link>
                  </div>
                </div>
              )}
            
              <CreativeLoopItem key={idx} creative={creative} />
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TheLounge;