<h1>最后一个元素 <img src="https://img.shields.io/badge/-%E4%B8%AD%E7%AD%89-d9901a" alt="中等"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1>

在此挑战中建议使用TypeScript 4.0

实现一个通用`Last<T>`，它接受一个数组`T`并返回其最后一个元素的类型。

例如

```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
```

<h3>相关挑战</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-14%E3%83%BB%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0-7aad0c" alt="14・第一个元素"/></a>  <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-16%E3%83%BB%E5%87%BA%E5%A0%86-d9901a" alt="16・出堆"/></a>
