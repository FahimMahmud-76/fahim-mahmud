import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Sc in Computer Science & Engineering',
    institution: 'University of Asia Pacific',
    year: '2023 - Running',
    gpa: 'In Progress',
    current: true,
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Islamia Govt College',
    year: '2021',
    gpa: 'GPA 5.00',
    current: false,
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'B.L Govt High School',
    year: '2019',
    gpa: 'GPA 5.00',
    current: false,
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My journey in technology and education
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">Who Am I?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am S.M. Fahim Mahmud, currently pursuing my B.Sc in Computer Science and Engineering 
              at the University of Asia Pacific. My passion for programming started with C, and I've 
              been expanding my knowledge ever since.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I believe in learning by doing. Every project I undertake is an opportunity to grow and 
              challenge myself. I'm particularly interested in software development and creating 
              solutions that make a difference.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-primary font-medium">C</span>
                <span className="text-muted-foreground"> Enthusiast</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-secondary font-medium">Problem</span>
                <span className="text-muted-foreground"> Solver</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-lg">
                <span className="text-primary font-medium">Lifelong</span>
                <span className="text-muted-foreground"> Learner</span>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
              
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-2 w-5 h-5 rounded-full border-2 ${
                    item.current 
                      ? 'bg-primary border-primary animate-pulse' 
                      : 'bg-background border-muted-foreground'
                  }`} />
                  
                  <div className={`glass-card rounded-xl p-6 ${item.current ? 'gradient-border' : ''}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary flex items-center gap-1">
                        <Calendar size={12} />
                        {item.year}
                      </span>
                      {item.gpa && (
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary/10 text-secondary flex items-center gap-1">
                          <Award size={12} />
                          {item.gpa}
                        </span>
                      )}
                    </div>
                    <h4 className="font-heading font-semibold text-lg">{item.degree}</h4>
                    <p className="text-muted-foreground text-sm">{item.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
