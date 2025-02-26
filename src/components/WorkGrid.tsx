
import { motion } from "framer-motion";
import { Image } from "lucide-react";

const works = [
  {
    title: "Modern Dashboard",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-commerce Platform",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Portfolio Website",
    category: "Development",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
];

const WorkGrid = () => {
  return (
    <section id="work" className="section-padding bg-soft-light">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-soft-gray text-sm font-medium">PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Selected Works</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover-scale"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-soft-dark bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center text-white p-4">
                    <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                    <p className="text-sm">{work.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
