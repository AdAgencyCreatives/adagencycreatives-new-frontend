import TmText from "components/TmText";

export const sidebarMenu = [
  { label: "Pro Dashboard", href: "/agencies-dashboard" },
  { label: "My Agency Info", href: "/profile" },
  { label: "My Applicants", href: "/my-applicants" },
  { label: "Post a Job", href: "/post-a-job" },
  { label: "My Jobs", href: "/my-jobs" },
  { label: "Job Messages", href: "/messages" },
  { label: "Creatives Shortlist", href: "/creatives-shortlist" },
  { label: "My Plan", href: "/my-plan" },
  { label: "Change Password", href: "#change-password" },
  { label: 'Delete Profile', href: "#delete-profile" },
];

export const topMenu = [
  { label: "top creatives", href: "/creatives" },
  { label: "messages", href: "#" },
  { label: "featured", href: "#" },
  { label: <>view <TmText text='ProFile' /></>, href: "/agencies-profile" }
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
  { label: "dashboard", href: "/agencies-dashboard" },
  { label: "education", href: "#" }
];

export const user = {
  image: '/jobs/job3.avif',
  name: 'AD CORP.',
  title: 'Junior Motion Graphics Designer',
  about: '<p>I\'m an Associate Creative Director based in New York City; with a focus on art direction, brand storytelling, and concepting big ideas. I’ve been fortunate to work with brands like Keds, Louis XIII, Marantz, Wrangler, J.Crew, and USTA, crafting campaigns that blend creativity with strategy.</p><br /><p>I thrive both independently and as part of a great team. Having worked with many freelancers in my previous full-time role, I know how to adapt quickly, collaborate seamlessly, and bring ideas to life with different personalities and perspectives.</p><p>At my core, I’m a concept-first creative. There’s nothing better than zoning out with a good podcast or music while letting ideas take shape. I also love design—my natural style leans textural and street, but working in the fashion world has taught me how to adapt to different brand aesthetics while still weaving in my own perspective.</p>',
  info: '<p>I\'m an Associate Creative Director based in New York City; with a focus on art direction, brand storytelling, and concepting big ideas. I’ve been fortunate to work with brands like Keds, Louis XIII, Marantz, Wrangler, J.Crew, and USTA, crafting campaigns that blend creativity with strategy.</p><br /><p>I thrive both independently and as part of a great team. Having worked with many freelancers in my previous full-time role, I know how to adapt quickly, collaborate seamlessly, and bring ideas to life with different personalities and perspectives.</p><p>At my core, I’m a concept-first creative. There’s nothing better than zoning out with a good podcast or music while letting ideas take shape. I also love design—my natural style leans textural and street, but working in the fashion world has taught me how to adapt to different brand aesthetics while still weaving in my own perspective.</p>',
  workplace: 'Hybrid',
  industry: 'Digital, Social, Technology Online',
  media: 'Digital Interactive, Social, UI User Interface Design, UX User Experience Design, Website',
  companysize: '1500-2000',
  social: [
    { label: 'linkedin', url: '#' },
    { label: 'twitter', url: '#' },
    { label: 'instagram', url: '#' }
  ],
  location: 'NEW YORK, NY',
  status: 'pro member',
  plan: 'PAY ONCE',
  upgradeTo: 'pro',
  advantages: 'YOUR PROMO HERE<br /><br />TEXT<br />TEX 2<br />TEXT3',
  balance: '$4000',
  role: 'agency'
}