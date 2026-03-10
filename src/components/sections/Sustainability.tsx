import { motion, useInView } from "framer-motion";
import { fadeUp, wipeReveal } from "@/lib/animations";
import { useRef } from "react";
import aquaculture from "@/assets/aquaculture.jpg";

const Sustainability = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4"
          >
            Responsibility
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="font-display text-3xl md:text-5xl font-light text-pearl mb-8"
          >
            Sustainable Aquaculture
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="font-body text-sm text-silver leading-relaxed mb-6"
          >
            Our commitment extends beyond the tin. Every sturgeon is raised in
            state-of-the-art recirculating aquaculture systems that maintain
            pristine water quality while minimizing environmental impact.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            className="font-body text-sm text-silver leading-relaxed"
          >
            We partner with marine biologists to ensure genetic diversity and
            have restored over 2,000 sturgeons to the wild since 2015.
          </motion.p>
        </div>
        <motion.div
          variants={wipeReveal}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <img
            src={aquaculture}
            alt="Sustainable sturgeon aquaculture facility"
            className="w-full aspect-[4/3] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Sustainability;
