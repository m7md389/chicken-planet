export default interface EggInterface {
  size: string;
  color: string;
  quantity_per_year: number;
  price: number;
  eggs_in_incubator: { count: number; hatch_data: Date };
  images: string[];
}
