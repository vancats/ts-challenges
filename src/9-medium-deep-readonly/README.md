# Deep Readonly

for example

```ts
interface X {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

interface Expected {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

type Todo = DeepReadonly<X> // should be same as `Expected`
```
