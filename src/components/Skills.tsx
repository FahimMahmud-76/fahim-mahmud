import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Terminal } from 'lucide-react';

const skills = [
  {
    name: 'C Programming',
    level: 85,
    icon: Terminal,
    description: 'Strong foundation in low-level programming and algorithms',
  },
  {
    name: 'Java',
    level: 70,
    icon: Code2,
    description: 'Object-oriented programming and GUI development',
  },
  {
    name: 'Python',
    level: 60,
    icon: Code2,
    description: 'Scripting and automation capabilities',
  },
  {
    name: 'SQL',
    level: 65,
    icon: Database,
    description: 'Database design and query optimization',
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-heading font-semibold text-lg">{skill.name}</h3>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{skill.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className="h-full skill-bar rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card inline-block rounded-2xl p-8 gradient-border">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Currently <span className="text-gradient">Learning & Exploring</span>
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              I'm continuously expanding my knowledge in software development, data structures, 
              algorithms, and exploring new technologies to stay updated with the industry trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
