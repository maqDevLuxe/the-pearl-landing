import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useRef } from "react";

const pairings = [
  { drink: "Dom Pérignon Vintage", type: "Champagne", note: "The effervescence lifts the brininess, creating a symphony of sea and vineyard." },
  { drink: "Belvedere Single Estate", type: "Vodka", note: "Clean, neutral spirit that lets every nuance of the caviar shine through." },
  { drink: "Puligny-Montrachet", type: "White Burgundy", note: "Mineral-driven Chardonnay mirrors the oceanic depth of Osetra." },
];

const ElitePairings = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding" id="pairings">
      <div className="max-w-7xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4"
        >
          The ritual
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="font-display text-3xl md:text-5xl font-light text-pearl mb-16"
        >
          Elite Pairings
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-0"
        >
          {pairings.map((p, i) => (
            <motion.div
              key={p.drink}
              variants={fadeUp}
              custom={i}
              className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-16 py-10 border-b border-border"
            >
              <div className="md:w-1/4">
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">{p.type}</p>
              </div>
              <div className="md:w-1/3">
                <h3 className="font-display text-2xl text-pearl group-hover:text-gradient-gold transition-all duration-500">
                  {p.drink}
                </h3>
              </div>
              <div className="md:w-5/12">
                <p className="font-body text-sm text-silver leading-relaxed">{p.note}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ElitePairings;
