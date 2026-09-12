import Link from "next/link";
import { Header } from "@/components/Navbar/Header";

const links = [
  { href: "/", label: "Home" },
  { href: "/llms.txt", label: "Profile as markdown" },
  { href: "/api/profile", label: "Profile as JSON" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="site-container py-16">
        <h1 className="font-crimson text-2xl font-medium tracking-tight mb-4">Page not found</h1>
        <p className="text-muted mb-6">Nothing lives at this address. Try one of these:</p>
        <ul className="space-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="underline underline-offset-4 decoration-subtle hover:decoration-foreground">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
