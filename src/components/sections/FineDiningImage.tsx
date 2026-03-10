import { motion, useInView } from "framer-motion";
import { wipeReveal } from "@/lib/animations";
import { useRef } from "react";
import fineDining from "@/assets/fine-dining.jpg";

const FineDiningImage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-12 md:py-20">
      <motion.div
        variants={wipeReveal}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full h-[50vh] md:h-[70vh]"
      >
        <img
          src={fineDining}
          alt="Fine dining caviar service"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default FineDiningImage;
