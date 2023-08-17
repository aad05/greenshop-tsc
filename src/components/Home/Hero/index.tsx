import { FC } from "react";
import Card from "./Card";
import { Carousel } from "antd";
import { hero_mock } from "../../../utils";

const Hore: FC = () => {
  return (
    <Carousel autoplay effect="scrollx">
      {hero_mock.map((value) => (
        <Card {...value} />
      ))}
    </Carousel>
  );
};

export default Hore;
