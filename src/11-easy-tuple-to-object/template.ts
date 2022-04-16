type TupleToObject<T extends readonly (number | string)[]> = {
  // 数组的便利方式
  [P in T[number]]: P
}
