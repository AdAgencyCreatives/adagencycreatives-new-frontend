'use client';

import { useContext, useEffect } from "react";
import { Context as NotificationsContext } from "contexts/NotificationsContext";
import { Context as AuthContext } from "contexts/AuthContext";

const useDashboardNotifications = () => {

  const { state: { user } } = useContext(AuthContext);

  const {
    state: { notifications, nextPage: dashboard_notifications_nextPage, loading: dashboard_notifications_loading, meta: dashboard_notifications_meta },
    getNotifications, loadNotifications, markAsReadNotifications,
  } = useContext(NotificationsContext);

  useEffect(() => {
    if (user) {
      getNotifications(user.uuid);
    }
  }, [user]);

  const dashboardNotificationsLoadMore = () => {
    dashboard_notifications_nextPage && loadNotifications(dashboard_notifications_nextPage);
  };

  let dashboardNotifications = notifications?.slice(0, 5)?.map(item => {
    var sender = item?.sender || item?.user || {};
    return {
      uuid: item?.uuid || item?.uuid || 'UUID',
      message: item?.message || item?.message || 'Message',
      created_at: item?.created_at || item?.created_at || '',
      sender_image: (sender?.user_thumbnail || sender?.profile_image) || '/placeholder.avif',
      sender_name: sender?.name || "Sender Name",
      item: item,
    };
  });

  return { dashboardNotifications, dashboard_notifications_loading, dashboard_notifications_meta, dashboardNotificationsLoadMore, markAsReadNotifications, getNotifications, };
};

export default useDashboardNotifications;
