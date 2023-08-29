import { Input, Modal, Form, Select, Button, Upload, UploadProps } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FC, useState } from "react";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setAddNewPlantModalVisibility } from "../../../../redux/modalSlice";
import GenericButton from "../../../../generic/Button";
import useQueryHandler from "../../../../hooks/useQuery";
import {
  AddFlowerType,
  AddNewProductUploadType,
  CategoryType,
  UploadFormType,
} from "../../../../@types";
import { useAddProduct } from "../../../../hooks/useQuery/useQueryAction";

const AddNewPlant: FC = () => {
  const { mutateAsync } = useAddProduct();
  const [isShow, setShow] = useState<AddNewProductUploadType>({
    isShowMainUpload: true,
    isShowAdditionalUpload_1: true,
    isShowAdditionalUpload_2: true,
    isShowAdditionalUpload_3: true,
    isShowAdditionalUpload_4: true,
  });
  const useQuery = useQueryHandler();
  const dispatch = useReduxDispatch();
  const { addNewPlantModalVisivility } = useReduxSelector(
    (state) => state.modal,
  );

  const onFinish = async (e: UploadFormType) => {
    const formattedUploadData: AddFlowerType = {
      title: e.title,
      price: e.price,
      discount: Boolean(e.discount_price),
      short_description: e.short_description,
      description: e.description,
      main_image: e.main_image.file.response.image_url.url,
      discount_price: Number(e.discount_price),
      detailed_images: [
        e.detailed_image_1.file.response.image_url.url,
        e.detailed_image_2.file.response.image_url.url,
        e.detailed_image_3.file.response.image_url.url,
        e.detailed_image_4.file.response.image_url.url,
      ],
      category: e.category,
    };
    dispatch(setAddNewPlantModalVisibility({ open: true, loading: true }));
    await mutateAsync({ uploadData: formattedUploadData });
    dispatch(setAddNewPlantModalVisibility({ open: false, loading: false }));
  };

  const uploadVisbilityHandler = ({
    type,
  }: {
    type:
      | "main_image_uploader"
      | "additional_uploader_1"
      | "additional_uploader_2"
      | "additional_uploader_3"
      | "additional_uploader_4";
  }) => {
    setShow({
      ...isShow,
      isShowMainUpload:
        type === "main_image_uploader" ? false : isShow.isShowMainUpload,
      isShowAdditionalUpload_1:
        type === "additional_uploader_1"
          ? false
          : isShow.isShowAdditionalUpload_1,
      isShowAdditionalUpload_2:
        type === "additional_uploader_2"
          ? false
          : isShow.isShowAdditionalUpload_2,
      isShowAdditionalUpload_3:
        type === "additional_uploader_3"
          ? false
          : isShow.isShowAdditionalUpload_3,
      isShowAdditionalUpload_4:
        type === "additional_uploader_4"
          ? false
          : isShow.isShowAdditionalUpload_4,
    });
  };

  const { data = [], isLoading } = useQuery({
    queryURL: "/flower/category",
    queryKEY: "/category",
    method: "GET",
  });

  const uploadProps: UploadProps = {
    name: "image",
    action:
      "https://greenshop.abduvoitov.com/api/upload?access_token=64bebc1e2c6d3f056a8c85b7",
    listType: "picture-card",
    className: "w-full",
    data: { type: "img" },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    accept: ".png,.jpg,.jpeg",
  };

  return (
    <Modal
      width={700}
      title={"Add plant"}
      open={addNewPlantModalVisivility.open}
      okText="Add"
      cancelButtonProps={{ type: "ghost", danger: true }}
      okButtonProps={{ type: "default" }}
      onCancel={() =>
        dispatch(
          setAddNewPlantModalVisibility({
            open: addNewPlantModalVisivility.loading,
            loading: addNewPlantModalVisivility.loading,
          }),
        )
      }
      footer={false}
    >
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
            label="Name of plant"
            name="title"
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
            <Input placeholder="Type name of your plant..." />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
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
              max={1000}
              addonBefore="$"
              type="number"
              placeholder="Type your product..."
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
            label="Category"
            name="category"
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
            <Select
              options={data?.map((v: CategoryType) => ({
                ...v,
                label: v.title,
                value: v.route_path,
              }))}
              loading={isLoading}
              placeholder="Category your product..."
            />
          </Form.Item>
          <Form.Item
            label="Discount price (if it's available)"
            name="discount_price"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Input max={1000} type="number" placeholder="Discount price..." />
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
            label="Short Description"
            name="short_description"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(100% - 8px)",
            }}
          >
            <Input.TextArea
              className="resize-none h-[120px]"
              showCount
              maxLength={300}
              placeholder="Short Description..."
            />
          </Form.Item>
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(100% - 8px)",
            }}
          >
            <Input.TextArea
              className="h-[240px]"
              showCount
              maxLength={5000}
              placeholder="Description..."
            />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Main image"
          name="main_image"
          rules={[
            {
              required: true,
              message: "Please, upload main image.",
            },
          ]}
          style={{
            display: "inline-block",
            width: "calc(100% - 8px)",
          }}
        >
          <Upload
            {...uploadProps}
            onChange={() =>
              uploadVisbilityHandler({ type: "main_image_uploader" })
            }
          >
            {isShow.isShowMainUpload ? "Upload your image!" : null}
          </Upload>
        </Form.Item>
        <Form.Item
          label="Additinal Image"
          style={{
            marginBottom: 0,
          }}
        >
          <Form.Item
            name="detailed_image_1"
            rules={[
              {
                required: true,
                message: "Please, upload additonal image.",
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              marginRight: "10px",
            }}
          >
            <Upload
              {...uploadProps}
              onChange={() =>
                uploadVisbilityHandler({ type: "additional_uploader_1" })
              }
            >
              {isShow.isShowAdditionalUpload_1 ? "Upload your image!" : null}
            </Upload>
          </Form.Item>
          <Form.Item
            name="detailed_image_2"
            rules={[
              {
                required: true,
                message: "Please, upload additonal image.",
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Upload
              {...uploadProps}
              onChange={() =>
                uploadVisbilityHandler({ type: "additional_uploader_2" })
              }
            >
              {isShow.isShowAdditionalUpload_2 ? "Upload your image!" : null}
            </Upload>
          </Form.Item>
          <Form.Item
            name="detailed_image_3"
            rules={[
              {
                required: true,
                message: "Please, upload additonal image.",
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              marginRight: "10px",
            }}
          >
            <Upload
              {...uploadProps}
              onChange={() =>
                uploadVisbilityHandler({ type: "additional_uploader_3" })
              }
            >
              {isShow.isShowAdditionalUpload_3 ? "Upload your image!" : null}
            </Upload>
          </Form.Item>
          <Form.Item
            name="detailed_image_4"
            rules={[
              {
                required: true,
                message: "Please, upload additonal image.",
              },
            ]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Upload
              {...uploadProps}
              onChange={() =>
                uploadVisbilityHandler({ type: "additional_uploader_4" })
              }
            >
              {isShow.isShowAdditionalUpload_4 ? "Upload your image!" : null}
            </Upload>
          </Form.Item>
        </Form.Item>
        <div className="flex gap-4 justify-end">
          <Button danger disabled={addNewPlantModalVisivility.loading}>
            Cancel
          </Button>
          <GenericButton
            disabled={addNewPlantModalVisivility.loading}
            type="submit"
            className="py-[10px] px-[15px]"
          >
            {addNewPlantModalVisivility.loading ? <LoadingOutlined /> : "Add"}
          </GenericButton>
        </div>
      </Form>
    </Modal>
  );
};

export default AddNewPlant;
