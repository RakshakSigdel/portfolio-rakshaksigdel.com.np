import { motion } from "framer-motion";

// This component provides the animation
const WithFadeInAnimation = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, delay }}
    >
      {children}
    </motion.div>
  );
};

export default WithFadeInAnimation;
