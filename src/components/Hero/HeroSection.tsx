"use client";

const mark =
  "px-1 -mx-0.5 rounded-sm whitespace-nowrap [box-decoration-break:clone] [-webkit-box-decoration-break:clone]";

export function HeroSection() {
  return (
    <section className="site-container pt-8 pb-4 sm:pt-12 sm:pb-8 font-crimson text-xl sm:text-2xl leading-[1.4] tracking-tight [&>p]:max-w-[42rem]">
      <p className="mb-5">
        Hi, I'm Anamika Aggarwal, a{" "}
        <span className={`${mark} bg-[#DAF0FF] text-[#003CAE] dark:bg-transparent dark:text-[#8ab4ff]`}>
          software engineer
        </span>{" "}
        working on backend systems, developer tools, and runtime infrastructure.
      </p>

      <p className="mb-5">
        Most recently at Zenact, I owned observability, CI, and customer-data
        security for AI-agent sandboxes, cutting worker bootstrap{" "}
        <span className={`${mark} bg-[#FFF3DA] text-[#A85800] dark:bg-transparent dark:text-[#e6b04a]`}>
          from 12s to 3s.
        </span>
      </p>

      <p className="mb-5">
        In open source, I built the{" "}
        <span className={`${mark} bg-[#EDE9FE] text-[#6D28D9] dark:bg-transparent dark:text-[#c4b5fd]`}>
          VMM control-socket layer
        </span>{" "}
        in urunc, a Go container runtime that runs unikernels as sandboxes, and
        added SAML and OIDC sign-on to Consul Democracy.
      </p>

      <p className="mb-5">
        On the product side, I have built{" "}
        <span className={`${mark} bg-[#F0FDFA] text-[#0F766E] dark:bg-transparent dark:text-[#5fd3c0]`}>
          agentic systems,
        </span>{" "}
        browser extensions, mobile apps, and web platforms.
      </p>

      <p className="mb-5">I also write sometimes, about what I learn while building.</p>

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
