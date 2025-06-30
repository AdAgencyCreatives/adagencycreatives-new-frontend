'use client';

import ImageLoader from 'components/ImageLoader';
import ActionLinkDiv from 'components/ActionLinkDiv';
import NotificationBellIcon from 'icons/NotificationBellIcon';
import useDashboardNotifications from 'hooks/useDashboardNotifications';
import CustomTooltip from 'components/CustomTooltip';

const DashboardNotifications = () => {

  const { dashboardNotifications, reloadNotifications, markAsReadNotifications } = useDashboardNotifications();

  const handleMarkAsRead = async (notification_id) => {
    await markAsReadNotifications(notification_id);
    reloadNotifications();
  };

  return (
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
                <CustomTooltip title={'Clear Notification'} placement="top" arrow={true}>
                  <ActionLinkDiv href={'#'} className="flex cursor-pointer text-white hover:text-primary" onClick={() => handleMarkAsRead(notification.uuid)}>
                    <NotificationBellIcon
                      className={[
                        "max-sm:w-[1.301rem]! w-[1.067rem]! md:w-[1.301rem]! xl:w-[1.423rem]! 2xl:w-[1.5rem]! 3xl:w-[2rem]! 4xl:w-[2.667rem]!",
                        "max-sm:h-[1.301rem]! h-[1.067rem]! md:h-[1.301rem]! xl:h-[1.423rem]! 2xl:h-[1.5rem]! 3xl:h-[2rem]! 4xl:h-[2.667rem]!",
                      ].join(' ')}
                    />
                  </ActionLinkDiv>
                </CustomTooltip>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardNotifications;