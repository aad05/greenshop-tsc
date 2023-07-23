import { Images, Icons, AssetTypes } from "../../@types";

const images: Images = {
  flower_1:
    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
  flower_2:
    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower2.png?alt=media&token=905a94e2-1250-4e56-9dcb-d16bbb1a31ca",
  categories_1:
    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fsuper_sale.png?alt=media&token=73f8f08c-6f40-45fc-86a1-722bba09d358",
  categories_2:
    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower_3.png?alt=media&token=2c0d22d7-9b67-4562-b251-1fbd25e970e5",
  categories_3:
    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower_4.png?alt=media&token=a60fcdbc-ff62-47d6-95e3-61f8d14d199c",
};
const icons: Icons = {
  basket:
    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fbasket.svg?alt=media&token=d62637d3-6eac-42e8-b174-df8017b5a3b7",
  hamburger_menu:
    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fhamburger-menu.svg?alt=media&token=8cc4010e-04c9-45b3-8a4a-a1662ede3399",
  logo: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa",
  logout:
    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogout.svg?alt=media&token=46328cb0-7c81-4130-a591-8c46c9ea937a",
  search:
    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fsearch.svg?alt=media&token=40e4a522-afed-4409-8a64-d89d682e4015",
  facebook:
    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffacebook.svg?alt=media&token=d4ec7992-8d0f-4c3e-a047-e3037378f672",
  google:
    "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fgoogle.svg?alt=media&token=34b10112-f2a9-4832-b603-41e79e367d48",
};

function useAssets(type: "images"): Images;
function useAssets(type: "icons"): Icons;
function useAssets(type: AssetTypes): Images | Icons {
  return type === "images" ? images : icons;
}

export { useAssets };
