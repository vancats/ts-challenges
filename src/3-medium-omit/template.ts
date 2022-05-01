type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

/**
 * 1. 限制 K 的输入
 * 2. 返回的是一个对象
 * 3. 使用 in 和 keyof 进行循环
 * 4. 使用 as 重映射删除 K 中有的内容
 */
