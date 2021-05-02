import {ReactNode} from 'react'
import {useItem} from '../context/ItemContext'
import {useMenuContext} from '../context/MenuContext'
import {styled} from '../styles'

const StyledItem = styled('li', {
  width: '50%',
  height: '50%',
  position: 'absolute',
  transformOrigin: 'bottom right',
  border: '$borderWidths$small solid $light',
  overflow: 'hidden',
  variants: {
    obtuse: {
      true: {
        width: '100%',
        height: '100%',
        bottom: '50%',
        right: '50%',
      },
    },
  },
})

export interface ItemProps {
  children: ReactNode
}

export const Item = ({children}: ItemProps) => {
  const {endAngle} = useItem()
  const {isObtuse, startAngle, skew} = useMenuContext()
  const transform = `rotate(${startAngle + endAngle}deg) skew(${skew}deg)`

  return (
    <StyledItem obtuse={isObtuse} css={{transform}}>
      {children}
    </StyledItem>
  )
}
