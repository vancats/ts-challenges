type Diff = string | boolean | number | bigint | symbol | null | undefined | Function

type DeepReadonly1<T> = T extends Diff ? T : {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown> | Array<unknown> ? DeepReadonly<T[P]> : T[P]
}

/**
 * 1. 设置不嵌套的八种类型，分类并递归
 * 2. 直接设置当是 Record 或 Array 时递归
 */
