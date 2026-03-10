import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useRef } from "react";

const testimonials = [
  {
    quote: "The most transcendent caviar I have tasted in thirty years of cooking. Each pearl tells the story of its origin.",
    chef: "Chef Thomas Keller",
    restaurant: "The French Laundry",
  },
  {
    quote: "Caspian's Beluga is the gold standard. It is what we measure every other caviar against in our kitchen.",
    chef: "Chef René Redzepi",
    restaurant: "Noma",
  },
  {
    quote: "Unmatched purity and depth. This caviar does not need accompaniment — it is the entire experience.",
    chef: "Chef Massimo Bottura",
    restaurant: "Osteria Francescana",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4"
        >
          Voices
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="font-display text-3xl md:text-5xl font-light text-pearl mb-16"
        >
          From the World's Finest Kitchens
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {testimonials.map((t, i) => (
            <motion.blockquote key={t.chef} variants={fadeUp} custom={i}>
              <p className="font-display text-lg italic text-pearl leading-relaxed">
                "{t.quote}"
              </p>
              <footer className="mt-8">
                <p className="font-body text-sm text-pearl">{t.chef}</p>
                <p className="font-body text-xs text-gold tracking-widest mt-1">{t.restaurant}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
