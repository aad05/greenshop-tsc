import { FC } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useLoader } from "../../../../generic/Loader";
import { Modal, Tooltip } from "antd";
import { MainCardType } from "../../../../@types";
import { useDeleteProduct } from "../../../../hooks/useQuery/useQueryAction";

const Product: FC<MainCardType> = (props) => {
  const {
    main_image,
    title,
    _id,
    discount,
    price,
    discount_price,
    sold_times,
  } = props;
  const { mutate } = useDeleteProduct();
  const { IconAndImageBasedLoader } = useLoader();

  const deleteHandler = () => {
    return Modal.confirm({
      title: "Do you want to delete?",
      content: "Make sure, you can not undone this action!",
      okButtonProps: { danger: true },
      okText: "Delete",
      onOk: () => mutate({ data: props }),
    });
  };

  return (
    <div className="bg-[#FBFBFB] h-[70px] w-full mt-[11px] flex">
      <div className="w-[40%] flex items-center gap-2">
        <IconAndImageBasedLoader
          type={"image"}
          src={String(main_image)}
          alt={String(title)}
          className="w-[70px] h-[70px]"
        />
        <div>
          <h3>{String(title)}</h3>
          <p className="font-light text-[14px]">SKU: {_id?.slice(10)}</p>
        </div>
      </div>
      <div className="w-[20%] flex items-center text-[#727272]">
        {discount ? (
          <div>
            <p className="font-bold line-through">${price ?? 0}</p>
            <p className="font-bold">
              $
              {Number(
                Number(price) -
                  Number(Number(price) * Number(`0.${discount_price}`)),
              ).toFixed(2) || 0}
            </p>
          </div>
        ) : (
          <p className="font-bold">${price ?? 0}</p>
        )}
      </div>
      <div className="w-[40%] flex items-center justify-between pr-[10px]">
        <h3>${Number(sold_times) * Number(price)}</h3>
        <div className="flex gap-4">
          <Tooltip title="Edit">
            <EditOutlined className="cursor-pointer" />
          </Tooltip>
          <Tooltip title="Delete">
            <DeleteOutlined
              onClick={() => deleteHandler()}
              className="cursor-pointer"
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Product;
