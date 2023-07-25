import { Divider, Form, Input } from "antd";
import { FC } from "react";
import { useAssets } from "../../../hooks/useAssets";
import { useAxios } from "../../../hooks/useAxios";
import { useSignIn } from "react-auth-kit";
import { LoadingOutlined } from "@ant-design/icons";
import { useNotificationAPI } from "../../../generic/NotificationAPI";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setAuthModalVisibility } from "../../../redux/modalSlice";

type onAuth = {
  email: string;
  password: string;
};

type authDataType = {
  token: string;
  user: object;
};

type authResponseType = {
  data: authDataType;
};

const SignIn: FC = () => {
  const { authModalVisbility } = useReduxSelector((state) => state.modal);
  const dispatch = useReduxDispatch();
  const axios = useAxios();
  const sing_in = useSignIn();
  const notify = useNotificationAPI();
  const { google, facebook } = useAssets("icons");

  const onAuth = (e: onAuth) => {
    dispatch(setAuthModalVisibility({ open: true, loading: true }));
    axios({ url: "/user/sign-in", method: "POST", body: { ...e } })
      .then((res) => {
        const { data }: authResponseType = res.data;
        sing_in({
          token: data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: data.user,
        });
        dispatch(setAuthModalVisibility({ open: false, loading: false }));
      })
      .catch((res) => {
        const status = res.response.status;
        dispatch(setAuthModalVisibility({ open: true, loading: false }));
        return notify(status);
      });
  };

  return (
    <div className="w-4/5 m-auto">
      <h3 className="text-sm  mt-8 font-normal">
        Enter your username and password to login.
      </h3>
      <Form onFinish={onAuth}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="almamun_uxui@outlook.com"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password
            className="h-[40px] mt-[17px] border border-[#46A358]"
            placeholder="*********"
            type="password"
          />
        </Form.Item>
        <h3 className="text-[#46A358] font-normal mt-[14px] cursor-pointer w-fit ml-auto">
          Forgot Password?
        </h3>
        <button
          type="submit"
          className="bg-[#46A358] w-full h-[45px] rounded-md text-white my-[27px]"
        >
          {authModalVisbility.loading ? <LoadingOutlined /> : "Login"}
        </button>
      </Form>
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
