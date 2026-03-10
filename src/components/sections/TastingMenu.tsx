import { motion, useInView } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import { useRef } from "react";
import caviarTin from "@/assets/caviar-tin.jpg";

const dishes = [
  { name: "Blini Royale", desc: "Traditional buckwheat blini crowned with Imperial Beluga and crème fraîche.", temp: "Served at 4°C" },
  { name: "Tartare d'Huître", desc: "Kumamoto oyster tartare with Osetra pearls and champagne mignonette.", temp: "Served at 2°C" },
  { name: "Pommes Soufflées", desc: "Crisp potato puffs with Sevruga, gold leaf, and chive oil.", temp: "Served at 6°C" },
];

const TastingMenu = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Asymmetrical left column */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-5 lg:mt-24"
          >
            <img
              src={caviarTin}
              alt="Premium caviar tin"
              className="w-full aspect-square object-cover"
            />
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-7">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4"
            >
              Curated experiences
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1}
              className="font-display text-3xl md:text-5xl font-light text-pearl mb-16"
            >
              The Tasting Menu
            </motion.h2>
            <div className="space-y-12">
              {dishes.map((dish, i) => (
                <motion.div
                  key={dish.name}
                  variants={slideInRight}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="border-b border-border pb-10"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-2xl text-pearl">{dish.name}</h3>
                    <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold">{dish.temp}</span>
                  </div>
                  <p className="font-body text-sm text-silver mt-3 leading-relaxed">{dish.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TastingMenu;
