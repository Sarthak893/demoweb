import { motion } from "framer-motion";
import { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2 Guests",
    phone: "",
    request: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReservation = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const message = `🍽️ *New Table Reservation*

👤 Name: ${formData.name}

📧 Email: ${formData.email}

📱 Phone: ${formData.phone}

📅 Date: ${formData.date}

🕒 Time: ${formData.time}

👥 Guests: ${formData.guests}

📝 Special Request:
${formData.request}`;

    // Replace this number with restaurant WhatsApp number
    const whatsappNumber = "919810461137";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="reservation" className="relative py-28">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/reservation.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-[#D4AF37]">
            Reservation
          </p>

          <h2
            className="text-5xl lg:text-6xl font-bold mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Reserve Your
            <span className="block text-[#D4AF37]">
              Perfect Evening
            </span>
          </h2>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Book your table today and enjoy an unforgettable fine dining
            experience with exceptional cuisine and warm hospitality.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleReservation}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-[#111111]/80 backdrop-blur-lg border border-white/10 rounded-[32px] p-10"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-[#1D1D1D] rounded-xl p-4 outline-none border border-white/10 focus:border-[#D4AF37]"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="bg-[#1D1D1D] rounded-xl p-4 outline-none border border-white/10 focus:border-[#D4AF37]"
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="bg-[#1D1D1D] rounded-xl p-4 outline-none border border-white/10 focus:border-[#D4AF37]"
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="bg-[#1D1D1D] rounded-xl p-4 outline-none border border-white/10 focus:border-[#D4AF37]"
            />

            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="bg-[#1D1D1D] rounded-xl p-4 outline-none border border-white/10 focus:border-[#D4AF37]"
            >
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
              <option>6+ Guests</option>
            </select>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="bg-[#1D1D1D] rounded-xl p-4 outline-none border border-white/10 focus:border-[#D4AF37]"
            />
          </div>

          <textarea
            rows="5"
            name="request"
            value={formData.request}
            onChange={handleChange}
            placeholder="Special Request"
            className="w-full mt-8 bg-[#1D1D1D] rounded-xl p-4 outline-none border border-white/10 focus:border-[#D4AF37]"
          />

          <button
            type="submit"
            className="mt-8 bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Reserve via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Reservation;