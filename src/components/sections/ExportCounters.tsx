import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useRef, useEffect, useState } from "react";

const Counter = ({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return controls.stop;
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl md:text-7xl font-light text-pearl">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="font-body text-xs tracking-[0.3em] uppercase text-silver mt-4">{label}</p>
    </div>
  );
};

const ExportCounters = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12"
      >
        <motion.div variants={fadeUp}><Counter target={12500} label="Tins Exported" suffix="+" /></motion.div>
        <motion.div variants={fadeUp} custom={1}><Counter target={43} label="Countries" /></motion.div>
        <motion.div variants={fadeUp} custom={2}><Counter target={187} label="Michelin Restaurants" /></motion.div>
        <motion.div variants={fadeUp} custom={3}><Counter target={37} label="Years of Heritage" /></motion.div>
      </motion.div>
    </section>
  );
};

export default ExportCounters;
