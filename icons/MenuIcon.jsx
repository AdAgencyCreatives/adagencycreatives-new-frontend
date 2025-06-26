'use client';

const MenuIcon = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 61 40"
      fill="none"
      className={[
        "max-sm:w-[2.1rem] w-[2.1rem] md:w-[2.561rem] xl:w-[2.801rem] 2xl:w-[2.953rem] 3xl:w-[3.938rem] 4xl:w-[5.25rem]",
        "max-sm:h-[1.6rem] h-[1.6rem] md:h-[1.952rem] xl:h-[2.134rem] 2xl:h-[2.25rem] 3xl:h-[3rem] 4xl:h-[4rem]"
      ].join(' ')}
      onClick={onClick}
    >
      <path d="M60.6669 0.978027V4.17803H0.933594V0.978027H60.6669Z" fill="currentColor" />
      <path d="M60.6669 18.4004V21.6004H0.933594V18.4004H60.6669Z" fill="currentColor" />
      <path d="M60.6669 35.8223V39.0223H0.933594V35.8223H60.6669Z" fill="currentColor" />
    </svg>
  );
};

export default MenuIcon;