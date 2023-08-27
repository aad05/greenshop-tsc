import { useMutation, useQueryClient } from "react-query";
import {
  AddFlowerType,
  MainCardType,
  OrderType,
  UserType,
} from "../../../@types";
import { useHandler } from "../../../generic/Handlers";
import { useAxios } from "../../useAxios";
import { setTrackOrderModalVisibility } from "../../../redux/modalSlice";
import { useReduxDispatch } from "../../useRedux";
import { useNavigate } from "react-router-dom";
import { useNotificationAPI } from "../../../generic/NotificationAPI";

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
const useDeleteProductFromCache = () => {
  const queryClient = useQueryClient();
  return (recievedData: MainCardType) => {
    queryClient.setQueryData("/my-products", (oldQuery: any) => {
      return oldQuery.filter((v: MainCardType) => v._id !== recievedData._id);
    });
  };
};
const useDeleteTrackOrderFromCache = () => {
  const queryClient = useQueryClient();
  return ({ _id }: { _id: string }) => {
    queryClient.setQueryData("order", (oldQuery: any) => {
      return oldQuery?.filter((v: OrderType) => v._id !== _id);
    });
  };
};

// Mutation
const useAddProduct = () => {
  const axios = useAxios();
  return useMutation(({ uploadData }: { uploadData: AddFlowerType }) => {
    return axios({
      url: `/flower/category/${uploadData.category}`,
      method: "POST",
      body: { ...uploadData },
    });
  });
};
const useDeleteProduct = () => {
  const axios = useAxios();
  const deleteProductFromCache = useDeleteProductFromCache();

  return useMutation(({ data }: { data: MainCardType }) => {
    deleteProductFromCache(data);
    return axios({
      url: `/user/product/${data.category}`,
      method: "DELETE",
      body: { _id: data._id },
    });
  });
};
const useFollowUser = () => {
  const { followUser } = useHandler();
  const axios = useAxios();

  return useMutation(({ data }: { data: UserType }) => {
    followUser({ _id: String(data?._id) });

    return axios({
      url: "/user/follow",
      method: "POST",
      body: {
        _id: data._id,
      },
    });
  });
};
const useUnFollowUser = () => {
  const { unFollowUser } = useHandler();
  const axios = useAxios();

  return useMutation(({ data }: { data: UserType }) => {
    unFollowUser({ _id: String(data?._id) });
    return axios({
      url: "/user/unfollow",
      method: "POST",
      body: {
        _id: data._id,
      },
    });
  });
};
const useDeleteTrackOrder = () => {
  const dispatch = useReduxDispatch();
  const deleteTrackOrderFromCache = useDeleteTrackOrderFromCache();
  const axios = useAxios();
  return useMutation(({ _id }: { _id: string }) => {
    deleteTrackOrderFromCache({ _id });
    dispatch(setTrackOrderModalVisibility());
    return axios({
      url: "/order/delete-order",
      method: "DELETE",
      body: {
        _id,
      },
    });
  });
};
const useCreateBlog = () => {
  const navigate = useNavigate();
  const notify = useNotificationAPI();
  const axios = useAxios();
  return useMutation(
    ({
      data,
    }: {
      data: { title: string; short_description: string; content: string };
    }) => {
      return axios({
        url: "/user/blog",
        method: "POST",
        body: {
          ...data,
        },
      }).then(() => {
        notify("blog_create_success");
        navigate("/blog");
      });
    },
  );
};
const useBlogView = () => {
  const axios = useAxios();
  return useMutation(({ _id }: { _id: string }) => {
    return axios({
      url: "/user/blog/view",
      method: "PUT",
      body: {
        _id,
      },
    });
  });
};

export {
  useDeleteWishlistDataFromCache,
  useAddProduct,
  useDeleteProduct,
  useFollowUser,
  useUnFollowUser,
  useDeleteTrackOrder,
  useCreateBlog,
  useBlogView,
};
