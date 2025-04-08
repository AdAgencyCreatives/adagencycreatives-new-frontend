export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">
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

      {/* Top Nav */}
      <header className="flex items-center justify-between py-8 px-10 z-10 relative">
        <div className="">
          <img src="/aac-logo-header.png" alt="Logo" className="w-20 h-20 hover:rotate-45 transition-transform duration-5000" />
        </div>
        <nav className="flex gap-6 font-bold">
          <a href="#" className="text-white hover:text-gray-300">faq</a>
          <a href="#" className="text-white hover:text-gray-300">about</a>
          <a href="#" className="text-white hover:text-gray-300">the lounge</a>
          <a href="#" className="text-white hover:text-gray-300">dummy</a>
        </nav>
      </header>

      {/* Center Split Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center h-screen w-full gap-0 px-10">
        {/* Left Column */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">CREATIVES</h1>
          <div className="border-b border-white my-4"></div>
          <a href="#" className="inline-flex items-center justify-center text-white hover:underline gap-2">
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-semibold">sign in</span>
          </a>
        </div>

        {/* Center Logo */}
        <div className="w-90 h-90 shrink-0">
          <img src="/aac-logo-round.png" alt="Center Logo" className="w-full h-full object-contain hover:rotate-45 transition-transform duration-5000" />
        </div>

        {/* Right Column */}
        {/* <div className="flex-1 text-center md:text-left border-t md:border-t-0 md:border-l border-white p-6 md:pl-12">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">AGENCIES</h1>
          <a href="#" className="mt-6 inline-flex items-center justify-center text-white hover:underline gap-2">
            <span className="font-semibold">sign in</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div> */}

        <div className="flex-1 text-right">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">AGENCIES</h1>
          <div className="border-b border-white my-4"></div>
          <a href="#" className="inline-flex items-center justify-center text-white hover:underline gap-2">
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-semibold">sign in</span>
          </a>
        </div>
      </section>

      {/* Bottom Nav */}
      <footer className="absolute bottom-6 left-0 right-0 px-6 flex justify-between items-end font-semibold">
        <a href="#" className="hover:underline">search jobs</a>
        <a href="#" className="hover:underline">hire talent</a>
      </footer>

      {/* Legal Text */}
      <div className="absolute bottom-1 left-0 right-0 text-center text-xs text-gray-400 space-y-1">
        <div className="space-x-4">
          <a href="#" className="hover:underline">privacy policy</a>
          <a href="#" className="hover:underline">user agreement</a>
          <a href="#" className="hover:underline">contact us</a>
        </div>
        <p>© 2025 BY AD AGENCY CREATIVES. POWERED BY ANZO.STUDIO®</p>
      </div>
    </main>
  );
}
