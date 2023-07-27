import { useQuery } from "react-query";
import { useAxios } from "../useAxios";

interface QueryHandlerProp {
  queryKEY: string;
  queryURL: string;
  method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
  body?: object;
}

const useQueryHandler = () => {
  const axios = useAxios();
  const QueryHandler = (props: QueryHandlerProp) => {
    const { queryKEY, method, queryURL, body } = props;
    return useQuery(queryKEY, () => axios({ url: queryURL, method, body }), {
      refetchOnWindowFocus: false,
    });
  };
  return QueryHandler;
};
export default useQueryHandler;
