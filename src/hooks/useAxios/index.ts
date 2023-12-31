// import { useNavigate } from "react-router-dom";
// import { useSignOut } from "react-auth-kit";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";
import { AuthUserType } from "../../@types";

interface AxiosProp {
  url: string;
  method?: "POST" | "PUT" | "PATCH" | "GET" | "DELETE";
  body?: object;
  headers?: object;
  includeToken?: boolean;
  params?: object;
}

export const useAxios = () => {
  const auth: AuthUserType = useAuthUser()() ?? {};
  const { REACT_APP_BASE_URL } = process.env;
  //   const navigate = useNavigate();
  //   const signOut = useSignOut();

  const request = async (props: AxiosProp) => {
    const {
      url,
      method = "GET",
      body,
      headers,
      params,
      includeToken = true,
    } = props;
    return await axios({
      method,
      url: `${REACT_APP_BASE_URL}${url}`,
      data: {
        ...body,
      },
      params: {
        access_token: auth._id ?? "64bebc1e2c6d3f056a8c85b7",
        ...params,
      },
      headers: {
        Authorization: `${
          includeToken && `Bearer ${localStorage.getItem("token")}`
        }`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "true",
        ...headers,
      },
    }).then((response) => response);
    // .catch((error) =>
    //  if (error.request.status === 403) {
    //     signOut();
    //       navigate("/login");
    //  }
    // );
  };
  return request;
};
