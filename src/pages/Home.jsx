import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>PAYIVVA Technologies | Grow Your Business Online with Experts</title>
        <meta
          name="description"
          content="PAYIVVA Technologies helps businesses scale digitally using innovative marketing and technology solutions — delivering measurable, compounding results."
        />
        <meta
          name="keywords"
          content="PAYIVVA Technologies, web development, digital marketing, SEO, ROI focused marketing"
        />
      </Helmet>
      <Hero />
    </div>
  );
};

export default Home;
