'use client';

import ImageLoader from 'components/ImageLoader';
import ActionLinkDiv from 'components/ActionLinkDiv';
import DashboardContainer from 'pageComponents/dashboard/dashboard-container';
import DashboardRoundedContainer from 'pageComponents/dashboard/dashboard-rounded-container';
import MessageIcon from 'icons/MessageIcon';
import DashboardChatIcon from 'icons/DashboardChatIcon';
import BulkIcon from 'icons/BulkIcon';
import TmText from 'components/TmText';
import DashboardUserIcon from 'icons/DashboardUserIcon';
import useDashboardStats from 'hooks/useDashboardStats';
import DashboardNewMembers from 'pageComponents/dashboard/dashboard-new-members';
import DashboardNotifications from 'pageComponents/dashboard/dashboard-notifications';
import DashboardStatsBox from 'pageComponents/dashboard/dashboard-stats-box';

const CreativesDashboard = () => {

  const { dashboardStats } = useDashboardStats();

  return (
    <DashboardContainer>
      {/* Dashboard Content */}
      <div className="max-sm:w-full! w-dashboard-content flex flex-col justify-between max-sm:gap-[0.889rem] gap-[0.889rem] md:gap-[1.084rem] xl:gap-[1.186rem] 2xl:gap-[1.25rem] 3xl:gap-[1.667rem] 4xl:gap-[2.222rem] max-sm:rounded-[1.5rem] rounded-[1.422rem] md:rounded-[1.735rem] xl:rounded-[1.897rem] 2xl:rounded-[2rem] 3xl:rounded-[2.667rem] 4xl:rounded-[3.556rem] border-(--ad-gray) border shadow-(--ad-box-shadow) max-sm:p-[1.422rem] p-[1.422rem] md:p-[1.735rem] xl:p-[1.897rem] 2xl:p-[2rem] 3xl:p-[2.667rem] 4xl:p-[3.556rem] max-sm:col-span-1 col-span-10">
        <div className="">
          <h1 className='font-bold text-primary max-sm:text-[1.067rem] text-[1.067rem] md:text-[1.301rem] xl:text-[1.423rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.667rem]'>Pro Dashboard</h1>
        </div>
        <div className="text-white font-bold leading-none max-sm:text-[0.711rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]">&nbsp;</div>
        <div className="flex flex-row max-sm:flex-wrap item-center justify-between max-sm:gap-[1.067rem] gap-[1.067rem] md:gap-[1.301rem] xl:gap-[1.423rem] 2xl:gap-[1.5rem] 3xl:gap-[2rem] 4xl:gap-[2.667rem]">
          <DashboardRoundedContainer>
            <div className="flex flex-row max-sm:gap-[0.711rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
              <MessageIcon />
              <div className="flex flex-1 flex-col max-sm:gap-[0.356rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]">
                <ActionLinkDiv href='#' className="text-white leading-[1.33em] font-semibold max-sm:text-[0.711rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]">
                  Send A Message
                </ActionLinkDiv>
                <div className="text-gray-700 leading-[1.33em] max-sm:text-[0.622rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]">
                  continue or start a new one
                </div>
              </div>
            </div>
          </DashboardRoundedContainer>
          <DashboardRoundedContainer>
            <div className="flex flex-row max-sm:gap-[0.711rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
              <DashboardChatIcon />
              <div className="flex flex-1 flex-col max-sm:gap-[0.356rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]">
                <ActionLinkDiv href='/thelounge' className="text-white leading-[1.33em] font-semibold max-sm:text-[0.711rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]">
                  Speak Your Mind<br />Creatives Only
                </ActionLinkDiv>
                <div className="text-gray-700 leading-[1.33em] max-sm:text-[0.622rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]">
                  jump in or kick up something new
                </div>
              </div>
            </div>
          </DashboardRoundedContainer>
        </div>
        <div className="text-white font-bold leading-none max-sm:text-[0.711rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]">&nbsp;</div>
        <div className="flex flex-row max-sm:flex-wrap item-center justify-between max-sm:gap-[1.067rem] gap-[1.067rem] md:gap-[1.301rem] xl:gap-[1.423rem] 2xl:gap-[1.5rem] 3xl:gap-[2rem] 4xl:gap-[2.667rem]">
          <DashboardRoundedContainer>
            <div>
              <div className='text-white font-bold max-sm:text-[0.711rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]'>
                Active Jobs
              </div>
              <div className="flex justify-center">
                <ImageLoader src={'/images/USA.png'} alt='USA MAP' />
              </div>
            </div>
          </DashboardRoundedContainer>
        </div>
        <div className="text-white font-bold leading-none max-sm:text-[0.711rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]">&nbsp;</div>
        <div className="flex flex-row max-sm:flex-wrap item-center justify-between max-sm:gap-[1.067rem] gap-[1.067rem] md:gap-[1.301rem] xl:gap-[1.423rem] 2xl:gap-[1.5rem] 3xl:gap-[2rem] 4xl:gap-[2.667rem]">
          <DashboardRoundedContainer>
            <DashboardStatsBox
              title='Applied Jobs'
              value={dashboardStats?.jobs_applied > 0 ? dashboardStats?.jobs_applied : ''}
              icon={<BulkIcon />}
            />
          </DashboardRoundedContainer>
          <DashboardRoundedContainer>
            <DashboardStatsBox
              title='New Messages'
              value={dashboardStats?.review > 0 ? dashboardStats?.review : ''}
              icon={<MessageIcon />}
            />
          </DashboardRoundedContainer>
          <DashboardRoundedContainer>
            <DashboardStatsBox
              title={<><TmText text='ProFile' className='max-sm:text-[0.711rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]' /><span>&nbsp;Viewed</span></>}
              value={dashboardStats?.views > 0 ? dashboardStats?.views : ''}
              icon={<DashboardUserIcon />}
            />
          </DashboardRoundedContainer>
        </div>
      </div>
      {/* Sidebar Content */}
      <div className='max-sm:w-full! w-dashboard-right-sidebar grid max-sm:gap-[1.333rem] gap-[1.333rem] md:gap-[1.626rem] xl:gap-[1.779rem] 2xl:gap-[1.875rem] 3xl:gap-[2.5rem] 4xl:gap-[3.333rem] max-sm:col-span-1 col-span-4'>
        {/* New Members */}
        <DashboardNewMembers />
        {/* Notifications */}
        <DashboardNotifications />
      </div>
    </DashboardContainer>
  );
};

export default CreativesDashboard;