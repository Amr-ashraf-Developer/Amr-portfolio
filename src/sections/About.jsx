import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaCode size={30} />,
      title: "Clean Code",
      desc: "Writing clean, maintainable, and scalable code.",
    },
    {
      icon: <FaLaptopCode size={30} />,
      title: "Frontend",
      desc: "Building responsive and modern web applications.",
    },
    {
      icon: <FaRocket size={30} />,
      title: "Always Learning",
      desc: "Continuously improving my skills and exploring new technologies.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="text-slate-400 text-center max-w-3xl mx-auto leading-8"
        >
          I am a passionate Frontend Developer who enjoys creating modern,
          responsive, and user-friendly web applications using React.js and
          Tailwind CSS. I love solving problems and continuously learning new
          technologies.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: index * .2 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 text-center hover:-translate-y-3 transition duration-300 shadow-xl"
            >
              <div className="text-blue-500 flex justify-center mb-5">
                {card.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {card.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;