type First<T extends unknown[]> = T extends [infer First, ...unknown[]] ? First : never
