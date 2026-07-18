import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] bg-[#D4AF37] origin-left z-[9999]"
      style={{
        scaleX: scrollYProgress,
        width: "100%",
      }}
    />
  );
};

export default ScrollProgress;