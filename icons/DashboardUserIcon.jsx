'use client';

const DashboardUserIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            className={[
                "max-sm:w-[1.422rem] w-[1.422rem] md:w-[1.735rem] xl:w-[1.897rem] 2xl:w-[2rem] 3xl:w-[2.667rem] 4xl:w-[3.556rem]",
                "max-sm:h-[1.422rem] h-[1.422rem] md:h-[1.735rem] xl:h-[1.897rem] 2xl:h-[2rem] 3xl:h-[2.667rem] 4xl:h-[3.556rem]"
            ].join(' ')}
        >
            <path opacity="0.4" d="M16.0007 15.9896C19.6825 15.9896 22.6673 13.0048 22.6673 9.32292C22.6673 5.64102 19.6825 2.65625 16.0007 2.65625C12.3188 2.65625 9.33398 5.64102 9.33398 9.32292C9.33398 13.0048 12.3188 15.9896 16.0007 15.9896Z" fill="currentColor" />
            <path d="M16.0009 19.3281C9.32085 19.3281 3.88086 23.8081 3.88086 29.3281C3.88086 29.7015 4.17419 29.9948 4.54753 29.9948H27.4542C27.8275 29.9948 28.1208 29.7015 28.1208 29.3281C28.1208 23.8081 22.6809 19.3281 16.0009 19.3281Z" fill="currentColor" />
        </svg>
    );
};

export default DashboardUserIcon;

