import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Background Image */}

      <img
        src={hero}
        alt="Restaurant"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/65"></div>

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30"></div>

      {/* Content */}

      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="max-w-3xl"
          >

            <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm mb-6">
              Fine Dining Experience
            </p>

            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Where Every
              <br />
              Meal Becomes
              <span className="block text-[#D4AF37]">
                Art.
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">
              Discover handcrafted cuisine, elegant interiors,
              premium ingredients and unforgettable moments
              prepared by award-winning chefs.
            </p>

           <div className="flex flex-wrap gap-5 mt-10">
                <a
                href="#reservation"
                className="bg-[#D4AF37] flex items-center gap-2 font-bold text-black px-8 py-4 rounded-full hover:scale-105 transition duration-300"
                >
                Book a Table
                <FiArrowRight />
                </a>
    
                <a
                href="#menu"
                className="border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-semibold hover:bg-[#D4AF37] hover:text-black transition duration-300"
                >
                View Menu
                </a>
            </div>
            <div className="flex items-center gap-3 mt-12">

              <div className="flex gap-1 text-[#D4AF37]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-300">
                4.9 Rating • 2500+ Happy Guests
              </p>

            </div>

          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-7 h-12 rounded-full border-2 border-[#D4AF37] flex justify-center">
          <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2"></div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;