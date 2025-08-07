"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800, 1200, 1600], [0, 600, 600, 800]);
  
  // Animation for center text/button to disappear
  const centerContentOpacity = useTransform(scrollY, [200, 400], [1, 0]);
  
  // Creative floating elements animation
  const floatingElementsOpacity = useTransform(scrollY, [800, 1000, 1400, 1600], [0, 1, 1, 0]);
  const floatingElementsY = useTransform(scrollY, [800, 1200], [50, -50]);
  const floatingElementsScale = useTransform(scrollY, [800, 1200], [0.8, 1.2]);

  return (
    <div className="font-sans min-h-screen bg-white">
      <Navbar />
      
      {/* First Section - Hero */}
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
          style={{ y, zIndex: 50 }}
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

      {/* Second Section - Animated Content */}
      <section className="relative min-h-screen bg-white">
        {/* Creative Floating Elements */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ 
            opacity: floatingElementsOpacity,
            y: floatingElementsY,
            scale: floatingElementsScale
          }}
        >
          {/* Floating Skill Tags */}
          <div className="absolute top-1/4 left-1/4 animate-pulse">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              React Developer
            </div>
          </div>
          
          <div className="absolute top-1/3 right-1/4 animate-pulse" style={{ animationDelay: '0.5s' }}>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              UI/UX Designer
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/3 animate-pulse" style={{ animationDelay: '1s' }}>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Full Stack Dev
            </div>
          </div>
          
          <div className="absolute top-2/3 right-1/3 animate-pulse" style={{ animationDelay: '1.5s' }}>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Product Manager
            </div>
          </div>

          {/* Floating Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <motion.line
              x1="25%"
              y1="25%"
              x2="75%"
              y2="33%"
              stroke="#E7AA74"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.line
              x1="33%"
              y1="50%"
              x2="67%"
              y2="67%"
              stroke="#E7AA74"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
          </svg>

          {/* Floating Icons */}
          <div className="absolute top-1/4 right-1/4 text-4xl animate-bounce">
            <span style={{ animationDelay: '0.2s' }}>💻</span>
          </div>
          
          <div className="absolute top-1/2 left-1/4 text-4xl animate-bounce">
            <span style={{ animationDelay: '0.7s' }}>🎨</span>
          </div>
          
          <div className="absolute top-3/4 right-1/3 text-4xl animate-bounce">
            <span style={{ animationDelay: '1.2s' }}>🚀</span>
          </div>
        </motion.div>
      </section>

      {/* Additional spacing */}
      <div className="min-h-[50vh] bg-white"></div>

      {/* Connect Section */}
      <section className="relative min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 
                className="text-4xl sm:text-5xl font-bold text-black mb-6"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
              >
                Connect with Real Talent
              </h2>
              
              <p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
              >
                Skip the endless interviews and portfolio reviews. SKILLOOP connects you with verified creators who have proven their skills through real work.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500 }}>
                    Verified skills and portfolios
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500 }}>
                    Instant collaboration tools
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500 }}>
                    AI-powered matching
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/iphones/mixediphones.svg"
                alt="Mixed iPhones"
                width={1200}
                height={800}
                className="w-full max-w-lg h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-10xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-black mb-6"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
            >
              How it works
            </h2>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
            >
              Four simple steps to find your next collaborator, gig, or co-founder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h3 
                  className="text-xl font-bold text-black mb-4"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                >
                  Create Your Profile
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
                >
                  Build your portfolio with real work samples, skills, and project history.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">👥</span>
                </div>
                <h3 
                  className="text-xl font-bold text-black mb-4"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                >
                  Discover Talent
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
                >
                  Browse verified creators, developers, and designers with proven skills.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">💬</span>
                </div>
                <h3 
                  className="text-xl font-bold text-black mb-4"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                >
                  Connect & Chat
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
                >
                  Message directly, share files, and discuss project requirements.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 
                  className="text-xl font-bold text-black mb-4"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
                >
                  Start Building
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
                >
                  Collaborate seamlessly with built-in tools for project management.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-black mb-6"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 700 }}
            >
              Ready to Build Something Amazing?
            </h2>
            
            <p 
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 400 }}
            >
              Join thousands of creators, founders, and teams who are already building the future with SKILLOOP.
            </p>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center mb-16">
              <button
                className="bg-[#E7AA74] text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-[#d19a64] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E7AA74] focus:ring-opacity-50 w-full sm:w-auto"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500 }}
              >
                Get Early Access
              </button>
              
              <button
                className="bg-black text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 w-full sm:w-auto"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 500 }}
              >
                Download App
              </button>
            </div>
          </div>

          {/* iPhone Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex justify-center">
              <Image
                src="/iphones/iphone-left.svg"
                alt="iPhone Left"
                width={300}
                height={600}
                className="w-full max-w-xs h-auto transform rotate-12 hover:rotate-0 transition-transform duration-300"
              />
            </div>
            
            <div className="flex justify-center">
              <Image
                src="/iphones/iphone-bottom.svg"
                alt="iPhone Bottom"
                width={300}
                height={600}
                className="w-full max-w-xs h-auto transform -rotate-6 hover:rotate-0 transition-transform duration-300"
              />
            </div>
            
            <div className="flex justify-center">
              <Image
                src="/iphones/iphone-right.svg"
                alt="iPhone Right"
                width={300}
                height={600}
                className="w-full max-w-xs h-auto transform rotate-12 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional content to make page scrollable */}
      <div className="min-h-screen bg-white"></div>
    </div>
  );
}
