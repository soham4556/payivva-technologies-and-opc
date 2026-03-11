import { Helmet } from "react-helmet-async";
import Careers from "../components/Careers";

const CareersPage = () => {
  return (
    <div className="pt-20 animate-fade-in">
      <Helmet>
        <title>Careers | Join PAYIVVA Technologies Team</title>
        <meta
          name="description"
          content="Join a team of innovators and creators. Explore career opportunities at PAYIVVA Technologies and help us shape the future of digital marketing."
        />
      </Helmet>
      <Careers />
    </div>
  );
};

export default CareersPage;
