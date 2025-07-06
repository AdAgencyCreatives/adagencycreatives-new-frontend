import PaginationLeftArrowIcon from "icons/PaginationLeftArrowIcon";
import PaginationRightArrowIcon from "icons/PaginationRightArrowIcon";

const PaginateWithEllipsis = ({ meta, paginate, title }) => {
    const item_classes = [
        'flex justify-center items-center leading-none cursor-pointer',
        'text-gray-400 hover:text-black bg-black hover:bg-primary',
        'max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]',
        'max-sm:w-[1.6rem] w-[1.6rem] md:w-[1.952rem] xl:w-[2.134rem] 2xl:w-[2.25rem] 3xl:w-[3rem] 4xl:w-[4rem]',
        'max-sm:h-[1.6rem] h-[1.6rem] md:h-[1.952rem] xl:h-[2.134rem] 2xl:h-[2.25rem] 3xl:h-[3rem] 4xl:h-[4rem]',
        'max-sm:rounded-[0.325rem] rounded-[0.267rem] md:rounded-[0.325rem] xl:rounded-[0.356rem] 2xl:rounded-[0.375rem] 3xl:rounded-[0.5rem] 4xl:rounded-[0.667rem]',
    ].join(' ');

    const ellipsis_classes = [
        'flex justify-center items-center leading-none',
        'max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]',
        'max-sm:w-[1.6rem] w-[1.6rem] md:w-[1.952rem] xl:w-[2.134rem] 2xl:w-[2.25rem] 3xl:w-[3rem] 4xl:w-[4rem]',
        'max-sm:h-[1.6rem] h-[1.6rem] md:h-[1.952rem] xl:h-[2.134rem] 2xl:h-[2.25rem] 3xl:h-[3rem] 4xl:h-[4rem]',
    ].join(' ');

    const renderPageNumbers = () => {
        const pages = [];
        const currentPage = meta.current_page;
        const lastPage = meta.last_page;

        // Always show first page
        pages.push(
            <li 
                key={1}
                className={`${item_classes} ${currentPage === 1 ? "bg-white hover:bg-primary text-black! hover:text-white!" : ""}`} 
                onClick={() => paginate(1)}
                aria-label={"Page 1"}
            >
                1
            </li>
        );

        let startPage = Math.max(2, currentPage - 1);
        let endPage = Math.min(lastPage - 1, currentPage + 1);

        // Add ellipsis after first page if needed
        if (currentPage > 3) {
            pages.push(
                <li key="left-ellipsis" className={ellipsis_classes}>
                    ...
                </li>
            );
        }

        // Show pages around current page
        for (let i = startPage; i <= endPage; i++) {
            if (i > 1 && i < lastPage) {
                pages.push(
                    <li 
                        key={i}
                        className={`${item_classes} ${currentPage === i ? "bg-white hover:bg-primary text-black! hover:text-white!" : ""}`} 
                        onClick={() => paginate(i)}
                        aria-label={`Page ${i}`}
                    >
                        {i}
                    </li>
                );
            }
        }

        // Add ellipsis before last page if needed
        if (currentPage < lastPage - 2) {
            pages.push(
                <li key="right-ellipsis" className={ellipsis_classes}>
                    ...
                </li>
            );
        }

        // Always show last page if there is more than one page
        if (lastPage > 1) {
            pages.push(
                <li 
                    key={lastPage}
                    className={`${item_classes} ${currentPage === lastPage ? "bg-white hover:bg-primary text-black! hover:text-white!" : ""}`} 
                    onClick={() => paginate(lastPage)}
                    aria-label={`Page ${lastPage}`}
                >
                    {lastPage}
                </li>
            );
        }

        return pages;
    };

    return (
        <div className="flex w-full">
            <div className="flex flex-col w-full max-sm:gap-[0.434rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]">
                <p className="flex justify-center items-center w-full max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]">
                    Viewing {meta.from || '0'} - {meta.to} of {meta.total} {title?.length > 0 ? title : "records"}
                </p>
                <nav className="flex justify-center items-center w-full">
                    <ul className="flex justify-center items-center flex-wrap max-sm:gap-[0.178rem] gap-[0.178rem] md:gap-[0.217rem] xl:gap-[0.237rem] 2xl:gap-[0.25rem] 3xl:gap-[0.333rem] 4xl:gap-[0.444rem]">
                        <li 
                            className={`${item_classes} ${(meta.current_page == 1 ? " disabled" : "")}`} 
                            onClick={() => (meta.current_page == 1 ? void (0) : paginate(meta.current_page - 1))} 
                            aria-label="Previous"
                        >
                            <span aria-hidden="true"><PaginationLeftArrowIcon /></span>
                        </li>
                        
                        {renderPageNumbers()}
                        
                        <li 
                            className={`${item_classes} ${(meta.current_page == meta.last_page ? " disabled" : "")}`} 
                            onClick={() => (meta.current_page == meta.last_page ? void (0) : paginate(meta.current_page + 1))} 
                            aria-label="Next"
                        >
                            <span aria-hidden="true"><PaginationRightArrowIcon /></span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default PaginateWithEllipsis;