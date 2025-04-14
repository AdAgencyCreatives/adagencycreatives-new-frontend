'use client';

import Image from 'next/image';
import Link from 'next/link';
import JobLoopItem from 'pageComponents/jobs/loop/item';
import CreativeLoopItem from './loop/item';
import PageHeader from 'components/PageHeader';

const featuredJobs = [
  { title: 'Senior UX User Experience Designer', image: '/job1.avif', agency: 'AD AGENCY CORP', location: 'NEW YORK, NY' },
  { title: 'Junior Motion Graphics Designer', image: '/job2.avif', agency: 'AD AGENCY CORP', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/job3.avif', agency: 'AD AGENCY CORP', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/job4.avif', agency: 'AD AGENCY CORP', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/job5.avif', agency: 'AD AGENCY CORP', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/job6.avif', agency: 'AD AGENCY CORP', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/job7.avif', agency: 'AD AGENCY CORP', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/job8.avif', agency: 'AD AGENCY CORP', location: 'NEW YORK, NY' },
];

const resources = [
  { title: 'internships', image: '/resource1.avif', href: '/resources-internship' },
  { title: 'inspiration', image: '/resource1.avif', href: '/resources-inspiration' },
  { title: 'portfolio', image: '/resource1.avif', href: '/resources-portfolio' },
  { title: 'WRITERS', image: '/resource1.avif', href: '/resources-writers' },
  { title: 'DESIGNERS', image: '/resource1.avif', href: '/resources-designers' },
  { title: 'business', image: '/resource1.avif', href: '/resources-business' }
];

const featuredAgencies = ['Gamarance', 'Helvetor', 'RODOND'];

const featuredCreatives = [
  { title: 'Senior UX User Experience Designer', image: '/creative1.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Junior Motion Graphics Designer', image: '/creative2.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/creative3.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/creative3.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/creative3.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/creative3.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/creative3.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/creative3.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Senior UX User Experience Designer', image: '/creative1.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Junior Motion Graphics Designer', image: '/creative2.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/creative3.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/creative3.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/creative3.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/creative3.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/creative3.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
  { title: 'Creative Director', image: '/creative3.avif', agency: 'ANZO VALLANTE', location: 'NEW YORK, NY' },
];

const Creatives = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative py-40 text-center">
        <PageHeader
          page=""
          heading="Creatives"
        />
        <div className="space-x-5 text-[1.7rem] text-yellow-400 mt-20">
          <a href="#">create pro®file</a>
          <a href="#">search jobs</a>
          <a href="#">resources</a>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-10">
        <h2 className="text-7xl font-bold mb-10">Featured Jobs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredJobs.map((job, idx) => (
            <>
              {idx === 6 && (
                <div key={`perfect-${idx}`} className="col-span-2 text-center flex flex-col justify-center gap-10">
                  <h2 className="text-[48px] leading-[62px]">Haven't<br />Found<br />The Perfect<br />Job?</h2>
                  <div>
                  <Link href="/" className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-sm px-8 py-4 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white">Advanced Search</Link>
                  </div>
                </div>
              )}
            
              <JobLoopItem key={idx} job={job} />
            </>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-6 bg-zinc-950">
        <h2 className="text-4xl font-bold mb-10">Resources</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {resources.map((resources, idx) => (
            <div key={idx} className="rounded-2xl border-white border-20 shadow-(--ad-box-shadow) hover:border-yellow-400 transition relative">
              <Image src={resources.image} width="257" height="257" alt="" className="rounded-2xl bg-black w-full" />
              <div className="absolute bottom-2 left-2">
                <Image src="/aac-logo-white.avif" width="48" height="48" alt="" />
                <div className="text-white lowercase">{resources.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Creatives */}
      <section className="py-10">
        <h2 className="text-4xl font-bold mb-10">Featured Creatives</h2>
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

      {/* Featured Creatives */}
      <section className="py-20 px-6 bg-zinc-950">
        <h2 className="text-4xl font-bold mb-10 text-right">Featured Creatives</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {featuredCreatives.map((c, i) => (
            <div key={i} className="bg-zinc-900 p-4 rounded-2xl text-center">
              <div className="aspect-square bg-zinc-700 rounded-full mb-4" />
              <div className="text-white font-semibold">{c.name}</div>
              <div className="text-sm text-gray-400">{c.title}</div>
              <div className="text-sm text-gray-500">{c.location}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Create Profile */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold">Create Pro<span className="text-yellow-400">®</span>file</h2>
        <p className="mt-4 text-lg text-gray-300">Create. Inspire. <span className="text-yellow-400">Get Hired!</span></p>
        
        <div className="grid md:grid-cols-3 gap-12 text-left mt-16">
          <div>
            <h3 className="text-xl font-bold mb-2">1. Create Profile</h3>
            <p className="text-gray-400">Claim your space in the club...</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">2. Creatives Network</h3>
            <p className="text-gray-400">Discover writers, designers...</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">3. Get Hired</h3>
            <p className="text-gray-400">Work on brand campaigns...</p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="bg-white/5 p-8 rounded-xl max-w-xl text-left">
            <div className="text-xl font-bold text-yellow-400">Anzo Vaillante</div>
            <div className="text-sm text-gray-300 mb-4">Creative Director</div>
            <p className="text-gray-400">
              Meet Anzo, one of our Creative Pioneer Awardees...
            </p>
            <button className="mt-4 px-4 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full">
              Read Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creatives;