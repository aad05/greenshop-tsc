import { Divider, Form, Input, Modal } from "antd";
import { FC } from "react";
import { useAxios } from "../../../../../hooks/useAxios";
import { useSignIn } from "react-auth-kit";
import {
  LoadingOutlined,
  ScanOutlined,
  GoogleOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import { useNotificationAPI } from "../../../../../generic/NotificationAPI";
import {
  useReduxDispatch,
  useReduxSelector,
} from "../../../../../hooks/useRedux";
import {
  setAuthModalVisibility,
  setGoogleAuthModalVisibility,
} from "../../../../../redux/modalSlice";
import Button from "../../../../../generic/Button";
import { signInWithGoogle } from "../../../../../config/config";
import { useAuthUserWithGoogle } from "../../../../../hooks/useQuery/useQueryAction";
import { AuthResponseType } from "../../../../../@types";

type onAuth = {
  email: string;
  password: string;
};

const SignIn: FC = () => {
  const { mutate } = useAuthUserWithGoogle();
  const { authModalVisibility } = useReduxSelector((state) => state.modal);
  const dispatch = useReduxDispatch();
  const axios = useAxios();
  const sing_in = useSignIn();
  const notify = useNotificationAPI();

  const onAuth = (e: onAuth) => {
    dispatch(setAuthModalVisibility({ open: true, loading: true }));
    axios({ url: "/user/sign-in", method: "POST", body: { ...e } })
      .then((res) => {
        const { data }: AuthResponseType = res.data;
        localStorage.setItem("token", data.token);
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

  const googleAuthHandler = async () => {
    try {
      dispatch(setAuthModalVisibility({ open: false, loading: false }));
      const result = await signInWithGoogle();
      dispatch(setGoogleAuthModalVisibility(true));
      mutate({ email: String(result.user.email) });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-4/5 m-auto">
      <Modal title="QR Auth" open={false}></Modal>
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
        <Button type="submit" className="w-full h-[45px] my-[27px]">
          {authModalVisibility.loading ? <LoadingOutlined /> : "Login"}
        </Button>
      </Form>
      <Divider className="font-normal text-xs " plain>
        Or login with
      </Divider>
      <button
        disabled={authModalVisibility.loading}
        onClick={() => notify("not_support")}
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]"
      >
        <FacebookFilled className="pl-[15px]" />
        Login with Facebook
      </button>
      <button
        disabled={authModalVisibility.loading}
        onClick={googleAuthHandler}
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md"
      >
        <GoogleOutlined className="pl-[15px]" />
        Login with Google
      </button>
      <button
        disabled={authModalVisibility.loading}
        onClick={() => notify("not_support")}
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mt-[15px]"
      >
        <ScanOutlined className="pl-[15px]" />
        Login with Qr Code
      </button>
    </div>
  );
};

export default SignIn;
