const MenuIcon = ({ onClick }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 61 40" 
      fill="none"
      className="w-[33.6px] h-[21.4px] 3xl:w-[44.8px] 3xl:h-[28.53px] 4xl:w-[59.73px] 4xl:h-[38.04px]"
      onClick={onClick}
    >
      <path d="M60.6669 0.978027V4.17803H0.933594V0.978027H60.6669Z" fill="currentColor"/>
      <path d="M60.6669 18.4004V21.6004H0.933594V18.4004H60.6669Z" fill="currentColor"/>
      <path d="M60.6669 35.8223V39.0223H0.933594V35.8223H60.6669Z" fill="currentColor"/>
    </svg>
  );
};

export default MenuIcon;