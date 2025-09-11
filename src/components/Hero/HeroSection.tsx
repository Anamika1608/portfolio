"use client";

export function HeroSection() {
  return (
    <section className="site-container max-w-4xl pb-10 sm:pb-16 font-crimson text-2xl sm:text-3xl md:text-4xl tracking-tight leading-snug">

      <h1 className="font-medium">
        Hey, I'm Anamika Aggarwal
      </h1>

      {/* First Paragraph */}
      <p className="font-medium mb-6 sm:mb-8">
        a
        <span className="bg-[#DAF0FF] text-[#003CAE] px-1 ml-2 font-medium mr-1">
          full stack developer
        </span>
        crafting things that are
        <span className="flex items-center flex-wrap gap-2">
          <span className="italic">scalable</span>
          <img
            src="/hero/sun.svg"
            alt="sun icon"
            className="w-6 h-6 animate-spin-slow"
          />
          <span className="not-italic">and</span>
          <span className="italic">smooth</span>
          <img
            src="/hero/flower.svg"
            alt="flower icon"
            className="w-6 h-6 animate-spin-slow"
          />
        </span>
      </p>

      {/* Second Paragraph */}
      <p className="font-medium mb-6 sm:mb-8">
        I've worked with
        <span className="bg-[#E9FFD9] text-[#2B7500] px-1 font-medium mx-1">
          3 startups
        </span>
        where I led and
        <br className="hidden sm:block" />
        built the product from scratch,
        reducing latency and AI costs.
      </p>

      {/* Updated Hackathon Paragraph Color */}
      <p className="font-medium mb-6 sm:mb-8">
        I'm also a {" "}
        <span className="bg-[#F0FDFA] text-[#0F766E] px-1 font-medium">
          winner/finalist of 6 hackathons.
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
       href="mailto:anamikaagg07@gmail.com"
       className="bg-[#DBEAFE] text-[#1E40AF] px-2 py-1 ml-2 font-medium rounded-md hover:bg-opacity-90 transition-colors"
     >
       Contact Me
     </a>
      </p>
    </section>
  );
}