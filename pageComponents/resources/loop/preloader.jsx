'use client';

import ContentLinePreloader from "components/ContentLinePreloader";
import Image from "next/image";

const ResourceLoopPreloader = ({ showLogo = true, logoClassName='', className = '' }) => {
    return (
        <div className={`group transition-all ${className}`}>
            <div className="relative max-sm:rounded-[0.146rem] rounded-[0.4rem] md:rounded-[0.488rem] xl:rounded-[0.534rem] 2xl:rounded-[0.563rem] 3xl:rounded-[0.75rem] 4xl:rounded-[1rem] outline max-sm:outline-[0.192rem] outline-[0.525rem] md:outline-[0.641rem] xl:outline-[0.701rem] 2xl:outline-[0.739rem] 3xl:outline-[0.985rem] 4xl:outline-[1.313rem] outline-white group-hover:outline-primary shadow-light md:shadow-(--ad-box-shadow) transition relative bg-black pt-0 ">
                <Image src={'/dot.png'} width="257" height="257" alt="" className="bg-black w-full invisible" />
                <div className="absolute left-0 top-0 w-full h-full">
                    {showLogo && (
                        <div className={`absolute right-0 m-2 md:m-5 ${logoClassName}`}>
                            <Image src="/aac-logo-white.avif" width={36} height={36} alt="" className={`aspect-square max-sm:w-[1.318rem] w-[3.6rem] md:w-[4.391rem] xl:w-[4.802rem] 2xl:w-[5.063rem] 3xl:w-[6.75rem] 4xl:w-[9rem]`} />
                        </div>
                    )}
                    <div className='absolute bottom-0 p-1 md:p-3 w-full'>
                        <ContentLinePreloader className="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceLoopPreloader;