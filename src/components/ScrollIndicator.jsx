'use client';
import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scrolled, setScrolled] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (totalHeight) {
      setScrolled((windowScrollTop / totalHeight) * 100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <div
        className="h-1 bg-yellow-400"
        style={{ width: `${scrolled}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;