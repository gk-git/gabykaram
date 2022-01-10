import React from "react"
import { NavigationContainerProps } from "../types/containers"
import Navigation from "../components/Global/Navigation/Navigation"
import AppContext from "../context/AppContext"

export default function NavigationContainer(props: NavigationContainerProps) {

  return (
    <AppContext.Consumer>
      {
        ({ navigation }) => {
          return (<Navigation {...props} closeMenu={navigation.closeMenu} toggleMenu={navigation.toggleMenu}
                              isOpen={navigation.isOpen} />
          )
        }
      }
    </AppContext.Consumer>
  )
}
