import profile from "../assets/images/profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div>
            <p className="text-cyan-400 text-lg mb-2">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Amr Ashraf
            </h1>

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "UI Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl text-cyan-400 font-semibold"
            />

            <p className="text-gray-400 mt-6 leading-8">
              I build modern, responsive, and user-friendly web applications
              using React, JavaScript, Tailwind CSS, and Bootstrap.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/Amr-ashraf-Developer"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/amr-ashraf-4410ba322/"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 duration-300"
              >
                <FaLinkedin />
              </a>
            </div>

            <a
              href="/cv"
              className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <img
              src={profile}
              alt="Amr Ashraf"
              className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-cyan-500 shadow-[0_0_35px_#06b6d4]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;