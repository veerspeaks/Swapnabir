'use client';
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 text-gray-400 mb-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-yellow-400" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-yellow-400" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="hover:text-yellow-400" />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Swpnabir Dutta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;