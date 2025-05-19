import { useContext, useEffect } from "react";
import { Context as AgenciesContext } from "contexts/AgenciesContext";
import { placeholderFeaturedAgencies } from 'constants/agencies';

const useFeaturedAgencies = (per_page = 10) => {

    const {
        state: { featured_agencies },
        getFeaturedAgencies,
    } = useContext(AgenciesContext);

    useEffect(() => {
        getFeaturedAgencies(per_page);
    }, []);


    let featuredAgencies = featured_agencies?.map(item => {
        return {
            title: item?.name || 'AGENCY',
            image: (item?.user_thumbnail || item?.logo) || '/placeholder.avif',
            item: item,
        };
    });

    if (featuredAgencies?.length > 0) {
        featuredAgencies = [...featuredAgencies.slice(0, per_page), ...placeholderFeaturedAgencies.slice(0, per_page - Math.min(per_page, featuredAgencies.length))]
    } else {
        featuredAgencies = placeholderFeaturedAgencies;
    }

    return {
        featuredAgencies,
    };
}

export default useFeaturedAgencies;