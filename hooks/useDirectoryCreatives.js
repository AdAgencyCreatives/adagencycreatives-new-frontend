'use client';

import { useContext, useEffect } from "react";
import { Context as CreativesContext } from "contexts/CreativesContext";

const useDirectoryCreatives = () => {

    const {
        state: { directory_creatives, directory_nextPage, directory_loading },
        getDirectoryCreatives, loadDirectoryCreatives, searchDirectoryCreativesAdvanced
    } = useContext(CreativesContext);

    let directoryCreatives = directory_creatives?.map(item => {
        return {
            title: item?.category || item?.title || 'TITLE',
            image: (item?.user_thumbnail || item?.profile_image) || '/placeholder.avif',
            name: item?.name || 'CREATIVE',
            location: `${item?.location?.city || 'City'}, ${item?.location?.state || 'State'}`,
            item: item,
        };
    });

    const loadMoreDirectoryCreatives = () => {
        if (directory_nextPage === null || directory_loading) return;
        loadDirectoryCreatives(directory_nextPage);
    };

    return {
        directoryCreatives, directory_nextPage, directory_loading, getDirectoryCreatives, loadMoreDirectoryCreatives, searchDirectoryCreativesAdvanced
    };
}

export default useDirectoryCreatives;