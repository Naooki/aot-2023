type RemoveNaughtyChildren<List extends Record<string, any>> = {
	[Key in keyof List as Exclude<Key, `naughty_${string}`>]: List[Key];
};