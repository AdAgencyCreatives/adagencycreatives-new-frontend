'use client';

import { useContext, useEffect } from "react";
import { Context as DataContext } from "contexts/DataContext";

const useMentorTopics = (autoLoad = true) => {

    const {
        state: { mentors },
        getMentorTopics,
    } = useContext(DataContext);

    useEffect(() => {
        if (autoLoad) {
            getMentorTopics();
        }
    }, [autoLoad]);

    let mentorTopics = mentors?.map(item => {

        return {
            image: '/resource1.avif',
            title: item?.title || 'Mentor',
            href: item?.slug?.length > 0 ? `/creative-resources/${item?.slug}` : '',
            item: item,
        };
    });


    return {
        mentorTopics, getMentorTopics,
    };
}

export default useMentorTopics;