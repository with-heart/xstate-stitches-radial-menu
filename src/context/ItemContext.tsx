import {createContext, ReactNode, useContext} from 'react'

export interface ItemProviderProps {
  children: ReactNode
}

export interface ItemProviderValue {
  slice: {
    highlight?: boolean
  }
}

export const ItemContext = createContext((null as unknown) as ItemProviderValue)

export const useItemContext = () => {
  const context = useContext(ItemContext)

  if (!context) {
    throw new Error(
      `Item context not found! Child must be wrapped in MenuProvider.`,
    )
  }

  return context
}

export const useSlice = () => useItemContext().slice

export const ItemProvider = ({children}: ItemProviderProps) => {
  const value: ItemProviderValue = {
    slice: {},
  }

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>
}
