import {ReactNode} from 'react'
import {useSliceContent} from '../context/ItemContext'
import {styled} from '../styles'

export interface ContentProps {
  children: ReactNode
}

const Container = styled('div', {
  position: 'absolute',
  width: '100%',
  textAlign: 'center',
})

const Content = styled('div', {
  display: 'inline-block',
  userSelect: 'none',
  fontSize: '2em',
})

export const SliceContent = ({children}: ContentProps) => {
  const {top, transform} = useSliceContent()
  return (
    <Container css={{top}}>
      <Content css={{transform}}>{children}</Content>
    </Container>
  )
}
