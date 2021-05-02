import {ReactNode} from 'react'
import {useMenuContext} from '../context/MenuContext'
import {styled} from '../styles'

const StyledCenter = styled('div', {
  position: 'absolute',
  borderRadius: '50%',
  background: 'transparent',
  backgroundColor: '$background',
  border: '$borderWidths$large solid $dark',
})

console.log({StyledCenter})

export interface CenterProps {
  children?: ReactNode
}

export const Center = ({children}: CenterProps) => {
  const {centerRadius} = useMenuContext()
  const position = `calc(50% - ${centerRadius})`
  const size = `calc(2 * ${centerRadius})`

  return (
    <StyledCenter
      css={{top: position, left: position, width: size, height: size}}
    >
      {children}
    </StyledCenter>
  )
}
