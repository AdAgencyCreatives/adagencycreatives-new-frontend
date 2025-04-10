export default function Home() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 z-0">
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
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center h-screen w-full gap-0 px-10 home">
        {/* Left Column */}
        <div className="flex flex-1 w-1.0 h-1.0">
          <div className="relative flex flex-1 flex-col justify-center aspect-square">
            <div className="spline-container spline-container-left" dangerouslySetInnerHTML={{ __html: '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>' }}></div>
            <div className="relative flex flex-1 flex-col justify-center aspect-square left-content">
              <h1 className="text-5xl md:text-6xl font-alta tracking-wide">CREATIVES</h1>
              <div className="border-b border-white my-4"></div>
              <a href="#" className="inline-flex items-center justify-start text-white hover:underline gap-2">
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-semibold">sign in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Center Logo */}
        <div className="w-90 h-90 shrink-0">
          <img src="/aac-logo-round.png" alt="Center Logo" className="w-full h-full object-contain hover:rotate-45 transition-transform duration-5000" />
        </div>

        {/* Right Column */}
        <div className="relative flex flex-1 flex-col justify-center aspect-square text-right">
          <div className="spline-container spline-container-right" dangerouslySetInnerHTML={{ __html: '<spline-viewer url="https://prod.spline.design/8Kk8n4FoXe4tjJBu/scene.splinecode"></spline-viewer>' }}></div>
          <div className="relative flex flex-1 flex-col justify-center aspect-square right-content">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">AGENCIES</h1>
          <div className="border-b border-white my-4"></div>
          <a href="#" className="inline-flex items-center justify-end text-white hover:underline gap-2">
            <span className="font-semibold">sign in</span>
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </a>
          </div>
        </div>
      </section>

      {/* Bottom Nav */}
      <div className="absolute bottom-6 left-0 right-0 px-6 flex justify-between items-end font-semibold">
        <a href="#" className="hover:underline">search jobs</a>
        <a href="#" className="hover:underline">hire talent</a>
      </div>
    </>
  );
}
