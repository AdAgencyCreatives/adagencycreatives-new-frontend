import { useContext, useEffect } from "react";
import { Context as CreativesContext } from "contexts/CreativesContext";
import { placeholderFeaturedCreatives } from 'constants/creatives';

const useFeaturedCreatives = (per_page = 10) => {

    const {
        state: { featured_creatives },
        getFeaturedCreatives,
    } = useContext(CreativesContext);

    useEffect(() => {
        getFeaturedCreatives(per_page);
    }, []);


    let featuredCreatives = featured_creatives?.map(item => {
        return {
            title: item?.category || item?.title || 'TITLE',
            image: (item?.user_thumbnail || item?.profile_image) || '/placeholder.avif',
            name: item?.name || 'CREATIVE',
            location: `${item?.location?.city || 'city'}, ${item?.location?.state || 'state'}`,
            item: item,
        };
    });

    if (featuredCreatives?.length > 0) {
        featuredCreatives = [...featuredCreatives.slice(0, per_page), ...placeholderFeaturedCreatives.slice(0, per_page - Math.min(per_page, featuredCreatives.length))]
    } else {
        featuredCreatives = placeholderFeaturedCreatives;
    }

    return {
        featuredCreatives,
    };
}

export default useFeaturedCreatives;