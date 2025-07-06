'use client';

import { useContext, useEffect, useState } from "react";
import { Context as DataContext } from "contexts/DataContext";
import { Context as AuthContext } from "contexts/AuthContext";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import useQueryParams from "./useQueryParams";

const useCreativesShortlist = () => {

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

  const { state: { bookmarks, meta: creativesShortlistMeta }, getBookmarks, removeBookmark, } = useContext(DataContext);

  useEffect(() => {
    setSearchPerformed(false);
  }, []);

  useEffect(() => {
    if (user) {
      setSearchPerformed(false);
      setIsLoading(true);
      getBookmarks(searchInput, user.uuid, "creatives", currentPage, () => {
        setSearchPerformed(true);
        setIsLoading(false);
      });
    }
  }, [user]);

  const paginate = (page) => {
    setIsLoading(true);
    getBookmarks(searchInput, user.uuid, "creatives", page, () => {
      setQueryParams({ 'page': page });
      setIsLoading(false);
      // window.setTimeout(() => {
      //   window.scrollTo({ top: 0, behavior: 'smooth' });
      // }, 1000);
    });
  };

  const removeFromShortlist = (id) => {
    let newPage = Math.ceil((creativesShortlistMeta?.total - 1) / 9);
    removeBookmark(id, () => {
      showAlert('Creative removed from shortlist');
      paginate(currentPage <= newPage ? currentPage : newPage);
    });
  };

  const handleSearch = (search) => {
    setQueryParams({ 'search': search, 'page': null });
    if (user) {
      setSearchPerformed(false);
      setIsLoading(true);
      getBookmarks(search, user.uuid, "creatives", 1, () => {
        setSearchPerformed(true);
        setIsLoading(false);
      });
    }
  }

  const creativesShortlist = bookmarks?.map((item, index) => {
    const creative = item?.resource;
    return {
      id: item?.id,
      title: creative?.category || creative?.title || 'TITLE',
      image: (creative?.user_thumbnail || creative?.profile_image) || '/placeholder.avif',
      name: creative?.name || 'CREATIVE',
      location: `${creative?.location?.city || 'City'}, ${creative?.location?.state || 'State'}`,
      profile_url: creative?.slug ? `/creative/${creative?.slug}` : '',
      created_at: item?.created_at,
      resource: item?.resource,
      item: item,
    };
  });

  return { isLoading, setIsLoading, searchPerformed, setSearchPerformed, creativesShortlist, creativesShortlistMeta, paginate, removeFromShortlist, handleSearch };
};

export default useCreativesShortlist;
