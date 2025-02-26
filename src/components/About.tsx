
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-soft-gray text-sm font-medium">ABOUT</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">Designing the Future</h2>
          <p className="text-soft-gray text-lg mb-6">
            With a passion for clean design and intuitive user experiences, I create
            websites that not only look beautiful but also perform flawlessly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-lg bg-soft-light"
              >
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-soft-gray">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
