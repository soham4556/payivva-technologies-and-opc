import { Helmet } from "react-helmet-async";
import About from "../components/About";

const AboutPage = () => {
  return (
    <div className="pt-20 animate-fade-in">
      <Helmet>
        <title>About PAYIVVA Technologies | Inspiring Innovations</title>
        <meta
          name="description"
          content="Learn how PAYIVVA Technologies combines innovation and technology to help businesses scale in the digital era."
        />
      </Helmet>
      <About />
    </div>
  );
};

export default AboutPage;
