import LinkWrapper from 'components/LinkWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const FeaturedCityLoopItem = ({ featuredCity }) => {
    return (
        <LinkWrapper href={featuredCity.href} className='group transition-all'
        >
            <div className="max-sm:rounded-[0.504rem] rounded-[1.375rem] md:rounded-[1.677rem] xl:rounded-[1.834rem] 2xl:rounded-[1.934rem] 3xl:rounded-[2.579rem] 4xl:rounded-[3.438rem] outline outline-3 md:outline-8 lg:outline-12 3xl:outline-16 4xl:outline-21 outline-white group-hover:outline-brand-yellow shadow-light md:shadow-(--ad-box-shadow) transition relative bg-black pt-3 md:pt-0 aspect-square">
                <div className="absolute inset-0">
                    <Image
                        src={featuredCity.image}
                        width="48" height="48" alt=""
                        className="w-full h-full max-sm:rounded-[0.504rem] rounded-[1.375rem] md:rounded-[1.677rem] xl:rounded-[1.834rem] 2xl:rounded-[1.934rem] 3xl:rounded-[2.579rem] 4xl:rounded-[3.438rem]"
                    />
                    <p className="absolute bottom-0 left-0max-sm:py-[0.33rem] py-[0.9rem] md:py-[1.098rem] xl:py-[1.201rem] 2xl:py-[1.266rem] 3xl:py-[1.688rem] 4xl:py-[2.25rem] max-sm:px-[0.33rem] px-[0.9rem] md:px-[1.098rem] xl:px-[1.201rem] 2xl:px-[1.266rem] 3xl:px-[1.688rem] 4xl:px-[2.25rem] leading-[1.33em] text-white group-hover:text-brand-yellow lowercase font-bold font-inter max-sm:text-[0.625rem] text-[1.1rem] md:text-[1.342rem] xl:text-[1.467rem] 2xl:text-[1.547rem] 3xl:text-[2.063rem] 4xl:text-[2.75rem] ">{featuredCity.name}</p>
                </div>
            </div>
        </LinkWrapper>
    );
};

export default FeaturedCityLoopItem;