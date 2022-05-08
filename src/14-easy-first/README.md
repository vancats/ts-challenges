<h1>第一个元素 <img src="https://img.shields.io/badge/-%E7%AE%80%E5%8D%95-7aad0c" alt="简单"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1>

实现一个通用`First<T>`，它接受一个数组`T`并返回它的第一个元素的类型。

例如：

```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
```

<h3>相关挑战</h3><a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-15%E3%83%BB%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0-d9901a" alt="15・最后一个元素"/></a>
