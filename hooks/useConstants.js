'use client';
import { sidebarMenu as creativeSidebarMenu } from "pageComponents/creatives/constants"
import { sidebarMenu as agenciesSidebarMenu } from "pageComponents/agencies/constants"

const useConstants = () => {

    return {
        creativeSidebarMenu, agenciesSidebarMenu,
    };
}

export default useConstants;