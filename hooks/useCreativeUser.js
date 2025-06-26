'use client';

import { useContext, useEffect } from "react";
import { Context as AuthContext } from "contexts/AuthContext";

const useCreativeUser = () => {

    const {
        state: { auth_creative: creative },
    } = useContext(AuthContext);

    const creative_title = creative?.category || creative?.title || 'TITLE';
    const creative_image = (creative?.user_thumbnail || creative?.profile_image) || null;
    const creative_name = creative?.name || 'CREATIVE';
    const creative_location = `${creative?.location?.city || 'city'}, ${creative?.location?.state || 'state'}`;
    const profile_url = creative?.slug?.length > 0 ? `/creative/${creative.slug}` : '';

    return {
        creative_title, creative_image, creative_name, creative_location, profile_url, creative
    };
}

export default useCreativeUser;