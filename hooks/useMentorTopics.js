'use client';

import { useContext, useEffect } from "react";
import { Context as DataContext } from "contexts/DataContext";

const useMentorTopics = () => {

    const {
        state: { mentors },
        getMentorTopics,
    } = useContext(DataContext);

    useEffect(() => {
        getMentorTopics();
    }, []);

    let mentorTopics = mentors?.map(item => {

        return {
            image: '/resource1.avif',
            title: item?.title || 'Mentor',
            href: item?.slug || '',
            item: item,
        };
    });


    return {
        mentorTopics, getMentorTopics,
    };
}

export default useMentorTopics;