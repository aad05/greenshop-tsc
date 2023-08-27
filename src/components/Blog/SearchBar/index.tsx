import { Input } from "antd";
import { FC } from "react";

const SearchBar: FC = () => {
  return (
    <div className="flex flex-col items-center mt-[30px]">
      <h3 className="font-bold text-[30px]">My Feed</h3>
      <Input.Search
        size="large"
        placeholder="Search..."
        className="w-[60%] mt-[20px]"
      />
    </div>
  );
};

export default SearchBar;
