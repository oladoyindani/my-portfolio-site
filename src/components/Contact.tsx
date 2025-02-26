
import { motion } from "framer-motion";

const Contact = () => {
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
          <span className="text-soft-gray text-sm font-medium">CONTACT</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">Get in Touch</h2>
          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-soft-gray/20 focus:outline-none focus:border-soft-dark transition-colors"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-soft-gray/20 focus:outline-none focus:border-soft-dark transition-colors"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-lg border border-soft-gray/20 focus:outline-none focus:border-soft-dark transition-colors"
              ></textarea>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                type="submit"
                className="w-full p-3 bg-soft-dark text-white rounded-lg hover:bg-soft-gray transition-colors duration-300"
              >
                Send Message
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
