import type { FC } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Authorization from "../../components/Authorization";

const Home: FC = () => {
  return (
    <div className="w-4/5 m-auto max-sm:w-full">
      <Navbar />
      <Hero />
      <Authorization />
    </div>
  );
};

export default Home;
