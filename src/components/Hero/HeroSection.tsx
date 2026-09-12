"use client";

const mark =
  "px-1 -mx-0.5 rounded-sm [box-decoration-break:clone] [-webkit-box-decoration-break:clone]";

export function HeroSection() {
  return (
    <section className="site-container pt-8 pb-4 sm:pt-12 sm:pb-8 font-crimson text-xl sm:text-2xl md:text-3xl tracking-tight leading-snug">
      <h1 className="font-normal">Hi, I'm Anamika Aggarwal</h1>

      <p className="font-normal mb-6 sm:mb-8">
        a{" "}
        <span className={`${mark} bg-[#DAF0FF] text-[#003CAE] dark:bg-transparent dark:text-[#8ab4ff]`}>
          Software engineer
        </span>{" "}
        working on backend systems,{" "}
        <br className="hidden sm:block" />
        developer tools, and runtime infrastructure.
      </p>

      <p className="font-normal mb-6 sm:mb-8">
        I've worked across startups and open source on observability, sandbox
        runtimes, authentication, and CI. I've also won 3 hackathons.
      </p>

      <p className="font-normal mb-6 sm:mb-8">
        Most recently at Zenact, I cut sandbox worker bootstrap{" "}
        <span className={`${mark} bg-[#FFF3DA] text-[#A85800] dark:bg-transparent dark:text-[#e6b04a]`}>
          from 12s to 3s.
        </span>
      </p>

      <p className="mt-8 font-sans text-[15px] leading-normal text-muted tracking-normal">
        Open to backend and infra roles ·{" "}
        <a href="mailto:anamikaagg18@gmail.com" className="text-foreground underline underline-offset-4 decoration-subtle hover:decoration-foreground">
          Email
        </a>{" "}
        ·{" "}
        <a href="/resume" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 decoration-subtle hover:decoration-foreground">
          Resume
        </a>
      </p>
    </section>
  );
}
