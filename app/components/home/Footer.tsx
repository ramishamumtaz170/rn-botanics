import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F8F5EF] px-6 lg:px-10 py-20">


      <div className="max-w-7xl mx-auto rounded-[5px] bg-[#2E473B] text-[#F8F5EF] px-18 md:px-16 lg:px-24 py-20 shadow-2xl">


        <div className="grid lg:grid-cols-3 gap-16">


          {/* Brand */}

          <div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              R & N Botanics
            </h2>

            <p className="mt-6 text-[#D8D2C8] leading-8 max-w-sm">
              Thoughtfully handcrafted botanical hair care inspired by nature,
              tradition and timeless self-care rituals.
            </p>

          </div>



          {/* Navigation */}

          <div>

            <p className="uppercase tracking-[0.35em] text-sm text-[#AFC0A8]">
              Navigation
            </p>


            <div className="mt-8 flex flex-col gap-3">


              <Link
                href="/#home"
                className="hover:text-[#7C9A7D] transition"
              >
                Home
              </Link>


              <Link
                href="/#ingredients"
                className="hover:text-[#7C9A7D] transition"
              >
                Ingredients
              </Link>


              <Link
                href="/#story"
                className="hover:text-[#7C9A7D] transition"
              >
                Our Story
              </Link>


              <Link
                href="/#faq"
                className="hover:text-[#7C9A7D] transition"
              >
                FAQ
              </Link>


            </div>

          </div>




          {/* Contact */}

          <div>

            <p className="uppercase tracking-[0.35em] text-sm text-[#AFC0A8]">
              Contact
            </p>


            <div className="mt-8 space-y-5 text-[#D8D2C8]">

              <p>Pakistan</p>
              <p>rnbotanics@gmail.com</p>
              <p>rnbotanics.pk</p>

            </div>


          </div>


        </div>




        <div className="border-t border-[#4E6558] my-14"></div>



        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-[#CFC8BC]">
            © 2026 R & N Botanics. All Rights Reserved.
          </p>


          <p className="uppercase tracking-[0.2em] text-sm text-[#AFC0A8]">
            Crafted With Nature • Made With Care
          </p>


        </div>


      </div>


    </footer>
  );
}