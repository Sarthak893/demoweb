import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";

const dishes = [
  {
    image: dish1,
    name: "Wagyu Steak",
    price: "$48",
    category: "Signature",
  },
  {
    image: dish2,
    name: "Truffle Pasta",
    price: "$32",
    category: "Chef's Choice",
  },
  {
    image: dish3,
    name: "Chocolate Lava Cake",
    price: "$18",
    category: "Dessert",
  },
];

const Featured = () => {
  return (
    <section
      id="featured"
      className="bg-[#111111] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm">
            Featured Dishes
          </p>

          <h2
            className="mt-4 text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Crafted to
            <span className="block text-[#D4AF37]">
              Impress Every Guest
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-8">
            Our signature creations combine premium ingredients,
            exceptional craftsmanship and unforgettable flavours.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">

          {dishes.map((dish, index) => (

            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[30px] bg-[#1A1A1A] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-7">

                <span className="inline-block rounded-full bg-[#D4AF37]/20 px-4 py-1 text-sm text-[#D4AF37]">
                  {dish.category}
                </span>

                <h3 className="mt-5 text-3xl font-semibold">
                  {dish.name}
                </h3>

                <div className="flex items-center gap-1 mt-4 text-[#D4AF37]">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                  <span className="ml-2 text-gray-400 text-sm">
                    (245 Reviews)
                  </span>

                </div>

                <div className="flex justify-between items-center mt-8">

                  <h4 className="text-3xl font-bold text-[#D4AF37]">
                    {dish.price}
                  </h4>

                  <button className="flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 font-semibold text-black hover:scale-105 transition">

                    Order

                    <FiArrowRight />

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Featured;