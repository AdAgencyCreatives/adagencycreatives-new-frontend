'use client';

const HelpIcon = ({ className = '' }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 17"
            fill="none"
            className={[
                "max-sm:w-[1.301rem] w-[1.067rem] md:w-[1.301rem] xl:w-[1.423rem] 2xl:w-[1.5rem] 3xl:w-[2rem] 4xl:w-[2.667rem]",
                "max-sm:h-[1.301rem] h-[1.067rem] md:h-[1.301rem] xl:h-[1.423rem] 2xl:h-[1.5rem] 3xl:h-[2rem] 4xl:h-[2.667rem]",
                "max-sm:mb-[0.217rem] mb-[0.178rem] md:mb-[0.217rem] xl:mb-[0.237rem] 2xl:mb-[0.25rem] 3xl:mb-[0.333rem] 4xl:mb-[0.444rem]",
                className,
            ].join(' ')}
        >
            <g clipPath="url(#clip0_1364_11113)">
                <path d="M6.05967 6.7526C6.21641 6.30705 6.52578 5.93134 6.93298 5.69203C7.34018 5.45271 7.81894 5.36523 8.28446 5.44508C8.74998 5.52493 9.17222 5.76695 9.47639 6.12829C9.78057 6.48963 9.94705 6.94695 9.94634 7.41927C9.94634 8.7526 7.94634 9.41927 7.94634 9.41927M7.99967 12.0859H8.00634M14.6663 8.7526C14.6663 12.4345 11.6816 15.4193 7.99967 15.4193C4.31778 15.4193 1.33301 12.4345 1.33301 8.7526C1.33301 5.07071 4.31778 2.08594 7.99967 2.08594C11.6816 2.08594 14.6663 5.07071 14.6663 8.7526Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_1364_11113">
                    <rect width="16" height="16" fill="white" transform="translate(0 0.75)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default HelpIcon;
