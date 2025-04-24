import { motion } from 'framer-motion';
import { projectsData } from '../../data/projectsData';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaNetworkWired, FaDesktop, FaTools } from 'react-icons/fa'

function ProjectsGrid() {
  return (
    <section id="proyectos" className="py-10 mt-5">
      <div className="text-center mb-16">
        <p className="font-general-medium text-4xl text-ternary-dark dark:text-ternary-light">
          NUESTROS SERVICIOS
        </p>
      </div>

      <div className="flex flex-col gap-20">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${
                isEven ? '' : 'md:flex-row-reverse'
              } items-center w-full px-6 md:px-20 py-8 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-zinc-900 shadow-md`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full md:w-1/2 h-auto rounded-md object-cover"
              />

              <div className="mt-6 md:mt-0 md:px-10 w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsGrid;
