import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
    { name: "CV", path: "/cv" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400"
        >
          Amr
        </Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>

              {link.path.includes("#") ? (
                <HashLink
                  smooth
                  to={link.path}
                  className="hover:text-blue-400 transition"
                >
                  {link.name}
                </HashLink>
              ) : (
                <Link
                  to={link.path}
                  className="hover:text-blue-400 transition"
                >
                  {link.name}
                </Link>
              )}

            </li>
          ))}
        </ul>


        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-slate-800 px-6 py-5 space-y-4">

          {links.map((link) => (
            <li key={link.name}>

              {link.path.includes("#") ? (
                <HashLink
                  smooth
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block hover:text-blue-400"
                >
                  {link.name}
                </HashLink>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block hover:text-blue-400"
                >
                  {link.name}
                </Link>
              )}

            </li>
          ))}

        </ul>
      )}

    </nav>
  );
};

export default Navbar;