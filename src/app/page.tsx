"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 600]);
  
  // Animation for second screen elements
  const secondScreenOpacity = useTransform(scrollY, [400, 600], [0, 1]);
  
  // Animation for side paragraphs
  const leftParagraphOpacity = useTransform(scrollY, [300, 500], [0, 1]);
  const rightParagraphOpacity = useTransform(scrollY, [400, 600], [0, 1]);
  const leftParagraphY = useTransform(scrollY, [300, 500], [50, 0]);
  const rightParagraphY = useTransform(scrollY, [400, 600], [50, 0]);
  
  // Animation for center text/button to disappear
  const centerContentOpacity = useTransform(scrollY, [200, 400], [1, 0]);

  return (
    <div className="font-sans min-h-screen bg-white">
      <Navbar />
      <main className="relative flex flex-col items-center justify-start min-h-screen px-4 sm:px-6 lg:px-8 pt-16">
        {/* Left iPhone */}
        <div className="absolute left-4 sm:left-8 lg:left-16 top-1/3 transform -translate-y-1/2 mt-30">
          <Image
            src="/iphones/iphone-left.svg"
            alt="iPhone Left Mockup"
            width={700}
            height={1400}
          />
        </div>

        {/* Right iPhone */}
        <div className="absolute right-4 sm:right-8 lg:right-16 top-1/3 transform -translate-y-1/2 mt-30">
          <Image
            src="/iphones/iphone-right.svg"
            alt="iPhone Right Mockup"
            width={700}
            height={1400}
          />
        </div>

        {/* Left Paragraph */}
        <motion.div 
          className="absolute left-8 lg:left-16 top-1/2 transform -translate-y-1/2 max-w-xs z-10"
          style={{ 
            opacity: leftParagraphOpacity,
            y: leftParagraphY
          }}
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">💡</span>
            </div>
          </div>
          <p 
            className="text-lg text-gray-700 leading-relaxed"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
          >
            Discover creators, coders, designers, and doers — not just profiles.
          </p>
        </motion.div>

        {/* Right Paragraph */}
        <motion.div 
          className="absolute right-8 lg:right-16 top-1/2 transform -translate-y-1/2 max-w-xs text-right z-10"
          style={{ 
            opacity: rightParagraphOpacity,
            y: rightParagraphY
          }}
        >
          <div className="flex items-center justify-end space-x-3 mb-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🚀</span>
            </div>
          </div>
          <p 
            className="text-lg text-gray-700 leading-relaxed"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
          >
            See skills, past work, and intent — swipe to match, assign, and build.
          </p>
        </motion.div>

        {/* Second Screen Text and Button - Above the phone */}
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 text-center"
          style={{ 
            top: 'calc(100vh - 520px)', // Position a bit lower
            opacity: secondScreenOpacity,
            y
          }}
        >
          {/* Second Screen Heading */}
          <h1 
            className="text-3xl sm:text-4xl font-bold text-black mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
          >
            Swipe. Match. Collaborate.
          </h1>
          
          {/* Second Screen Join Now Button */}
          <button
            className="bg-[#000000] text-white px-6 py-3 rounded-md font-medium text-base hover:bg-[#d19a64] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E7AA74] focus:ring-opacity-50"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500 }}
          >
            Join Now
          </button>
        </motion.div>

        {/* Bottom iPhone with scroll animation */}
        <motion.div 
          className="absolute top-130 left-1/2 transform -translate-x-1/2"
          style={{ y }}
        >
          <Image
            src="/iphones/iphone-bottom.svg"
            alt="iPhone Bottom Mockup"
            width={400}
            height={800}
          />
        </motion.div>

        {/* Main Content - Moved higher */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mt-16 sm:mt-20 lg:mt-24"
          style={{ opacity: centerContentOpacity }}
        >
          {/* Main Heading */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
          >
            Swipe. Match. Collaborate.
          </h1>
          
          {/* Subheading */}
          <p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
          >
            The fastest way for freelancers, students, founders, and creators to find their next teammate, gig, or project—based on real skills and proof of work.
          </p>

          {/* Join Now Button */}
          <button
            className="bg-[#000000] text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-[#d19a64] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E7AA74] focus:ring-opacity-50"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500 }}
          >
            Join Now
          </button>
        </motion.div>
      </main>
    </div>
  );
}
