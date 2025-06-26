'use client';

import { useContext, useEffect } from "react";
import { Context as AuthContext } from "contexts/AuthContext"
import { Context as CommunityContext } from "contexts/CommunityContext"

const useDashboardNewMembers = (new_members_show_limit = 5) => {

  const {
    state: { token },
  } = useContext(AuthContext);

  const {
    state: { new_members, },
    getNewMembers,
  } = useContext(CommunityContext);

  useEffect(() => {
    if (token) {
      getNewMembers(new_members_show_limit);
    }
  }, [token]);

  let dashboardNewMembers = new_members?.map(item => {
    return {
      title: item?.category || item?.title || 'TITLE',
      image: (item?.user_thumbnail || item?.profile_image) || '/placeholder.avif',
      name: item?.name || 'CREATIVE',
      location: `${item?.location?.city || 'city'}, ${item?.location?.state || 'state'}`,
      profile_url: item?.slug?.length > 0 ? `/creative/${item.slug}` : '',
      item: item,
    };
  });

  return {
    dashboardNewMembers, getNewMembers
  };
}

export default useDashboardNewMembers;