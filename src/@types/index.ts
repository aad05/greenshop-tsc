export type Images = {
  flower_1: string;
  flower_2: string;
  categories_1?: string;
  categories_2?: string;
  categories_3?: string;
};

export type Icons = {
  basket: string;
  hamburger_menu: string;
  logo: string;
  logout: string;
  search: string;
  facebook: string;
  google: string;
  footer_flower_1: string;
  footer_flower_2: string;
  call: string;
  location: string;
  email: string;
  facebook_green: string;
  instagram_green: string;
  twitter_green: string;
  linkedin_green: string;
  union_green: string;
  paypal: string;
  master_card: string;
  visa: string;
  amex: string;
  controller: string;
  heart: string;
  facebook_color: string;
};

export type CategoryType = {
  title: string;
  count: number;
  _id: string;
  route_path: string;
};

export type MainCardType = {
  _id: string;
  discount?: boolean;
  main_image?: string;
  title?: string;
  price?: string;
  sold_times?: number;
  created_at?: Date;
};

export type Product = {
  className?: string;
};

export type AssetTypes = "images" | "icons";
