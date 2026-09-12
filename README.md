# anamikaagg.com

Personal site of Anamika Aggarwal, software engineer.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Edit content

All copy lives in data files, not components:

| Section | File |
|---|---|
| Identity, links, highlights | `src/data/profile.ts` |
| Work | `src/components/WorkExperience/workExperiencesData.ts` |
| Open source | `src/components/OpenSource/OpenSourceData.ts` |
| Featured projects | `src/components/FeaturedProjects/FeaturedProjects.ts` |
| Other projects | `src/components/MoreProjects/otherProjectsData.ts` |
| Writing | `src/components/Blogs/BlogData.ts` |
| Recommendations | `src/components/Reccomendations/recommendationsData.ts` |

The hero text is in `src/components/Hero/HeroSection.tsx`.

## For agents and crawlers

Every machine-readable surface is generated from `src/data/profile.ts`.

| URL | What |
|---|---|
| `/llms.txt` | Full profile as markdown ([llms.txt](https://llmstxt.org) convention) |
| `/profile.md` | Same markdown, human-guessable path |
| `/api/profile` | Same data as JSON |
| `/` with `Accept: text/markdown` | Returns the markdown profile ([acceptmarkdown.com](https://acceptmarkdown.com)); responses carry `Vary: Accept` |
| `/robots.txt` | Allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended and others |
| `/sitemap.xml` | Page plus the URLs above |

The homepage embeds JSON-LD (`Person`, `WebSite`) and Open Graph tags. Unknown paths return HTTP 404; clients asking for `text/markdown` get a markdown body with recovery links.

```bash
curl -H "Accept: text/markdown" https://anamikaagg.com/
```
