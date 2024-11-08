'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_es2o7wg', 'template_sh20ia7', form.current, 'fvUhiteRj-Qmtc0i5')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
  };

  return (
    <section id="contact" className="py-32 md:py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-yellow-400 mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Feel free to reach out if you want to collaborate on a project or just say hi!
        </motion.p>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-gray-300">
            Email: <a href="mailto:youremail@example.com" className="text-yellow-400 hover:underline">dswapnabir5@gmail.com</a>
          </p>
          <p className="text-gray-300 mt-2">
            LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-yellow-400 hover:underline">https://www.linkedin.com/in/swapnabir-dutta-927a71195/</a>
          </p>
        </motion.div>
        <div className="pt-36 social flex flex-col items-center">
          
          <h3 className="text-3xl text-white font-bold italic mb-8">Leave a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="from_name">Your Name</label>
              <input className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" type="text" name="from_name" required />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="sender_mail">Your Email</label>
              <input className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" type="email" id="email" name="sender_mail" required />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="subject">Subject</label>
              <input className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" type="text" name="subject" required />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" name="message" rows="5" required></textarea>
            </div>
            <div className="flex justify-center">
              <button className="bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;