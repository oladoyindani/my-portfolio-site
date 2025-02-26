
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  message: string;
};

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Thank you for your message! I'll get back to you soon.");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
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
            onSubmit={handleSubmit(onSubmit)}
          >
            <motion.div variants={item}>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-soft-gray/20 focus:outline-none focus:border-soft-dark transition-all"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 text-left">{errors.name.message}</p>
              )}
            </motion.div>
            <motion.div variants={item}>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-soft-gray/20 focus:outline-none focus:border-soft-dark transition-all"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 text-left">{errors.email.message}</p>
              )}
            </motion.div>
            <motion.div variants={item}>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-lg border border-soft-gray/20 focus:outline-none focus:border-soft-dark transition-all"
                {...register("message", { required: "Message is required" })}
              ></motion.textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 text-left">{errors.message.message}</p>
              )}
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
