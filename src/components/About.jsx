import { motion } from "framer-motion";
import { FiArrowRight, FiAward, FiCoffee, FiHeart } from "react-icons/fi";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <section 
      id="about"
      className="bg-[#0B0B0B] py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={about}
              alt="Restaurant"
              className="rounded-[30px] h-[650px] w-full object-cover"
            />

            {/* Floating Badge */}

            <div className="absolute bottom-8 left-8 bg-[#D4AF37] rounded-3xl px-8 py-6 shadow-2xl">
              <h2 className="text-5xl font-bold text-black">20+</h2>
              <p className="text-black font-semibold">
                Years of Excellence
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm mb-4">
              About Us
            </p>

            <h2
              className="text-5xl lg:text-6xl font-bold leading-tight text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Crafted With
              <span className="block text-[#D4AF37]">
                Passion & Elegance
              </span>
            </h2>

            <p className="mt-8 text-gray-400 leading-8 text-lg">
              Every dish we serve is a celebration of flavor,
              artistry and hospitality. Our chefs carefully
              select the finest ingredients to create an
              unforgettable dining experience in a luxurious
              atmosphere.
            </p>

            {/* Features */}

            <div className="mt-12 space-y-8">

              <div className="flex gap-5">
                <div className="h-14 w-14 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center">
                  <FiAward
                    className="text-[#D4AF37]"
                    size={26}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Award Winning Chefs
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Our internationally trained chefs create
                    dishes that combine innovation with
                    timeless culinary traditions.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="h-14 w-14 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center">
                  <FiCoffee
                    className="text-[#D4AF37]"
                    size={26}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Premium Ingredients
                  </h3>

                  <p className="text-gray-400 mt-2">
                    We source fresh, seasonal and premium
                    ingredients to ensure every bite delivers
                    exceptional quality.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="h-14 w-14 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center">
                  <FiHeart
                    className="text-[#D4AF37]"
                    size={26}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Memorable Experiences
                  </h3>

                  <p className="text-gray-400 mt-2">
                    From intimate dinners to family
                    celebrations, we create moments that stay
                    with you forever.
                  </p>
                </div>
              </div>

            </div>

            <button className="mt-12 bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:scale-105 transition">
              Discover More
              <FiArrowRight />
            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;