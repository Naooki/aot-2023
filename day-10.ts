type Split<
  Sentence extends string,
  Delimeter extends string = " "
> = string extends Sentence
  ? string[]
  : Sentence extends `${infer Word}${Delimeter}${infer Rest}`
  ? [Word, ...Split<Rest>]
  : [Sentence];

type StreetSuffixTester<
  Street extends string,
  Suffix extends string
> = Split<Street> extends [...infer Rest, infer StreetSuffix]
  ? StreetSuffix extends Suffix
    ? true
    : false
  : never;
