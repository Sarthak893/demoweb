import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const phone = "919810461137";

  return (
    <a
      href={`https://wa.me/${phone}?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20restaurant.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-2xl hover:scale-110 transition-all duration-300">
        <FaWhatsapp size={34} className="text-white" />

        <span className="absolute right-20 whitespace-nowrap bg-[#111111] text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
          Chat with us 👋
        </span>
      </div>
    </a>
  );
};

export default WhatsApp;