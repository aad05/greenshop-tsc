import { Input, Form, Checkbox } from "antd";
import { FC } from "react";
import Button from "../../../generic/Button";

const Address: FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-[30px]">
        <div>
          <h3 className="mb-[10px]">Billing Address</h3>
          <p className="font-light">
            The following addresses will be used on the checkout page by
            default.
          </p>
        </div>
        <p className="font-bold text-[#46A358] cursor-pointer">Add</p>
      </div>
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
        size="large"
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
        <Button className="h-[40px] px-[10px]">Save Address</Button>
      </Form>

      <div className="flex justify-between mt-[30px]">
        <div>
          <h3 className="mb-[10px]">Shipping Address</h3>
          <p className="font-light">
            You have not set up this type of address yet.
          </p>
        </div>
        <div>
          <Checkbox className="mb-[10px]">Same as billing address</Checkbox>
          <p className="font-bold text-[#46A358] cursor-pointer">Add</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
