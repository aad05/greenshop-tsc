import { useAuthUser, useSignIn } from "react-auth-kit";
import { useAxios } from "../../hooks/useAxios";
import { useNotificationAPI } from "../NotificationAPI";
import { MainCardType } from "../../@types";

export const useHandler = () => {
  const notify = useNotificationAPI();
  const axios = useAxios();
  const auth = useAuthUser();
  const signIn = useSignIn();

  const likeHandler = async ({
    category,
    main_flower_data,
  }: {
    category: string;
    main_flower_data: MainCardType;
  }) => {
    const foundData: { flower_id: string } = auth()?.wishlist.find(
      (v: { flower_id: string }) => v?.flower_id === main_flower_data._id,
    );

    try {
      if (foundData) {
        await axios({
          method: "DELETE",
          url: "/user/delete-wishlist",
          body: {
            _id: foundData?.flower_id,
          },
        });
        signIn({
          token: localStorage.getItem("token") ?? "",
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: {
            ...auth(),
            wishlist: auth()?.wishlist.filter(
              (v: { flower_id: string }) =>
                v.flower_id !== main_flower_data._id,
            ),
          },
        });
        notify("removed_from_wishlist");
      } else {
        await axios({
          method: "POST",
          url: "/user/create-wishlist",
          body: {
            route_path: category,
            flower_id: main_flower_data._id,
          },
        });

        signIn({
          token: localStorage.getItem("token") ?? "",
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: {
            ...auth(),
            wishlist: [
              ...auth()?.wishlist,
              {
                route_path: category,
                flower_id: main_flower_data._id,
              },
            ],
          },
        });
        notify("added_to_wishlist");
      }
    } catch (error) {
      console.log(error);

      notify("smth_wrong");
    }
  };
  return { likeHandler };
};
