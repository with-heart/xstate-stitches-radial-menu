import {ReactNode} from 'react'
import flattenChildren from 'react-keyed-flatten-children'
import {ItemProvider} from '../context/ItemContext'
import {useList} from '../context/MenuContext'
import {styled} from '../styles'
import {Item} from './Item'

const StyledList = styled('ul', {
  position: 'relative',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  borderRadius: '50%',
})

export interface ListProps {
  children: ReactNode
}

export const List = ({children}: ListProps) => {
  const {size} = useList()

  return (
    <StyledList css={{width: size, height: size}}>
      {flattenChildren(children).map((item, index) => {
        console.log('type', (item as any).type)
        return (
          <ItemProvider key={index} index={index}>
            <Item>{item}</Item>
          </ItemProvider>
        )
      })}
    </StyledList>
  )
}
