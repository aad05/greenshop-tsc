import { FC } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useLoader } from "../../../../generic/Loader";
import { Tooltip } from "antd";

const Product: FC = () => {
  const { IconAndImageBasedLoader } = useLoader();

  return (
    <div className="bg-[#FBFBFB] h-[70px] w-full mt-[11px] flex">
      <div className="w-[40%] flex items-center gap-2">
        <IconAndImageBasedLoader
          type={"image"}
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fjasmine.png?alt=media&token=becf9ae1-92d2-4ddb-98d4-7037dd2ca089"
          alt=""
          className="w-[70px] h-[70px]"
        />
        <div>
          <h3>Barberton Daisy</h3>
          <p className="font-light text-[14px]">SKU: 1995751877966</p>
        </div>
      </div>
      <div className="w-[20%] flex items-center text-[#727272]">$119.00</div>
      <div className="w-[20%] flex items-center">
        <div className="flex gap-3">
          <button className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white">
            -
          </button>
          <h3 className="font-medium text-[18px]">0</h3>
          <button className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white">
            +
          </button>
        </div>
      </div>
      <div className="w-[20%] flex items-center justify-between pr-[10px]">
        <h3>$238.00</h3>
        <Tooltip title="Edit">
          <EditOutlined className="cursor-pointer" />
        </Tooltip>
        <Tooltip title="Delete">
          <DeleteOutlined className="cursor-pointer" />
        </Tooltip>
      </div>
    </div>
  );
};

export default Product;
