
// 1. 提取 Promise 类型
type GetValueType<T> = T extends Promise<infer Value> ? Value : never

type getValueType = GetValueType<Promise<'vancats'>>

// 2. 提取数组第一个值
type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]] ? First : never

type getFirst = GetFirst<[1, 2, 3]>

// 3. 提取数组最后一个值
type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last] ? Last : never

type getLast = GetLast<[1, 2, 3]>

// 4. 去除数组最后一个值
type PopArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [...infer Rest, unknown] ? Rest : never

type popArr = PopArr<[1, 2, 3]>

// 5. 去除数组第一个值
type ShiftArr<Arr extends unknown[]> = Arr extends [] ? [] : Arr extends [unknown, ...infer Rest] ? Rest : never

type shiftArr = ShiftArr<[1, 2, 3]>

// 6. StartsWith
type StartsWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}` ? true : false

type startsWith = StartsWith<'vancats216', 'vancats'>

// 7. ReplaceString
type ReplaceString<Str extends string, From extends string, To extends string> =
  Str extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix} ` : Str

type replaceString = ReplaceString<'vancats216', 'cats', 'dogs'>

// 8. Trim
type TrimStrRight<Str extends string> =
  Str extends `${infer Rest}${' ' | '\n' | '\t'}` ? TrimStrRight<Rest> : Str
type TrimStrLeft<Str extends string> =
  Str extends `${' ' | '\n' | '\t'}${infer Rest}` ? TrimStrLeft<Rest> : Str

type trim = TrimStrRight<TrimStrLeft<' vancats  '>>

// 9. 提取函数参数类型
type GetParameters<Func extends Function> =
  Func extends (...args: infer Args) => unknown ? Args : never

type getParameters = GetParameters<(name: string) => string>

// 10. 提取函数返回值类型
type GetReturnType<Func extends Function> =
  Func extends (...args: any[]) => infer ReturnType ? ReturnType : never

type getReturnType = GetReturnType<(name: string) => string>

// 11. 指定函数 this 类型
type GetThisParameterType<T> =
  T extends (this: infer ThisType, ...args: any[]) => any ? ThisType : unknown

interface Person {
  name: string
}
interface PersonConstructor {
  new(name: string): Person
}
// 12. 提取构造函数返回值类型
type GetInstanceType<ConstructorType extends new (...args: any) => any> =
  ConstructorType extends new (...args: any) => infer GetInstanceType ? GetInstanceType : never
type getInstanceType = GetInstanceType<PersonConstructor>

// 13. 提取构造函数参数类型
type GetConstructorParameters<ConstructorType extends new (...args: any) => any> =
  ConstructorType extends new (...args: infer GetConstructorParameters) => any ? GetConstructorParameters : never

type getConstructorParameters = GetConstructorParameters<PersonConstructor>

// 14. 提取某个索引的值的类型
type GetRefProps<Prop> =
  'ref' extends keyof Prop ? Prop extends { ref?: infer Value | undefined } ? Value : never : never

type getRefProps = GetRefProps<{ ref?: 1; name: 'vancats' }>
