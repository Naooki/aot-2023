type AppendGood<List extends Record<string, any>> = {
	[Key in keyof List as `good_${string & Key}`]: List[Key];
};