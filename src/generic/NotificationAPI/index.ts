import { notification } from "antd";

export const useNotificationAPI = () => {
  const notFoundError = {
    message: "User not found",
    description: "Email or password is wrong!",
  };
  const notEqualError = {
    message: "Not matched!",
    description: "You confirmed your password with wrong credential!",
  };

  return (status: number | string) => {
    switch (status) {
      case 409:
        return notification.error(notFoundError);
      case "not_equal":
        return notification.error(notEqualError);
      default:
        return notification.error({
          message: "Missing status!",
        });
    }
  };
};
