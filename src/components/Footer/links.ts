import {IFooterLinks} from '../types'

export const links: IFooterLinks[] = [
  {
    title: 'DigitalEstate',
    list: [
      {
        label: 'About',
        href: '/about',
      },
      {
        label: 'Privacy policy',
        href: '/agree',
      },
      {
        label: 'Contact us',
        href: '/contact',
      },
    ],
  },
  {
    title: 'Buy',
    list: [
      {
        label: 'Houses',
        href: '/search?property=house&type=buy',
      },
      {
        label: 'Apartaments',
        href: '/search?property=apartment&type=buy',
      },
      {
        label: 'Condo',
        href: '/search?property=condo&type=buy',
      },
      {
        label: 'Office',
        href: '/search?property=office&type=buy',
      },
      {
        label: 'Shop',
        href: '/search?property=shop&type=buy',
      },
    ],
  },
  {
    title: 'Rent',
    list: [
      {
        label: 'Houses',
        href: '/search?property=house&type=rent',
      },
      {
        label: 'Apartaments',
        href: '/search?property=apartment&type=rent',
      },
      {
        label: 'Condo',
        href: '/search?property=condo&type=rent',
      },
      {
        label: 'Office',
        href: '/search?property=office&type=rent',
      },
      {
        label: 'Shop',
        href: '/search?property=shop&type=rent',
      },
    ],
  },
]
