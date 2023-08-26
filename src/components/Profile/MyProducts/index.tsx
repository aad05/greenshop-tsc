import { FC } from "react";
import Product from "./Product";
import Button from "../../../generic/Button";
import { useReduxDispatch } from "../../../hooks/useRedux";
import { setAddNewPlantModalVisibility } from "../../../redux/modalSlice";
import useQueryHandler from "../../../hooks/useQuery";
import { useLoader } from "../../../generic/Loader";
import { MainCardType } from "../../../@types";

const MyProducts: FC = () => {
  const { my_product_based_loader } = useLoader();
  const useQuery = useQueryHandler();
  const dispatch = useReduxDispatch();

  const { data, isLoading, isError } = useQuery({
    queryURL: "/user/products",
    queryKEY: "/my-products",
    method: "GET",
  });

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
        <h3 className="w-[40%]">Total</h3>
      </div>
      <div className="flex flex-col gap-3">
        {isLoading || isError
          ? my_product_based_loader({ length: 5 })
          : data.map((value: MainCardType) => (
              <Product key={value._id} {...value} />
            ))}
      </div>
    </div>
  );
};

export default MyProducts;
