import { useState } from "react";
import AddNotesModal from "pageComponents/dashboard/AddNotesModal";
import Paginate from "components/Paginate";
import CreativesShortlistItem from "./creatives-shortlist-item";
import TailwindCircularLoader from "components/TailwindCircularLoader";

const DashboardCreativesShortlist = ({isLoading, creativesShortlist, creativesShortlistMeta, removeFromShortlist, paginate }) => {

    const [open, setOpen] = useState(false);
    const [item, setItem] = useState({});
    const handleClose = () => setOpen(false);

    const [openNotes, setOpenNotes] = useState(false);
    const handleCloseNotes = () => setOpenNotes(false);
    const [appId, setAppId] = useState("");

    const openMessageDialog = (item) => {
        setItem(item);
        setOpen(true);
    };

    const openNotesDialog = (item) => {
        setAppId(item.resource.id);
        setOpenNotes(true);
    };

    return (
        <div className="flex w-full">
            <div className="flex flex-col w-full max-sm:gap-[1.301rem] gap-[1.067rem] md:gap-[1.301rem] xl:gap-[1.423rem] 2xl:gap-[1.5rem] 3xl:gap-[2rem] 4xl:gap-[2.667rem]">
                <AddNotesModal
                    open={openNotes}
                    setOpen={setOpenNotes}
                    handleClose={handleCloseNotes}
                    resource_id={appId}
                    type="creatives"
                />
                <div className="flex flex-col max-sm:mt-[0.474rem] mt-[0.356rem] md:mt-[0.434rem] xl:mt-[0.474rem] 2xl:mt-[0.5rem] 3xl:mt-[0.667rem] 4xl:mt-[0.889rem]">
                    {isLoading ? (
                        <div className="text-center flex flex-col items-center justify-center gap-2">
                           <TailwindCircularLoader />
                        </div>
                    ) : (
                        <>
                            {creativesShortlist?.map((item, index) => (
                                <div className="creatives-shortlist-inner flex flex-col" key={index}>
                                    <CreativesShortlistItem
                                        key={index}
                                        item={item}
                                        openNotesDialog={openNotesDialog}
                                        openMessageDialog={openMessageDialog}
                                        removeFromShortlist={removeFromShortlist}
                                    />
                                </div>
                            ))}
                            {(creativesShortlistMeta?.total || 0) > 9 && (
                                <Paginate
                                    meta={creativesShortlistMeta}
                                    paginate={paginate}
                                    title={"creatives shortlisted"}
                                />
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardCreativesShortlist;
