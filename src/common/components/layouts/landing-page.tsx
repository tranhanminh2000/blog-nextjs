import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

const LandingPage = ({ children } : { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LandingPage;