type ParseInt<T> = T extends `${infer N extends number}` ? N : never;

type FindNonNull<Type> = Type extends []
	? never
	: Type extends [infer Curr, ...infer Rest]
	? Curr extends string
		? ParseInt<Curr>
		: FindNonNull<Rest>
	: Type;

type FindSanta<Forest extends string[]> = string[] extends Forest
	? never
	: FindNonNull<{ [Key in keyof Forest]: Forest[Key] extends "🎅🏼" ? Key : null }>;