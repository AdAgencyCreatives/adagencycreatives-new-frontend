'use client';

import { useContext, useEffect } from "react";
import { Context as AuthContext } from "contexts/AuthContext";

const useDashboardUser = () => {

    const {
        state: { user, auth_creative, auth_agency },
    } = useContext(AuthContext);

    const dashboard_user = user?.role == 'creative' ? auth_creative : auth_agency;

    const dashboard_user_image = (dashboard_user?.user_thumbnail || dashboard_user?.profile_image) || null;
    const dashboard_user_name = dashboard_user?.name || 'USER';
    const dashboard_user_location = `${dashboard_user?.location?.city || 'City'}, ${dashboard_user?.location?.state || 'State'}`;
    const dashboard_user_profile_url = dashboard_user?.slug?.length > 0 ? `/${user?.role}/${dashboard_user?.slug}` : '';

    return {
        dashboard_user_image, dashboard_user_name, dashboard_user_location, dashboard_user_profile_url, dashboard_user
    };
}

export default useDashboardUser;