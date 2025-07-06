'use client';

import { useContext, useEffect, useState } from "react";
import { Context as DataContext } from "contexts/DataContext";
import { Context as AuthContext } from "contexts/AuthContext";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import useQueryParams from "./useQueryParams";

const useAgenciesShortlist = () => {

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

  const { state: { bookmarks, meta: agenciesShortlistMeta }, getBookmarks, removeBookmark, } = useContext(DataContext);

  useEffect(() => {
    setSearchPerformed(false);
  }, []);

  useEffect(() => {
    if (user) {
      setSearchPerformed(false);
      setIsLoading(true);
      getBookmarks(searchInput, user.uuid, "agencies", currentPage, () => {
        setSearchPerformed(true);
        setIsLoading(false);
      });
    }
  }, [user]);

  const paginate = (page) => {
    setIsLoading(true);
    getBookmarks(searchInput, user.uuid, "agencies", page, () => {
      setQueryParams({ 'page': page });
      setIsLoading(false);
      // window.setTimeout(() => {
      //   window.scrollTo({ top: 0, behavior: 'smooth' });
      // }, 1000);
    });
  };

  const removeFromShortlist = (id) => {
    let newPage = Math.ceil((agenciesShortlistMeta?.total - 1) / 9);
    removeBookmark(id, () => {
      showAlert('Agency removed from shortlist');
      paginate(currentPage <= newPage ? currentPage : newPage);
    });
  };

  const handleSearch = (search) => {
    setQueryParams({ 'search': search, 'page': null });
    if (user) {
      setSearchPerformed(false);
      setIsLoading(true);
      getBookmarks(search, user.uuid, "agencies", 1, () => {
        setSearchPerformed(true);
        setIsLoading(false);
      });
    }
  }

  const agenciesShortlist = bookmarks?.map((item, index) => {
    const agency = item?.resource;
    return {
      id: item?.id,
      image: (agency?.user_thumbnail || agency?.profile_image) || '/placeholder.avif',
      name: agency?.name || 'AGENCY',
      location: `${agency?.location?.city || 'City'}, ${agency?.location?.state || 'State'}`,
      profile_url: agency?.slug ? `/agency/${agency?.slug}` : '',
      created_at: item?.created_at,
      resource: item?.resource,
      item: item,
    };
  });

  return { isLoading, setIsLoading, searchPerformed, setSearchPerformed, agenciesShortlist, agenciesShortlistMeta, paginate, removeFromShortlist, handleSearch };
};

export default useAgenciesShortlist;
