import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div className="pt-20 animate-fade-in">
      <Helmet>
        <title>Contact Us | Get a Free Proposal | PAYIVVA Technologies</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact PAYIVVA Technologies for a tailored digital marketing and technology proposal."
        />
      </Helmet>
      <Contact />
    </div>
  );
};

export default ContactPage;
