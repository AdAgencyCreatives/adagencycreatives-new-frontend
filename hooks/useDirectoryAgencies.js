'use client';

import { useContext, useEffect } from "react";
import { Context as AgenciesContext } from "contexts/AgenciesContext";

const useDirectoryAgencies = () => {

    const {
        state: { directory_agencies, directory_nextPage, directory_loading },
        getDirectoryAgencies, loadDirectoryAgencies, searchDirectoryAgenciesAdvanced
    } = useContext(AgenciesContext);

    let directoryAgencies = directory_agencies?.map(item => {
        return {
            title: item?.category || item?.title || 'TITLE',
            image: (item?.user_thumbnail || item?.logo) || '/placeholder.avif',
            name: item?.name || 'AGENCY',
            location: `${item?.location?.city || 'City'}, ${item?.location?.state || 'State'}`,
            item: item,
        };
    });

    const loadMoreDirectoryAgencies = () => {
        if (directory_nextPage === null || directory_loading) return;
        loadDirectoryAgencies(directory_nextPage);
    };

    return {
        directoryAgencies, directory_nextPage, directory_loading, getDirectoryAgencies, loadMoreDirectoryAgencies, searchDirectoryAgenciesAdvanced
    };
}

export default useDirectoryAgencies;