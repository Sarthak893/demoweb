import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Animated Background */}
      <motion.img
        src={hero}
        alt="Restaurant"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex pt-30 mb-10 min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >

            {/* Premium Badge */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 backdrop-blur-sm"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-[#D4AF37]"></span>

              <span className="text-xs font-semibold uppercase tracking-[5px] text-[#D4AF37]">
                Fine Dining Experience
              </span>
            </motion.div>

            {/* Heading */}

            <h1
              className="mt-8 font-bold leading-[1] text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Where Every
              </span>

              <span className="block mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Meal Becomes
              </span>

              <span className="mt-2 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#D4AF37]">
                Art.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              Discover handcrafted cuisine, elegant interiors,
              premium ingredients and unforgettable dining moments
              prepared by award-winning chefs.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="#reservation"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] sm:w-auto"
              >
                Book a Table

                <FiArrowRight className="transition group-hover:translate-x-1" />
              </a>

              <a
                href="#menu"
                className="flex w-full items-center justify-center rounded-full border border-[#D4AF37] px-8 py-4 font-semibold text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black sm:w-auto"
              >
                View Menu
              </a>

            </div>

            {/* Rating */}

            <div className="mt-12 inline-flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">

              <div className="flex gap-1 text-[#D4AF37] text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div>
                <p className="font-semibold text-white">
                  Rated 4.9 / 5
                </p>

                <p className="text-sm text-gray-400">
                  Trusted by 2,500+ Happy Guests
                </p>
              </div>

            </div>

          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 hidden md:flex"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border-2 border-[#D4AF37]">
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
            }}
            className="mt-2 h-2 w-2 rounded-full bg-[#D4AF37]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;