type MyAwaited<P extends Promise<unknown>> = P extends Promise<infer U>
  ? U extends Promise<unknown> ? MyAwaited<U> : U
  : never
