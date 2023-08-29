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
  price?: number;
  sold_times?: number;
  created_at?: Date;
  created_by?: string;
  count?: number;
  discount_price?: number;
  category?: string;
  short_description?: string;
  detailed_images?: string[];
  description?: string;
  comments?: [];
  rate?: number;
};

export type Product = {
  className?: string;
  isLoading?: boolean;
  data: MainCardType;
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

export type OrderType = {
  _id: string;
  billing_address: CheckoutFormType;
  created_at: Date;
  created_by: string;
  extra_shop_info: {
    total_price: number;
    coupon: {
      has_coupon: boolean;
      discount_for: number;
      code?: string;
      title?: string;
    };
  };
  shop_list: MainCardType[];
};

export type AuthUserType = {
  name?: string;
  _id?: string;
  followers?: string[];
  permission?: {
    create: boolean;
    delete: boolean;
    read: boolean;
    update: boolean;
  };
};

export type UploadType = {
  file: {
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    originalFileObj: typeof File;
    response: {
      message: string;
      image_url: {
        api_key: string;
        asset_id: string;
        bytes: number;
        created_at: string;
        etag: string;
        folder: string;
        format:
          | "jpg"
          | "svg"
          | "jpag"
          | "jpeg"
          | "gif"
          | "png"
          | "eps"
          | "raw"
          | "cr2"
          | "nef"
          | "orf"
          | "sr2";
        height: number;
        width: number;
        original_extension: string;
        original_filename: string;
        placeholder: boolean;
        public_id: string;
        resource_type: "image" | "video" | "images" | "videos";
        secure_url: string;
        signature: string;
        tags: string[];
        type: "upload" | "pre-upload";
        url: string;
        version: number;
        version_id: string;
      };
    };
    size: number;
    percent: number;
    status: "done" | "failed";
    thumbUrl: string;
    type: string;
    uid: string;
    xhr: typeof XMLHttpRequest;
  };
};

export type AddNewProductUploadType = {
  isShowMainUpload: boolean;
  isShowAdditionalUpload_1: boolean;
  isShowAdditionalUpload_2: boolean;
  isShowAdditionalUpload_3: boolean;
  isShowAdditionalUpload_4: boolean;
};

export type UploadFormType = {
  category: string;
  description: string;
  discount_price: string | undefined;
  price: number;
  short_description: string;
  title: string;
  main_image: UploadType;
  detailed_image_1: UploadType;
  detailed_image_2: UploadType;
  detailed_image_3: UploadType;
  detailed_image_4: UploadType;
};

export type AddFlowerType = {
  title: string;
  price: number;
  discount: boolean;
  discount_price: number;
  short_description: string;
  description: string;
  main_image: string;
  detailed_images: string[];
  category: string;
};

export type UserType = {
  name?: string;
  surname?: string;
  followers?: string[];
  profile_photo?: string;
  _id?: string;
};

export type LoadingType = { isLoading: boolean; isError: boolean };

export type BlogCardType = {
  title: string;
  _id: string;
  content: string;
  short_description: string;
  created_by: string;
  views: number;
  reaction_length: number;
};

export type notification_stack_type = {
  type: "follow_stack" | "invitation_stack";
  message: string;
  user_id?: string;
  time_stamp: number;
};

type authDataType = {
  token: string;
  user: object;
};

export type AuthResponseType = {
  data: authDataType;
};
