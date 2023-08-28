import { Input, InputRef } from "antd";
import { FC, KeyboardEvent, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar: FC = () => {
  const ref = useRef<InputRef>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearch = (e?: KeyboardEvent<HTMLInputElement>) => {
    if (e?.key === "Enter" || e?.keyCode === 13)
      setSearchParams({ search: String(ref.current?.input?.value) ?? "" });
  };

  return (
    <div className="flex flex-col items-center mt-[30px]">
      <h3 className="font-bold text-[30px]">My Feed</h3>
      <Input.Search
        ref={ref}
        defaultValue={searchParams.get("search") ?? ""}
        size="large"
        placeholder="Search..."
        className="w-[60%] mt-[20px]"
        onSearch={() => {
          if (!ref.current?.input?.value)
            setSearchParams({
              search: String(ref.current?.input?.value) ?? "",
            });
        }}
        onPressEnter={onSearch}
      />
    </div>
  );
};

export default SearchBar;
