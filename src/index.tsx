import {inspect} from '@xstate/inspect'
import {render} from 'react-dom'
import App from './App'

inspect()

const rootElement = document.getElementById('root')
render(<App />, rootElement)
