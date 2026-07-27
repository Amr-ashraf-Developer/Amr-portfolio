import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
          Amr<span className="text-white">.</span>
        </h1>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          <li>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Home
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              About
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Skills
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Projects
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 transition"
            >
              Contact
            </ScrollLink>
          </li>

          <li>
            <Link
              to="/cv"
              className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg transition"
            >
              CV
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 py-6">
          <ul className="flex flex-col items-center gap-6 text-white">
            <li>
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                Home
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                About
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                Skills
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                Projects
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setOpen(false)}
              >
                Contact
              </ScrollLink>
            </li>

            <li>
              <Link
                to="/cv"
                onClick={() => setOpen(false)}
                className="bg-cyan-500 px-5 py-2 rounded-lg"
              >
                CV
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;