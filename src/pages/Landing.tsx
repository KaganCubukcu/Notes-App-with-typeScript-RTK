import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Testimonials from "../components/Testimonials/Testimonials";

const Landing: React.FC = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        padding: "20px",
        width: 1300,
      }}
    >
      <Header />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};
export default Landing;
