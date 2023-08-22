import { useQueryClient } from "react-query";
import { MainCardType } from "../../../@types";
import { useHandler } from "../../../generic/Handlers";

// Cache Handler
const useDeleteWishlistDataFromCache = () => {
  const { likeHandler } = useHandler();
  const queryClient = useQueryClient();

  return async (recievedData: MainCardType) => {
    queryClient.setQueryData("wishlist", (oldQuery: any) => {
      return oldQuery?.filter((v: MainCardType) => v._id !== recievedData._id);
    });
    await likeHandler({ main_flower_data: recievedData, category: "" });
  };
};

export { useDeleteWishlistDataFromCache };
