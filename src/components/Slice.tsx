import {ReactNode} from 'react'
import {useSlice} from '../context/ItemContext'
import {useMenuContext} from '../context/MenuContext'
import {styled} from '../styles'
import {SliceContent} from './SliceContent'

export interface SliceProps {
  highlight?: boolean
  children: ReactNode
}

const StyledSlice = styled('div', {
  $rotationStart: '$centralAngle',
  width: '200%',
  height: '200%',
  transform: `
    skew(
      calc($skew * -1 * 1deg)
    )
    rotate(
      calc(($rotationStart / 2 - 90) * 1deg)
    )
  `,
  transformOrigin: '50% 50%',
  borderRadius: '50%',
  border: '$borderWidths$medium solid $dark',
  color: 'black',
  background: '$background',
  outline: 'none',
  '&:hover': {
    color: 'white',
    backgroundColor: '$sliceHover',
  },
  variants: {
    polar: {
      true: {
        $rotationStart: 90,
      },
    },
    highlight: {
      true: {
        backgroundColor: '$highlight',
      },
    },
  },
})

export const Slice = ({children}: SliceProps) => {
  const {isPolar} = useMenuContext()
  const {highlight} = useSlice()
  return (
    <StyledSlice tabIndex={-1} polar={isPolar} highlight={highlight}>
      <SliceContent>{children}</SliceContent>
    </StyledSlice>
  )
}
