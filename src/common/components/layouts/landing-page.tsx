import Footer from "../footer/footer";
import Header from "../header/header";
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