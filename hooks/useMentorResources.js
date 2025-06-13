'use client';

import { useContext, useEffect } from "react";
import { Context as DataContext } from "contexts/DataContext";

const useMentorResources = (autoLoad = true) => {

    const {
        state: { resources },
        getMentorResources,
    } = useContext(DataContext);

    useEffect(() => {
        if (autoLoad) {
            getMentorResources();
        }
    }, []);

    let mentorResources = resources?.map(item => {
        return {
            image: item?.preview_link || '/aac-logo-white.avif',
            title: item?.title?.length>0 ? item.title.replaceAll("<br>", "").replaceAll("<br/>", "").replaceAll("<br />", "") : 'Mentor Resource',
            href: item?.link || '',
            item: item,
        };
    });

    return {
        mentorResources, getMentorResources,
    };
}

export default useMentorResources;