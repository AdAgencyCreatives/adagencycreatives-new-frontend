'use client';

import { useContext, useEffect, useState } from "react";
import { Context as AgenciesContext } from "contexts/AgenciesContext";
import { Context as AuthContext } from "contexts/AuthContext";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import useQueryParams from "./useQueryParams";

const useMyJobs = () => {

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
        state: { open_positions, loading: myJobs_loading, meta: myJobs_meta },
        searchOpenPositions,
    } = useContext(AgenciesContext);

    useEffect(() => {
        setSearchPerformed(false);
    }, []);

    useEffect(() => {
        let search = getQueryParam('search') || '';
        setSearchInput(search);

        let page = parseInt(getQueryParam('page') || '1');

        setIsLoading(true);
        if (user) searchOpenPositions(search, user.uuid, page, null, 0, () => {
            setSearchPerformed(searchInput.length > 0);
            setIsLoading(false);
        });
    }, [user]);

    const paginate = (page) => {
        setIsLoading(true);
        let search = getQueryParam('search');
        searchOpenPositions(search, user.uuid, page, null, 0, () => {
            setQueryParams({ 'page': page });
            setSearchPerformed(searchInput.length > 0);
            setIsLoading(false);
        });
    };

    const handleSearch = (search) => {
        setQueryParams({ 'search': search, 'page': null });

        setIsLoading(true);
        if (user) {
            searchOpenPositions(search, user.uuid, false, null, 0, () => {
                setSearchPerformed(searchInput.length > 0);
                setIsLoading(false);
            });
        }
    }

    const myJobs = open_positions?.map((item, index) => {
        return {
            id: item?.id,
            job_title: item?.title || 'Job Title',
            job_category: item?.category || 'Job Category',
            apply_type: item?.apply_type || 'Apply Type',
            job_url: item?.force_slug?.length > 0 ? `/job/${item?.force_slug}` : (item?.slug?.length > 0 ? `/job/${item?.slug}` : ''),
            applications_count: item?.applications_count || 0,
            expired_at: item?.expired_at,
            status: item?.status || 'Job Status',
            agency_name: item?.agency?.name || 'Agency Name',
            agency_profile_url: item?.agency?.slug ? `/agency/${item?.agency?.slug}` : '',
            agency_image: (item?.agency?.user_thumbnail || item?.agency?.profile_image) || '/placeholder.avif',
            location: `${item?.location?.city || 'City'}, ${item?.location?.state || 'State'}`,
            created_at: item?.created_at,
            advisor_id: item?.advisor_id || null,
            item: item,
        };
    });

    return { isLoading, setIsLoading, searchPerformed, setSearchPerformed, myJobs, myJobs_loading, myJobs_meta, paginate, handleSearch };
};

export default useMyJobs;
