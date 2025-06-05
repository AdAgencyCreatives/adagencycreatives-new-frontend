'use client';

import { useContext, useEffect } from "react";
import { Context as SpotlightContext } from "contexts/SpotlightContext";
import useHelper from "./useHelper";

const useSpotlightCreatives = () => {

    const { decodeEntities } = useHelper();

    const {
        state: { screatives },
        getSCreatives,
    } = useContext(SpotlightContext);

    useEffect(() => {
        getSCreatives();
    }, []);

    let spotlightCreatives = screatives?.map(item => {

        let data = decodeEntities(item.title);
        if (data.indexOf("<br>") >= 0) {
            data = data.split('<br>');
        } else {
            data = [data];
        }

        return {
            title: data[1] || 'Creative',
            image: '/resource1.avif',
            name: data[0] || '',
            href: item?.slug || '',
            item: item,
        };
    });


    return {
        spotlightCreatives, getSCreatives,
    };
}

export default useSpotlightCreatives;