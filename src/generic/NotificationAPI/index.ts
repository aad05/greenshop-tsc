import { notification } from "antd";

export const useNotificationAPI = () => {
  const notFoundError = {
    message: "User not found",
    description: "Email or password is wrong!",
  };

  return (status: number) => {
    switch (status) {
      case 409:
        return notification.error(notFoundError);
      default:
        return notification.error({
          message: "Missing status!",
        });
    }
  };
};
