import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menu = {
  Starters: [
    {
      title: "Bruschetta",
      price: "$14",
      desc: "Grilled artisan bread with tomatoes & basil",
    },
    {
      title: "Caesar Salad",
      price: "$16",
      desc: "Fresh romaine, parmesan & garlic croutons",
    },
  ],

  "Main Course": [
    {
      title: "Wagyu Steak",
      price: "$48",
      desc: "Premium Japanese Wagyu with seasonal vegetables",
    },
    {
      title: "Truffle Pasta",
      price: "$32",
      desc: "Fresh pasta tossed with black truffle cream sauce",
    },
  ],

  Desserts: [
    {
      title: "Chocolate Lava Cake",
      price: "$18",
      desc: "Warm chocolate cake with vanilla ice cream",
    },
    {
      title: "Classic Tiramisu",
      price: "$15",
      desc: "Italian dessert with mascarpone & espresso",
    },
  ],

  Drinks: [
    {
      title: "Fresh Mojito",
      price: "$10",
      desc: "Mint, lime and sparkling soda",
    },
    {
      title: "Signature Coffee",
      price: "$8",
      desc: "Freshly brewed premium coffee beans",
    },
  ],
};

const categories = Object.keys(menu);

const Menu = () => {
  const [active, setActive] = useState("Main Course");

  return (
    <section
      id="menu"
      className="bg-[#0B0B0B] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#D4AF37]">
            Our Menu
          </p>

          <h2
            className="text-5xl lg:text-6xl font-bold mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Discover
            <span className="block text-[#D4AF37]">
              Signature Flavours
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Every dish is prepared with premium ingredients,
            attention to detail and exceptional craftsmanship.
          </p>

        </div>

        {/* Tabs */}

        <div className="flex flex-wrap justify-center gap-4 mt-16">

          {categories.map((cat) => (

            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-7 py-3 rounded-full transition duration-300
              ${
                active === cat
                  ? "bg-[#D4AF37] text-black"
                  : "bg-[#1A1A1A] hover:bg-[#D4AF37] hover:text-black"
              }`}
            >
              {cat}
            </button>

          ))}

        </div>

        {/* Items */}

        <AnimatePresence mode="wait">

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: .4 }}
            className="grid md:grid-cols-2 gap-8 mt-16"
          >

            {menu[active].map((item) => (

              <div
                key={item.title}
                className="border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37] transition duration-300"
              >

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <span className="text-[#D4AF37] text-2xl font-bold">
                    {item.price}
                  </span>

                </div>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.desc}
                </p>

              </div>

            ))}

          </motion.div>

        </AnimatePresence>

      </div>
    </section>
  );
};

export default Menu;