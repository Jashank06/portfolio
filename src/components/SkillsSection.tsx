import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: Globe, level: 95, color: 'primary' },
  { name: 'Backend', icon: Server, level: 90, color: 'secondary' },
  { name: 'Database', icon: Database, level: 85, color: 'accent' },
  { name: 'Mobile', icon: Smartphone, level: 80, color: 'primary' },
  { name: 'DevOps', icon: Zap, level: 75, color: 'secondary' },
  { name: 'Algorithms', icon: Code, level: 88, color: 'accent' },
];

const technologies = [
  'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker',
  'AWS', 'GraphQL', 'Next.js', 'TailwindCSS', 'MongoDB', 'Redis'
];

export const SkillsSection = () => {
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
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mastering the latest technologies to build tomorrow's applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              className="glass-card p-6 rounded-xl group hover:shadow-neon transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-${skill.color} mr-4`}>
                  <skill.icon className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="text-muted-foreground">{skill.level}%</p>
                </div>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                  className={`h-2 rounded-full bg-gradient-${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-primary">Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                className="glass-card px-4 py-2 rounded-full text-sm font-medium border border-primary/20 hover:border-primary hover:shadow-neon transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};