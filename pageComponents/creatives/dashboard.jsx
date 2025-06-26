'use client';

import ImageLoader from 'components/ImageLoader';
import LinkOrDiv from 'components/LinkOrDiv';
import useDashboardNewMembers from 'hooks/useDashboardNewMembers';
import RightArrowIcon from 'icons/RightArrowIcon';
import NotificationBellIcon from 'icons/NotificationBellIcon';
import useDashboardNotifications from 'hooks/useDashboardNotifications';
import DashboardContainer from 'pageComponents/dashboard/dashboard-container';
import DashboardRoundedContainer from 'pageComponents/dashboard/dashboard-rounded-container';
import ChatIcon from 'icons/ChatIcon';
import MessageIcon from 'icons/MessageIcon';
import DashboardChatIcon from 'icons/DashboardChatIcon';
import BulkIcon from 'icons/BulkIcon';
import TmText from 'components/TmText';
import DashboardUserIcon from 'icons/DashboardUserIcon';

const CreativesDashboard = () => {

  const new_members_show_limit = 5;
  const { dashboardNewMembers } = useDashboardNewMembers(new_members_show_limit);
  const { dashboardNotifications } = useDashboardNotifications();

  return (
    <DashboardContainer>
      <div className="max-sm:w-full! w-dashboard-content flex flex-col justify-between max-sm:gap-[0.889rem] gap-[0.889rem] md:gap-[1.084rem] xl:gap-[1.186rem] 2xl:gap-[1.25rem] 3xl:gap-[1.667rem] 4xl:gap-[2.222rem] max-sm:rounded-[1.5rem] rounded-[1.422rem] md:rounded-[1.735rem] xl:rounded-[1.897rem] 2xl:rounded-[2rem] 3xl:rounded-[2.667rem] 4xl:rounded-[3.556rem] border-(--ad-gray) border shadow-(--ad-box-shadow) max-sm:p-[1.422rem] p-[1.422rem] md:p-[1.735rem] xl:p-[1.897rem] 2xl:p-[2rem] 3xl:p-[2.667rem] 4xl:p-[3.556rem] max-sm:col-span-1 col-span-10">
        <div className="">
          <h1 className='font-bold text-brand-yellow max-sm:text-[1.067rem] text-[1.067rem] md:text-[1.301rem] xl:text-[1.423rem] 2xl:text-[1.5rem] 3xl:text-[2rem] 4xl:text-[2.667rem]'>Pro Dashboard</h1>
        </div>
        <div className="text-white font-bold leading-none max-sm:text-[0.711rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]">&nbsp;</div>
        <div className="flex flex-row max-sm:flex-wrap item-center justify-between max-sm:gap-[1.067rem] gap-[1.067rem] md:gap-[1.301rem] xl:gap-[1.423rem] 2xl:gap-[1.5rem] 3xl:gap-[2rem] 4xl:gap-[2.667rem]">
          <DashboardRoundedContainer>
            <div className="flex flex-row max-sm:gap-[0.711rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
              <MessageIcon />
              <div className="flex flex-1 flex-col max-sm:gap-[0.356rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]">
                <div className="text-white leading-[1.33em] font-semibold max-sm:text-[0.711rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]">
                  Send a Message
                </div>
                <div className="text-gray-700 leading-[1.33em] max-sm:text-[0.622rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]">
                  Draft a message to inform agencies.
                </div>
              </div>
            </div>
          </DashboardRoundedContainer>
          <DashboardRoundedContainer>
            <div className="flex flex-row max-sm:gap-[0.711rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
              <DashboardChatIcon />
              <div className="flex flex-1 flex-col max-sm:gap-[0.356rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]">
                <div className="text-white leading-[1.33em] font-semibold max-sm:text-[0.711rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]">
                  Speak Your Mind - Creatives Only
                </div>
                <div className="text-gray-700 leading-[1.33em] max-sm:text-[0.622rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]">
                  Jump into discussions or kick off.
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
            <div className="flex flex-col justify-between max-sm:gap-[1.6rem] gap-[1.6rem] md:gap-[1.952rem] xl:gap-[2.134rem] 2xl:gap-[2.25rem] 3xl:gap-[3rem] 4xl:gap-[4rem]">
              <div className="flex flex-row items-center justify-between max-sm:gap-[0.711rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
                <div className='text-white font-bold leading-none max-sm:text-[1.422rem] text-[1.422rem] md:text-[1.735rem] xl:text-[1.897rem] 2xl:text-[2rem] 3xl:text-[2.667rem] 4xl:text-[3.556rem]'>
                  01
                </div>
                <BulkIcon />
              </div>
              <div className='text-white font-bold max-sm:text-[0.711rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]'>
                Applied Jobs
              </div>
            </div>
          </DashboardRoundedContainer>
          <DashboardRoundedContainer>
            <div className="flex flex-col justify-between max-sm:gap-[1.6rem] gap-[1.6rem] md:gap-[1.952rem] xl:gap-[2.134rem] 2xl:gap-[2.25rem] 3xl:gap-[3rem] 4xl:gap-[4rem]">
              <div className="flex flex-row items-center justify-between max-sm:gap-[0.711rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
                <div className='text-white font-bold leading-none max-sm:text-[1.422rem] text-[1.422rem] md:text-[1.735rem] xl:text-[1.897rem] 2xl:text-[2rem] 3xl:text-[2.667rem] 4xl:text-[3.556rem]'>
                  01
                </div>
                <MessageIcon />
              </div>
              <div className='text-white font-bold max-sm:text-[0.711rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]'>
                New Messages
              </div>
            </div>
          </DashboardRoundedContainer>
          <DashboardRoundedContainer>
            <div className="flex flex-col justify-between max-sm:gap-[1.6rem] gap-[1.6rem] md:gap-[1.952rem] xl:gap-[2.134rem] 2xl:gap-[2.25rem] 3xl:gap-[3rem] 4xl:gap-[4rem]">
              <div className="flex flex-row items-center justify-between max-sm:gap-[0.711rem] gap-[0.711rem] md:gap-[0.867rem] xl:gap-[0.949rem] 2xl:gap-[1rem] 3xl:gap-[1.333rem] 4xl:gap-[1.778rem]">
                <div className='text-white font-bold leading-none max-sm:text-[1.422rem] text-[1.422rem] md:text-[1.735rem] xl:text-[1.897rem] 2xl:text-[2rem] 3xl:text-[2.667rem] 4xl:text-[3.556rem]'>
                  02
                </div>
                <DashboardUserIcon />
              </div>
              <div className='text-white font-bold max-sm:text-[0.711rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]'>
                <TmText text='ProFile' className='max-sm:text-[0.711rem] text-[0.711rem] md:text-[0.867rem] xl:text-[0.949rem] 2xl:text-[1rem] 3xl:text-[1.333rem] 4xl:text-[1.778rem]' /><span>&nbsp;Viewed</span>
              </div>
            </div>
          </DashboardRoundedContainer>
        </div>
      </div>
      <div className='max-sm:w-full! w-dashboard-right-sidebar grid max-sm:gap-[0.889rem] gap-[0.889rem] md:gap-[1.084rem] xl:gap-[1.186rem] 2xl:gap-[1.25rem] 3xl:gap-[1.667rem] 4xl:gap-[2.222rem] max-sm:col-span-1 col-span-4'>
        <div className="max-sm:rounded-[1.5rem] rounded-[1.422rem] md:rounded-[1.735rem] xl:rounded-[1.897rem] 2xl:rounded-[2rem] 3xl:rounded-[2.667rem] 4xl:rounded-[3.556rem] border-(--ad-gray) border shadow-(--ad-box-shadow)">
          <div className="flex flex-col max-sm:p-[1.067rem] p-[1.067rem] md:p-[1.301rem] xl:p-[1.423rem] 2xl:p-[1.5rem] 3xl:p-[2rem] 4xl:p-[2.667rem] max-sm:gap-[0.889rem] gap-[0.889rem] md:gap-[1.084rem] xl:gap-[1.186rem] 2xl:gap-[1.25rem] 3xl:gap-[1.667rem] 4xl:gap-[2.222rem]">
            <div className='font-bold leading-[1.33em] max-sm:text-[0.75rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]'>
              New Members
            </div>
            {dashboardNewMembers && dashboardNewMembers.length > 0 && (
              <>
                {dashboardNewMembers.map((member, index) => (
                  <div key={index} className='flex flex-row items-center justify-between max-sm:gap-[0.434rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]'>
                    <div className="flex">
                      <ImageLoader src={member.image} alt={member.name || ''}
                        className='image-mask object-cover aspect-square max-sm:w-[2.602rem] w-[2.133rem] md:w-[2.602rem] xl:w-[2.846rem] 2xl:w-[3rem] 3xl:w-[4rem] 4xl:w-[5.333rem]'
                        loadingClassName='max-sm:w-[2.846rem]! w-[2.133rem]! md:w-[2.602rem]! xl:w-[2.846rem]! 2xl:w-[3rem]! 3xl:w-[4rem]! 4xl:w-[5.333rem]! max-sm:h-[2.846rem]! h-[2.133rem]! md:h-[2.602rem]! xl:h-[2.846rem]! 2xl:h-[3rem]! 3xl:h-[4rem]! 4xl:h-[5.333rem]!'
                      />
                    </div>
                    <div className="flex flex-1 flex-col max-sm:gap-[0.217rem] gap-[0.178rem] md:gap-[0.217rem] xl:gap-[0.237rem] 2xl:gap-[0.25rem] 3xl:gap-[0.333rem] 4xl:gap-[0.444rem]">
                      <div className="font-bold max-sm:text-[0.651rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">{member.name || ''}</div>
                      <div className="max-sm:text-[0.542rem] text-[0.444rem] md:text-[0.542rem] xl:text-[0.593rem] 2xl:text-[0.625rem] 3xl:text-[0.833rem] 4xl:text-[1.111rem]">{member.title || ''}</div>
                    </div>
                    <LinkOrDiv href={member.profile_url || ''} className="flex cursor-pointer text-white hover:text-brand-yellow">
                      <RightArrowIcon />
                    </LinkOrDiv>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="max-sm:rounded-[1.5rem] rounded-[1.422rem] md:rounded-[1.735rem] xl:rounded-[1.897rem] 2xl:rounded-[2rem] 3xl:rounded-[2.667rem] 4xl:rounded-[3.556rem] border-(--ad-gray) border shadow-(--ad-box-shadow)">
          <div className="flex flex-col max-sm:p-[1.067rem] p-[1.067rem] md:p-[1.301rem] xl:p-[1.423rem] 2xl:p-[1.5rem] 3xl:p-[2rem] 4xl:p-[2.667rem] max-sm:gap-[0.889rem] gap-[0.889rem] md:gap-[1.084rem] xl:gap-[1.186rem] 2xl:gap-[1.25rem] 3xl:gap-[1.667rem] 4xl:gap-[2.222rem]">
            <div className='font-bold leading-[1.33em] max-sm:text-[0.75rem] text-[0.622rem] md:text-[0.759rem] xl:text-[0.83rem] 2xl:text-[0.875rem] 3xl:text-[1.167rem] 4xl:text-[1.556rem]'>
              Notifications
            </div>
            {dashboardNotifications && dashboardNotifications.length > 0 && (
              <>
                {dashboardNotifications.map((notification, index) => (
                  <div key={index} className='flex flex-row items-center justify-between max-sm:gap-[0.434rem] gap-[0.356rem] md:gap-[0.434rem] xl:gap-[0.474rem] 2xl:gap-[0.5rem] 3xl:gap-[0.667rem] 4xl:gap-[0.889rem]'>
                    <div className="flex">
                      <ImageLoader src={notification.sender_image} alt={notification.sender_name}
                        className='image-mask object-cover aspect-square max-sm:w-[2.602rem] w-[2.133rem] md:w-[2.602rem] xl:w-[2.846rem] 2xl:w-[3rem] 3xl:w-[4rem] 4xl:w-[5.333rem]'
                        loadingClassName='max-sm:w-[2.846rem]! w-[2.133rem]! md:w-[2.602rem]! xl:w-[2.846rem]! 2xl:w-[3rem]! 3xl:w-[4rem]! 4xl:w-[5.333rem]! max-sm:h-[2.846rem]! h-[2.133rem]! md:h-[2.602rem]! xl:h-[2.846rem]! 2xl:h-[3rem]! 3xl:h-[4rem]! 4xl:h-[5.333rem]!'
                      />
                    </div>
                    <div className="flex flex-1 flex-col max-sm:gap-[0.217rem] gap-[0.178rem] md:gap-[0.217rem] xl:gap-[0.237rem] 2xl:gap-[0.25rem] 3xl:gap-[0.333rem] 4xl:gap-[0.444rem]">
                      <div className="font-bold max-sm:text-[0.651rem] text-[0.533rem] md:text-[0.651rem] xl:text-[0.711rem] 2xl:text-[0.75rem] 3xl:text-[1rem] 4xl:text-[1.333rem]">{notification.sender_name}</div>
                      <div className="max-sm:text-[0.542rem] text-[0.444rem] md:text-[0.542rem] xl:text-[0.593rem] 2xl:text-[0.625rem] 3xl:text-[0.833rem] 4xl:text-[1.111rem]" dangerouslySetInnerHTML={{ __html: notification.message || '' }}></div>
                    </div>
                    <LinkOrDiv href={''} className="flex cursor-pointer text-white hover:text-brand-yellow">
                      <NotificationBellIcon />
                    </LinkOrDiv>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default CreativesDashboard;