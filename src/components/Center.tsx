import {ReactNode} from 'react'
import {styled} from '../styles'

const StyledCenter = styled('div', {
  $$size: 'calc(2 * $centerRadius)',
  $$position: 'calc(50% - $centerRadius)',
  position: 'absolute',
  top: '$$position',
  left: '$$position',
  width: '$$size',
  height: '$$size',
  borderRadius: '50%',
  background: 'transparent',
  backgroundColor: '$background',
  border: '$borderWidths$large solid $dark',
})

export interface CenterProps {
  children?: ReactNode
}

export const Center = ({children}: CenterProps) => {
  return <StyledCenter>{children}</StyledCenter>
}
