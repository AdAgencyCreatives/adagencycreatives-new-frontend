'use client';

import DirectoryPageHeader from "components/DirectoryPageHeader";
import AgencyLoopItem from "./loop/item";
import React, { useContext, useEffect, useState } from "react";
import useDirectoryAgencies from "hooks/useDirectoryAgencies";
import { useScrollLoader } from "hooks/useScrollLoader";
import TailwindCircularLoader from "components/TailwindCircularLoader";
import usePermissions from "hooks/usePermissions";
import { getUpdatedSearchParamString } from "utils/functions";

import { Context as AuthContext } from "contexts/AuthContext";
import { Context as DataContext } from "contexts/DataContext";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";

import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "components/SearchBar";
import AgencyLoopPreloader from "./loop/preloader";

const AgenciesDirectory = () => {

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
  const [isAgencyLoading, setIsAgencyLoading] = useState(true);
  const [searchDone, setSearchDone] = useState("");

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

  const { showAlert } = useContext(AnimatedAlertContext);

  const [agencySearchPlaceholder, setAgencySearchPlaceholder] = useState(
    "name or location"
  );

  const addToShortlist = (id) => {
    createBookmark(user.uuid, "agencies", id, () => {
      showAlert("Agency added to shortlist");
    });
  };

  const removeFromShortlist = (id) => {
    removeBookmark(id, () => {
      showAlert("Agency removed from shortlist");
    });
  };

  const DIRECTORY_AGENCIES_PER_PAGE = 20;
  const { directoryAgencies, directory_nextPage, directory_loading, getDirectoryAgencies, loadMoreDirectoryAgencies, searchDirectoryAgenciesAdvanced } = useDirectoryAgencies();

  useScrollLoader(directory_loading, loadMoreDirectoryAgencies);

  const handleSearch = async (value, clicked = false) => {
    setInputClicked(clicked);
    setSearchDone("");

    if (!value || value.length == 0) {
      router.push(getUpdatedSearchParamString(searchParams, 'search', ''));
      getDirectoryAgencies(DIRECTORY_AGENCIES_PER_PAGE);
      return;
    }

    setIsAgencyLoading(true);
    let searchString = "" + (value ? value : "");
    await searchDirectoryAgenciesAdvanced(searchString, (data) => {
    });
    if (user) await getAllBookmarks(user.uuid, "agencies");

    if (params?.search !== searchString) {
      router.push(getUpdatedSearchParamString(searchParams, 'search', searchString));
    }

    setIsAgencyLoading(false);
  };

  useEffect(() => {
    if (user) getAllBookmarks(user.uuid, "agencies");
  }, [user]);

  useEffect(() => {
    if (directoryAgencies?.length >= 0) setIsAgencyLoading(false);
  }, [directoryAgencies]);

  useEffect(() => {
    process_agencies();
  }, [subscription_status]);

  const process_agencies = async () => {
    if (subscription_status && params?.search && !params?.advance) {
      setInput(params.search);
      handleSearch(params.search);
    } else if (subscription_status && params?.advance) {
      setInput(params.search);
    } else {
      getDirectoryAgencies(DIRECTORY_AGENCIES_PER_PAGE);
    }
  };

  return (
    <div>
      {/* Hero */}
      <DirectoryPageHeader
        page="agencies"
        heading="Directory"
        className="directory"
      >
        <div className="relative text-left search flex flex-col z-999998">
          {token && (
            <>
              <label className="text-[#c2c2c2]">search</label>
              <div className="flex flex-col items-center justify-center">
                <SearchBar
                  input={input}
                  setInput={setInput}
                  placeholder={agencySearchPlaceholder}
                  onSearch={handleSearch}
                  role={role}
                  advance_search_capabilities={advance_search_capabilities}
                  subscription_status={subscription_status}
                />
              </div>
            </>
          )}
        </div>
      </DirectoryPageHeader>

      {/* Featured Agencies */}
      <section id="directory-agencies" className="relative z-1 jobs-directory card-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {(directoryAgencies && directoryAgencies?.length > 0) ? (<>
            {directoryAgencies.map((agency, idx) => (
              <React.Fragment key={`agency-${agency.id || idx}`}>
                <AgencyLoopItem key={`${idx}-3`} agency={agency} />
              </React.Fragment>
            ))}
          </>) : (<>
            <AgencyLoopPreloader className='' />
            <AgencyLoopPreloader className='' />
            <AgencyLoopPreloader className='max-sm:hidden' />
            <AgencyLoopPreloader className='max-sm:hidden' />
            <AgencyLoopPreloader className='max-sm:hidden' />
          </>)}
        </div>
      </section>
      {/* Directory Loader */}
      {directory_loading && (
        <section className="pt-31 pb-21 2xl:pb-36 2xl:pt-40 3xl:pb-44 3xl:pt-33 4xl:pb-40 4xl:pt-50">
          <div className="flex justify-center align-center">
            <TailwindCircularLoader />
          </div>
        </section>
      )}
    </div>
  );
};

export default AgenciesDirectory;