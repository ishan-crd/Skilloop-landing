"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 600]);

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
        <div className="text-center max-w-4xl mx-auto mt-16 sm:mt-20 lg:mt-24">
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
        </div>
      </main>
    </div>
  );
}
