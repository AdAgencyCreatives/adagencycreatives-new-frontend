'use client';

import DirectoryPageHeader from "components/DirectoryPageHeader";
import JobLoopItem from "./loop/item";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import AnimatedBackdrop from "components/AnimatedBackdrop";
import useDirectoryJobs from "hooks/useDirectoryJobs";
import { useRouter, useSearchParams } from "next/navigation";
import usePermissions from "hooks/usePermissions";
import { Context as AuthContext } from "contexts/AuthContext";
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext";
import { useScrollLoader } from "hooks/useScrollLoader";
import { getUpdatedSearchParamString } from "utils/functions";
import SearchBar from "components/SearchBar";
import TailwindCircularLoader from "components/TailwindCircularLoader";
import JobLoopPreloader from "./loop/preloader";

const JobsDirectory = () => {

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
  const [isJobLoading, setIsJobLoading] = useState(true);
  const [searchDone, setSearchDone] = useState("");

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
    "title, name, location, etc"
  );

  const DIRECTORY_AGENCIES_PER_PAGE = 20;
  const { directoryJobs, directory_nextPage, directory_loading, getDirectoryJobs, loadMoreDirectoryJobs, searchDirectoryJobsAdvanced } = useDirectoryJobs();

  useScrollLoader(directory_loading, loadMoreDirectoryJobs);

  const handleSearch = async (value, clicked = false) => {
    setInputClicked(clicked);
    setSearchDone("");

    if (!value || value.length == 0) {
      router.push(getUpdatedSearchParamString(searchParams, 'search', ''));
      getDirectoryJobs(DIRECTORY_AGENCIES_PER_PAGE);
      return;
    }

    setIsJobLoading(true);
    let searchString = "" + (value ? value : "");
    await searchDirectoryJobsAdvanced(searchString, (data) => { });

    if (params?.search !== searchString) {
      router.push(getUpdatedSearchParamString(searchParams, 'search', searchString));
    }

    setIsJobLoading(false);
  };

  useEffect(() => {
    if (directoryJobs?.length >= 0) setIsJobLoading(false);
  }, [directoryJobs]);

  useEffect(() => {
    process_jobs();
  }, [subscription_status]);

  const process_jobs = async () => {
    if (subscription_status && params?.search && !params?.advance) {
      setInput(params.search);
      handleSearch(params.search);
    } else if (subscription_status && params?.advance) {
      setInput(params.search);
    } else {
      getDirectoryJobs(DIRECTORY_AGENCIES_PER_PAGE);
    }
  };

  return (
    <div>
      {/* Hero */}
      <DirectoryPageHeader
        page="jobs"
        heading="Directory"
        className="directory"
      >
        <div className="relative text-left search flex flex-col z-999990">
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
      {/* Featured Jobs */}
      <section className="relative z-1 jobs-directory card-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {(directoryJobs && directoryJobs?.length > 0) ? (<>
            {directoryJobs?.length > 0 && directoryJobs.slice(0, directory_nextPage ? directoryJobs.length - 2 : directoryJobs.length)?.map((job, idx) => (
              <React.Fragment key={`job-${job.id || idx}`}>
                {idx === 16 && (
                  <div key={`perfect-${idx}`} id={`perfect-${idx}`} className="relative col-span-2 text-center flex flex-col justify-around gap-5 md:gap-10 max-md:py-10">
                    <AnimatedBackdrop className={'block'} />
                    <h2 className="relative z-1 pb-0 pt-6 2xl:pb-14 2xl:pt-20 3xl:pb-20 3xl:pt-26 4xl:py-15 font-arial font-bold  md:leading-[58.5px] 3xl:leading-[78px] 4xl:leading-[104px]">Haven't<br />Found<br />The Perfect<br />Job?</h2>
                    <div className="relative z-1">
                      <Link
                        href="/"
                        className="link-button border-primary border-2 md:border-4 uppercase text-primary rounded-full font-inter sm:font-semibold md:font-inter md:font-bold cursor-pointer hover:border-white hover:bg-primary hover:text-white"
                      >
                        Advanced Search
                      </Link>
                    </div>
                  </div>
                )}
                <JobLoopItem key={idx} job={job} className={''} />
              </React.Fragment>
            ))}
          </>) : (<>
            <JobLoopPreloader className='' />
            <JobLoopPreloader className='' />
            <JobLoopPreloader className='max-sm:hidden' />
            <JobLoopPreloader className='max-sm:hidden' />
            <JobLoopPreloader className='max-sm:hidden' />
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

export default JobsDirectory;