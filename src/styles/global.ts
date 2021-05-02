import {global} from '.'

export const globalStyles = global({
  'html, body': {
    margin: 0,
  },
  body: {
    fontFamily: 'system-ui',
  },
  '*': {
    boxSizing: 'border-box',
    position: 'relative',
  },
  '#container': {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridRowGap: '1rem',
    height: '100vh',
  },
  '#root': {
    height: '100%',
  },
  '[data-xstate]': {
    width: '100%',
    height: '100%',
    border: 'none',
    backgroundColor: 'black',
  },
})
