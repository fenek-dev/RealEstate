export interface IFooterLinks {
  title: string
  list: IListItem[]
}

interface IListItem {
  label: string
  href: string
}

export interface INavLinks {
  title: string
  groups: IListNavItem[]
}

interface IListNavItem {
  name: 'Living' | 'Commercial'
  list: IListItem[]
}
