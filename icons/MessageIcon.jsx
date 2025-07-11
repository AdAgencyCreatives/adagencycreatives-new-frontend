'use client';

const MessageIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 33"
            fill="none"
            className={[
                "max-sm:w-[1.422rem] w-[1.422rem] md:w-[1.735rem] xl:w-[1.897rem] 2xl:w-[2rem] 3xl:w-[2.667rem] 4xl:w-[3.556rem]",
                "max-sm:h-[1.422rem] h-[1.422rem] md:h-[1.735rem] xl:h-[1.897rem] 2xl:h-[2rem] 3xl:h-[2.667rem] 4xl:h-[3.556rem]"
            ].join(' ')}
        >
            <path opacity="0.4" d="M23.166 28.0807H9.83268C5.83268 28.0807 3.16602 26.0807 3.16602 21.4141V12.0807C3.16602 7.41406 5.83268 5.41406 9.83268 5.41406H23.166C27.166 5.41406 29.8327 7.41406 29.8327 12.0807V21.4141C29.8327 26.0807 27.166 28.0807 23.166 28.0807Z" fill="currentColor" />
            <path d="M16.5004 17.91C15.3804 17.91 14.247 17.5633 13.3804 16.8566L9.20702 13.5233C8.78035 13.1766 8.70036 12.55 9.04703 12.1233C9.39369 11.6966 10.0204 11.6166 10.447 11.9633L14.6204 15.2966C15.6337 16.11 17.3537 16.11 18.367 15.2966L22.5404 11.9633C22.967 11.6166 23.607 11.6833 23.9404 12.1233C24.287 12.55 24.2204 13.19 23.7804 13.5233L19.607 16.8566C18.7537 17.5633 17.6204 17.91 16.5004 17.91Z" fill="currentColor" />
        </svg>
    );
};

export default MessageIcon;
