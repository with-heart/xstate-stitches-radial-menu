import createCss from '@stitches/react'

export const {global, theme, styled, css} = createCss({
  theme: {
    borderWidths: {
      small: '1px',
      medium: '3px',
      large: '5px',
    },
    colors: {
      light: 'gainsboro',
      dark: 'dimgray',
      background: 'white',
      sliceHover: '#e0f0f0',
      highlight: '#f7f6fa',
    },
  },
})
