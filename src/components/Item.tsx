import {styled} from '../styles'

export const Item = styled('li', {
  $endAngle: 'calc($centralAngle * $index)',
  $rotation: 'calc(($startAngle + $endAngle) * 1deg)',
  width: '50%',
  height: '50%',
  position: 'absolute',
  transformOrigin: 'bottom right',
  border: '$borderWidths$small solid $light',
  overflow: 'hidden',
  transform: `
    rotate($rotation)
    skew(calc($skew * 1deg))`,
  variants: {
    obtuse: {
      true: {
        width: '100%',
        height: '100%',
        bottom: '50%',
        right: '50%',
      },
    },
  },
})
