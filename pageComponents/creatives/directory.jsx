import PageHeader from "components/PageHeader";
import CreativeLoopItem from "./loop/item";
import Link from "next/link";

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

const CreativesDirectory = () => {
  return (
    <>
      <div className="text-center space-y-6 max-w-[1014px] mx-auto pt-40 relative">
        <PageHeader
          page="creatives"
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
            {/* <button className="ml-2 text-white text-[37px] pb-6">
              <LiaSignInAltSolid />
            </button> */}
          </div>
        </div>
      </div>

      {/* Featured Creatives */}
      <section className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredCreatives.map((creative, idx) => (
            <>
              {idx === 6 && (
                <div className="col-span-2 text-center flex flex-col justify-center gap-10">
                  <h2 className="text-[48px] leading-[62px]">Haven't<br />Found<br />The Perfect<br />Match?</h2>
                  <div>
                    <Link href="/" className="border-yellow-400 border-4 uppercase text-yellow-400 rounded-full text-sm px-8 py-4 cursor-pointer hover:border-white hover:bg-yellow-400 hover:text-white">Advanced Search</Link>
                  </div>
                </div>
              )}

              {idx === 15 && (
                <div className="col-span-2 text-center flex flex-col justify-center gap-10">
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
    </>
  );
};

export default CreativesDirectory;