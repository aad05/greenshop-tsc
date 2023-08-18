import { notification } from "antd";
type status_string_type =
  | "not_equal"
  | "added_to_shopping_cart"
  | "deleted_from_shopping_cart";

export const useNotificationAPI = () => {
  const notFoundError = {
    message: "User not found",
    description: "Email or password is wrong!",
  };
  const notEqualError = {
    message: "Not matched!",
    description: "You confirmed your password with wrong credential!",
  };

  const addedToShopping = {
    message: "Added to you shopping card!",
  };
  const deletedFromShopping = {
    message: "Removed from your shopping card!",
  };

  return (status: number | status_string_type) => {
    switch (status) {
      case 409:
        return notification.error(notFoundError);
      case "not_equal":
        return notification.error(notEqualError);
      case "added_to_shopping_cart":
        return notification.success(addedToShopping);
      case "deleted_from_shopping_cart":
        return notification.success(deletedFromShopping);
      default:
        return notification.error({
          message: "Missing status!",
        });
    }
  };
};
