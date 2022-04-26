import type { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> =
  T extends [infer First, ...infer Rest] ? Equal<U, First> extends true ? true : Includes<Rest, U> : false

// type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false
