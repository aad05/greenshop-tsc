import { useAuthUser, useSignIn } from "react-auth-kit";
import { useAxios } from "../../hooks/useAxios";
import { useNotificationAPI } from "../NotificationAPI";
import { MainCardType } from "../../@types";

export const useHandler = () => {
  const notify = useNotificationAPI();
  const axios = useAxios();
  const auth = useAuthUser();
  const signIn = useSignIn();

  const userUpdater = ({ shouldUpdate }: { shouldUpdate: object }) =>
    signIn({
      token: localStorage.getItem("token") ?? "",
      expiresIn: 3600,
      tokenType: "Bearer",
      authState: {
        ...auth(),
        ...shouldUpdate,
      },
    });

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
        notify("removed_from_wishlist");
        userUpdater({
          shouldUpdate: {
            ...auth(),
            wishlist: auth()?.wishlist.filter(
              (v: { flower_id: string }) =>
                v.flower_id !== main_flower_data._id,
            ),
          },
        });
        await axios({
          method: "DELETE",
          url: "/user/delete-wishlist",
          body: {
            _id: foundData?.flower_id,
          },
        });
      } else {
        userUpdater({
          shouldUpdate: {
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
        await axios({
          method: "POST",
          url: "/user/create-wishlist",
          body: {
            route_path: category,
            flower_id: main_flower_data._id,
          },
        });
      }
    } catch (error) {
      console.log(error);

      notify("smth_wrong");
    }
  };
  const accountDetailsUpdater = async ({
    shouldUpdate,
  }: {
    shouldUpdate: object;
  }) => {
    try {
      userUpdater({
        shouldUpdate: {
          ...auth(),
          ...shouldUpdate,
        },
      });

      notify("account_details_updated");
      await axios({
        method: "POST",
        url: "/user/account-details",
        body: { ...shouldUpdate, _id: auth()?._id },
      });
    } catch (error) {
      notify("smth_wrong");
    }
  };
  const addressUpdater = async ({
    shouldUpdate,
  }: {
    shouldUpdate: {
      name?: string;
      surname?: string;
      country?: string;
      town?: string;
      extra_address?: string;
      state?: string;
      zip?: string;
      email?: string;
      phone_number?: string;
      street_address?: string;
    };
  }) => {
    try {
      userUpdater({
        shouldUpdate: {
          ...auth(),
          name: String(shouldUpdate?.name),
          surname: String(shouldUpdate?.surname),
          email: String(shouldUpdate?.email),
          phone_number: String(shouldUpdate?.phone_number),
          billing_address: {
            country: String(shouldUpdate.country),
            extra_address: String(shouldUpdate.extra_address),
            state: String(shouldUpdate.state),
            street_address: String(shouldUpdate?.street_address),
            town: String(shouldUpdate?.town),
            zip: String(shouldUpdate?.zip),
          },
        },
      });

      notify("address_updated");
      await axios({
        method: "POST",
        url: "/user/address",
        body: { ...shouldUpdate, _id: auth()?._id },
      });
    } catch (error) {
      notify("smth_wrong");
    }
  };
  const emailSubscriber = async ({ email }: { email: string }) => {
    try {
      await axios({
        url: "/features/email-subscribe",
        method: "POST",
        body: { email },
      });
      notify("email_success");
    } catch (error) {
      notify("smth_wrong");
    }
  };

  const followUser = ({ _id }: { _id: string }) => {
    userUpdater({
      shouldUpdate: { followers: [...auth()?.followers, _id] },
    });
    notify("followed");
  };

  const unFollowUser = ({ _id }: { _id: string }) => {
    userUpdater({
      shouldUpdate: {
        followers: auth()?.followers.filter((v: string) => v !== _id),
      },
    });
    notify("unfollowed");
  };

  return {
    likeHandler,
    accountDetailsUpdater,
    addressUpdater,
    emailSubscriber,
    followUser,
    unFollowUser,
  };
};
