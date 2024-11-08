'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

    const options = ["<Full Stack Developer/>", "<Cloud Solution Architect/>", "<Frontend Developer/>", "<Backend Developer/>"]
    const updatedOptions = []
    options.forEach((option)=> {
        updatedOptions.push(option,500)
    })

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-yellow-400">
        Hola! 
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-200 mt-6">
          I&apos;m <b>Swapnabir Dutta</b>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-200 mt-10 md:mt-24">
        <TypeAnimation
                    sequence={updatedOptions}
                    speed = {{type: 'keyStrokeDelayInMs', value: 100}}
                    deletionSpeed={{type: 'keyStrokeDelayInMs', value: 50}}
                    style={{ fontSize: window.innerWidth < 768 ? '1em' : '3em', color:'#EEEEEE'}}
                    repeat={Infinity}
                   
    />
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;