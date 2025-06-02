'use client';

import PageHeader from "components/PageHeader";
import CreativeLoopItem from "./loop/item";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import useDirectoryCreatives from "hooks/useDirectoryCreatives";
import { useScrollLoader } from "hooks/useScrollLoader";
import TailwindCircularLoader from "components/TailwindCircularLoader";
import AnimatedBackdrop from "components/AnimatedBackdrop";
import usePermissions from "hooks/usePermissions";
import { getUpdatedSearchParamString } from "utils/functions";

import { Context as AuthContext } from "contexts/AuthContext";
import { Context as DataContext } from "contexts/DataContext";
import { Context as AlertContext } from "contexts/AlertContext";

import eventEmitter from "components/EventEmitter";

import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "components/SearchBar";

const CreativesDirectory = () => {

  const router = useRouter();

  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const {
    isAdmin,
    isAdvisor,
    isAgency,
    isCreative,
    isRecruiter,
    hasSubscription,
    build_search_string,
    which_search,
    proceed_search,
  } = usePermissions();

  const [input, setInput] = useState("");
  const [inputClicked, setInputClicked] = useState(false);
  const [inputLevel2, setInputLevel2] = useState("");
  const [isCreativeLoading, setIsCreativeLoading] = useState(true);
  const [searchDone, setSearchDone] = useState("");
  const [advanceSearchHasData, setAdvanceSearchHasData] = useState(false);
  const [foundPermission, setFoundPermission] = useState(null);
  const [foundPermissionLevel2, setFoundPermissionLevel2] = useState(null);
  const [openCreativeProfileDialog, setOpenCreativeProfileDialog] = useState(false);
  const [previewCreative, setPreviewCreative] = useState(null);

  const {
    state: { bookmarks },
    createBookmark,
    getAllBookmarks,
    removeBookmark,
  } = useContext(DataContext);

  const {
    state: {
      role,
      user,
      token,
      subscription_status,
      advance_search_capabilities,
    },
  } = useContext(AuthContext);

  const { showAlert } = useContext(AlertContext);

  const [creativeSearchPlaceholder, setCreativeSearchPlaceholder] = useState(
    "name or location"
  );

  const addToShortlist = (id) => {
    createBookmark(user.uuid, "creatives", id, () => {
      showAlert("Creative added to shortlist");
    });
  };


  const removeFromShortlist = (id) => {
    removeBookmark(id, () => {
      showAlert("Creative deleted from shortlist");
    });
  };

  const DIRECTORY_CREATIVES_PER_PAGE = 20;
  const { directoryCreatives, directory_nextPage, directory_loading, getDirectoryCreatives, loadMoreDirectoryCreatives, searchDirectoryCreativesAdvanced } = useDirectoryCreatives();

  useScrollLoader(directory_loading, loadMoreDirectoryCreatives);

  const handleSearch = async (value, clicked = false) => {
    setInputClicked(clicked);
    setAdvanceSearchHasData(false);
    setInputLevel2("");
    router.push(getUpdatedSearchParamString(searchParams, 'advance', ''));
    setSearchDone("");

    if (!value || value.length == 0) {
      router.push(getUpdatedSearchParamString(searchParams, 'search', ''));
      getDirectoryCreatives(DIRECTORY_CREATIVES_PER_PAGE);
      return;
    }

    setIsCreativeLoading(true);
    let searchString = "" + (value ? value : "");
    let searchTerms =
      searchString.indexOf(",") >= 0 ? searchString.split(",") : [searchString];

    setFoundPermission(null);
    let permission = proceed_search(searchString, searchTerms);
    setFoundPermission(permission);

    showAlert(permission.message);

    if (!permission.proceed) {
      getDirectoryCreatives(DIRECTORY_CREATIVES_PER_PAGE);
      return;
    }

    let query_search_string = build_search_string(
      searchTerms,
      permission.terms_allowed
    );

    if (query_search_string?.length > 0) {
      setSearchDone(value);
      await searchDirectoryCreativesAdvanced(which_search(), query_search_string, role, "", (data) => {
        setAdvanceSearchHasData(data?.length > 0);
      });
      if (user) await getAllBookmarks(user.uuid, "creatives");

      if (params?.search !== query_search_string) router.push(getUpdatedSearchParamString(searchParams, 'search', query_search_string));
    } else {
      //await getDirectoryCreatives(DIRECTORY_CREATIVES_PER_PAGE);
    }

    setIsCreativeLoading(false);
  };

  const handleSearchLevel2 = async (value, clicked = false, level1Input = null) => {

    if (!value || value.length == 0) {
      router.push(getUpdatedSearchParamString(searchParams, 'advance', ''));
      handleSearch(input);
      return;
    }

    let searchStringLevel1 = level1Input ? level1Input : input;

    setIsCreativeLoading(true);

    searchStringLevel1 = "" + (searchStringLevel1 ? searchStringLevel1 : "");
    let searchTermsLevel1 =
      searchStringLevel1.indexOf(",") >= 0 ? searchStringLevel1.split(",") : [searchStringLevel1];

    let searchStringLevel2 = "" + (value ? value : "");
    let searchTermsLevel2 =
      searchStringLevel2.indexOf(",") >= 0 ? searchStringLevel2.split(",") : [searchStringLevel2];

    setFoundPermission(null);
    let permission = proceed_search(searchStringLevel1, searchTermsLevel1);
    setFoundPermission(permission);

    setFoundPermissionLevel2(null);
    let permissionLevel2 = proceed_search(searchStringLevel2, searchTermsLevel2);
    setFoundPermissionLevel2(permissionLevel2);

    // showAlert(permission.message);
    showAlert(permissionLevel2.message);

    if (!permissionLevel2.proceed) {
      return;
    }

    let query_search_string_level1 = build_search_string(
      searchTermsLevel1,
      permission.terms_allowed
    );

    let query_search_string_level2 = build_search_string(
      searchTermsLevel2,
      permissionLevel2.terms_allowed
    );

    if (params?.advance !== query_search_string_level2) router.push(getUpdatedSearchParamString(searchParams, 'advance', query_search_string_level2));

    await searchDirectoryCreativesAdvanced(which_search(), query_search_string_level1, role, query_search_string_level2);
    if (user) await getAllBookmarks(user.uuid, "creatives");
    setIsCreativeLoading(false);
  };

  useEffect(() => {
    if (user) getAllBookmarks(user.uuid, "creatives");
  }, [user]);

  useEffect(() => {
    if (!role || !role.length || !advance_search_capabilities) {
      return;
    }

    if (
      (isAgency || isRecruiter) &&
      advance_search_capabilities
    ) {
      setCreativeSearchPlaceholder(
        "name, title, location, company, industry experience, media, full-time etc."
      );
    }
  }, [role, advance_search_capabilities]);

  useEffect(() => {
    if (
      !role ||
      !role.length ||
      !subscription_status ||
      !subscription_status.length
    ) {
      return;
    }

    if (isCreative) {
      setCreativeSearchPlaceholder(
        "title, name, or location"
      );
    }

    if (isAgency || isRecruiter) {
      if (hasSubscription) {
        setCreativeSearchPlaceholder(
          "title, name, or location"
        );
      } else {
        setCreativeSearchPlaceholder("name or location");
      }
    }
  }, [role, subscription_status]);

  useEffect(() => {
    if (!role || !role.length) {
      return;
    }

    if (isAdmin || (isAdvisor && hasSubscription)) {
      setCreativeSearchPlaceholder(
        "name, title, location, company, industry experience, media, full-time etc."
      );
    }
  }, [role, hasSubscription]);

  useEffect(() => {
    if (directoryCreatives?.length >= 0) setIsCreativeLoading(false);
  }, [directoryCreatives]);

  useEffect(() => {
    process_creatives();
  }, [subscription_status]);

  const process_creatives = async () => {
    if (subscription_status && params?.search && !params?.advance) {
      setInput(params.search);
      handleSearch(params.search);
    } else if (subscription_status && params?.advance) {
      setInput(params.search);
      setAdvanceSearchHasData(true);
      setInputLevel2(params.advance);
      handleSearchLevel2(params.advance, false, params.search ?? '');
    } else {
      getDirectoryCreatives(DIRECTORY_CREATIVES_PER_PAGE);
    }
  }

  useEffect(() => {
    if (role && params && directoryCreatives?.length > 0 && (isAdmin || ((isAdvisor || isAgency || isRecruiter) && hasSubscription))) {
      let index = getPreviewIndex();
      if (index >= 0 && index < directoryCreatives?.length) {
        setPreviewCreative(directoryCreatives[index]);
        setOpenCreativeProfileDialog(true);
      }
    }
  }, [params, token, subscription_status, role]);

  const getPreviewIndex = () => {
    let slug = params.preview ?? '';
    let index = -1;
    if (slug?.length > 0) {
      index = directoryCreatives.findIndex(item => item.slug === slug);
    }
    return index;
  };

  const handleViewPrev = () => {
    let index = getPreviewIndex();
    if (index > 0) {
      router.push(getUpdatedSearchParamString(searchParams, 'preview', directoryCreatives[index - 1].slug))
    }
  };

  const handleViewNext = () => {
    let index = getPreviewIndex();
    if (index >= 0 && index < directoryCreatives.length - 1) {
      router.push(getUpdatedSearchParamString(searchParams, 'preview', directoryCreatives[index + 1].slug))
    }
  };

  useEffect(() => {
    const handleCustomEvent = (data) => {
      if (data?.uid == 'view-profile-actions') {
        document.querySelector('.common-modal-actions-apply-now .slide-prev').style.height = (data?.height || 100) + 'px';
        document.querySelector('.common-modal-actions-apply-now .slide-next').style.height = (data?.height || 100) + 'px';
      }
      // console.log('Received custom event:', data);
    };

    eventEmitter.on('ee_custom_event_height_changed', handleCustomEvent);

    // Cleanup the event listener on component unmount 
    return () => { eventEmitter.off('ee_custom_event_height_changed', handleCustomEvent); };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex flex-col justify-center text-center page-header directory mx-auto w-full">
        <PageHeader
          page="creatives"
          heading="Directory"
        />
        <div className="relative text-left search flex flex-col z-999998">
          {token && (
            <>
              <label className="text-[#c2c2c2]">search</label>
              <div className="flex flex-col items-center justify-center">
                <SearchBar
                  input={input}
                  setInput={setInput}
                  placeholder={creativeSearchPlaceholder}
                  onSearch={handleSearch}
                  role={role}
                  advance_search_capabilities={advance_search_capabilities}
                  subscription_status={subscription_status}
                />
                {((isAdmin || ((isAdvisor || isAgency) && hasSubscription)) && advanceSearchHasData && which_search() == "search3") && (
                  <div className="search-level2">
                    {/* <div className="search-title">Search within Results</div> */}
                    <SearchBar
                      input={inputLevel2}
                      setInput={setInputLevel2}
                      // placeholder={creativeSearchPlaceholder}
                      placeholder={"Search within results"}
                      onSearch={handleSearchLevel2}
                      role={role}
                      advance_search_capabilities={advance_search_capabilities}
                      subscription_status={subscription_status}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Featured Creatives */}
      <section id="directory-creatives" className="relative z-1 jobs-directory card-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {directoryCreatives?.length > 0 && directoryCreatives.slice(0, directory_nextPage ? directoryCreatives.length - 2 : directoryCreatives.length)?.map((creative, idx) => (
            <React.Fragment key={`creative-${creative.id || idx}`}>
              {idx === 16 && (
                <div key={`perfect-${idx}`} id={`perfect-${idx}`} className="relative col-span-2 text-center flex flex-col justify-around gap-5 md:gap-10 max-md:py-10">
                  <AnimatedBackdrop className={'block'} />
                  <h2 className="relative z-1 pb-0 pt-6 2xl:pb-14 2xl:pt-20 3xl:pb-20 3xl:pt-26 4xl:py-15 font-arial font-bold  md:leading-[58.5px] 3xl:leading-[78px] 4xl:leading-[104px]">Why<br />Search?<br />Post & Attract!</h2>
                  <div className="relative z-1">
                    <Link
                      href="/"
                      className="link-button border-brand-yellow border-2 md:border-4 uppercase text-brand-yellow rounded-full font-inter sm:font-semibold md:font-hass75 md:font-bold cursor-pointer hover:border-white hover:bg-brand-yellow hover:text-white"
                    >
                      POST A JOB
                    </Link>
                  </div>
                </div>
              )}

              <CreativeLoopItem key={`${idx}-3`} creative={creative} />
            </React.Fragment>
          ))}
        </div>
      </section>
      {/* Directory Loader */}
      {directory_loading && (
        <section className="pt-31 pb-21 2xl:pb-36 2xl:pt-40 3xl:pb-44 3xl:pt-33 4xl:pb-40 4xl:pt-50">
          <div className="flex justify-center align-center">
            <TailwindCircularLoader size={10} />
          </div>
        </section>
      )}
    </div>
  );
};

export default CreativesDirectory;