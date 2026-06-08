export const isDef = <T>(value: T | undefined): value is T =>
  value !== undefined
