import projects from "../data/Projects";
import ProjectsCard from "../components/ProjectsCard";


const Projects = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectsCard
              key={project.id}
              project={project}
            />
          ))}

        </div>


      </div>

    </section>
  );
};


export default Projects;