import { FC } from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Authorization from "../Authorization";
import Footer from "../Footer";
import Category from "./Category";

const Home: FC = () => {
  return (
    <div className="w-4/5 m-auto max-sm:w-full">
      <Navbar />
      <Hero />
      <Category />
      <Authorization />
      <Footer />
    </div>
  );
};

export default Home;
