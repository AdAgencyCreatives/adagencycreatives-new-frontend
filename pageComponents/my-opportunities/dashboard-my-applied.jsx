import Paginate from "components/Paginate";
import TailwindCircularLoader from "components/TailwindCircularLoader";
import React, { useState } from "react";
import Spacer from "components/Spacer";
import MyAppliedItem from "./my-applied-item";
import AddNotesModal from "pageComponents/dashboard/AddNotesModal";

const DashboardMyApplied = ({ isLoading, myApplied, applied_jobsMeta, paginate, removeApplication }) => {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [appId, setAppId] = useState("");

    return (
        <div className="flex w-full">
            <AddNotesModal
                open={open}
                setOpen={setOpen}
                handleClose={handleClose}
                resource_id={appId}
                type="applications"
            />
            <div className="flex flex-col w-full max-sm:gap-[1.301rem] gap-[1.067rem] md:gap-[1.301rem] xl:gap-[1.423rem] 2xl:gap-[1.5rem] 3xl:gap-[2rem] 4xl:gap-[2.667rem]">
                <div className="flex flex-col max-sm:mt-[0.474rem] mt-[0.356rem] md:mt-[0.434rem] xl:mt-[0.474rem] 2xl:mt-[0.5rem] 3xl:mt-[0.667rem] 4xl:mt-[0.889rem]">
                    {isLoading ? (
                        <div className="text-center flex flex-col items-center justify-center gap-2">
                            <TailwindCircularLoader />
                        </div>
                    ) : (
                        <>
                            <div className="agencies-shortlist-item relative flex flex-col bg-secondary items-center w-full max-sm:my-[0.867rem] my-[0.711rem] md:my-[0.867rem] xl:my-[0.949rem] 2xl:my-[1rem] 3xl:my-[1.333rem] 4xl:my-[1.778rem] max-sm:p-[0.434rem] p-[0.356rem] md:p-[0.434rem] xl:p-[0.474rem] 2xl:p-[0.5rem] 3xl:p-[0.667rem] 4xl:p-[0.889rem]">
                                <div className="flex flex-row items-center w-full max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem] max-sm:gap-[0.687rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
                                    <div className="flex font-bold max-sm:w-[3.469rem] w-[2.844rem] md:w-[3.469rem] xl:w-[3.794rem] 2xl:w-[4rem] 3xl:w-[5.333rem] 4xl:w-[7.111rem]">
                                        Agency
                                    </div>
                                    <div className="flex flex-1 max-sm:flex-col max-sm:items-start items-center max-sm:gap-[0.434rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]">
                                        <div className="flex flex-col flex-1 font-bold max-sm:gap-[0.434rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]">
                                            Job Detail
                                        </div>
                                        <div className="flex md:justify-center font-bold max-sm:w-[6.072rem] w-[4.978rem] md:w-[6.072rem] xl:w-[6.64rem] 2xl:w-[7rem] 3xl:w-[9.333rem] 4xl:w-[12.444rem]">Date Applied</div>
                                    </div>
                                    <div className="flex max-sm:w-[1.735rem] w-[1.422rem] md:w-[1.735rem] xl:w-[1.897rem] 2xl:w-[2rem] 3xl:w-[2.667rem] 4xl:w-[3.556rem]">
                                    </div>
                                </div>
                            </div>
                            {myApplied?.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    <div className="agencies-shortlist-inner flex flex-col">
                                        <MyAppliedItem
                                            item={item}
                                            removeApplication={removeApplication}
                                            setAppId={setAppId}
                                            setOpen={setOpen}
                                        />
                                    </div>
                                    {index < myApplied?.length - 1 && (
                                        <Spacer />
                                    )}
                                </React.Fragment>
                            ))}
                            {(applied_jobsMeta?.total || 0) > 9 && (
                                <div className="flex w-full justify-center items-center max-sm:mt-[1.301rem] mt-[1.067rem] md:mt-[1.301rem] xl:mt-[1.423rem] 2xl:mt-[1.5rem] 3xl:mt-[2rem] 4xl:mt-[2.667rem]">
                                    <Paginate
                                        meta={applied_jobsMeta}
                                        paginate={paginate}
                                        title={"my created jobs"}
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardMyApplied;
