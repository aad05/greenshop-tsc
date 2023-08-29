import { Tooltip } from "antd";
import { useLoader } from "../../../generic/Loader";
import { useAuthDecider } from "../../../tools/authDecider";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import useQueryHandler from "../../../hooks/useQuery";
import Blog from "./Card";
import { AuthUserType, BlogCardType } from "../../../@types";
import { useAuthUser } from "react-auth-kit";
import { useNotificationAPI } from "../../../generic/NotificationAPI";

const Posts = () => {
  const auth: AuthUserType = useAuthUser()() ?? {};
  const notify = useNotificationAPI();
  const [searchParams] = useSearchParams();
  const useQuery = useQueryHandler();
  const navigate = useNavigate();
  const { auth_decider_html } = useAuthDecider();
  const { post_based_loader } = useLoader();

  const { data, isLoading, isError } = useQuery({
    queryURL: "/user/blog",
    queryKEY: `/blog?search=${searchParams.get("search") ?? ""}`,
    method: "GET",
    params: {
      search: searchParams.get("search") ?? "",
    },
  });

  return (
    <div>
      {auth_decider_html({
        withAuth: (
          <Tooltip title="New Article">
            <PlusCircleOutlined
              onClick={() =>
                auth.permission?.create
                  ? navigate("/blog/create-blog")
                  : notify("not_premium")
              }
              className="cursor-pointer text-[30px]"
            />
          </Tooltip>
        ),
      })}

      <div className="mt-[30px] w-full grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
        {isLoading || isError
          ? post_based_loader()
          : data.map((v: BlogCardType) => <Blog key={v._id} {...v} />)}
      </div>
    </div>
  );
};

export default Posts;
