import { FC } from "react";
import Header from "./Header";
import Body from "./Body";
import useQueryHandler from "../../hooks/useQuery";
import { useParams } from "react-router-dom";

const User: FC = () => {
  const { _id } = useParams();
  const useQuery = useQueryHandler();

  const { isLoading, isError } = useQuery({
    queryURL: `/user/by_id/${_id}`,
    queryKEY: `/user-${_id}`,
    method: "GET",
  });

  return (
    <div>
      <Header isLoading={isLoading} isError={isError} />
      <Body isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default User;
