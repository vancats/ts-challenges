type MyReturnType<T> =
  T extends (...args: any[]) => infer ReturnType ? ReturnType : never

// 参数不能使用 unknown，必须是 any 类型，因为需要赋值给其他数据
