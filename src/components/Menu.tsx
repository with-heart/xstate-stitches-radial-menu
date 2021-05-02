import {ReactChild, ReactNode} from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {MenuProvider} from '../context/MenuContext'
import {styled} from '../styles'
import {List} from './List'
import {Slice} from './Slice'

const StyledMenu = styled('div', {
  display: 'inline-block',
  position: 'relative',
  borderRadius: '50%',
  overflow: 'hidden',
  top: 0,
  left: 0,
  variants: {
    centered: {
      true: {
        position: 'absolute',
      },
    },
  },
})

export interface MenuProps {
  radius?: string
  centerRadius?: string
  centerX?: number
  centerY?: number
  className?: string
  children: ReactNode
}

export const Menu = ({
  radius = '125px',
  centerRadius = '30px',
  centerX,
  centerY,
  className,
  children,
}: MenuProps) => {
  const centered = Boolean(centerX || centerY)
  const left = centerX && `calc(${centerX} - ${radius})`
  const top = centerY && `calc(${centerY} - ${radius})`

  const {slices, otherChildren} = flattenChildren(children).reduce(
    (acc, child) => {
      if ((child as any).type === Slice) {
        acc.slices.push(child)
        return acc
      }

      acc.otherChildren.push(child)
      return acc
    },
    {slices: [], otherChildren: []} as {
      slices: ReactChild[]
      otherChildren: ReactChild[]
    },
  )

  return (
    <MenuProvider
      sliceCount={slices.length}
      radius={radius}
      centerRadius={centerRadius}
    >
      <StyledMenu
        className={className}
        centered={centered}
        css={centered ? {left, top} : undefined}
      >
        <List>{slices}</List>
        {otherChildren}
      </StyledMenu>
    </MenuProvider>
  )
}
