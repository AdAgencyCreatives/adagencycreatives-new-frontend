'use client';

import Image from 'next/image';

const featuredJobs = [
  { title: 'Junior Designer', agency: 'AD AGENCY CORP', location: 'NYC / REMOTE' },
  { title: 'UX Designer', agency: 'AD AGENCY CORP', location: 'NYC / REMOTE' },
  { title: 'Creative Director', agency: 'AD AGENCY CORP', location: 'NYC / REMOTE' },
  { title: 'Copywriter', agency: 'AD AGENCY CORP', location: 'NYC / REMOTE' },
  { title: 'Art Director', agency: 'AD AGENCY CORP', location: 'NYC / REMOTE' },
];

const resources = ['Internships', 'Portfolio', 'Inspiration', 'Writers', 'Designers', 'Business'];

const featuredAgencies = ['Gamarance', 'Helvetor', 'RODOND'];

const featuredCreatives = [
  { name: 'Jane Doe', title: 'Junior Designer', location: 'NYC / REMOTE' },
  { name: 'John Smith', title: 'Senior UX Designer', location: 'NYC / REMOTE' },
  { name: 'Amy Li', title: 'Creative Director', location: 'NYC / REMOTE' },
  // Add more...
];

const Creatives = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="text-center py-24 bg-black bg-dots">
        <h1 className="text-[14rem] font-bold mb-4">Creatives</h1>
        <div className="space-x-5 text-[1.7rem] text-yellow-400 mt-4">
          <a href="#">create pro®file</a>
          <a href="#">search jobs</a>
          <a href="#">resources</a>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold mb-10">Featured Jobs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredJobs.map((job, idx) => (
            <div key={idx} className="bg-zinc-900 p-4 rounded-2xl border border-white/10 text-center">
              <div className="mb-2 text-yellow-400 text-sm">{job.title}</div>
              <div className="text-white font-semibold">{job.agency}</div>
              <div className="text-sm text-gray-400">{job.location}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-6 bg-zinc-950">
        <h2 className="text-4xl font-bold mb-10">Resources</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {resources.map((r, i) => (
            <div key={i} className="border border-white/20 p-6 rounded-lg hover:border-yellow-400 transition">
              <div className="text-lg font-semibold text-white">{r}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Agencies */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold mb-10">Featured Agencies</h2>
        <div className="flex gap-6 overflow-auto">
          {featuredAgencies.map((agency, i) => (
            <div key={i} className="min-w-[200px] bg-zinc-800 p-8 rounded-lg text-center text-white font-semibold text-xl">
              {agency}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Creatives */}
      <section className="py-20 px-6 bg-zinc-950">
        <h2 className="text-4xl font-bold mb-10">Featured Creatives</h2>
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
        
        <div className="grid md:grid-cols-3 gap-12 text-left mt-16 max-w-5xl mx-auto">
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