"use client"

export function HeroSection() {
    return (
        <section className="w-full max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl font-medium mb-6 font-crimson">
                Hello, let's build
            </h1>
            <p className="text-2xl md:text-3xl font-medium mb-8">
                <span className="accent-text font-jakarta">digital experiences</span> that are
                <span className="accent-text"> intuitive</span> and feel
                <span className="accent-text"> alive</span> 
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                On my journey, I've crafted scalable systems, dynamic user interfaces, and seamless backend architectures — turning ideas into impactful realities.
            </p>
        </section>
    )
}
