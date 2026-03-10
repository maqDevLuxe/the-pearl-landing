import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-card py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <span className="font-display text-xl md:text-2xl font-light tracking-[0.3em] text-pearl uppercase">
          Caspian
        </span>
        <div className="hidden md:flex items-center gap-10">
          {["Collection", "Process", "Pairings", "Journal"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-xs tracking-[0.2em] uppercase text-silver hover:text-pearl transition-colors duration-500"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#order"
          className="font-body text-xs tracking-[0.2em] uppercase text-gold hover:text-pearl transition-colors duration-500"
        >
          Reserve
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
