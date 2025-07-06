'use client';

import ImageLoader from "components/ImageLoader";
import DropdownMenu from "components/DropdownMenu";
import moment from "moment";
import CustomTooltip from "components/CustomTooltip";
import Link from "next/link";
import ActionLinkDiv from "components/ActionLinkDiv";
import DropdownMenuItemLink from "components/DropdownMenuItemLink";
import { useContext, useEffect, useState } from "react";
import { Context as AuthContext } from "contexts/AuthContext";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import { Context as JobsContext } from "contexts/JobsContext";
import ActionButton from "components/ActionButton";
import { FaHandsHelping } from "react-icons/fa";
import DropdownMenuItemButton from "components/DropdownMenuItemButton";
import ConfirmModal from "components/ConfirmModal";

const MyJobsItem = ({ item, removeJob }) => {

    const [job, setJob] = useState(item);
    const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false);
    const { showAlert } = useContext(AnimatedAlertContext);

    const {
        state: { user },
    } = useContext(AuthContext);

    const {
        markFilled,
    } = useContext(JobsContext);

    const handleMarkFilled = async (e, job) => {
        if (job?.status == 'filled') {
            showAlert("Job Vacancy Already Closed");
            return;
        }
        (async () => {
            let result = await markFilled(job.id, 'filled');
            if (result && result.status == 'filled') {
                showAlert("Job Marked Closed");
                setJob({ ...job, status: result.status });

            } else {
                showAlert("Oops! Unable to close Job at the moment");
            }
        })();
    };

    const handleMarkApprove = async (e, job) => {
        if (job?.status == 'approved') {
            showAlert("Job Already Approved");
            return;
        }
        (async () => {
            let result = await markFilled(job.id, 'approved');
            if (result && result.status == 'approved') {
                showAlert("Job Approved Successfully");
                setJob({ ...job, status: result.status });
            } else {
                showAlert("Oops! Unable to close Job at the moment");
            }
        })();
    };

    return (
        <>
            <div className="agencies-shortlist-item relative flex flex-col items-center w-full max-sm:my-[0.434rem] my-[0.356rem] md:my-[0.434rem] xl:my-[0.474rem] 2xl:my-[0.5rem] 3xl:my-[0.667rem] 4xl:my-[0.889rem] max-sm:p-[0.434rem] p-[0.356rem] md:p-[0.434rem] xl:p-[0.474rem] 2xl:p-[0.5rem] 3xl:p-[0.667rem] 4xl:p-[0.889rem]">
                <div className="flex flex-row items-center w-full max-sm:gap-[0.687rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
                    <div className="flex max-sm:w-[3.469rem] w-[2.844rem] md:w-[3.469rem] xl:w-[3.794rem] 2xl:w-[4rem] 3xl:w-[5.333rem] 4xl:w-[7.111rem]">
                        <CustomTooltip title={job?.agency_name} arrow placement="top">
                            <Link href={job?.agency_profile_url}>
                                <ImageLoader src={job?.agency_image} alt={job?.agency_name} className='image-mask grayscale h-auto object-cover aspect-square max-sm:w-[2.602rem]! w-[2.133rem]! md:w-[2.602rem]! xl:w-[2.846rem]! 2xl:w-[3rem]! 3xl:w-[4rem]! 4xl:w-[5.333rem]!' loadingClassName="max-sm:w-[2.602rem]! w-[2.133rem]! md:w-[2.602rem]! xl:w-[2.846rem]! 2xl:w-[3rem]! 3xl:w-[4rem]! 4xl:w-[5.333rem]! max-sm:h-[2.602rem]! h-[2.133rem]! md:h-[2.602rem]! xl:h-[2.846rem]! 2xl:h-[3rem]! 3xl:h-[4rem]! 4xl:h-[5.333rem]!" />
                            </Link>
                        </CustomTooltip>
                    </div>
                    <div className="flex flex-1 max-sm:flex-col max-sm:items-start items-center max-sm:gap-[0.434rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]">
                        <div className="flex flex-col flex-1 max-sm:gap-[0.434rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]">
                            <div className="flex">
                                {(job?.advisor_id && job?.advisor_id != user.id) && (
                                    <CustomTooltip title={<div className="advisor-tooltip">This job was posted by an Advisor</div>} placement="top" arrow>
                                        <ActionButton className="" onClick={(e) => { e.preventDefault(); return false; }}>
                                            <FaHandsHelping style={{ marginRight: '5px' }} />
                                        </ActionButton>
                                    </CustomTooltip>
                                )}
                                <ActionLinkDiv href={job?.job_url} className="text-white font-bold leading-none max-sm:text-[0.711rem]! text-[0.711rem]! md:text-[0.867rem]! xl:text-[0.949rem]! 2xl:text-[1rem]! 3xl:text-[1.333rem]! 4xl:text-[1.778rem]!">
                                    {job?.job_title}
                                </ActionLinkDiv>
                            </div>
                            <div className="inline-flex flex-row items-center flex-wrap max-sm:gap-x-[0.356rem] gap-x-[0.356rem] md:gap-x-[0.434rem] xl:gap-x-[0.474rem] 2xl:gap-x-[0.5rem] 3xl:gap-x-[0.667rem] 4xl:gap-x-[0.889rem] max-sm:gap-y-[0.178rem] gap-y-[0.178rem] md:gap-y-[0.217rem] xl:gap-y-[0.237rem] 2xl:gap-y-[0.25rem] 3xl:gap-y-[0.333rem] 4xl:gap-y-[0.444rem]">
                                <div className="max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">
                                    {job?.job_category}
                                </div>
                                <div className="font-bold max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">•</div>
                                <div className="max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">
                                    {job?.location}
                                </div>
                                <div className="font-bold max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">•</div>
                                <div className="max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">
                                    {moment(job?.created_at).format(
                                        "MMMM D, YYYY"
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex md:justify-center max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem] max-sm:w-[5.204rem] w-[4.267rem] md:w-[5.204rem] xl:w-[5.692rem] 2xl:w-[6rem] 3xl:w-[8rem] 4xl:w-[10.667rem]">
                            <strong>{job?.applications_count}</strong>&nbsp;Applicant(s)
                        </div>
                        <div className="flex md:justify-center max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem] max-sm:w-[9.541rem] w-[7.822rem] md:w-[9.541rem] xl:w-[10.435rem] 2xl:w-[11rem] 3xl:w-[14.667rem] 4xl:w-[19.556rem]">
                            {moment(job?.expired_at).format(
                                "MMMM D, YYYY"
                            )}
                        </div>
                        <div className="flex w-full md:justify-center max-sm:text-[0.542rem] text-[0.444rem] md:text-[0.542rem] xl:text-[0.593rem] 2xl:text-[0.625rem] 3xl:text-[0.833rem] 4xl:text-[1.111rem] max-sm:w-[6.072rem] w-[4.978rem] md:w-[6.072rem] xl:w-[6.64rem] 2xl:w-[7rem] 3xl:w-[9.333rem] 4xl:w-[12.444rem]">
                            <div
                                className={[
                                    "flex uppercase leading-none font-bold outline-white text-white w-full justify-center",
                                    "max-sm:rounded-[1.333rem] rounded-[1.333rem] md:rounded-[1.626rem] xl:rounded-[1.779rem] 2xl:rounded-[1.875rem] 3xl:rounded-[2.5rem] 4xl:rounded-[3.333rem]",
                                    "max-sm:px-[1.301rem] px-[1.067rem] md:px-[1.301rem] xl:px-[1.423rem] 2xl:px-[1.5rem] 3xl:px-[2rem] 4xl:px-[2.667rem]",
                                    "max-sm:py-[0.217rem] py-[0.178rem] md:py-[0.217rem] xl:py-[0.237rem] 2xl:py-[0.25rem] 3xl:py-[0.333rem] 4xl:py-[0.444rem]",
                                    "max-sm:outline-[0.133rem] outline-[0.133rem] md:outline-[0.133rem] xl:outline-[0.133rem] 2xl:outline-[0.141rem] 3xl:outline-[0.188rem] 4xl:outline-[0.25rem]",
                                ].join(' ')}
                            >
                                {job?.status == 'filled' ? "Closed" : job?.status}
                            </div>
                        </div>
                    </div>
                    <div className="flex max-sm:w-[1.735rem] w-[1.422rem] md:w-[1.735rem] xl:w-[1.897rem] 2xl:w-[2rem] 3xl:w-[2.667rem] 4xl:w-[3.556rem]">
                        <DropdownMenu dropMenuClassName="top-[160%]!">
                            <DropdownMenuItemLink showIcon={false} icon={<></>} text="View Job" href={job?.job_url} />
                            {job?.advisor_id && user?.role != 'advisor' ? (<></>) : (
                                <>
                                    {job?.status == 'filled' ? (
                                        <DropdownMenuItemButton showIcon={false} icon={<></>} text="Approve Job" onClick={(e) => handleMarkApprove(e, job)} />
                                    ) : (
                                        <DropdownMenuItemButton showIcon={false} icon={<></>} text="Mark Close" onClick={(e) => handleMarkFilled(e, job)} />
                                    )}
                                    <DropdownMenuItemLink showIcon={false} icon={<></>} text="Edit Job" href={"/job/edit/" + job.id} />
                                    <DropdownMenuItemLink showIcon={false} icon={<></>} text="Repost Job" href={`/post-a-job/${job.id}`} />
                                    <DropdownMenuItemButton showIcon={false} icon={<></>} text="Remove Job" onClick={() => setOpenConfirmDeleteModal(true)} />
                                </>
                            )}
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <ConfirmModal
                openModal={openConfirmDeleteModal}
                setOpenModal={setOpenConfirmDeleteModal}
                title="Remove Job"
                message="Are you sure you want to delete this job? If you simply want to close the job click on the lock icon."
                onConfirm={() => {
                    removeJob(job.id, () => {
                        showAlert("Job Removed Successfully");
                    });
                }}
                innerClassName='w-[100%]!'
            />
        </>
    );
};

export default MyJobsItem;
