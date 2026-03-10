import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useRef } from "react";

const grades = [
  {
    name: "Beluga",
    species: "Huso Huso",
    size: "3.0–3.5mm",
    color: "Silver-Grey",
    flavor: "Rich, buttery, complex",
    price: "$4,200 / 100g",
  },
  {
    name: "Osetra",
    species: "Acipenser Gueldenstaedtii",
    size: "2.5–3.0mm",
    color: "Golden-Brown",
    flavor: "Nutty, briny, elegant",
    price: "$2,800 / 100g",
  },
  {
    name: "Sevruga",
    species: "Acipenser Stellatus",
    size: "1.5–2.0mm",
    color: "Dark Grey",
    flavor: "Intense, clean, mineral",
    price: "$1,600 / 100g",
  },
];

const GradingMetrics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding" id="collection">
      <div className="max-w-7xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4"
        >
          Classification
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="font-display text-3xl md:text-5xl font-light text-pearl mb-16"
        >
          Grading Metrics
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
        >
          {grades.map((g, i) => (
            <motion.div
              key={g.name}
              variants={fadeUp}
              custom={i}
              className="group relative p-8 md:p-10 border-l border-border first:border-l-0 hover:bg-secondary/30 transition-all duration-700"
            >
              <h3 className="font-display text-3xl text-pearl">{g.name}</h3>
              <p className="font-body text-xs text-gold tracking-widest mt-1 italic">{g.species}</p>
              <div className="mt-8 space-y-4">
                {[
                  ["Pearl Size", g.size],
                  ["Color", g.color],
                  ["Profile", g.flavor],
                ].map(([label, val]) => (
                  <div key={label}>
                    <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{label}</p>
                    <p className="font-body text-sm text-pearl mt-0.5">{val}</p>
                  </div>
                ))}
              </div>
              {/* Price reveal on hover with glassmorphism */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 glass-card">
                <div className="text-center">
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">Starting from</p>
                  <p className="font-display text-3xl text-pearl mt-2">{g.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GradingMetrics;
