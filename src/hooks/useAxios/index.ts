// import { useNavigate } from "react-router-dom";
// import { useSignOut } from "react-auth-kit";
import axios from "axios";

interface AxiosProp {
  url: string;
  method: "POST" | "PUT" | "PATCH" | "GET" | "DELETE";
  body?: object;
  headers?: object;
  includeToken?: boolean;
  params?: object;
}

export const useAxios = () => {
  const { REACT_APP_BASE_URL } = process.env;
  //   const navigate = useNavigate();
  //   const signOut = useSignOut();

  const request = async (props: AxiosProp) => {
    const { url, method, body, headers, params, includeToken = true } = props;
    return await axios({
      method,
      url: `${REACT_APP_BASE_URL}${url}?access_token=64bebc1e2c6d3f056a8c85b7`,
      data: {
        ...body,
      },
      params: { ...params },
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
