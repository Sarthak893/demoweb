import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0B0B]"
        >
          <div className="text-center">

            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="text-6xl md:text-8xl font-bold text-[#D4AF37]"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Lumière
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 180 }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              className="h-1 bg-[#D4AF37] mx-auto mt-8 rounded-full"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
              }}
              className="mt-6 text-gray-400 tracking-[6px] uppercase"
            >
              Fine Dining Experience
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;