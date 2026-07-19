import { motion } from "framer-motion";
import { useState } from "react";
import reservation from "../assets/reservation.jpg"

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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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

    const whatsappNumber = "919810461137";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="reservation"
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
    >
      {/* Background */}

      <div
  className="absolute inset-0 bg-cover bg-center bg-fixed"
  style={{ backgroundImage: `url(${reservation})` }}
>       </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-[#D4AF37] backdrop-blur-md">
            Reservation
          </span>

          <h2
            className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Reserve Your
            <span className="block text-[#D4AF37]">
              Perfect Evening
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
            Book your table today and enjoy an unforgettable
            fine dining experience with exceptional cuisine,
            elegant ambience and warm hospitality.
          </p>
        </motion.div>

        {/* Form */}

        <motion.form
          onSubmit={handleReservation}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-5xl rounded-[32px] border border-white/10 bg-[#111111]/80 p-6 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.35)] sm:p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* Name */}

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              className="h-16 rounded-2xl border border-white/10 bg-[#1D1D1D] px-6 text-lg outline-none transition focus:border-[#D4AF37]"
            />

            {/* Email */}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="h-16 rounded-2xl border border-white/10 bg-[#1D1D1D] px-6 text-lg outline-none transition focus:border-[#D4AF37]"
            />

            {/* Date */}

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="h-16 rounded-2xl border border-white/10 bg-[#1D1D1D] px-6 outline-none transition focus:border-[#D4AF37]"
            />

            {/* Time */}

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="h-16 rounded-2xl border border-white/10 bg-[#1D1D1D] px-6 outline-none transition focus:border-[#D4AF37]"
            />

            {/* Guests */}

            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="h-16 rounded-2xl border border-white/10 bg-[#1D1D1D] px-6 outline-none transition focus:border-[#D4AF37]"
            >
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5 Guests</option>
              <option>6+ Guests</option>
            </select>

            {/* Phone */}

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              className="h-16 rounded-2xl border border-white/10 bg-[#1D1D1D] px-6 text-lg outline-none transition focus:border-[#D4AF37]"
            />
                      </div>

          {/* Special Request */}

          <textarea
            rows={6}
            name="request"
            value={formData.request}
            onChange={handleChange}
            placeholder="Special Requests (Optional)"
            className="mt-6 w-full rounded-2xl border border-white/10 bg-[#1D1D1D] p-6 text-lg outline-none transition focus:border-[#D4AF37] resize-none"
          />

          {/* Bottom Row */}

          <div className="mt-8 flex flex-col items-center justify-between gap-6 lg:flex-row">

            <div className="text-center lg:text-left">
              <p className="text-lg font-semibold text-white">
                Reserve instantly via WhatsApp
              </p>

              <p className="mt-1 text-sm text-gray-400">
                We usually confirm reservations within a few minutes.
              </p>
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center rounded-full bg-[#D4AF37] px-10 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] lg:w-auto"
            >
              Reserve via WhatsApp

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5 transition group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

          </div>

        </motion.form>

      </div>
    </section>
  );
};

export default Reservation;