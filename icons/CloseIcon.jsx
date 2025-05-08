const CloseIcon = ({ onClick }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 49 48" 
      fill="none" 
      className="w-[27px] h-[26px] 3xl:w-[36px] 3xl:h-[34.67px] 4xl:w-[48px] 4xl:h-[46.22px]"
      onClick={onClick}
    >
      <path d="M44.3492 1.31684L46.6119 3.57958L4.37407 45.8174L2.11133 43.5547L44.3492 1.31684Z" fill="white"/>
      <path d="M46.1275 43.1255L43.8648 45.3883L1.62691 3.15044L3.88965 0.887695L46.1275 43.1255Z" fill="white"/>
    </svg>
  );
};

export default CloseIcon;