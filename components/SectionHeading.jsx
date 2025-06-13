'use client';

const SectionHeading = ({ headingContent, className='' }) => {
    return (
        <>
            <h2 className={`font-bold leading-[1.33em] max-sm:text-[1.725rem] text-[3.45rem] md:text-[4.208rem] xl:text-[4.602rem] 2xl:text-[4.852rem] 3xl:text-[6.469rem] 4xl:text-[8.625rem] max-sm:py-[0.879rem] py-[2.4rem] md:py-[2.927rem] xl:py-[3.202rem] 2xl:py-[3.375rem] 3xl:py-[4.5rem] 4xl:py-[6rem] ${className}`}>
                {headingContent}
            </h2>
        </>
    );
};

export default SectionHeading;