import Link from "next/link";
import { Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    /* Outer wrapper with px-4 sm:px-8 */
    <footer className="bg-[#F8F5EF] px-4 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20 w-full overflow-x-hidden">
      
      {/* Green Card Container: Left-aligned format with p-6 sm:p-12 md:p-16 padding */}
      <div className="max-w-7xl mx-auto rounded-[24px] sm:rounded-[36px] bg-[#2E473B] text-[#F8F5EF] p-6 sm:p-12 md:p-16 lg:p-20 shadow-2xl">
        
        {/* Grid: Left-aligned layout on both mobile & laptop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 text-left">

          {/* Column 1: Brand Info */}
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C7A25A] shrink-0"></span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                R & N Botanics
              </h3>
            </div>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#D8D2C8] leading-relaxed max-w-sm">
              Thoughtfully handcrafted botanical hair care inspired by nature,
              tradition, and timeless self-care rituals.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="text-left">
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-[#AFC0A8] font-semibold">
              Navigation
            </p>

            <div className="mt-4 sm:mt-6 flex flex-col gap-2.5 text-sm sm:text-base text-[#D8D2C8]">
              <Link
                href="/#home"
                className="hover:text-[#C7A25A] hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1.5 w-fit"
              >
                Home
              </Link>

              <Link
                href="/#ingredients"
                className="hover:text-[#C7A25A] hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1.5 w-fit"
              >
                Ingredients
              </Link>

              <Link
                href="/#story"
                className="hover:text-[#C7A25A] hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1.5 w-fit"
              >
                Our Story
              </Link>

              <Link
                href="/#faq"
                className="hover:text-[#C7A25A] hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1.5 w-fit"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Column 3: Contact Details */}
          <div className="text-left">
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-[#AFC0A8] font-semibold">
              Contact
            </p>

            <div className="mt-4 sm:mt-6 space-y-3 text-sm sm:text-base text-[#D8D2C8]">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#C7A25A] shrink-0" />
                <span>Pakistan</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#C7A25A] shrink-0" />
                <a
                  href="mailto:rnbotanics@gmail.com"
                  className="hover:text-[#C7A25A] transition"
                >
                  rnbotanics@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
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
        <div className="border-t border-[#4E6558] my-6 sm:my-10"></div>

        {/* Bottom Bar: Left-aligned with bottom padding so text doesn't touch the bottom edge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left pb-2">
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