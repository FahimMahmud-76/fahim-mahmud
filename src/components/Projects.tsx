import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, BookOpen, Vote } from 'lucide-react';

const projects = [
  {
    title: 'Library Management System',
    description: 'A comprehensive library management application with features for book tracking, member management, and lending operations.',
    tech: ['Java', 'Scene Builder', 'JavaFX'],
    icon: BookOpen,
    color: 'primary',
    features: ['Book Catalog', 'Member Registration', 'Issue & Return'],
  },
  {
    title: 'Voting Management System',
    description: 'A secure voting system designed to manage elections with candidate registration and vote counting capabilities.',
    tech: ['SQL', 'Database Design', 'Backend Logic'],
    icon: Vote,
    color: 'secondary',
    features: ['Voter Authentication', 'Real-time Results', 'Admin Panel'],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Some of my notable works and contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full gradient-border">
                {/* Project Header */}
                <div className={`h-48 relative overflow-hidden ${
                  project.color === 'primary' 
                    ? 'bg-gradient-to-br from-primary/20 to-primary/5' 
                    : 'bg-gradient-to-br from-secondary/20 to-secondary/5'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon 
                      size={80} 
                      className={`${
                        project.color === 'primary' ? 'text-primary' : 'text-secondary'
                      } opacity-30 group-hover:opacity-50 transition-opacity group-hover:scale-110 duration-500`}
                    />
                  </div>
                  
                  {/* Floating Tech Tags */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className={`text-xs px-2 py-1 rounded ${
                          project.color === 'primary'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary/10 text-secondary'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="btn-outline text-sm flex items-center gap-2 flex-1 justify-center">
                      <Github size={16} />
                      View Code
                    </button>
                    <button className="btn-primary text-sm flex items-center gap-2 flex-1 justify-center">
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Coming */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            More projects coming soon as I continue my learning journey...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
