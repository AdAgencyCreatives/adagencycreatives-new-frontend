'use client';

import ImageLoader from "components/ImageLoader";
import DropdownMenu from "components/DropdownMenu";
import moment from "moment";
import CustomTooltip from "components/CustomTooltip";
import Link from "next/link";
import ActionLinkDiv from "components/ActionLinkDiv";
import DropdownMenuItemLink from "components/DropdownMenuItemLink";
import { useContext, useState } from "react";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import ConfirmModal from "components/ConfirmModal";
import DropdownMenuItemButton from "components/DropdownMenuItemButton";

const MyAppliedItem = ({ item, setAppId, setOpen, removeApplication }) => {

    const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false);
    const { showAlert } = useContext(AnimatedAlertContext);

    return (
        <>
            <div className="agencies-shortlist-item relative flex flex-col items-center w-full max-sm:my-[0.434rem] my-[0.356rem] md:my-[0.434rem] xl:my-[0.474rem] 2xl:my-[0.5rem] 3xl:my-[0.667rem] 4xl:my-[0.889rem] max-sm:p-[0.434rem] p-[0.356rem] md:p-[0.434rem] xl:p-[0.474rem] 2xl:p-[0.5rem] 3xl:p-[0.667rem] 4xl:p-[0.889rem]">
                <div className="flex flex-row items-center w-full max-sm:gap-[0.687rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
                    <div className="flex max-sm:w-[3.469rem] w-[2.844rem] md:w-[3.469rem] xl:w-[3.794rem] 2xl:w-[4rem] 3xl:w-[5.333rem] 4xl:w-[7.111rem]">
                        <CustomTooltip title={item?.job_agency_name} arrow placement="top">
                            <Link href={item?.job_agency_profile_url}>
                                <ImageLoader src={item?.job_agency_image} alt={item?.job_agency_name} className='image-mask grayscale h-auto object-cover aspect-square max-sm:w-[2.602rem]! w-[2.133rem]! md:w-[2.602rem]! xl:w-[2.846rem]! 2xl:w-[3rem]! 3xl:w-[4rem]! 4xl:w-[5.333rem]!' loadingClassName="max-sm:w-[2.602rem]! w-[2.133rem]! md:w-[2.602rem]! xl:w-[2.846rem]! 2xl:w-[3rem]! 3xl:w-[4rem]! 4xl:w-[5.333rem]! max-sm:h-[2.602rem]! h-[2.133rem]! md:h-[2.602rem]! xl:h-[2.846rem]! 2xl:h-[3rem]! 3xl:h-[4rem]! 4xl:h-[5.333rem]!" />
                            </Link>
                        </CustomTooltip>
                    </div>
                    <div className="flex flex-1 max-sm:flex-col max-sm:items-start items-center max-sm:gap-[0.434rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]">
                        <div className="flex flex-col flex-1 max-sm:gap-[0.434rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]">
                            <div className="flex">
                                <ActionLinkDiv href={item?.job_url} className="text-white font-bold leading-none max-sm:text-[0.711rem]! text-[0.711rem]! md:text-[0.867rem]! xl:text-[0.949rem]! 2xl:text-[1rem]! 3xl:text-[1.333rem]! 4xl:text-[1.778rem]!">
                                    {item?.job_title}
                                </ActionLinkDiv>
                            </div>
                            <div className="inline-flex flex-row items-center flex-wrap max-sm:gap-x-[0.356rem] gap-x-[0.356rem] md:gap-x-[0.434rem] xl:gap-x-[0.474rem] 2xl:gap-x-[0.5rem] 3xl:gap-x-[0.667rem] 4xl:gap-x-[0.889rem] max-sm:gap-y-[0.178rem] gap-y-[0.178rem] md:gap-y-[0.217rem] xl:gap-y-[0.237rem] 2xl:gap-y-[0.25rem] 3xl:gap-y-[0.333rem] 4xl:gap-y-[0.444rem]">
                                <div className="max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">
                                    {item?.job_category}
                                </div>
                                <div className="font-bold max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">•</div>
                                <div className="max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">
                                    {item?.job_location}
                                </div>
                                <div className="font-bold max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">•</div>
                                <div className="max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">
                                    {moment(item?.job_created_at).format(
                                        "MMMM D, YYYY"
                                    )}
                                </div>
                                <div className="font-bold max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">•</div>
                                <div className="max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">
                                    {["approved", "published"].includes(item?.job_status.toLowerCase()) ? "Job Opened" : "Job Closed"}
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full md:justify-center max-sm:text-[0.542rem] text-[0.444rem] md:text-[0.542rem] xl:text-[0.593rem] 2xl:text-[0.625rem] 3xl:text-[0.833rem] 4xl:text-[1.111rem] max-sm:w-[6.072rem] w-[4.978rem] md:w-[6.072rem] xl:w-[6.64rem] 2xl:w-[7rem] 3xl:w-[9.333rem] 4xl:w-[12.444rem]">
                            {moment(item?.applied_date).format(
                                "MMMM D, YYYY"
                            )}
                        </div>
                    </div>
                    <div className="flex max-sm:w-[1.735rem] w-[1.422rem] md:w-[1.735rem] xl:w-[1.897rem] 2xl:w-[2rem] 3xl:w-[2.667rem] 4xl:w-[3.556rem]">
                        <DropdownMenu dropMenuClassName="top-[160%]!">
                            <DropdownMenuItemButton showIcon={false} icon={<></>} text="Add Notes" onClick={() => { setAppId(item.id); setOpen(true); }} />
                            <DropdownMenuItemButton showIcon={false} icon={<></>} text="Withdraw Application" onClick={() => setOpenConfirmDeleteModal(true)} />
                            <DropdownMenuItemLink showIcon={false} icon={<></>} text="View Job" href={item?.job_url} />
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <ConfirmModal
                openModal={openConfirmDeleteModal}
                setOpenModal={setOpenConfirmDeleteModal}
                title="Remove Application"
                message="Are you sure you want to delete this application?"
                onConfirm={() => {
                    removeApplication(item.id, () => {
                        showAlert("Application Removed Successfully");
                    });
                }}
                innerClassName='w-[100%]!'
            />
        </>
    );
};

export default MyAppliedItem;
