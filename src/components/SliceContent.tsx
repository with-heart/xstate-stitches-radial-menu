import {ReactNode} from 'react'
import {useMenuContext} from '../context/MenuContext'
import {styled} from '../styles'

export interface ContentProps {
  children: ReactNode
}

const Container = styled('div', {
  $topStart: '0px',
  $$top: `calc(
    ($topStart + $radius - $centerRadius) / 2 - $contentHeight / 2
  )`,
  top: '$$top',
  position: 'absolute',
  width: '100%',
  textAlign: 'center',
  variants: {
    obtuse: {
      true: {
        $topStart: '50%',
      },
    },
  },
})

const Content = styled('div', {
  display: 'inline-block',
  userSelect: 'none',
  fontSize: '2em',
  transform: 'rotate(calc($endAngle * -1deg))',
})

export const SliceContent = ({children}: ContentProps) => {
  const {isObtuse} = useMenuContext()
  return (
    <Container obtuse={isObtuse}>
      <Content>{children}</Content>
    </Container>
  )
}
