import {ReactNode} from 'react'
import {useSlice} from '../context/ItemContext'
import {styled} from '../styles'
import {SliceContent} from './SliceContent'

export interface SliceProps {
  highlight?: boolean
  children: ReactNode
}

const StyledSlice = styled('div', {
  width: '200%',
  height: '200%',
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
    highlight: {
      true: {
        backgroundColor: '$highlight',
      },
    },
  },
})

export const Slice = ({children}: SliceProps) => {
  const {transform, highlight} = useSlice()
  return (
    <StyledSlice tabIndex={-1} highlight={highlight} css={{transform}}>
      <SliceContent>{children}</SliceContent>
    </StyledSlice>
  )
}
