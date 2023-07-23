import { Divider, Input } from "antd";
import { FC } from "react";
import { useAssets } from "../../../hooks/useAssets";

const SignIn: FC = () => {
  const { google, facebook } = useAssets("icons");

  return (
    <div className="w-4/5 m-auto">
      <h3 className="text-sm  mt-8 font-normal">
        Enter your email and password to register.
      </h3>
      <Input
        className="h-[40px] mt-[14px] border border-[#46A358]"
        placeholder="Username"
      />
      <Input
        className="h-[40px] mt-[17px] border border-[#46A358]"
        placeholder="Enter your email address"
        type="email"
      />
      <Input.Password
        className="h-[40px] mt-[17px] border border-[#46A358]"
        placeholder="Password"
        type="password"
      />
      <Input.Password
        className="h-[40px] mt-[17px] border border-[#46A358]"
        placeholder="Confirm password"
        type="password"
      />
      <button className="bg-[#46A358] w-full h-[45px] rounded-md text-white my-[27px]">
        Register
      </button>
      <Divider className="font-normal text-xs " plain>
        Or register with
      </Divider>
      <div className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] rounded-md mb-[15px]">
        <img className="pl-[15px]" src={google} alt="google" /> Continue with
        Google
      </div>
      <div className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] rounded-md">
        <img className="pl-[15px]" src={facebook} alt="facebook" />
        Continue with Facebook
      </div>
    </div>
  );
};

export default SignIn;
