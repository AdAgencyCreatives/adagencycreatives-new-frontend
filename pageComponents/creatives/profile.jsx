import Link from 'next/link';
import Image from 'next/image';
import { profileMenu, infoMenu, user } from './constants';

const CreativesProfile = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-10 pt-40">
      <div className="grid grid-cols-3 gap-14 relative">
        <div
          className="spline-container inset-0 m-auto z-0"
          dangerouslySetInnerHTML={{ __html: '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>' }}
        ></div>
        <div 
          className="rounded-4xl border-(--ad-gray) border shadow-(--ad-box-shadow) px-10 py-10 text-center col-span-2 bg-black/30 relative z-1"
          style={{ backdropFilter: "var(--backdrop-filter, none)" }}
        >
          <div className="flex gap-10 items-start">
            <div className="relative flex flex-col justify-between items-center gap-16 w-3xs shrink-0">
              <div className="relative flex items-center">
                <Image src={user.image} width="256" height="162" alt={user.title} className="image-mask" />
              </div>
              <div className="w-[67px] h-[67px] absolute top-0 right-0 left-0 bottom-0 flex justify-center mx-auto my-auto">
                <Image src="/aac-logo.png" width="67" height="67" alt={user.title} className="hover:rotate-45 transition-transform duration-3000" />
              </div>
              <div>
                <div className="font-alta font-bold text-[30px] text-brand-yellow">{user.name}</div>
                <div className="text-white font-semibold text-[20px] hover:text-brand-yellow lowercase leading-[26px]">{user.title}</div>
                <div className="my-3 border-b-2 w-[60%] mx-auto" />
                <div className="font-alta font-bold text-[16px] text-brand-yellow">{user.location}</div>
              </div>
            </div>
            <div className="text-left">
              <ul className="flex justify-between mb-10">
                {profileMenu.map((item, index) => {
                  return (
                    <li key={index} className="lowercase text-brand-yellow hover:text-white">
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  )
                })}
              </ul>
              <p className="font-alta text-[16px] text-brand-yellow font-bold mb-2">ABOUT</p>
              <p className="font-wix text-[18px]" dangerouslySetInnerHTML={{ __html: user.about }}></p>
            </div>
          </div>
        </div>
        <div 
          className="rounded-4xl border-(--ad-gray) border shadow-(--ad-box-shadow) px-10 py-10 bg-black/30 relative z-1"
          style={{ backdropFilter: "var(--backdrop-filter, none)" }}
        >
          <div className="flex flex-col gap-14">
            <div>
              <p className="font-alta font-bold uppercase text-base text-brand-yellow mb-2">Years of Experience</p>
              <p className="lowercase hover:text-brand-yellow text-white text-xl">{user.experience}</p>
            </div>
            <div>
              <p className="font-alta font-bold uppercase text-base text-brand-yellow mb-2">Industry Experience</p>
              <p className="lowercase hover:text-brand-yellow text-white text-xl">{user.industry}</p>
            </div>
            <div>
              <p className="font-alta font-bold uppercase text-base text-brand-yellow mb-2">Media Experience</p>
              <p className="lowercase hover:text-brand-yellow text-white text-xl">{user.media}</p>
            </div>
            <div>
              <p className="font-alta font-bold uppercase text-base text-brand-yellow mb-2">Type of Work</p>
              <p className="lowercase hover:text-brand-yellow text-white text-xl">{user.work}</p>
            </div>
            <div>
              <p className="font-alta font-bold uppercase text-base text-brand-yellow mb-2">Strengths</p>
              <p className="lowercase hover:text-brand-yellow text-white text-xl">{user.strength}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-4xl border-(--ad-gray) border shadow-(--ad-box-shadow) px-10 py-10 mt-40 mb-24">
        <div className="flex gap-12">
          <div className="flex-[45%] relative rounded-4xl overflow-hidden mt-20 shadow-(--ad-box-shadow)">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/info.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-left flex-[55%]">
            <ul className="flex justify-between mb-20">
              {infoMenu.map((item, index) => {
                return (
                  <li key={index} className="lowercase text-brand-yellow hover:text-white">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                )
              })}
            </ul>
            <p className="font-alta text-[16px] text-brand-yellow font-bold mb-2">Info</p>
            <p className="font-wix text-[18px]" dangerouslySetInnerHTML={{ __html: user.info }}></p>
            <Link href="/" className="border-brand-yellow border-4 uppercase text-brand-yellow rounded-full text-base px-20 py-4 cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white mt-10 mb-20 inline-block">CTA</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativesProfile;