"use client";

export function HeroSection() {
  return (
    <section className="mx-5 lg:ml-5 xl:ml-20 max-w-4xl px-2 sm:px-6 md:px-12 py-10 sm:py-16 font-crimson text-2xl sm:text-3xl md:text-4xl tracking-tight leading-snug">
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
        I've also
        <span className="bg-[#FFF3DA] text-[#A85800] px-1 ml-2 font-medium mr-1">
          won multiple hackathons
        </span>
        and worked with
        <br className="hidden sm:block" />
        <span className="bg-[#E9FFD9] text-[#2B7500] px-1 font-medium mr-1">
        3 startups
        </span>
        where I led and built the product from scratch reducing latency and AI costs.
      </p>

      <p className="text-sm sm:text-base md:text-xl text-gray-800 max-w-2xl mt-6 tracking-tight leading-normal">
        On my journey, I've developed scalable systems, dynamic user interfaces, and seamless backend architectures — turning ideas into impactful realities.
      </p>
    </section>
  );
}