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

        const name = data[0] || '';
        let first_name = '';
        let last_name = '';

        if (name.indexOf(' ') >= 0) {
            const names = name.split(' ');
            first_name = names[0];
            last_name = names.slice(1, names.length).join(' ');
        } else {
            first_name = name;
            last_name = '';
        }

        return {
            title: data[1] || 'Creative',
            image: '/resource1.avif',
            name: data[0] || '',
            first_name: first_name || '',
            last_name: last_name || '',
            href: item?.slug || '',
            item: item,
        };
    });


    return {
        spotlightCreatives, getSCreatives,
    };
}

export default useSpotlightCreatives;