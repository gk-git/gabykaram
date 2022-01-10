import React, { useEffect, useState } from "react"

const defaultState = {
  theme: {
    dark: false,
    toggleDark: () => {},
  },
  navigation: {
    isOpen: false,
    toggleMenu: () => {},
    closeMenu: () => {}
  },
}
const AppContext = React.createContext(defaultState)
// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    theme: {
      dark: false,
    },
    navigation: {
      isOpen: false,
    },
    adjustedScreenBefore: false,
  })

  useEffect(() => {
    const lsDark = JSON.parse(localStorage.getItem("dark"))
    if (lsDark) {
      setState(state => {
        return {
          ...state,
          theme: {
            ...state.theme,
            dark: lsDark,
          },
        }
      })
    } else if (supportsDarkMode()) {
      setState(state => {
        return {
          ...state,
          theme: {
            ...state.theme,
            dark: true,
          },
        }
      })
    }
  }, [])
  const { theme, navigation } = state

  const toggleDark = () => {
    let dark = !state.theme.dark
    localStorage.setItem("dark", JSON.stringify(dark))
    setState({
      ...state,
      theme: {
        ...state.theme,
        dark,
      },
    })
  }
  const toggleMenu = () => {
    let isOpen = !state.navigation.isOpen
    if (isOpen) {
      document?.querySelector("html")?.classList.add("noScroll")
    } else {
      document?.querySelector("html")?.classList?.remove("noScroll")
    }
    setState({
      ...state,
      navigation: {
        ...state.navigation,
        isOpen: isOpen,
      },
    })
  }

  const closeMenu = () => {
    document?.querySelector("html")?.classList?.remove("noScroll")
    setState({
      ...state,
      navigation: {
        ...state.navigation,
        isOpen: false,
      },
    })
  }

  return (
    <AppContext.Provider
      value={{
        theme: {
          ...theme,
          toggleDark: toggleDark,
        },
        navigation: {
          ...navigation,
          toggleMenu: toggleMenu,
          closeMenu: closeMenu,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
export { AppProvider }
