import {INavLinks} from '../types'

export const links: INavLinks[] = [
  {
    title: 'Buy',
    groups: [
      {
        name: 'Living',
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
        ],
      },
      {
        name: 'Commercial',
        list: [
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
    ],
  },
  {
    title: 'Rent',
    groups: [
      {
        name: 'Living',
        list: [
          {
            label: 'Houses',
            href: '/search?property=house&type=rent',
          },
          {
            label: 'Apartments',
            href: '/search?property=apartment&type=rent',
          },
          {
            label: 'Condo',
            href: '/search?property=condo&type=rent',
          },
        ],
      },
      {
        name: 'Commercial',
        list: [
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
    ],
  },
]
