import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";

const restaurants = [
  { name: "Noma", location: "Copenhagen", stars: 3 },
  { name: "Eleven Madison Park", location: "New York", stars: 3 },
  { name: "The French Laundry", location: "Napa Valley", stars: 3 },
  { name: "Osteria Francescana", location: "Modena", stars: 3 },
  { name: "Alchemist", location: "Copenhagen", stars: 2 },
];

const MichelinAdopters = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4"
        >
          Trusted by the finest
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="font-display text-3xl md:text-5xl font-light text-pearl mb-16"
        >
          Michelin Star Adopters
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-5 gap-8"
        >
          {restaurants.map((r, i) => (
            <motion.div key={r.name} variants={fadeUp} custom={i} className="text-center">
              <p className="font-display text-xl text-pearl">{r.name}</p>
              <p className="font-body text-xs text-silver tracking-widest mt-1">{r.location}</p>
              <div className="flex justify-center gap-1 mt-3">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <span key={j} className="text-gold text-xs">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MichelinAdopters;
