const AvatarPreloader = ({className = ''}) => {
    return (
         <div className={`placeholder avatar rounded-full max-sm:w-[6rem] w-[9.05rem] md:w-[11.039rem] xl:w-[12.073rem] 2xl:w-[12.727rem] 3xl:w-[16.969rem] 4xl:w-[22.625rem] max-sm:h-[6rem] h-[9.05rem] md:h-[11.039rem] xl:h-[12.073rem] 2xl:h-[12.727rem] 3xl:h-[16.969rem] 4xl:h-[22.625rem] ${className}`}></div>
    );
};
export default AvatarPreloader;