import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center"
        >
          Contact Me
        </motion.h2>

        <p className="text-center text-slate-400 mt-4 mb-16">
          Feel free to contact me for any project or job opportunity.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-500 text-2xl" />
                <span>
                  <a
                  href="mailto:amrashraf1600@gmail.com"
                  className="hover:text-blue-400 transition"
                  >send Email</a></span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-blue-500 text-2xl" />
                <a
                  href="https://github.com/Amr-ashraf-Developer"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400"
                >
                  GitHub
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-blue-500 text-2xl" />
                <a
                  href="https://www.linkedin.com/in/amr-ashraf-4410ba322/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400"
                >
                  LinkedIn
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right */}
          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-slate-800 rounded-xl p-4 outline-none resize-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;