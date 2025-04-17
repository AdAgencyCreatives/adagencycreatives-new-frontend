const About = () => {
  return (
    <>
      <section className="max-w-[1600px] mx-auto px-10 h-[50vh] pt-[128px]">
        <h2 className="text-[6.5rem] font-extrabold text-white text-right leading-20">About</h2>

        <p className="text-3xl font-medium leading-10 text-right">
          <span className="text-yellow-400 font-bold">AD AGENCY CREATIVES</span>{' '}
          IS AN EMPOWERMENT PLATFORM DESIGNED TO GET CREATIVES <br />
          HIRED BY AGENCIES IN THE U.S. WE LEVERAGE THE EXPERTISE OF CREATIVE RECRUITERS<br />
          <span className="text-yellow-400 font-bold">
            TO HELP AGENCIES AND BRANDS WITH CREATIVE TALENT.
          </span>
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


  