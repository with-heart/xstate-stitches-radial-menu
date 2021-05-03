import {ReactNode} from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {ItemProvider} from '../context/ItemContext'
import {useMenuContext} from '../context/MenuContext'
import {styled} from '../styles'
import {Item} from './Item'

const StyledList = styled('ul', {
  $$size: 'calc(2 * $radius)',
  position: 'relative',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  borderRadius: '50%',
  width: '$$size',
  height: '$$size',
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
