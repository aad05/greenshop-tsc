import { FC } from "react";
import UnAuthedBar from "./UnAuthedBar";
import { useAuthDecider } from "../../tools/authDecider";
import SearchBar from "./SearchBar";
import Posts from "./Posts";

const Blog: FC = () => {
  const { auth_decider_html } = useAuthDecider();
  return (
    <div className="mb-[40px]">
      {auth_decider_html({
        withoutAuth: <UnAuthedBar />,
        withAuth: <SearchBar />,
      })}
      <Posts />
    </div>
  );
};

export default Blog;
