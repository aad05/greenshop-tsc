import { useMutation, useQueryClient } from "react-query";
import {
  AddFlowerType,
  MainCardType,
  OrderType,
  UserType,
  AuthResponseType,
} from "../../../@types";
import { useHandler } from "../../../generic/Handlers";
import { useAxios } from "../../useAxios";
import {
  setGoogleAuthModalVisibility,
  setTrackOrderModalVisibility,
} from "../../../redux/modalSlice";
import { useReduxDispatch } from "../../useRedux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useNotificationAPI } from "../../../generic/NotificationAPI";
import { useSignIn } from "react-auth-kit";

// Cache Handler
const useAddProductToCache = () => {
  const queryClient = useQueryClient();
  return (flower: object) => {
    queryClient.setQueryData("/my-products", (oldQuery: any) => {
      return [...oldQuery, flower];
    });
  };
};
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
const useDeletBlogFromCache = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  return (_id: string) => {
    try {
      queryClient.setQueryData(
        `/blog?search=${searchParams.get("search")}`,
        (oldQuery: any) => {
          return oldQuery.filter((v: { _id: string }) => v._id !== _id);
        },
      );
    } catch (error) {}
  };
};

// Mutation
const useAddProduct = () => {
  const addProduct = useAddProductToCache();
  const axios = useAxios();
  return useMutation(({ uploadData }: { uploadData: AddFlowerType }) => {
    return axios({
      url: `/flower/category/${uploadData.category}`,
      method: "POST",
      body: { ...uploadData },
    }).then((res) => {
      addProduct(res.data.data);
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
const useDeleteBlog = () => {
  const deleteFromCache = useDeletBlogFromCache();
  const axios = useAxios();
  return useMutation((_id: string) => {
    deleteFromCache(_id);
    return axios({
      url: "/user/blog",
      method: "DELETE",
      body: {
        _id,
      },
    });
  });
};
const useSendInvitation = () => {
  const notify = useNotificationAPI();
  const axios = useAxios();

  return useMutation((_id: string) => {
    notify("invitation_sent");
    return axios({
      url: "/user/notification/invite",
      method: "POST",
      body: {
        _id,
      },
    });
  });
};

const useAuthUserWithGoogle = () => {
  const notify = useNotificationAPI();
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const sing_in = useSignIn();

  return useMutation(
    ({
      email,
      type = "sign_in",
      name = " ",
      surname = " ",
    }: {
      email: string;
      type?: "sign_in" | "sign_up";
      name?: string;
      surname?: string;
    }) => {
      return axios({
        url: `/user/sign-${type === "sign_up" ? "up" : "in"}/google`,
        method: "POST",
        body: {
          email,
          name,
          surname,
        },
      })
        .then((res) => {
          const { data }: AuthResponseType = res.data;
          localStorage.setItem("token", data.token);
          sing_in({
            token: data.token,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: data.user,
          });
          dispatch(setGoogleAuthModalVisibility(false));
          notify("google_auth_success");
        })
        .catch((error) => {
          dispatch(setGoogleAuthModalVisibility(false));
          const status = error.response.status;
          return notify(status);
        });
    },
  );
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
  useDeleteBlog,
  useSendInvitation,
  useAuthUserWithGoogle,
};
