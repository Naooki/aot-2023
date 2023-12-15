type SantaListProtector<T extends Record<PropertyKey, any>> = {
  readonly [K in keyof T]: T[K] extends Function
    ? T[K]
    : T[K] extends Record<PropertyKey, any>
    ? SantaListProtector<T[K]>
    : T[K];
};
