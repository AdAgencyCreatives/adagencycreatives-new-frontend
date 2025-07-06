'use client';

import ImageLoader from "components/ImageLoader";
import DropdownMenu from "components/DropdownMenu";
import DropdownMenuItemButton from "components/DropdownMenuItemButton";
import { useRouter } from "next/navigation";
import CallToActionButton from "components/CallToActionButton";
import DropdownMenuItemLink from "components/DropdownMenuItemLink";

const AgenciesShortlistItem = ({ item, openNotesDialog, openMessageDialog, removeFromShortlist }) => {

    const router = useRouter();

    return (
        <>
            <div className="agencies-shortlist-item relative flex flex-col items-center w-full max-sm:my-[0.867rem] my-[0.711rem] md:my-[0.867rem] xl:my-[0.949rem] 2xl:my-[1rem] 3xl:my-[1.333rem] 4xl:my-[1.778rem]">
                <div className="flex flex-row items-center w-full max-sm:gap-[0.687rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
                    <div className="flex">
                        <ImageLoader src={item?.image} alt={item?.name} className='image-mask grayscale h-auto object-cover aspect-square max-sm:w-[2.602rem]! w-[2.133rem]! md:w-[2.602rem]! xl:w-[2.846rem]! 2xl:w-[3rem]! 3xl:w-[4rem]! 4xl:w-[5.333rem]!' loadingClassName="max-sm:w-[2.602rem]! w-[2.133rem]! md:w-[2.602rem]! xl:w-[2.846rem]! 2xl:w-[3rem]! 3xl:w-[4rem]! 4xl:w-[5.333rem]! max-sm:h-[2.602rem]! h-[2.133rem]! md:h-[2.602rem]! xl:h-[2.846rem]! 2xl:h-[3rem]! 3xl:h-[4rem]! 4xl:h-[5.333rem]!" />
                    </div>
                    <div className="flex flex-col flex-1 max-sm:gap-[0.434rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]">
                        <div className="text-white font-bold leading-none max-sm:text-[0.711rem]! text-[0.711rem]! md:text-[0.867rem]! xl:text-[0.949rem]! 2xl:text-[1rem]! 3xl:text-[1.333rem]! 4xl:text-[1.778rem]!">{item?.name}</div>
                        <div className="inline-flex flex-row items-center flex-wrap max-sm:gap-x-[0.356rem] gap-x-[0.356rem] md:gap-x-[0.434rem] xl:gap-x-[0.474rem] 2xl:gap-x-[0.5rem] 3xl:gap-x-[0.667rem] 4xl:gap-x-[0.889rem] max-sm:gap-y-[0.178rem] gap-y-[0.178rem] md:gap-y-[0.217rem] xl:gap-y-[0.237rem] 2xl:gap-y-[0.25rem] 3xl:gap-y-[0.333rem] 4xl:gap-y-[0.444rem]">
                            <div className="max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">
                                {item?.location}
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <CallToActionButton
                            className={[
                                "uppercase outline-white! hover:outline-primary! text-white! hover:text-primary! max-w-max!",
                                "max-sm:px-[1.735rem]! px-[1.422rem]! md:px-[1.735rem]! xl:px-[1.897rem]! 2xl:px-[2rem]! 3xl:px-[2.667rem]! 4xl:px-[3.556rem]!",
                                "max-sm:py-[0.434rem]! py-[0.356rem]! md:py-[0.434rem]! xl:py-[0.474rem]! 2xl:py-[0.5rem]! 3xl:py-[0.667rem]! 4xl:py-[0.889rem]!",
                                "max-sm:text-[0.5rem]! text-[0.444rem]! md:text-[0.542rem]! xl:text-[0.593rem]! 2xl:text-[0.625rem]! 3xl:text-[0.833rem]! 4xl:text-[1.111rem]!",
                                "max-sm:outline-[0.133rem]! outline-[0.133rem]! md:outline-[0.133rem]! xl:outline-[0.133rem]! 2xl:outline-[0.141rem]! 3xl:outline-[0.188rem]! 4xl:outline-[0.25rem]!",
                            ].join(' ')}
                            onClick={(e) => openNotesDialog(item)}
                        >
                            Add a Note
                        </CallToActionButton>
                    </div>
                    <div className="flex">
                        <DropdownMenu dropMenuClassName="top-[160%]!">
                            <DropdownMenuItemLink showIcon={false} icon={<></>} text="View Profile" href={item?.profile_url} />
                            <DropdownMenuItemButton showIcon={false} icon={<></>} text="Send a Message" onClick={(e) => { openMessageDialog(item) }} />
                            <DropdownMenuItemButton showIcon={false} icon={<></>} text="Remove from Shortlist" onClick={(e) => removeFromShortlist(item.id)} />
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AgenciesShortlistItem;
