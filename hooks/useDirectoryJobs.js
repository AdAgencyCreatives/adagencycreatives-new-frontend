'use client';

import { useContext, useEffect } from "react";
import { Context as JobsContext } from "contexts/JobsContext";

const useDirectoryJobs = () => {

    const {
        state: { directory_jobs, directory_nextPage, directory_loading },
        getDirectoryJobs, loadDirectoryJobs, searchDirectoryJobsAdvanced
    } = useContext(JobsContext);

    let directoryJobs = directory_jobs?.map(item => {
        return {
            title: item?.category || item?.title || 'TITLE',
            image: (item?.agency?.user_thumbnail || item?.agency?.logo) || '/placeholder.avif',
            agency: item?.agency?.name || 'AGENCY',
            location: `${item?.location?.city || 'city'}, ${item?.location?.state || 'state'}`,
            item: item,
        };
    });

    const loadMoreDirectoryJobs = () => {
        if (directory_nextPage === null || directory_loading) return;
        loadDirectoryJobs(directory_nextPage);
    };

    return {
        directoryJobs, directory_nextPage, directory_loading, getDirectoryJobs, loadMoreDirectoryJobs, searchDirectoryJobsAdvanced
    };
}

export default useDirectoryJobs;