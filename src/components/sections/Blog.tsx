import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useRef } from "react";

const posts = [
  { title: "The Art of Caviar Service", date: "February 2026", read: "6 min", excerpt: "A guide to the rituals and etiquette of serving the world's most precious delicacy." },
  { title: "Caspian vs. Farm-Raised", date: "January 2026", read: "8 min", excerpt: "Understanding the terroir of caviar and why origin matters more than ever." },
  { title: "Winter Tasting Notes", date: "December 2025", read: "4 min", excerpt: "Our head taster's selections from this season's most exceptional harvests." },
];

const Blog = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding" id="journal">
      <div className="max-w-7xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-body text-xs tracking-[0.4em] uppercase text-gold mb-4"
        >
          The Journal
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="font-display text-3xl md:text-5xl font-light text-pearl mb-16"
        >
          Gourmet Lifestyle
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              custom={i}
              className="group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-gold">{post.date}</span>
                <span className="font-body text-[10px] text-muted-foreground">·</span>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{post.read}</span>
              </div>
              <h3 className="font-display text-xl text-pearl group-hover:text-gold transition-colors duration-500">
                {post.title}
              </h3>
              <p className="font-body text-sm text-silver mt-3 leading-relaxed">{post.excerpt}</p>
              <div className="divider-line mt-8" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
