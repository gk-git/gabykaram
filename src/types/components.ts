
export interface  LayoutProps {
  showIntro?: boolean,
  introComponent?: any,
  children?: any,
  isSinglePost?: boolean,
  className?: string,
  enableVisualCheckDown?: boolean,
  navigationProps?: {
    isTransparent?: boolean,
    isOpen?: boolean
  },
  seo?: {
    title?: string,
    description?: string,
  }
}
export interface NavigationProps {
  isTransparent?: boolean,
  isOpen: boolean,
  toggleMenu: () => void,
  closeMenu: () => void,
}
