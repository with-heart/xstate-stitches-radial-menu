import {createContext, ReactNode, useContext} from 'react'
import {MenuSplines} from '../types'
import {reticulateMenuSplines} from '../utils'

export interface MenuProviderProps {
  sliceCount: number
  radius: string
  centerRadius: string
  children: ReactNode
}

export interface MenuContextValue extends MenuSplines {
  radius: string
  centerRadius: string
  centerX?: string
  centerY?: string
  list: {
    size: string
  }
}

export const MenuContext = createContext((null as unknown) as MenuContextValue)

export const useMenuContext = () => {
  const context = useContext(MenuContext)

  if (!context) {
    throw new Error(
      `Menu context not found! Child must be wrapped in MenuProvider.`,
    )
  }

  return context
}

export const useList = () => useMenuContext().list

export const MenuProvider = ({
  sliceCount,
  radius,
  centerRadius,
  children,
}: MenuProviderProps) => {
  const menuSplines = reticulateMenuSplines(sliceCount)

  const value: MenuContextValue = {
    radius,
    centerRadius,
    list: {
      size: `calc(2 * ${radius})`,
    },
    ...menuSplines,
  }
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
