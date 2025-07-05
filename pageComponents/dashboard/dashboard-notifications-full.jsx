'use client';

import ImageLoader from 'components/ImageLoader';
import useDashboardNotifications from 'hooks/useDashboardNotifications';
import Paginate from 'components/Paginate';
import TailwindCircularLoader from 'components/TailwindCircularLoader';

const DashboardNotificationsFull = () => {

  const per_page = 12;
  const { dashboardNotifications, dashboard_notifications_meta, dashboard_notifications_loading, paginate } = useDashboardNotifications(per_page);

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full max-sm:gap-[0.889rem] gap-[0.889rem] md:gap-[1.084rem] xl:gap-[1.186rem] 2xl:gap-[1.25rem] 3xl:gap-[1.667rem] 4xl:gap-[2.222rem]">
        {(dashboard_notifications_loading) ? (
          <TailwindCircularLoader />
        ) : (<>
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
                </div>
              ))}
              {dashboard_notifications_meta.total > per_page && (
                <Paginate
                  meta={dashboard_notifications_meta}
                  paginate={paginate}
                  title={"notifications"}
                />
              )}
            </>
          )}
        </>)}
      </div>
    </div>
  );
};

export default DashboardNotificationsFull;