type Address = { address: string; city: string };
type PresentDeliveryList<NamesMap extends Record<string, any>> = Record<
  keyof NamesMap,
  Address
>;
