import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Short Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/short-logo.svg"
              alt="SKILLOOP Short Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Center - Main Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/logo.svg"
              alt="SKILLOOP"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Right - Get Early Access Button */}
          <div className="flex-shrink-0">
            <button
              className="bg-[#E7AA74] text-[#FFFFFF] px-6 py-2 rounded-md font-medium text-sm hover:bg-[#d19a64] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E7AA74] focus:ring-opacity-50"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
