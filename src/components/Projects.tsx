import React, { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight, Code } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollAnimation';
import { projects } from '../data/portfolio';

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(projectsRef, { threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false); // NEW STATE

  const featuredProjects = projects.filter(project => project.featured);
  const displayedProjects = showAll ? projects : featuredProjects; // CHOOSE WHICH TO SHOW

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={projectsRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-gray-900 dark:text-white mb-6">
              {showAll ? 'All Projects' : 'Featured Projects'}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern web technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="text-gray-700" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="text-gray-700" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {selectedProject === project.id ? project.longDescription : project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(
                        selectedProject === project.id ? null : project.id
                      )}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      {selectedProject === project.id ? 'Show Less' : 'Learn More'}
                      <ArrowRight size={16} className="ml-2" />
                    </button>

                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code size={16} className="mr-2" />
                          View Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects */}
          <div className="text-center mt-12">
            <button
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 dark:hover:border-blue-400 transition-all duration-300 font-medium"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? 'Show Featured Only' : 'View All Projects'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;