import { GithubLogo, Globe, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
import { ReactElement } from 'react';

interface Link {
  label: string;
  href: string;
}

interface ContactLink {
  icon: ReactElement;
  href: string;
}

export const links: Link[] = [
  {
    label: 'Products',
    href: '/products',
  },
  {
    label: 'Cart',
    href: '/cart',
  },
];

export const contactLinks: ContactLink[] = [
  {
    icon: <GithubLogo size={24} color="white" />,
    href: 'https://github.com/bamdadsabet',
  },
  {
    icon: <LinkedinLogo size={24} color="white" />,
    href: 'https://www.linkedin.com/in/bamdad-sabet-946755200/',
  },
  {
    icon: <Globe size={24} color="white" />,
    href: 'https://bamdadsabet.com/',
  },
];
