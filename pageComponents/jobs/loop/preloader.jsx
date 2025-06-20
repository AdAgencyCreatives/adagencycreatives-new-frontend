'use client';

import AvatarPreloader from "components/AvatarPreloader";
import ContentLinePreloader from "components/ContentLinePreloader";

const JobLoopPreloader = ({ className = '' }) => {

    return (
        <div className={`card relative text-center flex flex-col justify-between items-center ${className}`}>
            <div className="relative flex items-center justify-center h-[142px] md:h-[200px] 2xl:h-[224px] 3xl:h-[310px] 4xl:h-[416px]">
                <AvatarPreloader className="" />
            </div>
            <div className="w-full space-y-">
                <ContentLinePreloader className="" />
                <ContentLinePreloader className="" />
                <div className="separator w-full mx-auto"></div>
                <ContentLinePreloader className="" />
            </div>
        </div>
    );
};

export default JobLoopPreloader;