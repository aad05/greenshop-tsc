import { FC } from "react";
import Product from "./Product";
import Button from "../../../generic/Button";
import { useReduxDispatch } from "../../../hooks/useRedux";
import { setAddNewPlantModalVisibility } from "../../../redux/modalSlice";

const MyProducts: FC = () => {
  const dispatch = useReduxDispatch();
  return (
    <div className="w-full">
      <Button
        className="ml-auto px-[15px] py-[8px]"
        onClick={() =>
          dispatch(
            setAddNewPlantModalVisibility({ open: true, loading: false }),
          )
        }
      >
        Add new
      </Button>
      <div className="pb-[11px] border-b border-[#46A35880] flex max-lg:hidden">
        <h3 className="w-[40%]">Products</h3>
        <h3 className="w-[20%]">Price</h3>
        <h3 className="w-[20%]">Quantity</h3>
        <h3 className="w-[20%]">Total</h3>
      </div>
      <div className="flex flex-col gap-3">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default MyProducts;
