'use client';

const CloseIcon = ({ className = '', onClick = (e) => { } }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 49 48"
      fill="none"
      className={[
        "max-sm:w-[1.6rem] w-[1.6rem] md:w-[1.952rem] xl:w-[2.134rem] 2xl:w-[2.25rem] 3xl:w-[3rem] 4xl:w-[4rem]",
        "max-sm:h-[1.6rem] h-[1.6rem] md:h-[1.952rem] xl:h-[2.134rem] 2xl:h-[2.25rem] 3xl:h-[3rem] 4xl:h-[4rem]",
        className,
      ].join(' ')}
      onClick={onClick}
    >
      <path d="M44.3492 1.31684L46.6119 3.57958L4.37407 45.8174L2.11133 43.5547L44.3492 1.31684Z" fill="currentColor" />
      <path d="M46.1275 43.1255L43.8648 45.3883L1.62691 3.15044L3.88965 0.887695L46.1275 43.1255Z" fill="currentColor" />
    </svg>
  );
};

export default CloseIcon;