import Link from "next/link";
import { Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full overflow-x-hidden bg-[#F8F5EF] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">

      {/* Main Footer Card */}
      <div className="mx-auto w-full max-w-7xl rounded-[24px] sm:rounded-[36px] bg-[#2E473B] px-6 py-10 text-[#F8F5EF] shadow-2xl sm:px-10 sm:py-12 md:px-14 md:py-16 lg:px-16 lg:py-20">

        {/* Main Grid */}
        <div className="grid w-full grid-cols-1 gap-10 text-left md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">

          {/* Column 1 — Brand */}
          <div className="min-w-0">

            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#C7A25A]" />

              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                R & N Botanics
              </h3>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#D8D2C8] sm:text-base">
              Thoughtfully handcrafted botanical hair care inspired by nature,
              tradition, and timeless self-care rituals.
            </p>

          </div>


          {/* Column 2 — Navigation */}
          <div className="min-w-0">

            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#AFC0A8] sm:text-sm">
              Navigation
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-[#D8D2C8] sm:text-base">

              <Link
                href="/#home"
                className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-[#C7A25A]"
              >
                Home
              </Link>

              <Link
                href="/#ingredients"
                className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-[#C7A25A]"
              >
                Ingredients
              </Link>

              <Link
                href="/#story"
                className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-[#C7A25A]"
              >
                Our Story
              </Link>

              <Link
                href="/#faq"
                className="w-fit transition-all duration-300 hover:translate-x-1 hover:text-[#C7A25A]"
              >
                FAQ
              </Link>

            </div>

          </div>


          {/* Column 3 — Contact */}
          <div className="min-w-0">

            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#AFC0A8] sm:text-sm">
              Contact
            </p>

            <div className="mt-5 space-y-4 text-sm text-[#D8D2C8] sm:text-base">

              {/* Location */}
              <div className="flex min-w-0 items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C7A25A]"
                />

                <span>Pakistan</span>
              </div>


              {/* Email */}
              <div className="flex min-w-0 items-start gap-3">

                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C7A25A]"
                />

                <a
                  href="mailto:rnbotanics@gmail.com"
                  className="min-w-0 break-words transition hover:text-[#C7A25A]"
                >
                  rnbotanics@gmail.com
                </a>

              </div>


              {/* Website */}
              <div className="flex min-w-0 items-start gap-3">

                <Globe
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C7A25A]"
                />

                <a
                  href="https://rnbotanics.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 items-center gap-1 break-words transition hover:text-[#C7A25A]"
                >
                  <span className="break-all">
                    rnbotanics.pk
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="shrink-0"
                  />
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* Divider */}
        <div className="my-8 border-t border-[#4E6558] sm:my-10" />


        {/* Bottom Bar */}
        <div className="flex w-full flex-col gap-4 text-left sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs leading-6 text-[#CFC8BC] sm:text-sm">
            © {new Date().getFullYear()} R & N Botanics. All Rights Reserved.
          </p>

          <p className="text-xs leading-6 tracking-[0.12em] text-[#AFC0A8] sm:text-right sm:text-sm">
            Crafted With Nature • Made With Care
          </p>

        </div>

      </div>

    </footer>
  );
}