
export interface  LayoutContainerProps {
  navigationProps?: {
    isTransparent?: boolean,
  },
  showIntro?:boolean,
  introComponent?: any,
  children?: any,
  isSinglePost?:boolean,
  className?: string,
  seo?: {
    title?: string,
    description?: string,
  }
}
export interface NavigationContainerProps {
  isTransparent?: boolean,
}
