type Join<T extends string[]> = T extends []
  ? ""
  : T extends [infer Head, ...infer Tail]
  ? Head extends string
    ? `${Head}${Join<Tail extends string[] ? Tail : []>}`
    : never
  : never;

type ReverseToTuple<S extends string> = string extends S
  ? string[]
  : S extends ""
  ? []
  : S extends `${infer T}${infer U}`
  ? [...ReverseToTuple<U>, T]
  : [S];

type Reverse<Input extends string> = Join<ReverseToTuple<Input>>;
