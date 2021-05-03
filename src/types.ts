export interface MenuSplines {
  centralAngle: number
  startAngle: number
  skew: number
  isPolar: boolean
  isObtuse: boolean
}

export type Tokenified<O> = {
  [TokenKey in keyof O as `$${TokenKey}`]: O[TokenKey]
}
