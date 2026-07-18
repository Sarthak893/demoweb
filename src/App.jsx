import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import About from "./components/About";
import Featured from "./components/Featured";
import Menu from "./components/Menu"
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import WhatsApp from "./components/WhatsApp";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2200);

  return () => clearTimeout(timer);
}, []);
  return (
    <div className="bg-[#0B0B0B] text-white overflow-x-hidden">
  <LoadingScreen loading={loading} />

  {!loading && (
<>
    <ScrollProgress/>
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <Menu />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Footer />
      <WhatsApp />
      </>
  
  )}

    </div>
  );
}

export default App;