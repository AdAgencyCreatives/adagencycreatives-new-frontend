'use client';

import TmText from "components/TmText";
import ChevronDownIcon from "icons/ChevronDownIcon";
import ChevronUpIcon from "icons/ChevronUpIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const DetailedMobileMenu = ({ isOpen = false, setIsOpen = (flag) => { }, user }) => {

  const pathname = usePathname();

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
        { text: <>create <TmText text='ProFile' /></>, href: '', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Search Jobs', href: '', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Featured Jobs ', href: '', visibility: VISIBILITY.ALL, links: [] },
      ]
    },
    {
      text: 'agencies', href: '/agencies', visibility: VISIBILITY.ALL, link_state: EXPAND_COLLAPSE_STATE.COLLAPSED, links: [
        { text: 'Hire Creatives', href: '', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Post a Job', href: '', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Choose a Plan ', href: '', visibility: VISIBILITY.ALL, links: [] },
      ]
    },
    {
      text: 'the lounge', href: '/thelounge', visibility: VISIBILITY.ALL, link_state: EXPAND_COLLAPSE_STATE.COLLAPSED, links: [
        { text: 'Spotlight', href: '', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Featured Creatives', href: '', visibility: VISIBILITY.ALL, links: [] },
        { text: 'News', href: '', visibility: VISIBILITY.ALL, links: [] },
        { text: 'Publications', href: '', visibility: VISIBILITY.ALL, links: [] },
      ]
    },
    { text: 'Search Jobs', href: '/jobs-directory', visibility: VISIBILITY.ALL, links: [] },
    { text: 'Hire Talent', href: '/creatives-directory', visibility: VISIBILITY.ALL, links: [] },
    { text: 'Faq', href: '/faq', visibility: VISIBILITY.ALL, links: [] },
    // { text: '', href: '', visibility: VISIBILITY.ALL, links: [] },
  ];

  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(INITIAL_LINKS);
  }, [isOpen]);

  const link_class_name = "text-[24px] 3xl:text-[32px] 4xl:text-[42px] transition delay-150 duration-300 ease-in-out cursor-pointer lowercase";

  const toggleExpandCollapse = (index) => {
    let updated_links = [...links];
    updated_links[index].link_state = updated_links[index].link_state == EXPAND_COLLAPSE_STATE.COLLAPSED ? EXPAND_COLLAPSE_STATE.EXPANDED : EXPAND_COLLAPSE_STATE.COLLAPSED;
    setLinks(updated_links);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex flex-col gap-[21px] font-bold relative">
      {links?.length > 0 && (<>
        {links.map((link, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <Link onClick={handleClick} href={link.href} className={`${link_class_name} ${link.href == pathname ? 'text-brand-yellow hover:text-brand-yellow' : 'text-white hover:text-brand-yellow'}`}>{link.text}</Link>
              {link.links?.length > 0 && (
                <button onClick={() => toggleExpandCollapse(index)} className={`${link.href == pathname ? 'text-brand-yellow hover:text-brand-yellow' : 'text-white hover:text-brand-yellow'}`}>
                  {link.link_state == EXPAND_COLLAPSE_STATE.EXPANDED ? (<ChevronUpIcon />) : (<ChevronDownIcon />)}
                </button>
              )}
            </div>
            {link.link_state == EXPAND_COLLAPSE_STATE.EXPANDED && link.links?.length > 0 && (<>
              <div className="flex flex-col gap-[21px] font-bold relative px-[24px] pt-[21px]">
                {link.links.map((link_link, link_index) => (
                  <div key={`${index}-${link_index}`}>
                    <Link onClick={handleClick} href={link_link.href} className={`${link_class_name} ${link_link.href == pathname ? 'text-brand-yellow hover:text-brand-yellow' : 'text-white hover:text-brand-yellow'}`}>{link_link.text}</Link>
                  </div>
                ))}
              </div>
            </>)}
          </div>
        ))}
      </>)}
    </nav>
  );
};

export default DetailedMobileMenu;