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
  product: string;
  user: string;
  location_black: string;
  logout_black: string;
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
  count?: number;
};

export type Product = {
  className?: string;
  isLoading?: boolean;
  data?: {
    detailed_images: string[];
    main_image: string;
    title: string;
    price: string;
    rate: number;
    comments: [];
    short_description: string;
    _id: string;
    description: string;
  };
  isError?: boolean;
};

export type AssetTypes = "images" | "icons";

export type CouponData = {
  message: string;
  data: {
    id: number;
    discount_for: number;
    title: "string";
    code: string;
  };
};

export type CheckoutFormType = {
  first_name: string;
  last_name: string;
  country: string;
  town: string;
  street_address: string;
  additional_street_address?: string;
  state: string;
  zip: string;
  email: string;
  phone_number: string;
  payment_method:
    | "other-payment-methods"
    | "dorect-bank-transfer"
    | "cash-on-delivery";
};
