import type { FC } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Authorization from "../../components/Authorization";
import Footer from "../../components/Footer";

const Home: FC = () => {
  return (
    <div className="w-4/5 m-auto max-sm:w-full">
      <Navbar />
      <Hero />
      <Authorization />
      <Footer />
    </div>
  );
};

export default Home;
