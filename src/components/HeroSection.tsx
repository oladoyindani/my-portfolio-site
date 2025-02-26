
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-soft-light opacity-50" />
      <div className="container mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-soft-dark text-white rounded-full"
        >
          Web Designer & Developer
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
        >
          Crafting Digital
          <br />
          Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-soft-gray max-w-lg mx-auto mb-8 text-lg"
        >
          Transforming ideas into elegant, intuitive web solutions that leave lasting impressions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#work"
            className="inline-block px-8 py-3 bg-soft-dark text-white rounded-lg hover:bg-soft-gray transition-colors duration-300"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
