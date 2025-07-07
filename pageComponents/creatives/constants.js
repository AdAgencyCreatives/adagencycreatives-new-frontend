import TmText from "components/TmText";

export const sidebarMenu = [
  { label: "Pro Dashboard", href: "/creatives-dashboard" },
  { label: "My Contact Info", href: "/profile" },
  { label: <><span>My&nbsp;</span><TmText text='ProFile' /></>, href: "/resume" },
  { label: "My Job Messages", href: "/messages" },
  { label: "My Opportunities", href: "/my-opportunities" },
  { label: "My Job Alerts", href: "/job-alerts" },
  { label: "Creative Jobs", href: "/jobs" },
  { label: "Agencies Shortlist", href: "/agencies-shortlist" },
  { label: "Change Password", href: "/change-password" },
  { label: 'Delete Profile', href: "/delete-profile" },
];

export const topMenu = [
  { label: "applied jobs", href: "#" },
  { label: "new messages", href: "#" },
  { label: <><TmText text='ProFile' /> viewed</>, href: "#" },
  { label: "friends", href: "#" }
];

export const profileMenu = [
  { label: "message ME", href: "#" },
  { label: "add me", href: "#" },
  { label: <>CREATE YOUR <TmText text='ProFile' /></>, href: "#" }
];

export const infoMenu = [
  { label: "video", href: "#" },
  { label: "photo", href: "#" },
  { label: "current work", href: "#" },
  { label: "dashboard", href: "/creatives-dashboard" },
  { label: "education", href: "#" }
];

export const user = {
  image: '/creatives/creative1.avif',
  name: 'Matthew Marcos',
  title: 'Junior Motion Graphics Designer',
  about: '<p>I\'m an Associate Creative Director based in New York City; with a focus on art direction, brand storytelling, and concepting big ideas. I’ve been fortunate to work with brands like Keds, Louis XIII, Marantz, Wrangler, J.Crew, and USTA, crafting campaigns that blend creativity with strategy.</p><br /><p>I thrive both independently and as part of a great team. Having worked with many freelancers in my previous full-time role, I know how to adapt quickly, collaborate seamlessly, and bring ideas to life with different personalities and perspectives.</p><p>At my core, I’m a concept-first creative. There’s nothing better than zoning out with a good podcast or music while letting ideas take shape. I also love design—my natural style leans textural and street, but working in the fashion world has taught me how to adapt to different brand aesthetics while still weaving in my own perspective.</p>',
  info: '<p>I\'m an Associate Creative Director based in New York City; with a focus on art direction, brand storytelling, and concepting big ideas. I’ve been fortunate to work with brands like Keds, Louis XIII, Marantz, Wrangler, J.Crew, and USTA, crafting campaigns that blend creativity with strategy.</p><br /><p>I thrive both independently and as part of a great team. Having worked with many freelancers in my previous full-time role, I know how to adapt quickly, collaborate seamlessly, and bring ideas to life with different personalities and perspectives.</p><p>At my core, I’m a concept-first creative. There’s nothing better than zoning out with a good podcast or music while letting ideas take shape. I also love design—my natural style leans textural and street, but working in the fashion world has taught me how to adapt to different brand aesthetics while still weaving in my own perspective.</p>',
  location: 'NEW YORK, NY',
  status: 'pro member',
  experience: '10+ years',
  industry: 'Apparel, Beauty Care Products, Experiential, Fashion, Sports',
  media: 'Advertising Traditional',
  work: 'Full-Time, Freelance',
  strength: 'Collaborative, Conceptual, Design, Humor, Bilingual',
  plan: 'MONTHLY',
  upgradeTo: 'FEATURED',
  advantages: 'YOUR PROMO HERE<br /><br />TEXT<br />TEX 2<br />TEXT3',
  balance: '$444',
  role: 'creative'
}