import {createContext, ReactNode, useContext} from 'react'

export interface MenuProviderProps {
  isObtuse: boolean
  isPolar: boolean
  children: ReactNode
}

export interface MenuContextValue {
  isObtuse: boolean
  isPolar: boolean
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

export const MenuProvider = ({
  isPolar,
  isObtuse,
  children,
}: MenuProviderProps) => {
  const value: MenuContextValue = {
    isPolar,
    isObtuse,
  }
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
