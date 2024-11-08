'use client';
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Elegance', level: 90 },
  { name: 'Eloquence', level: 85 },
  { name: 'Charm', level: 80 },
  { name: 'Humor', level: 75 },
  // Add more skills as needed
];

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: '/html.png' },
      { name: 'CSS', icon: '/css-3.png' },
      { name: 'JavaScript', icon: '/js.png' },
      { name: 'React', icon: '/physics.png' },
      { name: 'Next.js', icon: '/next.svg' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: '/programing.png' },
      { name: 'Express.js', icon: '/express-js.png' },
      { name: 'MERN Stack', icon: '/mern-icon.png' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'SQL', icon: '/sql-server_4492311.png' },
      { name: 'MongoDB', icon: '/mongodb-icon.png' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'AWS', icon: '/social.png' },
    ],
  },
  {
    category: 'Design & Tools',
    skills: [
      { name: 'Figma', icon: '/figma.png' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 md:py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-yellow-400 mb-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded h-2">
                <motion.div
                  className="bg-yellow-400 h-2 rounded"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <motion.h2
          className="text-md md:text-4xl font-bold text-yellow-400 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Not What You Were Looking For? Check Out My Other Skills
        </motion.h2>
        {skillsData.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <motion.h3
              className="text-3xl text-white font-semibold mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {category.category}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4" />
                  <h4 className="text-xl font-bold text-yellow-400">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;