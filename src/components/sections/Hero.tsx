import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "@/lib/animations";
import heroCaviar from "@/assets/hero-caviar.jpg";

const Hero = () => (
  <section className="relative h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="absolute inset-0"
    >
      <img
        src={heroCaviar}
        alt="Premium black caviar macro photography"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </motion.div>

    <div className="relative z-10 section-padding w-full max-w-7xl mx-auto">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-6"
      >
        Invitation Only — Since 1987
      </motion.p>
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-pearl max-w-3xl"
      >
        The Rarest
        <br />
        <span className="text-gradient-gold italic">Pearls</span> of the Sea
      </motion.h1>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="font-body text-sm text-silver mt-8 max-w-md leading-relaxed tracking-wide"
      >
        Hand-selected from the pristine waters of the Caspian. Each tin is a
        testament to centuries of artisanal tradition.
      </motion.p>
    </div>
  </section>
);

export default Hero;
