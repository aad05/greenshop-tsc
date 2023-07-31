import { FC } from "react";
import Hero from "./Hero";
import Authorization from "../Authorization";
import Category from "./Category";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Authorization />
    </div>
  );
};

export default Home;
