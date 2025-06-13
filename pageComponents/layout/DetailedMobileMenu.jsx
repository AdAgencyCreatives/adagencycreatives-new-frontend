'use client';

import LinkOrDiv from "components/LinkOrDiv";
import TmText from "components/TmText";
import ChevronDownIcon from "icons/ChevronDownIcon";
import ChevronUpIcon from "icons/ChevronUpIcon";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailedMobileMenu = ({ isOpen = false, setIsOpen = (flag) => { }, user }) => {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Cleanup function
    return () => {
      setIsOpen(false);
    };
  }, [pathname, searchParams]);

  const VISIBILITY = {
    ALL: 'ALL',
    LOGGED_IN: 'LOGGED_IN',
    NON_LOGGED_IN: 'NON_LOGGED_IN',
  };

  const EXPAND_COLLAPSE_STATE = {
    COLLAPSED: 'COLLAPSED',
    EXPANDED: 'EXPANDED',
  };

  const INITIAL_LINKS = [
    { text: 'Home', href: '/', visibility: VISIBILITY.ALL, links: [] },
    { text: 'About', href: '/about', visibility: VISIBILITY.ALL, links: [] },
    {
      text: 'Creatives', href: '/creatives', visibility: VISIBILITY.ALL, link_state: EXPAND_COLLAPSE_STATE.COLLAPSED, links: [
        { text: <>Create <TmText text='ProFile' /></>, href: '{{parent.href}}#create-profile', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Search Jobs', href: '{{parent.href}}#search-jobs', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Resources ', href: '{{parent.href}}#resources', visibility: VISIBILITY.ALL, links: [] },
      ]
    },
    {
      text: 'agencies', href: '/agencies', visibility: VISIBILITY.ALL, link_state: EXPAND_COLLAPSE_STATE.COLLAPSED, links: [
        { text: 'Hire Creatives', href: '{{parent.href}}#creatives', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Post a Job', href: '{{parent.href}}#post-a-job', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Choose a Plan ', href: '{{parent.href}}#plans', visibility: VISIBILITY.ALL, links: [] },
      ]
    },
    {
      text: 'the lounge', href: '/thelounge', visibility: VISIBILITY.ALL, link_state: EXPAND_COLLAPSE_STATE.COLLAPSED, links: [
        { text: 'Spotlight', href: '{{parent.href}}#spotlight', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Chat', href: '{{parent.href}}#chat', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Featured', href: '{{parent.href}}#featured', visibility: VISIBILITY.ALL, links: [] },
        { text: 'News', href: '{{parent.href}}#news', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Publications', href: '{{parent.href}}#publications', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Cities', href: '{{parent.href}}#cities', visibility: VISIBILITY.ALL, links: [] },
      ]
    },
    {
      text: 'directories', href: '#toggle', visibility: VISIBILITY.ALL, link_state: EXPAND_COLLAPSE_STATE.COLLAPSED, links: [
        { text: 'Jobs', href: '/jobs-directory', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Creatives', href: '/creatives-directory', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Agencies', href: '/agencies-directory', visibility: VISIBILITY.ALL, links: [] },
      ]
    },
    { text: 'Faq', href: '/faq', visibility: VISIBILITY.ALL, links: [] },
    // { text: '', href: '', visibility: VISIBILITY.ALL, links: [] },
  ];

  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(INITIAL_LINKS);
  }, [isOpen]);

  const link_class_name = "text-[24px] 3xl:text-[32px] 4xl:text-[42px] transition delay-150 duration-300 ease-in-out lowercase";

  const toggleExpandCollapse = (index) => {
    let updated_links = [...links];
    updated_links[index].link_state = updated_links[index].link_state == EXPAND_COLLAPSE_STATE.COLLAPSED ? EXPAND_COLLAPSE_STATE.EXPANDED : EXPAND_COLLAPSE_STATE.COLLAPSED;
    setLinks(updated_links);
  };

  const handleLinkClick = (e, item) => {
    if (item?.href?.length > 0) {
      if (item.href == '#toggle' && item?.links?.length > 0) {
        e.preventDefault();
        e.stopPropagation();
        toggleExpandCollapse(item.index);
        return true;
      }
    } else {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    return true;
  };

  const parseHref = (href, parent_href) => {
    if (href?.length > 0 && parent_href?.length > 0) {
      return href.replaceAll('{{parent.href}}', parent_href);
    }
    return href;
  };

  return (
    <nav className="flex flex-col gap-[21px] font-bold relative">
      {links?.length > 0 && (<>
        {links.map((link, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <LinkOrDiv onClick={(e) => handleLinkClick(e, { ...link, index: index })} href={link.href} className={`${link_class_name} ${link.href == pathname ? `text-brand-yellow ${link.href?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : 'select-none'}` : `text-white  ${link.href?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : 'select-none'}`}`}>{link.text}</LinkOrDiv>
              {link.links?.length > 0 && (
                <button onClick={() => toggleExpandCollapse(index)} className={`${link.href == pathname ? 'text-brand-yellow hover:text-brand-yellow' : 'text-white hover:text-brand-yellow'}`}>
                  {link.link_state == EXPAND_COLLAPSE_STATE.EXPANDED ? (<ChevronUpIcon />) : (<ChevronDownIcon />)}
                </button>
              )}
            </div>
            {link.link_state == EXPAND_COLLAPSE_STATE.EXPANDED && link.links?.length > 0 && (<>
              <div className="flex flex-col gap-[21px] font-bold relative px-[24px] pt-[21px]">
                {link.links.map((link_link, link_index) => {
                  const parsed_link_link_href = parseHref(link_link.href, link.href);
                  return (
                    <div key={`${index}-${link_index}`}>
                      <LinkOrDiv onClick={(e) => handleLinkClick(e, { ...link_link, href: parsed_link_link_href, index: link_index })} href={parsed_link_link_href} className={`${link_class_name} ${parsed_link_link_href == pathname ? `text-brand-yellow ${parsed_link_link_href?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : 'select-none'}` : `text-white  ${parsed_link_link_href?.length > 0 ? 'hover:text-brand-yellow cursor-pointer' : 'select-none'}`}`}>{link_link.text}</LinkOrDiv>
                    </div>
                  );
                })}
              </div>
            </>)}
          </div>
        ))}
      </>)}
    </nav>
  );
};

export default DetailedMobileMenu;