import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import GenericButton from "../../../generic/Button";

const AccountDetails = () => {
  return (
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
          <Input placeholder="Your email address..." />
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
          <Input placeholder="Your phone number..." />
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
          label="Username"
          name="username"
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
          <Input placeholder="Your username..." />
        </Form.Item>
        <Form.Item
          label="Profile photo"
          name="profile_photo"
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Upload>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
      </Form.Item>
      <GenericButton type="submit" className="h-[40px] px-[10px] mt-[15px]">
        Save changes
      </GenericButton>
    </Form>
  );
};

export default AccountDetails;
