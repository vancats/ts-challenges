type Last<T extends unknown[]> = T extends [...unknown[], infer Last] ? Last : never
