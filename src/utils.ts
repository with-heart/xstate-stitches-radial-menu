import {MenuSplines, Tokenified} from './types'

export const reticulateMenuSplines = (sliceCount: number): MenuSplines => {
  const centralAngle = 360 / sliceCount || 360

  const isPolar = centralAngle % 180 === 0
  const isObtuse = centralAngle > 90

  const startOffsetAngle = 0
  const deltaAngle = 90 - centralAngle
  const startAngle = isPolar
    ? 45
    : startOffsetAngle + deltaAngle + centralAngle / 2
  const skew = isPolar ? 0 : deltaAngle

  return {
    centralAngle,
    startAngle,
    skew,
    isPolar,
    isObtuse,
  }
}

export const createTokens = <T extends Object>(object: T) => {
  const keys = Object.keys(object) as (keyof T)[]
  const tokensObject = keys.reduce((acc, key) => {
    const value = object[key]
    const tokenKey = `$${key}`
    acc[tokenKey] = value
    return acc
  }, {} as any)
  return tokensObject as Tokenified<T>
}
