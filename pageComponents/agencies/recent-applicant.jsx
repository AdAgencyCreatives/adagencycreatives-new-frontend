'use client';

import { CircularProgress } from "@mui/material";
import { IoCloseCircleSharp } from "react-icons/io5";
import { TfiDownload, TfiNotepad, TfiClose, TfiCheck, TfiCheckBox, TfiBackRight, } from "react-icons/tfi";
import moment from "moment";
import { useState, useContext } from "react";
import { Context as AuthContext } from "contexts/AuthContext";
import TimeAgo from "components/TimeAgo";
import useApplicationStatusHelper from "hooks/useApplicationStatusHelper";
import ImageLoader from "components/ImageLoader";
import DropdownMenu from "components/DropdownMenu";
import DropdownMenuItem from "components/DropdownMenuItem";
import { useRouter } from "next/navigation";

const RecentApplicant = ({ job, application, setApplicationStatus, onRemoveFromRecent, setAppId, setOpen, isJobDeleted, isJobExpired }) => {

    const router = useRouter();

    const [thisApplication, setThisApplication] = useState(application);
    const [changingApplicationStatus, setChangingApplicationStatus] =
        useState(false);

    const { getStatusName, getStatusBadge } = useApplicationStatusHelper();

    const {
        state: { user },
    } = useContext(AuthContext);

    const hideChangingApplicationStatus = () => {
        setChangingApplicationStatus(false);
    };

    const setThisApplicationStatus = (
        job_id,
        application_id,
        application_status,
        cb = () => { }
    ) => {
        setApplicationStatus(
            job_id,
            application_id,
            application_status,
            () => {
                let updatedApplication = { ...thisApplication };
                updatedApplication.status = application_status;
                setThisApplication(updatedApplication);
                cb();
            }
        );
    };
    
    return (
        <>
            <div className="applicant-item relative flex flex-col items-center w-full max-sm:my-[0.867rem] my-[0.711rem] md:my-[0.867rem] xl:my-[0.949rem] 2xl:my-[1rem] 3xl:my-[1.333rem] 4xl:my-[1.778rem]" key={application.id}>
                <div className="flex flex-row items-center w-full max-sm:gap-[0.687rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
                    <div className="flex">
                        <ImageLoader src={application?.user_thumbnail || application?.profile_image || '/placeholder.avif'} alt={''} className='image-mask grayscale h-auto object-cover aspect-square max-sm:w-[2.602rem]! w-[2.133rem]! md:w-[2.602rem]! xl:w-[2.846rem]! 2xl:w-[3rem]! 3xl:w-[4rem]! 4xl:w-[5.333rem]!' loadingClassName="max-sm:w-[2.602rem]! w-[2.133rem]! md:w-[2.602rem]! xl:w-[2.846rem]! 2xl:w-[3rem]! 3xl:w-[4rem]! 4xl:w-[5.333rem]! max-sm:h-[2.602rem]! h-[2.133rem]! md:h-[2.602rem]! xl:h-[2.846rem]! 2xl:h-[3rem]! 3xl:h-[4rem]! 4xl:h-[5.333rem]!" />
                    </div>
                    <div className="flex flex-col flex-1 max-sm:gap-[0.434rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]">
                        <div className="text-white font-bold leading-none max-sm:text-[0.711rem]! text-[0.711rem]! md:text-[0.867rem]! xl:text-[0.949rem]! 2xl:text-[1rem]! 3xl:text-[1.333rem]! 4xl:text-[1.778rem]!">{application?.user}</div>
                        <div className="inline-flex flex-row items-center flex-wrap max-sm:gap-x-[0.356rem] gap-x-[0.356rem] md:gap-x-[0.434rem] xl:gap-x-[0.474rem] 2xl:gap-x-[0.5rem] 3xl:gap-x-[0.667rem] 4xl:gap-x-[0.889rem] max-sm:gap-y-[0.178rem] gap-y-[0.178rem] md:gap-y-[0.217rem] xl:gap-y-[0.237rem] 2xl:gap-y-[0.25rem] 3xl:gap-y-[0.333rem] 4xl:gap-y-[0.444rem]">
                            <div className="max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">
                                {application?.creative_category || application?.creative_title || ''}
                            </div>
                            <div className="font-bold max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">•</div>
                            <div className="max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">
                                {job.location && (job.location.city + ", " + job.location.state)}
                            </div>
                            <div className="font-bold max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">•</div>
                            <div className="max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">
                                {moment(application.created_at).format(
                                    "MMMM D, YYYY"
                                )}
                            </div>
                            <div className="font-bold max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">•</div>
                            <div className="max-sm:text-[0.533rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">
                                Job Status:&nbsp;
                                {!(
                                    (job?.expired_at && ((new Date(job?.expired_at)) <= Date.parse(new Date().toISOString()))) || job?.deleted_at
                                ) && (
                                        <>
                                            {job.status == "approved" && (
                                                <>Active</>
                                            )}
                                            {job.status == "filled" && (
                                                <>Closed</>
                                            )}
                                        </>
                                    )}
                                {job?.deleted_at && ((new Date(job?.deleted_at)) < Date.parse(new Date().toISOString())) ? (
                                    <>
                                        Deleted:&nbsp;<TimeAgo datetime={job?.deleted_at} />
                                    </>
                                ) : (
                                    <>
                                        {job?.expired_at && ((new Date(job?.expired_at)) <= Date.parse(new Date().toISOString())) && (
                                            <>
                                                Expired:&nbsp;<TimeAgo datetime={job?.expired_at} />
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div
                            className={[
                                "uppercase font-bold outline-white! text-white! max-w-max!",
                                "max-sm:rounded-[1.333rem]! rounded-[1.333rem]! md:rounded-[1.626rem]! xl:rounded-[1.779rem]! 2xl:rounded-[1.875rem]! 3xl:rounded-[2.5rem]! 4xl:rounded-[3.333rem]!",
                                "max-sm:px-[1.067rem]! px-[1.067rem]! md:px-[1.301rem]! xl:px-[1.423rem]! 2xl:px-[1.5rem]! 3xl:px-[2rem]! 4xl:px-[2.667rem]!",
                                "max-sm:text-[0.5rem] text-[0.444rem] md:text-[0.542rem] xl:text-[0.593rem] 2xl:text-[0.625rem] 3xl:text-[0.833rem] 4xl:text-[1.111rem]",
                                "max-sm:outline-[0.133rem]! outline-[0.133rem]! md:outline-[0.133rem]! xl:outline-[0.133rem]! 2xl:outline-[0.141rem]! 3xl:outline-[0.188rem]! 4xl:outline-[0.25rem]!",
                            ].join(' ')}
                        >
                            {job?.apply_type.toLowerCase() != "external" ? (
                                <>{getStatusName(thisApplication?.status)}</>
                            ) : (
                                <>Clicked Apply Now</>
                            )}
                        </div>
                    </div>
                    <div className="flex">
                        <DropdownMenu>
                            <DropdownMenuItem showIcon={false} icon={<TfiNotepad />} text="Add Notes" onClick={() => { setAppId(thisApplication.creative_id); setOpen(true); }} />
                            {!isJobDeleted && !isJobExpired && (!job?.advisor_id || user?.role == "advisor") && job?.apply_type.toLowerCase() != "external" && (
                                <>
                                    {thisApplication.status == "pending" ? (
                                        <>
                                            {user?.role == "advisor" && (
                                                <DropdownMenuItem showIcon={false} icon={<TfiCheckBox className="icon-rounded" />} text="Share Recommended Talent" onClick={() => {
                                                    setChangingApplicationStatus(true);
                                                    setThisApplicationStatus(
                                                        job.id,
                                                        thisApplication.id,
                                                        "recommended",
                                                        hideChangingApplicationStatus
                                                    );
                                                }} />
                                            )}
                                            <DropdownMenuItem showIcon={false} icon={<TfiCheck className="icon-rounded" />} text="Interested" onClick={() => {
                                                setChangingApplicationStatus(true);
                                                setThisApplicationStatus(
                                                    job.id,
                                                    thisApplication.id,
                                                    "accepted",
                                                    hideChangingApplicationStatus
                                                );
                                            }} />
                                        </>
                                    ) : (
                                        <DropdownMenuItem showIcon={false} icon={<TfiBackRight className="icon-rounded" style={{ transform: "rotateY(180deg)" }} />} text="Undo" onClick={() => {
                                            setChangingApplicationStatus(true);
                                            setThisApplicationStatus(
                                                job.id,
                                                thisApplication.id,
                                                "pending",
                                                hideChangingApplicationStatus
                                            );
                                        }} />
                                    )}
                                </>
                            )}
                            <DropdownMenuItem showIcon={false} icon={<TfiDownload className="icon-rounded" />} text="Download CV" onClick={(e) => {
                                if (thisApplication?.resume_url?.length > 0) {
                                    router.push(thisApplication?.resume_url);
                                }
                            }} />
                            {thisApplication.status == "pending" && !isJobDeleted && !isJobExpired && (!job?.advisor_id || user?.role == "advisor") && job?.apply_type.toLowerCase() != "external" && (
                                <DropdownMenuItem showIcon={false} icon={<TfiClose className="icon-rounded" />} text="Not Aligned" onClick={() => {
                                    setChangingApplicationStatus(true);
                                    setThisApplicationStatus(
                                        job.id,
                                        thisApplication.id,
                                        "rejected",
                                        hideChangingApplicationStatus
                                    );
                                }} />
                            )}
                            <DropdownMenuItem showIcon={false} icon={<IoCloseCircleSharp />} text="Remove from Recent" onClick={(e) => onRemoveFromRecent(e, application)} />
                        </DropdownMenu>
                    </div>
                </div>
                {changingApplicationStatus && (
                    <div className="absolute flex justify-center items-center w-full h-full z-index-999997">
                        <CircularProgress style={{ width: "30px", height: "30px" }} />
                    </div>
                )}
            </div>
        </>
    );
};

export default RecentApplicant;
