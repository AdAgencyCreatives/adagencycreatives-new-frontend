import Link from "next/link";
import { LiaSignInAltSolid } from "react-icons/lia";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
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
      <section className="absolute inset-0 z-0 w-[88%] mx-auto z-9 flex flex-col md:flex-row px-10 xl:px-15 2xl:px-50 items-center justify-center h-full w-full gap-0 home">
        {/* Left Column */}
        <div className="flex flex-1 w-1.0 h-1.0">
          <div className="relative flex flex-1 flex-col justify-center aspect-square">
            <div className="spline-container spline-container-left" dangerouslySetInnerHTML={{ __html: '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>' }}></div>
            <div className="relative flex flex-1 flex-col justify-center aspect-square">
              <h1 className="text-5xl md:text-6xl font-alta tracking-wide">CREATIVES</h1>
              <div className="border-b border-white my-4"></div>
              <a href="#" className="inline-flex items-center justify-start text-white gap-4">
                <LiaSignInAltSolid className="text-[36px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]" />
                <span className="text-[19px] xl:text-[21px] 2xl:text-[24px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]">sign in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Center Logo */}
        <div className="relative w-90 h-90 shrink-0">
          <img src="/aac-logo-round.png" alt="Center Logo" className="w-full h-full object-contain hover:rotate-45 transition-transform duration-3000" />
          {/* <div className="absolute w-full h-full left-0 top-0 box-border rounded-full bg-black">Todo: Animate</div> */}
        </div>

        {/* Right Column */}
        <div className="relative flex flex-1 flex-col justify-center aspect-square text-right">
          <div className="spline-container spline-container-right" dangerouslySetInnerHTML={{ __html: '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>' }}></div>
          <div className="relative flex flex-1 flex-col justify-center aspect-square">
            <h1 className="text-5xl md:text-6xl font-alta tracking-wide">AGENCIES</h1>
            <div className="border-b border-white my-4"></div>
            <a href="#" className="inline-flex items-center justify-end text-white gap-4">
              <span className="text-[19px] xl:text-[21px] 2xl:text-[24px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]">sign in</span>
              <LiaSignInAltSolid className="text-[36px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]" />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Nav */}
      <div className="absolute z-11 bottom-6 left-0 right-0 px-6 flex justify-between items-end font-semibold">
        <Link href="#" className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]">search jobs</Link>
        <Link href="#" className="text-[19px] xl:text-[21px] 2xl:text-[29px] transition delay-150 duration-300 ease-in-out text-white hover:text-[#ffcd1a]">hire talent</Link>
      </div>
    </div>
  );
}
