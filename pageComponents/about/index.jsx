const AboutPage = () => {
  return (
    <>
      <section className="max-w-6xl w-full space-y-6">
        <h2 className="text-6xl sm:text-7xl font-extrabold text-white text-right">About</h2>

        <p className="text-lg sm:text-xl font-medium leading-relaxed text-right">
          <span className="text-yellow-400 font-bold">AD AGENCY CREATIVES</span>{' '}
          IS AN EMPOWERMENT PLATFORM DESIGNED TO GET CREATIVES HIRED BY AGENCIES IN THE U.S. WE
          LEVERAGE THE EXPERTISE OF CREATIVE RECRUITERS TO{' '}
          <span className="text-yellow-400 font-bold">
            HELP AGENCIES AND BRANDS WITH CREATIVE TALENT.
          </span>
        </p>

        <hr className="border-white my-10" />

        <div className="bg-black w-full py-20">
          <h3 className="text-[8rem] sm:text-[10rem] font-extrabold tracking-tight leading-none">
            <span className="text-yellow-400">20</span>
            <span className="text-white">YEARS</span>
          </h3>
        </div>
      </section>
    </>
  );
}

export default AboutPage;


  