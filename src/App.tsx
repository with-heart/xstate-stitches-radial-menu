import {useMachine} from '@xstate/react'
import {createMachine} from 'xstate'
import {Center} from './components/Center'
import {Menu} from './components/Menu'
import {Slice} from './components/Slice'
import {styled} from './styles'
import {globalStyles} from './styles/global'
import {blueTheme, purpleTheme} from './styles/themes'

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

const Button = styled('button', {
  fontSize: '1.5em',
  width: '100%',
  border: 'none',
  backgroundColor: 'white',
  outline: 'none',
  '&:hover': {
    backgroundColor: '$center_hover',
  },
  variants: {
    selected: {
      true: {
        backgroundColor: '$center_selected',
        '&:hover': {
          backgroundColor: '$center_selected',
        },
      },
    },
  },
})

const faceIcons = ['😀', '😃', '😘', '😍', '🥸', '🤩', '🥳', '😭']
const reactionIcons = ['❤️', '🍉', '❓', '⭐️', '💯', '🙌', '👎', '👍']

const machine = createMachine({
  initial: 'faces',
  states: {
    faces: {
      on: {
        reactions: 'reactions',
      },
    },
    reactions: {
      on: {
        faces: 'faces',
      },
    },
  },
})

export default function App() {
  const [state, send] = useMachine(machine, {devTools: true})
  const faces = state.matches('faces')
  const reactions = state.matches('reactions')
  const theme = faces ? purpleTheme : reactions ? blueTheme : undefined
  const icons = faces ? faceIcons : reactionIcons

  return (
    <Container>
      <Menu className={theme} radius="125px" centerRadius="60px">
        {icons.map((slice, i) => (
          <Slice key={i}>{slice}</Slice>
        ))}
        <Center>
          <Button onClick={() => send('faces')} selected={faces}>
            🙂
          </Button>
          <Button onClick={() => send('reactions')} selected={reactions}>
            👤
          </Button>
        </Center>
      </Menu>
    </Container>
  )
}
