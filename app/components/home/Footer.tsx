import Link from "next/link";
import { Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F5EF] px-3 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20 w-full overflow-x-hidden">
      
      {/* Green Card constrained with w-[calc(100%-16px)] mx-auto so it never touches screen edges */}
      <div className="w-[calc(100%-16px)] max-w-7xl mx-auto rounded-[24px] sm:rounded-[36px] bg-[#2E473B] text-[#F8F5EF] px-6 sm:px-12 md:px-16 lg:px-20 py-10 sm:py-16 lg:py-20 shadow-2xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">

          {/* Column 1: Brand Info (Centered on Mobile) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C7A25A]"></span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                R & N Botanics
              </h3>
            </div>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#D8D2C8] leading-relaxed max-w-sm mx-auto md:mx-0">
              Thoughtfully handcrafted botanical hair care inspired by nature,
              tradition, and timeless self-care rituals.
            </p>
          </div>

          {/* Column 2: Navigation Links (Centered on Mobile) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-[#AFC0A8] font-semibold text-center md:text-left">
              Navigation
            </p>

            <div className="mt-5 sm:mt-6 flex flex-col items-center md:items-start gap-3 text-sm sm:text-base text-[#D8D2C8]">
              <Link
                href="/#home"
                className="hover:text-[#C7A25A] hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1.5"
              >
                Home
              </Link>

              <Link
                href="/#ingredients"
                className="hover:text-[#C7A25A] hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1.5"
              >
                Ingredients
              </Link>

              <Link
                href="/#story"
                className="hover:text-[#C7A25A] hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1.5"
              >
                Our Story
              </Link>

              <Link
                href="/#faq"
                className="hover:text-[#C7A25A] hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1.5"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Column 3: Contact Details (Centered on Mobile) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-[#AFC0A8] font-semibold text-center md:text-left">
              Contact
            </p>

            <div className="mt-5 sm:mt-6 space-y-3.5 text-sm sm:text-base text-[#D8D2C8] flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin size={18} className="text-[#C7A25A] shrink-0" />
                <span>Pakistan</span>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail size={18} className="text-[#C7A25A] shrink-0" />
                <a
                  href="mailto:rnbotanics@gmail.com"
                  className="hover:text-[#C7A25A] transition"
                >
                  rnbotanics@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Globe size={18} className="text-[#C7A25A] shrink-0" />
                <a
                  href="https://rnbotanics.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C7A25A] transition flex items-center gap-1"
                >
                  rnbotanics.pk
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-[#4E6558] my-8 sm:my-12 w-full"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left w-full">
          <p className="text-xs sm:text-sm text-[#CFC8BC]">
            © {new Date().getFullYear()} R & N Botanics. All Rights Reserved.
          </p>

          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-[#AFC0A8] font-medium">
            Crafted With Nature • Made With Care
          </p>
        </div>

      </div>
    </footer>
  );
}