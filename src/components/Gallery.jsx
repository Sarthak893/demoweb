import { motion } from "framer-motion";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

const images = [
  {
    img: gallery1,
    title: "Luxury Dining",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    img: gallery2,
    title: "Chef's Special",
  },
  {
    img: gallery3,
    title: "Premium Steak",
  },
  {
    img: gallery4,
    title: "Fresh Desserts",
  },
  {
    img: gallery5,
    title: "Restaurant Interior",
  },
  {
    img: gallery6,
    title: "Signature Drinks",
    span: "md:col-span-2",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-[#111111] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[6px] text-[#D4AF37]">
            Gallery
          </p>

          <h2
            className="mt-4 text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Moments Worth
            <span className="block text-[#D4AF37]">
              Remembering
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-8">
            Take a glimpse into our elegant atmosphere, handcrafted cuisine,
            and unforgettable dining experience.
          </p>
        </motion.div>

        {/* Gallery Grid */}

        <div className="grid md:grid-cols-3 auto-rows-[280px] gap-6 mt-20">

          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-3xl group ${
                item.span || ""
              }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6">

                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;