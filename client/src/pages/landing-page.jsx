import Hero from "../components/homepage/hero";
import Service from "../components/homepage/service";
import Contact from "../components/homepage/contact";
import Footer from "../components/homepage/footer";
import Header from "../components/homepage/header";
function Homepage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage;
