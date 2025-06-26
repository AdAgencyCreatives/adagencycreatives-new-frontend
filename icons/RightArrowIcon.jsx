'use client';

const RightArrowIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
            fill="none"
            className={[
                "max-sm:w-[1.301rem] w-[1.067rem] md:w-[1.301rem] xl:w-[1.423rem] 2xl:w-[1.5rem] 3xl:w-[2rem] 4xl:w-[2.667rem]",
                "max-sm:h-[1.301rem] h-[1.067rem] md:h-[1.301rem] xl:h-[1.423rem] 2xl:h-[1.5rem] 3xl:h-[2rem] 4xl:h-[2.667rem]"
            ].join(' ')}
        >
            <path d="M14.4297 6.53906L20.4997 12.6091L14.4297 18.6791" stroke="currentColor" strokeWidth="1.5" stroke-miter-limit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.5 12.6094H20.33" stroke="currentColor" strokeWidth="1.5" stroke-miter-limit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default RightArrowIcon;