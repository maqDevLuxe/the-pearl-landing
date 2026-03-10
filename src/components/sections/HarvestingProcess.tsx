import { motion, useInView } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Selection", desc: "Only mature sturgeons aged 15-20 years are chosen for harvest." },
  { num: "02", title: "Extraction", desc: "Roe is delicately hand-extracted within minutes of harvest." },
  { num: "03", title: "Salt Curing", desc: "Malossol technique — less than 3% salt for pure flavor." },
  { num: "04", title: "Tin Sealing", desc: "Vacuum-sealed in artisan tins and aged to peak perfection." },
];

const HarvestingProcess = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding" id="process">
      <div className="max-w-7xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4"
        >
          Craftsmanship
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="font-display text-3xl md:text-5xl font-light text-pearl mb-20"
        >
          The Harvesting Process
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={i % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative"
            >
              <span className="font-display text-6xl font-light text-muted-foreground/20">{step.num}</span>
              <h3 className="font-display text-xl text-pearl mt-2">{step.title}</h3>
              <p className="font-body text-sm text-silver mt-3 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HarvestingProcess;
