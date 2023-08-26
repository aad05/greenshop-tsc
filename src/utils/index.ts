import {
  UserSwitchOutlined,
  ShoppingCartOutlined,
  HighlightOutlined,
  HeartOutlined,
} from "@ant-design/icons";

type hero_mock_type = {
  id: number;
  title: string;
  buttonText: string;
  subtitle: string;
  description: string;
  flower_1: string;
  flower_2: string;
};

type followers_dashboard_type = {
  tooltip_title: string;
  key: number;
  Icon: React.ForwardRefExoticComponent<any>;
};

export const hero_mock: hero_mock_type[] = [
  {
    id: 0,
    title: "LET'S MAKE A BETTER",
    buttonText: "SHOP NOW",
    subtitle: "WELCOME TO GREENSHOP",
    description: `We are an online plant shop offering a wide range of cheap and trendy
        plants. Use our plants to create an unique Urban Jungle. Order your
        favorite plants!`,
    flower_1:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
    flower_2:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
  {
    id: 1,
    title: "LET'S LIVE IN A BETTER",
    buttonText: "LET'S START",
    subtitle: "WELCOME TO GREENSHOP",
    description: `We are an online plant shop offering a wide range of cheap and trendy
    plants. Use our plants to create an unique Urban Jungle. Order your
    favorite plants!`,
    flower_1:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d",
    flower_2:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
  {
    id: 2,
    title: "LET'S OBSERVE A BETTER ",
    buttonText: "GET CREDITS",
    subtitle: "WELCOME TO GREENSHOP",
    description: `We are an online plant shop offering a wide range of cheap and trendy
    plants. Use our plants to create an unique Urban Jungle. Order your
    favorite plants!`,
    flower_1:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662",
    flower_2:
      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  },
];

export const followers_dashboard: followers_dashboard_type[] = [
  { tooltip_title: "Followers", key: 1, Icon: UserSwitchOutlined },
  { tooltip_title: "Products", key: 2, Icon: ShoppingCartOutlined },
  { tooltip_title: "Posts", key: 3, Icon: HighlightOutlined },
  { tooltip_title: "Likees", key: 4, Icon: HeartOutlined },
];
