type GiftWrapper<
  Present extends string,
  Santa extends string,
  Trash extends string
> = {
  present: Present;
  from: Santa;
  to: Trash;
};
