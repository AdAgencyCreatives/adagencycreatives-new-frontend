'use client';

import DashboardContainer from 'pageComponents/dashboard/dashboard-container';
import DashboardNotificationsFull from 'pageComponents/dashboard/dashboard-notifications-full';

const Notifications = () => {

    return (
        <DashboardContainer>
            {/* Dashboard Content */}
            <div className="max-sm:w-full! w-dashboard-content-full flex flex-col max-sm:gap-[0.889rem] gap-[0.889rem] md:gap-[1.084rem] xl:gap-[1.186rem] 2xl:gap-[1.25rem] 3xl:gap-[1.667rem] 4xl:gap-[2.222rem] max-sm:rounded-[1.5rem] rounded-[1.422rem] md:rounded-[1.735rem] xl:rounded-[1.897rem] 2xl:rounded-[2rem] 3xl:rounded-[2.667rem] 4xl:rounded-[3.556rem] border-(--ad-gray) border shadow-(--ad-box-shadow) max-sm:p-[1.422rem] p-[1.422rem] md:p-[1.735rem] xl:p-[1.897rem] 2xl:p-[2rem] 3xl:p-[2.667rem] 4xl:p-[3.556rem] max-sm:col-span-1 col-span-10">
                <div className="">
                    <h1 className='font-bold text-primary max-sm:text-[1.067rem] text-[1.067rem] md:text-[1.301rem] xl:text-[1.423rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.667rem]'>
                        Notifications
                    </h1>
                </div>
                {/* Notifications */}
                <div className="flex flex-row max-sm:flex-wrap item-center justify-between max-sm:gap-[1.067rem] gap-[1.067rem] md:gap-[1.301rem] xl:gap-[1.423rem] 2xl:gap-[1.5rem] 3xl:gap-[2rem] 4xl:gap-[2.667rem]">
                    <DashboardNotificationsFull />
                </div>
            </div>
        </DashboardContainer>
    );
};

export default Notifications;