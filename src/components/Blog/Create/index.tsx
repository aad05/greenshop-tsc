import { Form, Input } from "antd";
import useBreadCrumbAPI from "../../../generic/BreadCrumb";
import ReactQuill from "react-quill";
import Button from "../../../generic/Button";
import { useNotificationAPI } from "../../../generic/NotificationAPI";
import { useCreateBlog } from "../../../hooks/useQuery/useQueryAction";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const CreateBlog = () => {
  const [isPublishing, setPublishing] = useState<boolean>(false);
  const { mutateAsync } = useCreateBlog();
  const notify = useNotificationAPI();
  const breadCrumb = useBreadCrumbAPI();

  const onFinish = async (e: {
    title: string;
    content: string;
    short_description: string;
  }) => {
    if (!e.content.replace(/(<([^>]+)>)/gi, "")) return notify("missing_value");

    if (!e.short_description.replace(/\s/g, "")) return notify("missing_value");

    setPublishing(true);
    await mutateAsync({ data: { ...e } });
    setPublishing(false);
  };

  return (
    <div className="mt-3 mb-[40px]">
      {breadCrumb("create_blog")}
      <div className="w-[60%] m-auto flex flex-col gap-4 mt-[40px] max-lg:w-full">
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item name="title" label="Title:" rules={[{ required: true }]}>
            <Input size="large" placeholder="Title of the post" />
          </Form.Item>
          <Form.Item
            name="short_description"
            label="Short desription:"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              size="large"
              placeholder="Short desription of the post"
              className="resize-none"
              autoSize
              showCount
              maxLength={250}
            />
          </Form.Item>
          <Form.Item
            name="content"
            label="Content:"
            rules={[{ required: true }]}
          >
            <ReactQuill className="h-[60vh] mb-[40px]" theme="snow" />
          </Form.Item>
          <Button
            disabled={isPublishing}
            type="submit"
            className="w-full px-[15px] py-[10px]"
          >
            {isPublishing ? (
              <>
                <LoadingOutlined /> Publishing...
              </>
            ) : (
              "Publish"
            )}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateBlog;
