const AboutPage = () => {
  return (
    <>
      <section>
        <h2 className="text-[6.5rem] font-extrabold text-white text-right leading-20">About</h2>

        <p className="text-3xl font-medium leading-10 text-right">
          <span className="text-yellow-400 font-bold">AD AGENCY CREATIVES</span>{' '}
          IS AN EMPOWERMENT PLATFORM DESIGNED TO GET CREATIVES <br />
          HIRED BY AGENCIES IN THE U.S. WE LEVERAGE THE EXPERTISE OF CREATIVE RECRUITERS<br />
          <span className="text-yellow-400 font-bold">
            TO HELP AGENCIES AND BRANDS WITH CREATIVE TALENT.
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


  