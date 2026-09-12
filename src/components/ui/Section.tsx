import React from "react";

// Shared section shell: one column, serif title, consistent rhythm.
// `wide` lets media grids break out past the text column on large screens
// while the title stays aligned with every other section.
export function Section({
  title,
  children,
  wide = false,
}: {
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="site-container py-10 sm:py-14">
      <h2 id={`${id}-title`} className="font-crimson text-2xl font-medium tracking-tight mb-6">
        {title}
      </h2>
      <div className={wide ? "lg:-mx-16 xl:-mx-20" : ""}>{children}</div>
    </section>
  );
}
