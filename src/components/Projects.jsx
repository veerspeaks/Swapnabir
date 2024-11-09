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
    title: 'MeetConnect: A Interview App',
    description: 'An app that connects you with interviewers and helps you practice for your interviews.',
    image: '/projects/meetconnect.png',
    usedTechLink: ['/physics.png', '/programing.png', '/sql-server_4492311.png'],
    link: 'https://meetconnect.onrender.com',
  },
  {
    title: 'JustDoIt: A Task Management App',
    description: 'A note and to-do list app that helps you manage your tasks and notes.',
    image: '/projects/justdoit.png',
    usedTechLink: ['/mongodb-icon.png', '/express-js.png', '/programing.png'],
    link: 'https://justdoit-dqbv.onrender.com',
  },
  {
    title: "Sri's Design",
    description: 'A website for a local designer to showcase her work and services.',
    image: '/projects/srisdesign.png',
    usedTechLink: ['/physics.png','/express-js.png'],
    link: 'https://srisdesign.onrender.com',
  },
  {
    title: 'Portfolio Website',
    description: 'A website to showcase my skills and projects.',
    image: '/projects/Resume.png',
    usedTechLink: ['/js.png', '/html.png', '/css-3.png'],
    link: 'https://swapnabir.onrender.com',
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