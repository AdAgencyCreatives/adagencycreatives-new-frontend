'use client';

import { useContext, useEffect, useState } from "react";
import { Context as CreativesContext } from "contexts/CreativesContext";
import { Context as AuthContext } from "contexts/AuthContext";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import useQueryParams from "./useQueryParams";

const useMyApplied = () => {

    const [searchInput, setSearchInput] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { queryParams, getQueryParam, setQueryParams } = useQueryParams();

    useEffect(() => {
        setSearchInput(getQueryParam('search') || '')
        setCurrentPage(parseInt(getQueryParam('page') || '1'));
    }, [queryParams]);

    const { state: { user } } = useContext(AuthContext);
    const { showAlert } = useContext(AnimatedAlertContext);

    const {
        state: { applied_jobs, applied_jobsNextPage, applied_jobsMeta, loading:myApplied_loading },
        searchAppliedJobs,
        deleteApplication
    } = useContext(CreativesContext);

    useEffect(() => {
        setSearchPerformed(false);
    }, []);

    useEffect(() => {
        const search = getQueryParam('search') || '';
        setSearchInput(search);

        const page = parseInt(getQueryParam('page') || '1');

        setIsLoading(true);
        if (user) searchAppliedJobs(search, page, () => {
            setSearchPerformed(searchInput.length > 0);
            setIsLoading(false);
        });
    }, [user]);

    const paginate = (page) => {
        setIsLoading(true);
        const search = getQueryParam('search') || '';
        searchAppliedJobs(search, page, () => {
            setQueryParams({ 'page': page });
            setSearchPerformed(searchInput.length > 0);
            setIsLoading(false);
        });
    };

    const handleSearch = (search) => {
        setQueryParams({ 'search': search, 'page': null });

        setIsLoading(true);
        if (user) {
            searchAppliedJobs(search, false, () => {
                setSearchPerformed(searchInput.length > 0);
                setIsLoading(false);
            });
        }
    }

    const removeApplication = (id, cb = () => { }) => {
        deleteApplication(id, () => {
            const search = getQueryParam('search') || '';
            const page = parseInt(getQueryParam('page') || '1');
            searchAppliedJobs(search, page, () => { }, id);
            cb();
        });
    };

    const myApplied = applied_jobs?.map((item, index) => {
        return {
            id: item?.id,
            job_title: item?.job?.title || 'Job Title',
            job_category: item?.job?.category || 'Job Category',
            job_apply_type: item?.job?.apply_type || 'Apply Type',
            job_url: item?.job?.force_slug?.length > 0 ? `/job/${item?.job?.force_slug}` : (item?.job?.slug?.length > 0 ? `/job/${item?.job?.slug}` : ''),
            job_applications_count: item?.job?.applications_count || 0,
            job_expired_at: item?.job?.expired_at,
            job_status: item?.job?.status || 'Job Status',
            job_agency_name: item?.job?.agency?.name || 'Agency Name',
            job_agency_profile_url: item?.job?.agency?.slug ? `/agency/${item?.job?.agency?.slug}` : '',
            job_agency_image: (item?.job?.agency?.user_thumbnail || item?.job?.agency?.profile_image) || '/placeholder.avif',
            job_location: `${item?.job?.location?.city || 'City'}, ${item?.job?.location?.state || 'State'}`,
            job_created_at: item?.job?.created_at,
            applied_date:item?.created_at,
            job:item?.job,
            item: item,
        };
    });

    return { isLoading, setIsLoading, searchPerformed, setSearchPerformed, myApplied, myApplied_loading, applied_jobsMeta, paginate, handleSearch, searchAppliedJobs, removeApplication };
};

export default useMyApplied;
