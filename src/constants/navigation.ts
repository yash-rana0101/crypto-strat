import type { NavigationItem, NavigationGroup } from '@/types/navigation';

export const NAV_ITEMS: NavigationItem[] = [
  {
    label: 'Pricing',
    href: '/pricing',
    dropdownItems: [
      {
        label: 'Plans & Credits',
        desc: 'Flexible credit-based plans',
        href: '/pricing',
      },
      {
        label: 'AI Disclosure',
        desc: 'Models, routers, and safety boundaries',
        href: '/ai-disclosure',
      },
      {
        label: 'Refund Policy',
        desc: 'Our 7-day refund policy details',
        href: '/refund',
      },
      {
        label: 'Terms of Service',
        desc: 'Terms of service and usage rules',
        href: '/terms',
      },
      {
        label: 'Disclaimer',
        desc: 'Legal and financial disclosures',
        href: '/disclaimer',
      },
    ],
  },
  {
    label: 'Resources',
    href: '/docs',
    dropdownItems: [
      {
        label: 'Documentation',
        desc: 'Guides, tutorials, and terminal concepts',
        href: '/docs',
      },
      {
        label: 'AI Disclosure',
        desc: 'Public model governance and limitations',
        href: '/ai-disclosure',
      },
      {
        label: 'Blog',
        desc: 'Market insights, strategies, and research',
        href: '/blog',
      },
      {
        label: 'Changelog',
        desc: 'Product updates and feature history',
        href: '/changelog',
      },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    dropdownItems: [
      {
        label: 'About Strat AI',
        desc: 'Built by the Trading and Research Wing',
        href: '/about',
      },
      {
        label: 'Careers',
        desc: 'Join our research and engineering team',
        href: '/careers',
      },
      {
        label: 'Contact Us',
        desc: 'Get in touch for partnerships and access',
        href: '/contact',
      },
    ],
  },
];

export const FOOTER_GROUPS: NavigationGroup[] = [
  {
    title: 'Platform',
    items: [
      { label: 'Pricing Plans', href: '/pricing' },
      { label: 'Join Private Beta', href: '/waitlist' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Documentation', href: '/docs' },
      { label: 'AI Disclosure', href: '/ai-disclosure' },
      { label: 'Blog', href: '/blog' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal & Safety',
    items: [
      { label: 'AI Disclosure', href: '/ai-disclosure' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'Refund Policy', href: '/refund' },
    ],
  },
];
