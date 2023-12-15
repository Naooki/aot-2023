type _IncDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
type Digit = _IncDigit[number];

type _Inc<T extends string> = T extends `${infer F}${Digit}`
	? T extends `${F}${infer L extends Digit}`
		? `${L extends 9 ? _Inc<F> : F}${_IncDigit[L]}`
		: never
	: 1;

type Increment<T extends number> = number extends T
	? number
	: `${T}` extends `${string}${"." | "+" | "-" | "e"}${string}`
	? number
	: _Inc<`${T}`> extends `${infer N extends number}`
	? N
	: never;


type DayCounter<Start extends number, End extends number> =
	Start extends End ? Start : Start | DayCounter<Increment<Start>, End>;