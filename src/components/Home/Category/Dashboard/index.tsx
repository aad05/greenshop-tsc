import type { FC } from "react";

const category: any = [
  { title: "House Plants", count: 33 },
  {
    title: "Potter Pants",
    count: 16,
  },
  {
    title: "Seeds",
    count: 20,
  },
];

const Dashboard: FC = () => {
  return (
    <div className="w-[310px] bg-[#F5F5F580] p-[15px]">
      <h3 className="font-bold">Categories</h3>
      <div className="flex flex-col gap-3 mt-[10px]">
        {category.map(({ title, count }: { title: string; count: number }) => (
          <div className="flex w-full justify-between font-normal text-base cursor-pointer hover:text-[#46A358] transition-colors">
            <h3>{title}</h3>
            <p>({count})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
