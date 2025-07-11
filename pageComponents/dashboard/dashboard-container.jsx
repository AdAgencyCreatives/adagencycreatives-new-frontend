'use client';

import ImageLoader from 'components/ImageLoader';
import CallToActionLink from 'components/CallToActionLink';
import TmText from 'components/TmText';
import ActionLinkDiv from 'components/ActionLinkDiv';
import useAuth from 'hooks/useAuth';
import useConstants from 'hooks/useConstants';
import useDashboardUser from 'hooks/useDashboardUser';
import { usePathname } from 'next/navigation';

const DashboardContainer = ({ children }) => {

    const pathname = usePathname();
    const { creativeSidebarMenu, agenciesSidebarMenu } = useConstants();

    const { token, user } = useAuth();
    const { dashboard_user_image, dashboard_user_name, dashboard_user_location, dashboard_user_profile_url, dashboard_user } = useDashboardUser();

    const sidebarMenu = user?.role == "creative" ? creativeSidebarMenu : agenciesSidebarMenu;

    if (!token) {
        return (
            <section>
                <div>
                    <h3 className='text-center'>Login Please.</h3>
                </div>
            </section>
        );
    }

    return (
        <>
            <section
                className={[
                    "max-sm:px-[1.221rem] px-[3.334rem] md:px-[4.066rem] xl:px-[4.447rem] 2xl:px-[4.688rem] 3xl:px-[6.251rem] 4xl:px-[8.334rem]",
                    "max-sm:py-[1.067rem] py-[1.067rem] md:py-[1.301rem] xl:py-[1.423rem] 2xl:py-[1.5rem] 3xl:py-[2rem] 4xl:py-[2.667rem]",
                ].join(' ')}
            >
                <div
                    className={[
                        "flex max-sm:flex-col max-sm:justify-start justify-between max-sm:items-center item-start",
                        "max-sm:gap-[1.422rem] gap-[1.422rem] md:gap-[1.735rem] xl:gap-[1.897rem] 2xl:gap-[2rem] 3xl:gap-[2.667rem] 4xl:gap-[3.556rem]",
                    ].join(' ')}
                >
                    <div className="max-sm:w-full! w-dashboard-left-sidebar max-sm:gap-[0.889rem] gap-[0.889rem] md:gap-[1.084rem] xl:gap-[1.186rem] 2xl:gap-[1.25rem] 3xl:gap-[1.667rem] 4xl:gap-[2.222rem] max-sm:rounded-[1.5rem] rounded-[1.422rem] md:rounded-[1.735rem] xl:rounded-[1.897rem] 2xl:rounded-[2rem] 3xl:rounded-[2.667rem] 4xl:rounded-[3.556rem] border-(--ad-gray) border shadow-(--ad-box-shadow) max-sm:p-[1.422rem] p-[1.422rem] md:p-[1.735rem] xl:p-[1.897rem] 2xl:p-[2rem] 3xl:p-[2.667rem] 4xl:p-[3.556rem]">
                        <div className='flex flex-col max-sm:gap-[0.867rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]'>
                            <div className="relative max-w-max mx-auto aspect-square max-sm:mb-[1.75rem] mb-[1.35rem] md:mb-[1.647rem] xl:mb-[1.801rem] 2xl:mb-[1.898rem] 3xl:mb-[2.531rem] 4xl:mb-[3.375rem]">
                                <div className='relative flex items-center justify-center'>
                                    <div className="">
                                        <ImageLoader src={dashboard_user_image} alt="" className={'grayscale object-cover aspect-square max-sm:w-[12rem]! w-[9.05rem]! md:w-[11.039rem]! xl:w-[12.073rem]! 2xl:w-[12.727rem]! 3xl:w-[16.969rem]! 4xl:w-[22.625rem]! max-sm:h-[12rem]! h-[9.05rem]! md:h-[11.039rem]! xl:h-[12.073rem]! 2xl:h-[12.727rem]! 3xl:h-[16.969rem]! 4xl:h-[22.625rem]!' + (user?.role == 'creative' ? ' image-mask' : ' agency-box-shadow rounded-full')} />
                                    </div>
                                    <div className="absolute flex justify-center max-sm:-bottom-[1.75rem] -bottom-[1.35rem] md:-bottom-[1.647rem] xl:-bottom-[1.801rem] 2xl:-bottom-[1.898rem] 3xl:-bottom-[2.531rem] 4xl:-bottom-[3.375rem]">
                                        <img src="/aac-logo-white.avif" alt={dashboard_user_name} className='max-sm:w-[3.5rem] w-[2.7rem] md:w-[3.293rem] xl:w-[3.602rem] 2xl:w-[3.797rem] 3xl:w-[5.063rem] 4xl:w-[6.75rem] aspect-square' />
                                    </div>
                                </div>
                            </div>
                            <div className={[
                                "flex flex-col items-center mx-auto max-sm:gap-[0.434rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]",
                            ].join(' ')}
                            >
                                <div className="font-inter font-bold uppercase text-center max-sm:text-[1.5rem] text-[1.067rem] md:text-[1.301rem] xl:text-[1.423rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.667rem]">{dashboard_user_name}</div>
                                <CallToActionLink
                                    className={[
                                        "outline-white! hover:outline-primary! text-white! hover:text-primary! max-w-max!",
                                        "max-sm:px-[1.067rem]! px-[1.067rem]! md:px-[1.301rem]! xl:px-[1.423rem]! 2xl:px-[1.5rem]! 3xl:px-[2rem]! 4xl:px-[2.667rem]!",
                                        "max-sm:text-[0.5rem] text-[0.444rem] md:text-[0.542rem] xl:text-[0.593rem] 2xl:text-[0.625rem] 3xl:text-[0.833rem] 4xl:text-[1.111rem]",
                                        "max-sm:outline-[0.133rem]! outline-[0.133rem]! md:outline-[0.133rem]! xl:outline-[0.133rem]! 2xl:outline-[0.141rem]! 3xl:outline-[0.188rem]! 4xl:outline-[0.25rem]!",
                                    ].join(' ')}
                                    href={dashboard_user_profile_url}
                                >
                                    <span>View&nbsp;</span>
                                    <TmText text='ProFile' className='' />
                                </CallToActionLink>
                            </div>
                        </div>
                        <div className='max-sm:mt-[1.5rem] mt-[1.422rem] md:mt-[1.735rem] xl:mt-[1.897rem] 2xl:mt-[2rem] 3xl:mt-[2.667rem] 4xl:mt-[3.556rem]'>
                            <ul className="grid place-items-start max-sm:gap-[1.5rem] gap-[1.422rem] md:gap-[1.735rem] xl:gap-[1.897rem] 2xl:gap-[2rem] 3xl:gap-[2.667rem] 4xl:gap-[3.556rem]">
                                {sidebarMenu.map((item, index) => {
                                    return (
                                        <li key={index} className={`leading-none font-bold max-sm:text-[1rem] text-[0.8rem] md:text-[0.976rem] xl:text-[1.067rem] 2xl:text-[1.125rem] 3xl:text-[1.5rem] 4xl:text-[2rem]`}>
                                            <ActionLinkDiv href={item.href} className={`text-left ${(item.href == pathname ? 'text-primary hover:text-white' : 'text-white hover:text-primary')}`}>{item.label}</ActionLinkDiv>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    {children}
                </div>
            </section>
            <footer className="flex flex-row justify-center w-full z-11 py-[10px] text-xs text-gray-400 space-y-1">
                <p className="font-alta uppercase text-[13px] xl:text-[14px] 2xl:text-[17px] transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF]">© {(new Date()).getFullYear()} Ad Agency Creatives.</p>
            </footer>
        </>
    );
};

export default DashboardContainer;