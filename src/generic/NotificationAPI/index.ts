import { notification } from "antd";
type status_string_type =
  | "not_equal"
  | "added_to_shopping_cart"
  | "deleted_from_shopping_cart"
  | "missing_value"
  | "coupon_notfound"
  | "coupon_success";

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
  const missingValue = {
    message: "Please fill all fields!",
  };
  const couponNotFound = {
    message: "Coupon not found!",
  };
  const couponSuccess = {
    message: "Coupon set successfully!",
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
      case "missing_value":
        return notification.error(missingValue);
      case "coupon_notfound":
        return notification.error(couponNotFound);
      case "coupon_success":
        return notification.success(couponSuccess);
      default:
        return notification.error({
          message: "Missing status!",
        });
    }
  };
};
