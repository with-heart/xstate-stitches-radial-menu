import {createContext, ReactNode, useContext} from 'react'
import {useMenuContext} from './MenuContext'

export interface ItemProviderProps {
  index: number
  children: ReactNode
}

export interface ItemProviderValue {
  slice: {
    transform: string
    highlight?: boolean
  }
  content: {
    top: string
    transform: string
  }
  item: {
    endAngle: number
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
export const useSliceContent = () => useItemContext().content
export const useItem = () => useItemContext().item

export const ItemProvider = ({index, children}: ItemProviderProps) => {
  const {
    radius,
    centerRadius,
    centralAngle,
    skew,
    isObtuse,
    isPolar,
  } = useMenuContext()
  const endAngle = centralAngle * index
  const contentHeight = '2.5em'

  const value: ItemProviderValue = {
    slice: {
      transform: `skew(${-skew}deg) rotate(${
        (isPolar ? 90 : centralAngle) / 2 - 90
      }deg)`,
    },
    content: {
      top: `calc((${
        isObtuse ? '50%' : '0px'
      } + ${radius} - ${centerRadius}) / 2 - ${contentHeight} / 2)`,
      transform: `rotate(-${endAngle}deg)`,
    },
    item: {endAngle},
  }

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>
}
