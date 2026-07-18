import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

const testimonials = [
  {
    image: user1,
    name: "Emily Watson",
    role: "Food Blogger",
    review:
      "An unforgettable dining experience. Every dish was beautifully presented and packed with flavour.",
  },
  {
    image: user2,
    name: "James Miller",
    role: "Business Executive",
    review:
      "The ambience, service and cuisine were exceptional. Definitely one of the finest restaurants I've visited.",
  },
  {
    image: user3,
    name: "Sophia Brown",
    role: "Travel Enthusiast",
    review:
      "Luxury, comfort and incredible food all in one place. Highly recommended for special occasions.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#0B0B0B] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[6px] text-[#D4AF37]">
            Testimonials
          </p>

          <h2
            className="mt-4 text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our
            <span className="block text-[#D4AF37]">
              Guests Say
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Every review reflects our passion for exceptional food,
            warm hospitality and memorable experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-[#171717] p-8 hover:border-[#D4AF37] transition duration-300"
            >
              <div className="flex gap-1 text-[#D4AF37]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="mt-6 text-gray-300 leading-8">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4 mt-8">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full object-cover border-2 border-[#D4AF37]"
                />

                <div>
                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {item.role}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;