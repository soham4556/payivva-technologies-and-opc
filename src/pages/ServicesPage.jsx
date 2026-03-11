import { Helmet } from "react-helmet-async";
import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <div className="pt-20 animate-fade-in">
      <Helmet>
        <title>Our Services | PAYIVVA Technologies Digital Solutions</title>
        <meta
          name="description"
          content="Explore our wide range of services including Web Development, SEO, Social Media Marketing, and Lead Generation."
        />
      </Helmet>
      <Services />
    </div>
  );
};

export default ServicesPage;
