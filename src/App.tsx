import {Center} from './components/Center'
import {Menu} from './components/Menu'
import {Slice} from './components/Slice'
import {styled} from './styles'
import {globalStyles} from './styles/global'
import {purpleTheme} from './styles/themes'

globalStyles()

/*
  Styles and maths inspired by https://github.com/psychobolt/react-pie-menu
  Thanks @psychobolt for creating a great library!
*/

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})

const slices = ['😀', '😃', '😘', '😍', '🥸', '🤩', '🥳', '😭']

export default function App() {
  return (
    <Container>
      <Menu className={purpleTheme} radius="125px" centerRadius="60px">
        {slices.map((slice, i) => (
          <Slice key={i}>{slice}</Slice>
        ))}
        <Center />
      </Menu>
    </Container>
  )
}
