import { Card } from "antd";
import { EyeOutlined, CommentOutlined, HeartOutlined } from "@ant-design/icons";
import { FC } from "react";
import { BlogCardType } from "../../../../@types";
import { useNavigate } from "react-router-dom";

const Blog: FC<BlogCardType> = ({
  title,
  short_description,
  views,
  reaction_length,
  created_by,
  _id,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      actions={[
        <div>
          <EyeOutlined /> {views}
        </div>,
        <div>
          <CommentOutlined /> {0}
        </div>,
        <div>
          <HeartOutlined /> {reaction_length}
        </div>,
      ]}
    >
      <h1
        onClick={() => navigate(`/blog/${created_by}/${_id}`)}
        className="text-[18px] text-bold cursor-pointer hover:underline"
      >
        {title}
      </h1>
      <p className="mt-[10px] text-[12px]">{short_description}</p>
    </Card>
  );
};

export default Blog;
