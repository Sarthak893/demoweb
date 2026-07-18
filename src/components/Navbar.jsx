import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Menu", id: "menu" },
  { name: "Gallery", id: "gallery" },
  { name: "Reservation", id: "reservation" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 180;

      navLinks.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-black/65 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

          {/* Logo */}

          <a href="#home">
            <h1
              className="text-3xl font-bold tracking-wide text-[#D4AF37] transition hover:scale-105"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Lumière
            </h1>
          </a>

          {/* Desktop Menu */}

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id} className="relative">

                <a
                  href={`#${link.id}`}
                  className={`font-medium transition duration-300 ${
                    active === link.id
                      ? "text-[#D4AF37]"
                      : "text-white hover:text-[#D4AF37]"
                  }`}
                >
                  {link.name}
                </a>

                {active === link.id && (
                  <motion.div
                    layoutId="underline"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#D4AF37]"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Icon */}

          <div className="flex items-center gap-4">

            <a
              href="#reservation"
              className="hidden rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] lg:block"
            >
              Book Table
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37] lg:hidden"
            >
              {mobileOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.35 }}
            className="fixed left-0 top-20 z-40 w-full border-b border-white/10 bg-[#0b0b0b]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col px-6 py-6">

              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-4 py-4 text-lg font-medium transition ${
                    active === link.id
                      ? "bg-[#D4AF37]/10 text-[#D4AF37]"
                      : "text-white hover:bg-white/5 hover:text-[#D4AF37]"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#reservation"
                onClick={() => setMobileOpen(false)}
                className="mt-6 rounded-full bg-[#D4AF37] py-4 text-center font-semibold text-black transition hover:scale-[1.02]"
              >
                Book a Table
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;