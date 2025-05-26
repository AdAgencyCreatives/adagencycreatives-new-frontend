'use client';

import { useContext, useEffect } from "react";
import { Context as CreativesContext } from "contexts/CreativesContext";

const useDirectoryCreatives = (per_page = 20) => {

    const {
        state: { directory_creatives, directory_nextPage, directory_loading },
        getDirectoryCreatives, loadDirectoryCreatives, searchCreativesAdvanced
    } = useContext(CreativesContext);

    useEffect(() => {
        getDirectoryCreatives(per_page);
    }, []);


    let directoryCreatives = directory_creatives?.map(item => {
        return {
            title: item?.category || item?.title || 'TITLE',
            image: (item?.user_thumbnail || item?.profile_image) || '/placeholder.avif',
            name: item?.name || 'CREATIVE',
            location: `${item?.location?.city || 'city'}, ${item?.location?.state || 'state'}`,
            item: item,
        };
    });

    const loadMoreDirectoryCreatives = ()=>{
        loadDirectoryCreatives(directory_nextPage);
    };

    return {
        directoryCreatives, directory_loading, getDirectoryCreatives, loadMoreDirectoryCreatives, searchCreativesAdvanced
    };
}

export default useDirectoryCreatives;