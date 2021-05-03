import {ReactNode} from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {ItemProvider} from '../context/ItemContext'
import {useMenuContext} from '../context/MenuContext'
import {keyframes, styled} from '../styles'
import {Item} from './Item'

const scaleIn = keyframes({
  from: {transform: 'scale(0)'},
  to: {transform: 'scale(1)'},
})

const StyledList = styled('ul', {
  $$size: 'calc(2 * $radius)',
  position: 'relative',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  borderRadius: '50%',
  overflow: 'hidden',
  width: '$$size',
  height: '$$size',
  animation: `${scaleIn} 250ms ease-in`,
})

export interface ListProps {
  children: ReactNode
}

export const List = ({children}: ListProps) => {
  const {isObtuse} = useMenuContext()
  return (
    <StyledList>
      {flattenChildren(children).map((item, index) => {
        return (
          <ItemProvider key={index}>
            <Item obtuse={isObtuse} css={{$index: index}}>
              {item}
            </Item>
          </ItemProvider>
        )
      })}
    </StyledList>
  )
}
