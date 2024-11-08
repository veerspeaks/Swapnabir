'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Project- Remember: A Fast Recall Card App',
    description: 'Flashcard app for learning and memorizing information quickly.',
    image: '/projects/remember.png', // Replace with your image paths
    usedTechLink: ['/physics.png', '/programing.png', '/next.svg', '/sql-server_4492311.png'],
    link: 'https://remember-alpha-silk.vercel.app/',
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two.',
    image: '/images/project2.jpg',
    usedTechLink: ['@/public/icons/react.png', '@/public/icons/node.png', '@/public/icons/express.png', '@/public/icons/mongodb.png'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of project two.',
    image: '/images/project2.jpg',
    usedTechLink: ['@/public/icons/react.png', '@/public/icons/node.png', '@/public/icons/express.png', '@/public/icons/mongodb.png'],
    link: '#',
  },
  {
    title: 'Project Four',
    description: 'A brief description of project two.',
    image: '/images/project2.jpg',
    usedTechLink: ['@/public/icons/react.png', '@/public/icons/node.png', '@/public/icons/express.png', '@/public/icons/mongodb.png'],
    link: '#',
  },
  // Add more projects as needed
];



const Projects = () => {
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleFlip = (index) => {
        setFlippedIndex(prevIndex => prevIndex === index ? null : index);
    }

    return (
        <section id="projects" className="py-32 md:py-24 bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold text-yellow-400 mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </motion.h2>
                
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="rounded overflow-hidden shadow-lg bg-gray-800"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => handleFlip(index)}
                            animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                        >
                            {flippedIndex !== index ? (
                                <div className="h-full">
                                    <img
                                        className="w-full h-48 object-cover"
                                        src={project.image}
                                        alt={project.title}
                                    />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl text-yellow-400 mb-2">
                                            {project.title}
                                        </div>
                                        <p className="text-gray-300 text-base">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="px-6 pb-4">
                                        <a
                                            href={project.link}
                                            className="text-yellow-400 hover:underline"
                                        >
                                            Learn more →
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="backface-hidden py-4 my-7 md:my-0 h-80 flex flex-col justify-center items-center gap-8" style={{ transform: 'rotateY(180deg)' }}>
                                    <span className="text-yellow-400 text-2xl font-bold">Used Tech</span>
                                    <div className="flex flex-row justify-center items-center gap-6">
                                        {project.usedTechLink.map((tech, techIndex) => (
                                            <Image src={tech} alt="tech" key={techIndex} width={48} height={48} className="object-cover inline-block" />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;