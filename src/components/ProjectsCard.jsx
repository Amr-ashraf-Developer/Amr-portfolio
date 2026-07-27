import { FaGithub } from "react-icons/fa";

const ProjectsCard = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-300">

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-5">
          {project.description}
        </p>


        <div className="flex gap-3">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg transition"
          >
            <FaGithub />
            GitHub
          </a>


          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-gray-200 px-5 py-2 rounded-lg transition"
            >
              Live Demo
            </a>
          )}

        </div>

      </div>

    </div>
  );
};


export default ProjectsCard;