<h1>实现 Omit <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/> <img src="https://img.shields.io/badge/-%23built--in-999" alt="#built-in"/></h1>

不使用 `Omit` 实现 TypeScript 的 `Omit<T, K>` 泛型。

`Omit` 会创建一个省略 `K` 中字段的 `T` 对象。

例如：

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
```

<h3>相关挑战</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-4%E3%83%BB%E5%AE%9E%E7%8E%B0%20Pick-7aad0c" alt="4・实现 Pick"/></a>
