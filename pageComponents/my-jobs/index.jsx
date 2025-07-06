'use client';

import SearchButton from 'components/SearchButton';
import SearchInput from 'components/SearchInput';
import DashboardContainer from 'pageComponents/dashboard/dashboard-container';
import { useContext, useEffect, useState } from 'react';
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext"
import useQueryParams from 'hooks/useQueryParams';
import CallToActionLink from 'components/CallToActionLink';
import PlusIcon from 'icons/PlusIcon';
import useMyJobs from 'hooks/useMyJobs';
import TailwindCircularLoader from 'components/TailwindCircularLoader';
import DashboardMyJobs from './dashboard-my-jobs';

const MyJobs = () => {

    const [searchInput, setSearchInput] = useState('');

    const { queryParams, getQueryParam } = useQueryParams();

    const { isLoading, myJobs, myJobs_meta, myJobs_loading, paginate, handleSearch, removeJob } = useMyJobs();

    const { showAlert } = useContext(AnimatedAlertContext);

    const onSearch = (e) => {
        handleSearch(searchInput);
    };

    const onClearClick = (e) => {
        handleSearch("");
    };

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            e.preventDefault();
            e.stopPropagation();
            handleSearch(searchInput);
        }
    };

    useEffect(() => {
        setSearchInput(getQueryParam('search') || '');
    }, [queryParams]);

    return (
        <DashboardContainer>
            {/* Dashboard Content */}
            <div className="max-sm:w-full! w-dashboard-content-full flex flex-col max-sm:gap-[0.889rem] gap-[0.889rem] md:gap-[1.084rem] xl:gap-[1.186rem] 2xl:gap-[1.25rem] 3xl:gap-[1.667rem] 4xl:gap-[2.222rem] max-sm:rounded-[1.5rem] rounded-[1.422rem] md:rounded-[1.735rem] xl:rounded-[1.897rem] 2xl:rounded-[2rem] 3xl:rounded-[2.667rem] 4xl:rounded-[3.556rem] border-(--ad-gray) border shadow-(--ad-box-shadow) max-sm:p-[1.422rem] p-[1.422rem] md:p-[1.735rem] xl:p-[1.897rem] 2xl:p-[2rem] 3xl:p-[2.667rem] 4xl:p-[3.556rem] max-sm:col-span-1 col-span-10">
                <div className="flex justify-between items-center">
                    <h1 className='font-bold text-primary max-sm:text-[1.067rem] text-[1.067rem] md:text-[1.301rem] xl:text-[1.423rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.667rem]'>
                        My Created Jobs
                    </h1>
                    <CallToActionLink
                        className={[
                            "uppercase leading-none outline-white! hover:outline-primary! text-white! hover:text-primary! max-w-max!",
                            "max-sm:px-[1.735rem]! px-[1.422rem]! md:px-[1.735rem]! xl:px-[1.897rem]! 2xl:px-[2rem]! 3xl:px-[2.667rem]! 4xl:px-[3.556rem]!",
                            "max-sm:py-[0.434rem]! py-[0.356rem]! md:py-[0.434rem]! xl:py-[0.474rem]! 2xl:py-[0.5rem]! 3xl:py-[0.667rem]! 4xl:py-[0.889rem]!",
                            "max-sm:text-[0.5rem]! text-[0.444rem]! md:text-[0.542rem]! xl:text-[0.593rem]! 2xl:text-[0.625rem]! 3xl:text-[0.833rem]! 4xl:text-[1.111rem]!",
                            "max-sm:outline-[0.133rem]! outline-[0.133rem]! md:outline-[0.133rem]! xl:outline-[0.133rem]! 2xl:outline-[0.141rem]! 3xl:outline-[0.188rem]! 4xl:outline-[0.25rem]!",
                            "",
                        ].join(' ')}
                        href='/post-a-job'
                    >
                        <div className="flex flex-row items-center max-sm:gap-[0.217rem] gap-[0.178rem] md:gap-[0.217rem] xl:gap-[0.237rem] 2xl:gap-[0.25rem] 3xl:gap-[0.333rem] 4xl:gap-[0.444rem]">
                            <PlusIcon /> Post a Job
                        </div>
                    </CallToActionLink>
                </div>
                <div className={[
                    'flex flex-col bg-secondary',
                    'max-sm:p-[0.651rem] p-[0.533rem] md:p-[0.651rem] xl:p-[0.711rem] 2xl:p-[0.75rem] 3xl:p-[1rem] 4xl:p-[1.333rem]',
                    'max-sm:rounded-[0.651rem] rounded-[0.533rem] md:rounded-[0.651rem] xl:rounded-[0.711rem] 2xl:rounded-[0.75rem] 3xl:rounded-[1rem] 4xl:rounded-[1.333rem]',
                    'max-sm:gap-[1.301rem] gap-[1.067rem] md:gap-[1.301rem] xl:gap-[1.423rem] 2xl:gap-[1.5rem] 3xl:gap-[2rem] 4xl:gap-[2.667rem]',
                ].join(' ')}
                >
                    <div className="flex flex-col">
                        <div className={'font-bold max-sm:text-[0.759rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]'}>
                            Search My Created Jobs <span className="text-red-500">*</span>
                        </div>
                        <SearchInput input={searchInput} setInput={setSearchInput} placeholder='begin typing ...' onKeyDown={(e) => handleKeyDown(e)} onClearClick={(e) => onClearClick(e)} onHelpClick={(e) => showAlert("How can I help you?")} />
                    </div>
                    <div className={[
                        'flex justify-end',
                    ].join(' ')}
                    >
                        <SearchButton className={['uppercase',].join(' ')} onClick={(e) => onSearch(e)}>
                            Search
                        </SearchButton>
                    </div>
                </div>
                {/* My Created Jobs */}
                <div className="flex flex-row w-full max-sm:flex-wrap item-center justify-between max-sm:gap-[1.067rem] gap-[1.067rem] md:gap-[1.301rem] xl:gap-[1.423rem] 2xl:gap-[1.5rem] 3xl:gap-[2rem] 4xl:gap-[2.667rem]">
                    {(isLoading || myJobs_loading) ? (<>
                        <div className="flex w-full justify-center">
                            <TailwindCircularLoader />
                        </div>
                    </>) : (<>
                        <DashboardMyJobs
                            isLoading={(isLoading || myJobs_loading)}
                            myJobs={myJobs}
                            myJobs_meta={myJobs_meta}
                            paginate={paginate}
                            removeJob={removeJob}
                        />
                    </>)}
                </div>
            </div>
        </DashboardContainer>
    );
};

export default MyJobs;