import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section className="py-20 px-5">
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
