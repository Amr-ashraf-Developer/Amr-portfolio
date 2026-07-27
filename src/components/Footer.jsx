import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Amr Ashraf. All Rights Reserved.
        </p>

        <div className="flex gap-5 mt-4 md:mt-0">
          <a
            href="https://github.com/Amr-ashraf-Developer"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-gray-400 hover:text-white duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/amr-ashraf-4410ba322/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-gray-400 hover:text-blue-500 duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/share/14kzcuin6R4/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-gray-400 hover:text-blue-600 duration-300"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;