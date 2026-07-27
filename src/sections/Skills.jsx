import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 size={45} className="text-orange-500" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={45} className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs size={45} className="text-yellow-400" />,
    },
    {
      name: "React",
      icon: <FaReact size={45} className="text-cyan-400" />,
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill size={45} className="text-sky-400" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap size={45} className="text-purple-500" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt size={45} className="text-orange-600" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub size={45} className="text-white" />,
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-5"
        >
          My Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 max-w-2xl mx-auto mb-16"
        >
          These are the technologies I use to build modern,
          responsive and high-performance web applications.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: .8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-5 hover:-translate-y-3 hover:bg-slate-700 transition-all duration-300 shadow-xl"
            >
              {skill.icon}

              <h3 className="font-semibold text-lg">
                {skill.name}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;