import {motion} from 'framer-motion'
import {ReactChild, ReactElement, ReactNode} from 'react'
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

const partitionSliceChildren = (children: ReactNode) =>
  flattenChildren(children).reduce(
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
  const {slices, otherChildren} = partitionSliceChildren(children)
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
        <motion.div
          key={slices
            .map((slice) => (slice as ReactElement).props.children)
            .join(',')}
        >
          <List>{slices}</List>
        </motion.div>
        {otherChildren}
      </StyledMenu>
    </MenuProvider>
  )
}
