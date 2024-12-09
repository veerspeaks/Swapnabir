'use client';
import React from 'react';
import { motion } from 'framer-motion';
const journeyData = [
  {
    title: 'Chemistry Graduate',
    description:
      'I started my career with a degree in Chemistry, which laid the foundation for my analytical skills.',
    icon: '/chemistry.png', // Example SVG from public directory
  },
  {
    title: 'Subject Matter Expert',
    description:
      'For 2.5 years, I worked as a Subject Matter Expert in Chemistry, honing my expertise and problem-solving abilities.',
    icon: '/sme.png', // Example SVG from public directory
  },
  {
    title: 'Full Stack Developer',
    description:
      'Transitioning into tech, I became a full-stack developer, creating dynamic and responsive web applications.',
    icon: '/fs.webp', // Example SVG from public directory
  },
  {
    title: 'Cloud Solution Architect (Future)',
    description:
      'I am now aiming to expand my skills into cloud solutions, aspiring to become a Cloud Solution Architect.',
    icon: '/aws.png', // Example SVG from public directory
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 md:py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.h2
          className="text-4xl font-bold text-yellow-400 mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        {/* Introduction */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I&apos;m a passionate full-stack developer with experience in building web applications using modern technologies. I love creating beautiful and performant products with delightful user experiences.
        </motion.p>
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-yellow-400"></div>
          {journeyData.map((step, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} md:items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 * index, duration: 0.6 }}
            >
              {/* Left or Right content based on index */}
              <div className="md:w-full ">
                <h3 className="text-xl font-semibold text-yellow-400">{step.title}</h3>
                <p className="text-gray-300 mt-2">{step.description}</p>
              </div>
              {/* Center icon positioned absolutely */}
              <div className="relative md:static flex justify-center w-full">
                <div className="absolute md:relative w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center transform -translate-x-1/2 md:translate-x-0 left-1/2 md:left-auto">
                  <img src={`${step.icon}`} alt={step.title} className="w-6 h-6" />
                </div>
              </div>
              {/* Empty space on the other side */}
              <div className="md:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
