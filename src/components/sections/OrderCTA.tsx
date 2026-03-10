import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { useRef } from "react";

const OrderCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section ref={ref} className="section-padding text-center" id="order">
        <div className="max-w-2xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4"
          >
            By Invitation
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            className="font-display text-4xl md:text-6xl font-light text-pearl mb-8"
          >
            Reserve Your Selection
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            className="font-body text-sm text-silver leading-relaxed mb-12"
          >
            Each order is personally curated by our sommelier team. Limited
            allocations ensure every tin reaches you at the peak of perfection.
          </motion.p>
          <motion.a
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            href="#"
            className="inline-block font-body text-xs tracking-[0.3em] uppercase px-12 py-4 border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-700"
          >
            Request Access
          </motion.a>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-lg tracking-[0.3em] text-pearl uppercase">Caspian</span>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a key={item} href="#" className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-pearl transition-colors duration-500">
                {item}
              </a>
            ))}
          </div>
          <p className="font-body text-[10px] text-muted-foreground tracking-widest">
            © 2026 Caspian. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default OrderCTA;
