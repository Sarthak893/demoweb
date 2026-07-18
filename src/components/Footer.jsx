import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaArrowUp,
} from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="bg-[#080808] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}

          <div>

            <h2
              className="text-5xl font-bold text-[#D4AF37]"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Lumière
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Experience luxury dining with handcrafted
              cuisine, exceptional hospitality and an
              atmosphere designed to create unforgettable
              memories.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition">
                  About
                </a>
              </li>

              <li>
                <a href="#menu" className="hover:text-[#D4AF37] transition">
                  Menu
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition">
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#reservation"
                  className="hover:text-[#D4AF37] transition"
                >
                  Reservation
                </a>
              </li>

            </ul>

          </div>

          {/* Hours */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Opening Hours
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>11 AM - 11 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10 AM - 12 AM</span>
              </div>

              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10 AM - 10 PM</span>
              </div>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>📍 21 Park Avenue, New York</p>

              <p>📞 +1 (555) 123-4567</p>

              <p>✉ hello@lumiere.com</p>

            </div>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition"
              >
                <FaXTwitter />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-sm">
            © {year} Lumière. All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="w-12 h-12 rounded-full bg-[#D4AF37] text-black flex items-center justify-center hover:scale-110 transition"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;