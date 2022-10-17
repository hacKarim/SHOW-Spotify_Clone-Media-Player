//higher order component to add same functionality to each page

import { motion } from "framer-motion";

const MotionHoc = (Component) => (pageProps) => {
    return (
      <motion.div
      initial={{ x: 300, opacity: 0, width: "100%" }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      >
        <Component {...pageProps}/>
      </motion.div>
    );
};

export default MotionHoc;
