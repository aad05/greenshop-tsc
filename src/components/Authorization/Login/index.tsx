import { Divider, Input } from "antd";
import { FC } from "react";
import { useAssets } from "../../../hooks/useAssets";

const SignIn: FC = () => {
  const { google, facebook } = useAssets("icons");

  return (
    <div className="w-4/5 m-auto">
      <h3 className="text-sm  mt-8 font-normal">
        Enter your username and password to login.
      </h3>
      <Input
        className="h-[40px] mt-[14px] border border-[#46A358]"
        placeholder="almamun_uxui@outlook.com"
        type="email"
      />
      <Input.Password
        className="h-[40px] mt-[17px] border border-[#46A358]"
        placeholder="*********"
        type="password"
      />
      <h3 className="text-[#46A358] font-normal mt-[14px] cursor-pointer w-fit ml-auto">
        Forgot Password?
      </h3>
      <button className="bg-[#46A358] w-full h-[45px] rounded-md text-white my-[27px]">
        Login
      </button>
      <Divider className="font-normal text-xs " plain>
        Or login with
      </Divider>
      <div className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] rounded-md mb-[15px]">
        <img className="pl-[15px]" src={google} alt="google" /> Login with
        Google
      </div>
      <div className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] rounded-md">
        <img className="pl-[15px]" src={facebook} alt="facebook" />
        Login with Facebook
      </div>
    </div>
  );
};

export default SignIn;
