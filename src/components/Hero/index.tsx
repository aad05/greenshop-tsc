import { FC } from "react";
import Card from "./Card";
import { Carousel } from "antd";

const Hore: FC = () => {
  return (
    <Carousel autoplay effect="scrollx">
      <Card title="LET'S LIVE IN A BETTER" buttonText="LET'S START" />
      <Card title="LET'S OBSERVE A BETTER " buttonText="GET CREDITS" />
      <Card />
    </Carousel>
  );
};

export default Hore;
