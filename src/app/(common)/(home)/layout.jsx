import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
