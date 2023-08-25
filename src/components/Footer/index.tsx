import { FC, memo, useRef, useState } from "react";
import { useAssets } from "../../hooks/useAssets";
import Button from "../../generic/Button";
import { useLoader } from "../../generic/Loader";
import { useHandler } from "../../generic/Handlers";
import { LoadingOutlined, CheckOutlined } from "@ant-design/icons";

const Footer: FC = () => {
  const [suscribeMode, setSubscribeMode] = useState<{
    isLoading: boolean;
    isSubscribed: boolean;
  }>({
    isLoading: false,
    isSubscribed: false,
  });
  const emailRef = useRef<HTMLInputElement>(null);
  const { emailSubscriber } = useHandler();
  const { IconAndImageBasedLoader } = useLoader();
  const {
    footer_flower_1,
    footer_flower_2,
    logo,
    location,
    email,
    call,
    facebook_green,
    instagram_green,
    twitter_green,
    linkedin_green,
    union_green,
    paypal,
    master_card,
    visa,
    amex,
  } = useAssets("icons");

  const onSubscribe = async () => {
    setSubscribeMode({ isLoading: true, isSubscribed: false });
    await emailSubscriber({ email: String(emailRef.current?.value) });
    setSubscribeMode({ isLoading: false, isSubscribed: true });
  };

  return (
    <div>
      <div className="bg-[#f5f5f5]">
        <div className="flex max-sm:flex-col">
          <div className="m-[23px] pr-[23px] border-r border-[#46A358] max-sm:border-r-0 max-sm:border-b-2 pb-[23px]">
            <IconAndImageBasedLoader
              type="image"
              src={footer_flower_1}
              alt="footer_flower_1"
            />
            <h3 className="font-bold text-base mt-[17px] mb-[9px]">
              Garden Care
            </h3>
            <p className="font-light text-xs">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="m-[23px] pr-[23px] border-r border-[#46A358] max-sm:border-r-0 max-sm:border-b-2 pb-[23px]">
            <IconAndImageBasedLoader
              type="image"
              src={footer_flower_2}
              alt="footer_flower_1"
            />
            <h3 className="font-bold text-base mt-[17px] mb-[9px]">
              Plant Renovation
            </h3>
            <p className="font-light text-xs">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="m-[23px]">
            <IconAndImageBasedLoader
              type="image"
              src={footer_flower_1}
              alt="footer_flower_1"
            />
            <h3 className="font-bold text-base mt-[17px] mb-[9px]">
              Watering Graden
            </h3>
            <p className="font-light text-xs">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="p-[23px]">
            <h3 className="font-bold text-base mt-[17px] mb-[9px]">
              Would you like to join newsletters?
            </h3>
            <div className="flex w-full h-[40px] mb-[17px]">
              <input
                disabled={suscribeMode.isSubscribed}
                className="h-full w-4/5 rounded-s-xl pl-[11px] placeholder:font-light"
                placeholder="enter your email address..."
                onKeyDown={(e) =>
                  (e.key === "Enter" ||
                    e.keyCode === 13 ||
                    e.type === "click") &&
                  onSubscribe()
                }
              />
              <Button
                disabled={suscribeMode.isSubscribed}
                onClick={onSubscribe}
                className="h-full w-1/5 rounded-none rounded-e-xl"
              >
                {suscribeMode.isSubscribed ? (
                  suscribeMode.isLoading ? (
                    <LoadingOutlined />
                  ) : (
                    <CheckOutlined />
                  )
                ) : (
                  "JOIN"
                )}
              </Button>
            </div>
            <p className="font-light text-xs leading-6">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-between bg-[#46A3581A] p-[23px] max-lg:flex-col max-lg:items-center gap-2.5">
          <img src={logo} alt="logo" className="cursor-pointer w-[150px]" />
          <div className="flex gap-2.5 items-center">
            <IconAndImageBasedLoader
              type="icon"
              className="w-5 h-5"
              src={location}
              alt={"location"}
            />
            <p className="text-sm">
              70 West Buckingham Ave. <br /> Farmingdale, NY 11735
            </p>
          </div>
          <div className="flex gap-2.5 items-center">
            <IconAndImageBasedLoader
              type="icon"
              className="w-5 h-5"
              src={email}
              alt={"email"}
            />
            <p className="text-sm">contact@greenshop.com</p>
          </div>
          <div className="flex gap-2.5 items-center">
            <IconAndImageBasedLoader
              type="icon"
              className="w-5 h-5"
              src={call}
              alt={"call"}
            />
            <p className="text-sm">+88 01911 717 490</p>
          </div>
        </div>
        <div className="flex justify-between p-[23px] max-sm:flex-col max-sm:gap-4">
          <div className="flex flex-1 flex-col gap-2.5">
            <h3 className="font-bold">My Account</h3>
            <p className="font-light cursor-pointer">My Account</p>
            <p className="font-light cursor-pointer">Address</p>
            <p className="font-light cursor-pointer">Wishlist</p>
          </div>
          <div className="flex-1 flex flex-col gap-2.5">
            <h3 className="font-bold">Categories</h3>
            <p className="font-light cursor-pointer">House Plants</p>
            <p className="font-light cursor-pointer">Potter Plants</p>
            <p className="font-light cursor-pointer">Seeds</p>
            <p className="font-light cursor-pointer">Small Plants</p>
            <p className="font-light cursor-pointer">Accessories</p>
          </div>
          <div className="flex-1 ">
            <h3 className="font-bold">Social Media</h3>
            <div className="flex gap-3 mt-[20px] ">
              <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <IconAndImageBasedLoader
                  type="icon"
                  src={facebook_green}
                  alt="facebook_green"
                />
              </div>
              <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <IconAndImageBasedLoader
                  type="icon"
                  src={instagram_green}
                  alt="instagram_green"
                />
              </div>
              <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <IconAndImageBasedLoader
                  type="icon"
                  src={twitter_green}
                  alt="twitter_green"
                />
              </div>{" "}
              <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <IconAndImageBasedLoader
                  type="icon"
                  src={linkedin_green}
                  alt="linkedin_green"
                />
              </div>
              <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                <IconAndImageBasedLoader
                  type="icon"
                  src={union_green}
                  alt="union_green"
                />
              </div>
            </div>
            <h3 className="font-bold mt-[33px]">We accept</h3>
            <div className="flex gap-3 mt-[20px]">
              <IconAndImageBasedLoader
                type="icon"
                className="w-[30px] h-[30px] cursor-pointer"
                src={paypal}
                alt="paypal"
              />
              <IconAndImageBasedLoader
                type="icon"
                className="w-[30px] h-[30px] cursor-pointer"
                src={master_card}
                alt="master_card"
              />
              <IconAndImageBasedLoader
                type="icon"
                className="w-[30px] h-[30px] cursor-pointer"
                src={visa}
                alt="visa"
              />
              <IconAndImageBasedLoader
                type="icon"
                className="w-[30px] h-[30px] cursor-pointer"
                src={amex}
                alt="amex"
              />
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-center p-[10px] font-normal text-sm">
        © 2023 GreenShop. All Rights Reserved.
      </h3>
    </div>
  );
};

export default memo(Footer);
