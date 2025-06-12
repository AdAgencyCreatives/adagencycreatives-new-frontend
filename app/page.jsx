import Link from "next/link";
import { LiaSignInAltSolid } from "react-icons/lia";

export default function Home() {
  return (
    <div className="px-10 max-sm:pt-20 flex flex-1 flex-col justify-start md:justify-center items-center relative">
      {/* Background */}
      <div className="absolute inset-0 z-0 w-[88%] mx-auto hidden md:inline-block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        >
          <source src="/home/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Center Split Section */}
      <div className="absolute inset-0 h-[101%] z-1 mx-auto" style={{ background: 'radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 1) 100%)' }}></div>
      <section className="mx-auto z-9 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center justify-between h-full w-full max-sm:gap-1 gap-0">
        {/* Left Column */}
        <div className="max-sm:mt-2 flex flex-1 w-1.0 h-1.0 order-2 md:order-1">
          <div className="relative flex flex-1 flex-col justify-center md:aspect-square">
            <div className="home-box-left relative flex flex-1 flex-col justify-center md:aspect-square">
              <Link href="/creatives" className="z-1 max-sm:leading-none max-sm:text-[3.2rem] text-[3.2rem] md:text-[3.903rem] xl:text-[4.269rem] 2xl:text-[4.5rem] 3xl:text-[6rem] 4xl:text-[8rem] font-alta tracking-wide text-center cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow">
                CREATIVES
              </Link>
              <div className="max-sm:ml-[2.5rem] ml-[2.5rem] md:ml-[3.049rem] xl:ml-[3.335rem] 2xl:ml-[3.516rem] 3xl:ml-[4.688rem] 4xl:ml-[6.25rem] border-b border-white my-4 hidden md:block"></div>
              <div className="flex gap-4 justify-center md:justify-start items-center mt-2">
                <Link
                  href="/jobs-directory"
                  className="font-bold text-lg transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow block md:hidden"
                >
                  search jobs
                </Link>
                <div className="text-[#6E6E6E] block md:hidden">|</div>
                <Link
                  href="/creatives-signin"
                  className="max-sm:ml-[0rem] ml-[2.5rem] md:ml-[3.049rem] xl:ml-[3.335rem] 2xl:ml-[3.516rem] 3xl:ml-[4.688rem] 4xl:ml-[6.25rem] z-1 inline-flex items-center justify-start text-white gap-4 cursor-pointer flex-row-reverse md:flex-row  transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow"
                >
                  <LiaSignInAltSolid className="max-sm:text-[1.6rem] text-[1.6rem] md:text-[1.952rem] xl:text-[2.134rem] 2xl:text-[2.25rem] 3xl:text-[3rem] 4xl:text-[4rem] md:rotate-180" />
                  <span className="font-bold max-sm:text-[0.8rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] font-bold">
                    sign in
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="z-0 spline-container spline-container-left w-[100%] h-[100%] hidden md:flex scale-100 3xl:scale-115 4xl:scale-150"
              dangerouslySetInnerHTML={{
                __html:
                  '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>',
              }}
            ></div>
          </div>
        </div>

        {/* Center Logo */}
        <div className="relative shrink-0 order-1 md:order-2 aspect-square">
          <div className="max-sm:absolute max-sm:inset-0 max-sm:flex max-sm:flex-row max-sm:justify-center max-sm:items-center w-[112px] md:w-[300px] 3xl:w-[400px] 4xl:w-[533px] mx-auto relative">
            <Link href={"/thelounge"} className="z-1">
              <img
                src="/aac-logo-round.png"
                alt="Center Logo"
                className="hover:rotate-45 transition-transform duration-3000"
              />
            </Link>
          </div>
          <div
              className="z-0 spline-container w-[100%] h-[100%] hidden max-sm:flex"
              dangerouslySetInnerHTML={{
                __html:
                  '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>',
              }}
            ></div>
        </div>

        <div className="border-b border-[#F2F4FE] my-4 block md:hidden order-3 w-full"></div>

        {/* Right Column */}
        <div className="relative flex flex-1 flex-col justify-center md:aspect-square text-right order-4">
          <div className="home-box-right relative flex flex-1 flex-col justify-center md:aspect-square">
            <Link href="/agencies" className="z-1 max-sm:leading-none max-sm:text-[3.2rem] text-[3.2rem] md:text-[3.903rem] xl:text-[4.269rem] 2xl:text-[4.5rem] 3xl:text-[6rem] 4xl:text-[8rem] font-alta tracking-wide text-center cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow">
              AGENCIES
            </Link>
            <div className="max-sm:mr-[2.5rem] mr-[2.5rem] md:mr-[3.049rem] xl:mr-[3.335rem] 2xl:mr-[3.516rem] 3xl:mr-[4.688rem] 4xl:mr-[6.25rem] border-b border-white my-4 hidden md:block"></div>
            <div className="flex gap-4 justify-center md:justify-end items-center mt-2">
              <Link
                href="/creatives-directory"
                className="font-bold text-lg transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow block md:hidden"
              >
                hire talent
              </Link>
              <div className="text-[#6E6E6E] block md:hidden">|</div>
              <Link
                href="/agencies-signin"
                className="max-sm:mr-[0rem] mr-[2.5rem] md:mr-[3.049rem] xl:mr-[3.335rem] 2xl:mr-[3.516rem] 3xl:mr-[4.688rem] 4xl:mr-[6.25rem] z-1 inline-flex items-center justify-end text-white gap-4 cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow"
              >
                <span className="font-bold max-sm:text-[0.8rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem] font-bold">
                  sign in
                </span>
                <LiaSignInAltSolid className="max-sm:text-[1.6rem] text-[1.6rem] md:text-[1.952rem] xl:text-[2.134rem] 2xl:text-[2.25rem] 3xl:text-[3rem] 4xl:text-[4rem]" />
              </Link>
            </div>
          </div>
          <div
            className="z-0 spline-container spline-container-right w-[100%] h-[100%] hidden md:flex scale-100 3xl:scale-115 4xl:scale-150"
            dangerouslySetInnerHTML={{
              __html:
                '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>',
            }}
          ></div>
        </div>
      </section>

      {/* Bottom Nav */}
      {/* <div className="absolute z-11 bottom-6 left-0 right-0 px-10 4xl:px-[61.33px] justify-between items-end font-semibold hidden md:flex w-full"></div> */}
    </div>
  );
}
