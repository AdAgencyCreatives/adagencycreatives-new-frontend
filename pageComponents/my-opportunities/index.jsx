'use client';

import DashboardContainer from 'pageComponents/dashboard/dashboard-container';
import DashboardNewMembers from 'pageComponents/dashboard/dashboard-new-members';
import DashboardCalendar from 'pageComponents/dashboard/dashboard-calendar';
import { useContext, useEffect, useState } from 'react';
import useQueryParams from 'hooks/useQueryParams';
import { Context as AnimatedAlertContext } from "contexts/AnimatedAlertContext"
import TailwindCircularLoader from 'components/TailwindCircularLoader';
import SearchButton from 'components/SearchButton';
import SearchInput from 'components/SearchInput';
import DashboardMyApplied from './dashboard-my-applied';
import useMyApplied from 'hooks/useMyApplied';

const MyOpportunities = () => {

    const [searchInput, setSearchInput] = useState('');

    const { queryParams, getQueryParam } = useQueryParams();

    const { isLoading, myApplied, applied_jobsMeta, myApplied_loading, paginate, handleSearch, removeApplication } = useMyApplied();

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
            <div className="max-sm:w-full! w-dashboard-content flex flex-col max-sm:gap-[0.889rem] gap-[0.889rem] md:gap-[1.084rem] xl:gap-[1.186rem] 2xl:gap-[1.25rem] 3xl:gap-[1.667rem] 4xl:gap-[2.222rem] max-sm:rounded-[1.5rem] rounded-[1.422rem] md:rounded-[1.735rem] xl:rounded-[1.897rem] 2xl:rounded-[2rem] 3xl:rounded-[2.667rem] 4xl:rounded-[3.556rem] border-(--ad-gray) border shadow-(--ad-box-shadow) max-sm:p-[1.422rem] p-[1.422rem] md:p-[1.735rem] xl:p-[1.897rem] 2xl:p-[2rem] 3xl:p-[2.667rem] 4xl:p-[3.556rem] max-sm:col-span-1 col-span-10">
                <div className="flex justify-between items-center">
                    <h1 className='font-bold text-primary max-sm:text-[1.067rem] text-[1.067rem] md:text-[1.301rem] xl:text-[1.423rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.667rem]'>
                        My Opportunities
                    </h1>
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
                            Search Applied Jobs <span className="text-red-500">*</span>
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
                {/* My Applied Jobs */}
                <div className="flex flex-row w-full max-sm:flex-wrap item-center justify-between max-sm:gap-[1.067rem] gap-[1.067rem] md:gap-[1.301rem] xl:gap-[1.423rem] 2xl:gap-[1.5rem] 3xl:gap-[2rem] 4xl:gap-[2.667rem]">
                    {(isLoading || myApplied_loading) ? (<>
                        <div className="flex w-full justify-center">
                            <TailwindCircularLoader />
                        </div>
                    </>) : (<>
                        <DashboardMyApplied
                            isLoading={(isLoading || myApplied_loading)}
                            myApplied={myApplied}
                            applied_jobsMeta={applied_jobsMeta}
                            paginate={paginate}
                            removeApplication={removeApplication}
                        />
                    </>)}
                </div>
            </div>
            {/* Sidebar Content */}
            <div className='max-sm:w-full! w-dashboard-right-sidebar grid max-sm:gap-[1.333rem] gap-[1.333rem] md:gap-[1.626rem] xl:gap-[1.779rem] 2xl:gap-[1.875rem] 3xl:gap-[2.5rem] 4xl:gap-[3.333rem] max-sm:col-span-1 col-span-4'>
                {/* New Members */}
                <DashboardNewMembers new_members_show_limit={7} />
                {/* Calendar */}
                <DashboardCalendar />
            </div>
        </DashboardContainer>
    );
};

export default MyOpportunities;