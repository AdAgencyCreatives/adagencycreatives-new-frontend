import Link from "next/link";
import { LiaSignInAltSolid } from "react-icons/lia";

export default function Home() {
  return (
    <div className="px-10 max-sm:pt-20 flex flex-1 flex-col justify-start md:justify-center items-center relative">
      {/* Background */}
      <div className="absolute inset-0 z-0 w-[88%] mx-auto">
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
      <div className="absolute inset-0 h-[101%] z-1 w-[88%] mx-auto" style={{ background: 'radial-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 1) 100%)' }}></div>
      <section
        className="w-[78%] mx-auto z-9 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] px-0 md:px-10 xl:px-15 2xl:px-40 3xl:px-50 4xl:px-64 items-center justify-between h-full w-full gap-10 md:gap-0"
      >
        {/* Left Column */}
        <div className="flex flex-1 w-1.0 h-1.0 order-2 md:order-1">
          <div className="relative flex flex-1 flex-col justify-center md:aspect-square">
            <div
              className="zoom-home spline-container spline-container-left w-[150%] h-[150%] hidden md:inline-block"
              dangerouslySetInnerHTML={{
                __html:
                  '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>',
              }}
            ></div>
            <div className="relative flex flex-1 flex-col justify-center md:aspect-square">
              <Link href="/creatives" className="text-4xl md:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-alta tracking-wide text-center md:text-left cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow">
                CREATIVES
              </Link>
              <div className="border-b border-white my-4 hidden md:block"></div>
              <div className="flex gap-4 justify-center md:justify-start items-center mt-6">
                <Link
                  href="/jobs-directory"
                  className="font-bold text-lg transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow block md:hidden"
                >
                  search jobs
                </Link>
                <div className="text-[#6E6E6E] block md:hidden">|</div>
                <Link
                  href="/creatives-signin"
                  className="inline-flex items-center justify-start text-white gap-4 cursor-pointer flex-row-reverse md:flex-row  transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow"
                >
                  <LiaSignInAltSolid className="text-[36px] rotate-180" />
                  <span className="font-bold text-lg 3xl:text-2xl 4xl:text-[32px] font-bold">
                    Sign in
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Center Logo */}
        <div className="relative shrink-0 order-1 md:order-2 aspect-square">
          <div
            className="absolute inset-0 w-full h-full md:h-[600px] mx-auto my-auto inline-block md:hidden rounded-full overflow-hidden z-0 aspect-square zoom-home"
            dangerouslySetInnerHTML={{
              __html:
                '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode" classname="w-full h-full"></spline-viewer>',
            }}
          ></div>
          <div className="max-sm:absolute max-sm:inset-0 max-sm:flex max-sm:flex-row max-sm:justify-center max-sm:items-center w-[112px] md:w-[300px] 3xl:w-[400px] 4xl:w-[533px] mx-auto z-1 relative">
            <Link href={"/thelounge"}>
              <img
                src="/aac-logo-round.png"
                alt="Center Logo"
                className="hover:rotate-45 transition-transform duration-3000"
              />
            </Link>
          </div>
          {/* <div className="absolute w-full h-full left-0 top-0 box-border rounded-full bg-black">Todo: Animate</div> */}
        </div>

        <div className="border-b border-[#F2F4FE] my-4 block md:hidden order-3 w-full"></div>

        {/* Right Column */}
        <div className="relative flex flex-1 flex-col justify-center md:aspect-square text-right order-4">
          <div
            className="zoom-home spline-container spline-container-right w-[150%] h-[150%] hidden md:inline-block"
            dangerouslySetInnerHTML={{
              __html:
                '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>',
            }}
          ></div>
          <div className="relative flex flex-1 flex-col justify-center md:aspect-square">
            <Link href="/agencies" className="text-4xl md:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-alta tracking-wide text-center md:text-right cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow">
              AGENCIES
            </Link>
            <div className="border-b border-white my-4 hidden md:block"></div>
            <div className="flex gap-4 justify-center md:justify-end items-center mt-6">
              <Link
                href="/creatives-directory"
                className="font-bold text-lg transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow block md:hidden"
              >
                hire talent
              </Link>
              <div className="text-[#6E6E6E] block md:hidden">|</div>
              <Link
                href="/agencies-signin"
                className="inline-flex items-center justify-end text-white gap-4 cursor-pointer transition delay-150 duration-300 ease-in-out text-white hover:text-brand-yellow"
              >
                <span className="font-bold text-lg 3xl:text-2xl 4xl:text-[32px] font-bold">
                  Sign in
                </span>
                <LiaSignInAltSolid className="text-[36px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Nav */}
      {/* <div className="absolute z-11 bottom-6 left-0 right-0 px-10 4xl:px-[61.33px] justify-between items-end font-semibold hidden md:flex w-full"></div> */}
    </div>
  );
}
