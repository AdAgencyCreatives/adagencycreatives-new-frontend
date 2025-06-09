'use client';

import { useContext, useEffect } from "react";
import { Context as DataContext } from "contexts/DataContext";

const useFeaturedCities = () => {

    const {
        state: { featured_cities },
        getFeaturedCities,
    } = useContext(DataContext);

    useEffect(() => {
        getFeaturedCities();
    }, []);

    let featuredCities = featured_cities?.map(item => {

        return {
            image: item?.preview_link || '/placeholder.avif',
            name: item?.name || 'CITY',
            href: item?.slug || '',
            item: item,
        };
    });


    return {
        featuredCities, getFeaturedCities,
    };
}

export default useFeaturedCities;