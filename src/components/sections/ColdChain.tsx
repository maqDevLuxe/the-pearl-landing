import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useRef } from "react";
import { Thermometer, Truck, ShieldCheck, Clock } from "lucide-react";

const features = [
  { icon: Thermometer, title: "−2°C Constant", desc: "Precision temperature maintained from harvest to table." },
  { icon: Truck, title: "48hr Global", desc: "White-glove delivery to 40+ countries within 48 hours." },
  { icon: ShieldCheck, title: "Blockchain Verified", desc: "Full provenance tracking from sea to tin." },
  { icon: Clock, title: "Real-Time Monitoring", desc: "IoT sensors ensure zero chain-of-custody breaks." },
];

const ColdChain = () => {
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
          Technology
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="font-display text-3xl md:text-5xl font-light text-pearl mb-16"
        >
          Cold-Chain Delivery
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {features.map((f, i) => (
            <motion.div key={f.title} variants={fadeUp} custom={i} className="glass-card p-8">
              <f.icon className="w-6 h-6 text-gold mb-6" strokeWidth={1} />
              <h3 className="font-display text-lg text-pearl">{f.title}</h3>
              <p className="font-body text-sm text-silver mt-3 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ColdChain;
