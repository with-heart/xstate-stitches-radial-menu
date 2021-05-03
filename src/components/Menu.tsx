import {ReactChild, ReactNode} from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {MenuProvider} from '../context/MenuContext'
import {styled} from '../styles'
import {createTokens, reticulateMenuSplines} from '../utils'
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
        top: 'calc($centerY - $radius)',
        left: 'calc($centerX - $radius)',
      },
    },
  },
})

export interface MenuProps {
  radius?: string
  centerRadius?: string
  contentHeight?: string
  centerX?: number
  centerY?: number
  className?: string
  children: ReactNode
}

export const Menu = ({
  radius = '125px',
  centerRadius = '30px',
  contentHeight = '2.5em',
  centerX,
  centerY,
  className,
  children,
}: MenuProps) => {
  const centered = Boolean(centerX || centerY)

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

  const {isObtuse, isPolar, ...splines} = reticulateMenuSplines(slices.length)
  const tokens = createTokens({
    radius,
    centerRadius,
    centerX,
    centerY,
    contentHeight,
    ...splines,
  })

  return (
    <MenuProvider isObtuse={isObtuse} isPolar={isPolar}>
      <StyledMenu className={className} centered={centered} css={tokens}>
        <List>{slices}</List>
        {otherChildren}
      </StyledMenu>
    </MenuProvider>
  )
}
