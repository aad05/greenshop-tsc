import { Divider, Form, Input } from "antd";
import { FC } from "react";
import { useAssets } from "../../../hooks/useAssets";
import { useNotificationAPI } from "../../../generic/NotificationAPI";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { useAxios } from "../../../hooks/useAxios";
import { useSignIn } from "react-auth-kit";
import { LoadingOutlined } from "@ant-design/icons";
import { setAuthModalVisibility } from "../../../redux/modalSlice";
import Button from "../../../generic/Button";
import { useLoader } from "../../../generic/Loader";

type onAuth = {
  surname: string;
  email: string;
  password: string;
  confirmed_password: string;
};

type authDataType = {
  token: string;
  user: object;
};

type authResponseType = {
  data: authDataType;
};

const SignUp: FC = () => {
  const { IconAndImageBasedLoader } = useLoader();
  const { authModalVisibility } = useReduxSelector((state) => state.modal);
  const { google, facebook_color } = useAssets("icons");
  const notify = useNotificationAPI();
  const dispatch = useReduxDispatch();
  const axios = useAxios();
  const sing_in = useSignIn();

  const onAuth = (e: onAuth) => {
    if (e.password !== e.confirmed_password) return notify("not_equal");
    dispatch(setAuthModalVisibility({ open: true, loading: true }));

    axios({
      url: "/user/sign-up",
      method: "POST",
      body: { ...e },
    })
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
        Enter your email and password to register.
      </h3>
      <Form onFinish={onAuth}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter your name!",
            },
          ]}
        >
          <Input
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Name"
          />
        </Form.Item>
        <Form.Item
          name="surname"
          rules={[
            {
              required: true,
              message: "Please enter your surname!",
            },
          ]}
        >
          <Input
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="Surname"
          />
        </Form.Item>
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
            className="h-[40px] mt-[17px] border border-[#46A358]"
            placeholder="Enter your email address!"
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
            placeholder="Enter your password!"
            type="password"
          />
        </Form.Item>
        <Form.Item
          name="confirmed_password"
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
          ]}
        >
          <Input.Password
            className="h-[40px] mt-[17px] border border-[#46A358]"
            placeholder="Confirm your password!"
            type="password"
          />
        </Form.Item>
        <Button type="submit" className="w-full h-[45px] my-[27px]">
          {authModalVisibility.loading ? <LoadingOutlined /> : "Register"}
        </Button>
      </Form>
      <Divider className="font-normal text-xs " plain>
        Or register with
      </Divider>
      <button className="w-full cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] rounded-md mb-[15px]">
        <IconAndImageBasedLoader
          type="icon"
          className="pl-[15px]"
          src={google}
          alt="google"
        />
        Continue with Google
      </button>
      <button className="w-full cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] rounded-md">
        <IconAndImageBasedLoader
          type="icon"
          className="pl-[15px]"
          src={facebook_color}
          alt="facebook"
        />
        Continue with Facebook
      </button>
    </div>
  );
};

export default SignUp;
