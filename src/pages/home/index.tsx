import type { FC } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";

const Home: FC = () => {
  return (
    <div className="w-4/5 m-auto max-sm:w-full">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
