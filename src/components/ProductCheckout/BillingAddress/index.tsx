import { FC, useState } from "react";
import { Form, Input, Radio } from "antd";
import Button from "../../../generic/Button";
import { useAuthDecider } from "../../../tools/authDecider";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import {
  setAuthModalVisibility,
  setConfirmationModalVisibility,
} from "../../../redux/modalSlice";
import { useAxios } from "../../../hooks/useAxios";
import { CheckoutFormType } from "../../../@types";
import { getter } from "../../../hooks/useLocalStorage";
import { LoadingOutlined } from "@ant-design/icons";
import { useNotificationAPI } from "../../../generic/NotificationAPI";

const BillingAddress: FC = () => {
  const notify = useNotificationAPI();
  const [loading, setLoading] = useState<boolean>(false);
  const { coupon } = useReduxSelector((state) => state.shopping);
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const { auth_decider_func } = useAuthDecider();

  const orderHanlder = async (e: CheckoutFormType) => {
    setLoading(true);
    try {
      await axios({
        url: "/user/make-order",
        method: "POST",
        body: {
          shop_list: getter({ key: "shopping_card" }),
          billing_address: e,
          extra_shop_info: {
            total_price: getter({ key: "total_price" }),
            coupon,
          },
        },
      });
      dispatch(setConfirmationModalVisibility());
    } catch (error) {
      console.log(error);

      notify("smth_wrong");
    }
    setLoading(false);
  };

  const onFinish = (e: CheckoutFormType) => {
    return auth_decider_func({
      withoutAuth: () =>
        dispatch(setAuthModalVisibility({ open: true, loading: false })),
      withAuth: () => orderHanlder(e),
    });
  };

  return (
    <div className="w-[60%] max-md:w-[100%]">
      <h3 className="font-bold mb-[20px]">Billing Address</h3>
      <Form
        name="complex-form"
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 26,
        }}
        layout="vertical"
        className="w-full"
        onFinish={onFinish}
      >
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            label="First name"
            name="first_name"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Input placeholder="Type your first name..." />
          </Form.Item>
          <Form.Item
            label="Last name"
            name="last_name"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input placeholder="Type your last name..." />
          </Form.Item>
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            label="Country / Region"
            name="country"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Input placeholder="Select your country..." />
          </Form.Item>
          <Form.Item
            label="Town / City"
            name="town"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input placeholder="Select your town..." />
          </Form.Item>
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            label="Streed Address"
            name="street_address"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Input placeholder="House number and street name" />
          </Form.Item>
          <Form.Item
            label=" "
            name="additional_street_address"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input placeholder="Appartment, suite, unit, etc. (optional)" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            label="State"
            name="state"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Input placeholder="Select a state..." />
          </Form.Item>
          <Form.Item
            label="Zip"
            name="zip"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input placeholder="Appartment, suite, unit, etc. (optional)" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            label="Email address"
            name="email"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Input placeholder="Type your email..." />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone_number"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input
              addonBefore={"+998"}
              placeholder="Type your phone number..."
            />
          </Form.Item>
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            label="Payment Method"
            name="payment_method"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Radio.Group
              defaultValue={"other-payment-methods"}
              className="flex flex-col gap-3"
            >
              <Radio
                value="other-payment-methods"
                className="border border-[#46A358] w-full h-[40px] flex items-center pl-[10px] rounded-lg"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fpayment_collected_methods.png?alt=media&token=c4bfd991-8bd8-4e6b-97dc-83381db193f7"
                  alt="methods"
                />
              </Radio>
              <Radio
                value="dorect-bank-transfer"
                className="border border-[#46A358] w-full h-[40px] flex items-center pl-[10px] rounded-lg"
              >
                Dorect bank transfer
              </Radio>
              <Radio
                value="cash-on-delivery"
                className="border border-[#46A358] w-full h-[40px] flex items-center pl-[10px] rounded-lg"
              >
                Cash on delivery
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Order notes (optional)" name="order_notes">
          <Input.TextArea
            rows={10}
            placeholder="Your order notes, thoughts, feedback, etc..."
          />
        </Form.Item>
        <Button
          disabled={loading}
          type="submit"
          className="mt-[40px] w-full h-[40px]"
        >
          {loading ? <LoadingOutlined /> : "Place Order"}
        </Button>
      </Form>
    </div>
  );
};

export default BillingAddress;
