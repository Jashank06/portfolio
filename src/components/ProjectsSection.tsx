import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

const projects = [
  {
    id: 1,
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics platform with real-time data visualization and advanced reporting capabilities.',
    image: project1,
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    image: project2,
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'TailwindCSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team communication features.',
    image: project3,
    technologies: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions and cutting-edge implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
              }}
              className="glass-card rounded-2xl overflow-hidden group hover:shadow-purple transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                
                {/* Overlay Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.demoUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 glass-card rounded-full hover:bg-primary hover:text-background transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 glass-card rounded-full hover:bg-primary hover:text-background transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gradient-primary text-background rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.demoUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center py-2 bg-gradient-primary text-background rounded-lg font-medium hover:shadow-neon transition-all duration-300"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-background transition-all duration-300"
                  >
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};