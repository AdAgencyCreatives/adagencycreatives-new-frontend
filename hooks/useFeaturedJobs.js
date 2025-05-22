'use client';

import { useContext, useEffect } from "react";
import { Context as JobsContext } from "contexts/JobsContext";
import { placeholderFeaturedJobs } from 'constants/jobs';

const useFeaturedJobs = (per_page = 10) => {

    const {
        state: { featured_jobs },
        getFeaturedJobs,
    } = useContext(JobsContext);

    useEffect(() => {
        getFeaturedJobs(per_page);
    }, []);


    let featuredJobs = featured_jobs?.map(item => {
        return {
            title: item?.title || 'coming soon',
            image: (item?.agency?.user_thumbnail || item?.agency?.logo) || '/jobs/job1.avif',
            agency: item?.agency?.name || 'AGENCY',
            location: `${item?.location?.city || 'city'}, ${item?.location?.state || 'state'}`,
            item: item,
        };
    });

    if (featuredJobs?.length > 0) {
        featuredJobs = [...featuredJobs.slice(0, per_page), ...placeholderFeaturedJobs.slice(0, per_page - Math.min(per_page, featuredJobs.length))]
    } else {
        featuredJobs = placeholderFeaturedJobs;
    }

    return {
        featuredJobs,
    };
}

export default useFeaturedJobs;