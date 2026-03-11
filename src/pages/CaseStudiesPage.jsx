import { Helmet } from "react-helmet-async";
import CaseStudies from "../components/CaseStudies";

const CaseStudiesPage = () => {
  return (
    <div className="pt-20 animate-fade-in">
      <Helmet>
        <title>Case Studies | Our Success Stories | PAYIVVA Technologies</title>
        <meta
          name="description"
          content="See how we've helped businesses achieve extraordinary growth through our digital marketing and technology solutions."
        />
      </Helmet>
      <CaseStudies />
    </div>
  );
};

export default CaseStudiesPage;
