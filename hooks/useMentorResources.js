'use client';

import { useContext, useEffect } from "react";
import { Context as DataContext } from "contexts/DataContext";

const useMentorResources = () => {

    const {
        state: { mentors },
        getMentors,
    } = useContext(DataContext);

    useEffect(() => {
        getMentors();
    }, []);

    let mentorResources = mentors?.map(item => {

        return {
            image: item?.preview_link || '/aac-logo-white.avif',
            href: item?.link || '',
            item: item,
        };
    });


    return {
        mentorResources, getMentors,
    };
}

export default useMentorResources;