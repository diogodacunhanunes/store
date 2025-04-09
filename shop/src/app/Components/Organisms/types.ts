type IconType = "gridView" | "listView" | "filter";

export type IconProps = {
  label?: boolean;
  icon: IconType;
  customStyles?: string;
};

export type ProductType = {
  id: number;
  name: string;
  category: string;
  price: string;
  oldPrice: string;
  discount: string;
  image: string;
  new: boolean;
};

export type ActionType = "like" | "share" | "add to cart";
