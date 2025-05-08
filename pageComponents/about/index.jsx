const About = () => {
  return (
    <>
      <section className="mx-auto px-6 md:px-10 h-auto xl:h-[50vh] pt-[128px]">
        <h2 className="text-5xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[166px] font-bold text-white text-right mb-10">About</h2>

        <p className="text-2xl 3xl:text-[40px] 4xl:text-[53px] font-bold text-right">
          AD AGENCY CREATIVES IS AN <span className="text-[#FFCD1A]">EMPOWERMENT</span> PLATFORM DESIGNED TO GET CREATIVES <br />
          HIRED BY AGENCIES IN THE U.S. <br className="block md:hidden"/> <br className="block md:hidden"/> WE <span className="text-[#FFCD1A]">LEVERAGE</span> THE EXPERTISE OF CREATIVE RECRUITERS<br />
          TO HELP AGENCIES AND BRANDS WITH <span className="text-[#FFCD1A]">CREATIVE</span> TALENT.
        </p>
      </section>
      <section className="bg-black w-full py-44 relative h-[50vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
}

export default About;


  