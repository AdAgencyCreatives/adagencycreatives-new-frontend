import Link from "next/link";
import { LiaSignInAltSolid } from "react-icons/lia";

export default function Home() {
  return (
    <div className="px-10 flex flex-col justify-center items-center relative min-h-screen">
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
      <section className="w-[78%] mx-auto z-9 flex flex-col md:flex-row px-0 md:px-10 xl:px-15 2xl:px-50 items-center justify-center h-full w-full gap-10 md:gap-0 home">
        {/* Left Column */}
        <div className="flex flex-1 w-1.0 h-1.0 order-2 md:order-1">
          <div className="relative flex flex-1 flex-col justify-center md:aspect-square">
            <div
              className="spline-container spline-container-left w-[150%] h-[150%] hidden md:inline-block"
              dangerouslySetInnerHTML={{
                __html:
                  '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>',
              }}
            ></div>
            <div className="relative flex flex-1 flex-col justify-center md:aspect-square">
              <Link href="/creatives" className="cursor-pointer">
                <h1 className="text-4xl md:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-alta tracking-wide text-center md:text-left">
                  CREATIVES
                </h1>
              </Link>
              <div className="border-b border-white my-4 hidden md:block"></div>
              <div className="flex gap-4 justify-center md:justify-start items-center">
                <Link
                  href="/jobs-directory"
                  className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] block md:hidden"
                >
                  search jobs
                </Link>
                <div className="text-[#6E6E6E] block md:hidden">|</div>
                <Link
                  href="/creatives-signin"
                  className="inline-flex items-center justify-start text-white gap-4 cursor-pointer flex-row-reverse md:flex-row"
                >
                  <LiaSignInAltSolid className="text-[36px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]" />
                  <span className="text-[19px] xl:text-[21px] 2xl:text-[24px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]">
                    sign in
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Center Logo */}
        <div className="relative shrink-0 order-1 md:order-2 p-20 md:p-0">
          <div
            className="absolute inset-0 w-[100%] h-[100%] inline-block md:hidden rounded-full overflow-hidden"
            dangerouslySetInnerHTML={{
              __html:
                '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>',
            }}
          ></div>
          <div className="w-30 h-30 md:w-90 md:h-90">
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
            className="spline-container spline-container-right w-[150%] h-[150%] hidden md:inline-block"
            dangerouslySetInnerHTML={{
              __html:
                '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>',
            }}
          ></div>
          <div className="relative flex flex-1 flex-col justify-center md:aspect-square">
            <Link href="/agencies" className="cursor-pointer">
              <h1 className="text-4xl md:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-alta tracking-wide text-center md:text-right">
                AGENCIES
              </h1>
            </Link>
            <div className="border-b border-white my-4 hidden md:block"></div>
            <div className="flex gap-4 justify-center md:justify-end items-center">
              <Link
                href="/creatives-directory"
                className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a] block md:hidden"
              >
                hire talent
              </Link>
              <div className="text-[#6E6E6E] block md:hidden">|</div>
              <Link
                href="/agencies-signin"
                className="inline-flex items-center justify-end text-white gap-4 cursor-pointer"
              >
                <span className="text-[19px] xl:text-[21px] 2xl:text-[24px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]">
                  sign in
                </span>
                <LiaSignInAltSolid className="text-[36px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Nav */}
      <div className="absolute z-11 bottom-6 left-0 right-0 px-6 justify-between items-end font-semibold hidden md:flex w-full">
        <Link
          href="/jobs-directory"
          className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]"
        >
          search jobs
        </Link>
        <Link
          href="/creatives-directory"
          className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]"
        >
          hire talent
        </Link>
      </div>
    </div>
  );
}
