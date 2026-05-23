"use client";

export function HeroSection() {
  return (
    <section className="site-container max-w-4xl pb-10 sm:pb-16 font-crimson text-xl sm:text-2xl md:text-3xl tracking-tight leading-snug">
      <h1 className="font-medium">Hi, I'm Anamika Aggarwal</h1>

      {/* First Paragraph */}
      <p className="font-medium mb-6 sm:mb-8">
        a{" "}
        <span className="bg-[#DAF0FF] text-[#003CAE] px-1 font-medium mr-1">
          Software engineer
        </span>
        building AI products,
        <br />
        developer tools, and production-grade backend systems.
      </p>

      {/* Second Paragraph */}
      <p className="font-medium mb-6 sm:mb-8">
        I've worked across
        <span className="bg-[#E9FFD9] text-[#2B7500] px-1 font-medium mx-1">
          startups and open source
        </span>
        <br className="hidden sm:block" />
        building products from scratch,
        improving latency and cutting AI costs.
      </p>

      {/* Updated Hackathon Paragraph Color */}
      <p className="font-medium mb-6 sm:mb-8">
        I've also{" "}
        <span className="bg-[#F0FDFA] text-[#0F766E] px-1 font-medium">
          won 3 hackathons.
        </span>
      </p>

      <p className="font-medium mb-6 sm:mb-8">
        On my journey, I've developed
        <span className="bg-[#FFF3DA] text-[#A85800] px-1 ml-2 font-medium mr-1">
          full stack web & app, <br className="hidden sm:block" />
          browser extensions and AI based products.
        </span>
      </p>

      <p className="text-sm sm:text-base md:text-2xl text-gray-800 max-w-2xl mt-6 tracking-tight leading-normal">
        I'm open for new opportunities.
        <a
          href="mailto:anamikaagg18@gmail.com"
          className="bg-[#DBEAFE] text-[#1E40AF] px-2 py-1 ml-2 font-medium rounded-md hover:bg-opacity-90 transition-colors"
        >
          Contact Me
        </a>
      </p>
    </section>
  );
}
