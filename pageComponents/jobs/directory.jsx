import PageHeader from "components/PageHeader";
import JobLoopItem from "./loop/item";
import Link from "next/link";

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

const JobsDirectory = () => {
  return (
    <>
      <div className="text-center space-y-6 max-w-[1014px] mx-auto pt-40 relative">
        <PageHeader
          page="jobs"
          heading="Directory"
        />

        <div className="w-full px-10 mx-auto mb-40 z-2 relative text-left">
          <label className="font-wix text-[19px] text-[#c2c2c2]">Search</label>
          <div className="flex items-center justify-center">
            <input
              type="email"
              placeholder="title, name, location, etc."
              className="bg-transparent border-b border-white outline-none w-full text-[19px] text-white placeholder-white font-wix py-6 focus:bg-black/50"
            />
          </div>
        </div>
      </div>

      {/* Featured Jobs */}
      <section className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredJobs.map((job, idx) => (
            <>
              {idx === 6 && (
                <div className="col-span-2 text-center flex flex-col justify-center gap-10">
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
    </>
  );
};

export default JobsDirectory;