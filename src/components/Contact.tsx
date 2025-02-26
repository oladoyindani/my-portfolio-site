
import { motion } from "framer-motion";

const Contact = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="section-padding bg-soft-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-soft-gray text-sm font-medium"
          >
            CONTACT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2 mb-8"
          >
            Get in Touch
          </motion.h2>
          <motion.form
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={item}>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-soft-gray/20 focus:outline-none focus:border-soft-dark transition-all"
              />
            </motion.div>
            <motion.div variants={item}>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-soft-gray/20 focus:outline-none focus:border-soft-dark transition-all"
              />
            </motion.div>
            <motion.div variants={item}>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-lg border border-soft-gray/20 focus:outline-none focus:border-soft-dark transition-all"
              ></motion.textarea>
            </motion.div>
            <motion.div variants={item}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full p-3 bg-soft-dark text-white rounded-lg hover:bg-soft-gray transition-all duration-300"
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
