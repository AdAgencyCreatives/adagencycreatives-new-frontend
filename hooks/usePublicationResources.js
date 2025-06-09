'use client';

import { useContext, useEffect } from "react";
import { Context as DataContext } from "contexts/DataContext";

const usePublicationResources = () => {

    const {
        state: { publications },
        getPublications,
    } = useContext(DataContext);

    useEffect(() => {
        getPublications();
    }, []);

    let publicationResources = publications?.map(item => {

        return {
            image: item?.preview_link || '/aac-logo-white.avif',
            href: item?.link || '',
            item: item,
        };
    });


    return {
        publicationResources, getPublications,
    };
}

export default usePublicationResources;