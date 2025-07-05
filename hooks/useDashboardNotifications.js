'use client';

import { useContext, useEffect, useState } from "react";
import { Context as NotificationsContext } from "contexts/NotificationsContext";
import { Context as AuthContext } from "contexts/AuthContext";

const useDashboardNotifications = (PER_PAGE = 9) => {

  const [isLoading, setIsLoading] = useState(false);
  const { state: { user } } = useContext(AuthContext);

  const {
    state: { notifications, nextPage: dashboard_notifications_nextPage, loading: dashboard_notifications_loading, meta: dashboard_notifications_meta },
    getNotifications, loadNotifications, markAsReadNotifications,
  } = useContext(NotificationsContext);

  useEffect(() => {
    if (user) {
      getNotifications(user.uuid, 1, PER_PAGE);
    }
  }, [user]);

  const reloadNotifications = () => {
    if (user) {
      getNotifications(user.uuid, dashboard_notifications_meta?.current_page || 1, PER_PAGE);
    }
  };

  const dashboardNotificationsLoadMore = () => {
    dashboard_notifications_nextPage && loadNotifications(dashboard_notifications_nextPage);
  };

  const paginate = (page) => {
    setIsLoading(true);
    getNotifications(user.uuid, page || 1, PER_PAGE, () => {
      setIsLoading(false);
    });
  };

  let dashboardNotifications = notifications?.map(item => {
    var sender = item?.sender || null;
    return {
      uuid: item?.uuid || item?.uuid || 'UUID',
      message: item?.message || item?.message || 'Message',
      created_at: item?.created_at || item?.created_at || '',
      sender_image: (sender?.user_thumbnail || sender?.profile_image) || '/placeholder.avif',
      sender_name: sender?.name || "Ad Agency Creatives",
      item: item,
    };
  });

  return { isLoading, dashboardNotifications, dashboard_notifications_loading, dashboard_notifications_meta, dashboard_notifications_nextPage, dashboardNotificationsLoadMore, markAsReadNotifications, getNotifications, reloadNotifications, paginate };
};

export default useDashboardNotifications;
