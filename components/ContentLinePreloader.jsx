const ContentLinePreloader = ({className = ''}) => {
    return (
         <div className={`placeholder content-line max-sm:h-[1.2rem] h-[1.2rem] md:h-[1.464rem] xl:h-[1.601rem] 2xl:h-[1.688rem] 3xl:h-[2.25rem] 4xl:h-[3rem] max-sm:mb-[0.146rem] mb-[0.4rem] md:mb-[0.488rem] xl:mb-[0.534rem] 2xl:mb-[0.563rem] 3xl:mb-[0.75rem] 4xl:mb-[1rem] max-sm:rounded-[0.293rem] rounded-[0.8rem] md:rounded-[0.976rem] xl:rounded-[1.067rem] 2xl:rounded-[1.125rem] 3xl:rounded-[1.5rem] 4xl:rounded-[2rem] ${className}`}></div>
    );
};
export default ContentLinePreloader;