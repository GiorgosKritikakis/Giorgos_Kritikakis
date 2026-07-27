import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg.asset.json";
import cv from "@/assets/cv.pdf.asset.json";
import thesis from "@/assets/thesis.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Giorgos Kritikakis — Software Engineer & Applied Algorithms Researcher" },
      {
        name: "description",
        content:
          "Giorgos Kritikakis: software engineer at Tom Sawyer Software, researcher in graph algorithms, chain decomposition and transitive closure. Publications and CV.",
      },
      { property: "og:title", content: "Giorgos Kritikakis — Software Engineer & Researcher" },
      {
        property: "og:description",
        content:
          "Graph algorithms research, hierarchical graph drawing, publications, experience and CV.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const research = [
  {
    title: "Chain / Path Decomposition",
    body: "Fast, practical decomposition of directed acyclic graphs into chains — currently the fastest approach both theoretically and in practice, with results very close to the optimum.",
  },
  {
    title: "Transitive Closure & Reachability",
    body: "A linear-time sparsification technique that yields new bounds for transitive closure, together with an indexing scheme and extensive experiments on what really drives performance.",
  },
  {
    title: "Path-Based Framework (PBF)",
    body: "A general-purpose hierarchical graph drawing framework, evaluated against state-of-the-art solutions and validated with a user study.",
  },
  {
    title: "Visual Query & Data Federation",
    body: "Visual query builders and AI-powered text-to-query tools that let users explore graph databases without knowing the query language underneath.",
  },
];

const experience = [
  {
    period: "Mar 2023 — Present",
    role: "Product Developer",
    org: "Tom Sawyer Software",
    body: "Designing, developing and testing key product features, including visual query builders and query generation tools for graph databases, most recently with AI-powered text-to-query capabilities.",
    current: true,
  },
  {
    period: "2020 — 2024",
    role: "Associate Researcher",
    org: "University of Crete — Graph and Information Visualization Laboratory",
    body: "Introduced algorithms addressing fundamental open problems in chain decomposition, transitive closure and hierarchical graph drawing, resulting in several publications and distinctions.",
  },
  {
    period: "Mar 2022 — Dec 2022",
    role: "IT Support",
    org: "Greek Army — SEAP Heraklion",
    body: "Maintained the systems, servers and networks of the camp.",
  },
  {
    period: "2020 — 2022",
    role: "Teaching Assistant",
    org: "University of Crete",
    body: "CS-484 Complex Network Dynamics, CS-380 Algorithms and Complexity, CS-486 Principles of Distributed Computing.",
  },
  {
    period: "2019 — 2020",
    role: "Associate Researcher",
    org: "ICS — FORTH, CARV Laboratory",
    body: "Extended the SCOOP source-to-source C compiler producing output for the PARTEE runtime system, enabling task annotation through pragma directives.",
  },
];

const publications = [
  {
    tag: "ArXiv • Apr 2024",
    title: "Parameterized Linear Time Transitive Closure",
    authors: "Giorgos Kritikakis, Ioannis G. Tollis",
  },
  {
    tag: "SEA 2023",
    title: "Fast Reachability Using DAG Decomposition",
    authors:
      "Giorgos Kritikakis, Ioannis G. Tollis — 21st International Symposium on Experimental Algorithms",
  },
  {
    tag: "IEEE Access • May 2023",
    title: "Experiments and a User Study for Hierarchical Drawings of Graphs",
    authors: "Panagiotis Lionakis, Giorgos Kritikakis, Ioannis G. Tollis",
  },
  {
    tag: "ArXiv • Dec 2022",
    title: "Fast and Practical DAG Decomposition with Reachability Applications",
    authors: "Giorgos Kritikakis, Ioannis G. Tollis",
  },
  {
    tag: "GD 2020 • Poster",
    title: "Algorithms and Experiments using the Path-Based Hierarchical Drawing Framework",
    authors:
      "Panagiotis Lionakis, Giorgos Kritikakis, Ioannis G. Tollis — 28th International Symposium on Graph Drawing and Network Visualization",
  },
];

const education = [
  {
    year: "2022",
    degree: "M.Sc. in Computer Science, University of Crete",
    detail:
      "Thesis: Analysis and Visualization of Hierarchical Graphs. Algorithms and Systems Analysis; Parallel and Distributed Systems.",
    href: thesis.url,
    hrefLabel: "Read thesis (PDF)",
  },
  {
    year: "2020",
    degree: "B.Sc. in Computer Science, University of Crete",
    detail:
      "Thesis: Extension of the PARTEE runtime system with support for dynamic memory allocation. Software Systems and Applications.",
  },
];

const skills: { group: string; items: string }[] = [
  {
    group: "Languages",
    items: "Java · C++ · C · Python · JavaScript · TypeScript · OCaml · SQL · HTML · CSS",
  },
  {
    group: "Frameworks & APIs",
    items: "Spring Boot · Spring · Hibernate / JPA · React · REST · LLM integration",
  },
  {
    group: "Data",
    items: "Neo4j · Cypher · Gremlin · SQL · Data analysis · Data visualization",
  },
  {
    group: "Tools & Testing",
    items: "JUnit · Mockito · Selenium · Git · Maven · Docker · Jira · Linux · Shell",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-muted">
      <div className="pointer-events-none fixed inset-0 graph-paper opacity-40" aria-hidden="true" />

      <main className="relative">
        {/* Hero */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto flex max-w-screen-lg flex-col items-start gap-12 md:flex-row">
            <div className="w-full shrink-0 fade-up md:w-1/3">
              <img
                src={portrait.url}
                alt="Portrait of Giorgos Kritikakis"
                width={1080}
                height={1350}
                className="aspect-[4/5] w-full rounded-[min(1vw,12px)] object-cover outline-1 -outline-offset-1 outline-foreground/5"
              />
            </div>
            <div className="flex-1 fade-up">
              <h1 className="mb-6 text-4xl leading-none font-medium tracking-tight text-balance md:text-5xl">
                Giorgos Kritikakis
              </h1>
              <p className="mb-8 text-lg font-medium text-muted-foreground">
                Software Engineer &amp; Applied Algorithms Researcher
              </p>

              <p className="max-w-[56ch] font-serif text-lg leading-relaxed text-pretty">
                Giorgos (George) Kritikakis is a software developer at{" "}
                <a
                  href="https://www.tomsawyer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Tom Sawyer Software — graph and data visualization solutions"
                  aria-label="Tom Sawyer Software website"
                  className="underline decoration-border-strong underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  Tom Sawyer Software
                </a>
                , where he designs and develops advanced graph-data federation and ETL tools,
                including visual query builders and AI-powered text-to-query capabilities that
                enable users to integrate and explore complex data without needing to understand
                the underlying technologies. He also has a strong research background focused on
                practical solutions to critical computational problems, with work published in
                leading international research venues, and holds a BSc and MSc in Computer Science
                from the{" "}
                <a
                  href="https://www.uoc.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="University of Crete — Official Website"
                  aria-label="University of Crete website"
                  className="underline decoration-border-strong underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  University of Crete
                </a>
                .
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={cv.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-primary py-2 pr-3 pl-2 text-sm font-medium text-primary-foreground ring-1 ring-primary transition-opacity hover:opacity-90"
                >
                  <svg
                    className="mr-2 size-4 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Download CV
                </a>
                <a
                  href="mailto:georgecretek@gmail.com"
                  className="inline-flex items-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground ring-1 ring-foreground/5 transition-colors hover:bg-muted"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="border-y border-border bg-card/50 px-6 py-16">
          <div className="mx-auto max-w-screen-lg">
            <h2 className="mb-12 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              Research Specialization
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {research.map((item) => (
                <div key={item.title} className="space-y-3">
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="max-w-[48ch] text-sm leading-relaxed text-pretty text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-screen-lg">
            <h2 className="mb-12 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              Experience
            </h2>
            <div className="ml-2 space-y-12 border-l border-border pl-8">
              {experience.map((job) => (
                <div key={job.role + job.period} className="relative">
                  <div
                    className={`absolute -left-[37px] top-1 size-4 rounded-full ring-4 ring-background ${
                      job.current ? "bg-foreground" : "bg-border-strong"
                    }`}
                  />
                  <span className="text-xs font-medium text-subtle tabular-nums">{job.period}</span>
                  <h3 className="mt-1 text-lg font-medium text-foreground">{job.role}</h3>
                  <p className="mb-4 text-muted-foreground">{job.org}</p>
                  <p className="max-w-[56ch] text-sm leading-relaxed text-pretty text-muted-foreground">
                    {job.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="border-y border-border bg-card/50 px-6 py-20">
          <div className="mx-auto max-w-screen-lg">
            <h2 className="mb-12 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              Selected Publications
            </h2>
            <div className="space-y-8">
              {publications.map((pub) => (
                <div key={pub.title} className="group">
                  <span className="mb-2 block text-xs font-medium tracking-wide text-subtle uppercase">
                    {pub.tag}
                  </span>
                  <p className="font-serif text-lg leading-tight text-balance transition-colors group-hover:text-muted-foreground">
                    {pub.title}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{pub.authors}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-screen-lg">
            <h2 className="mb-12 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              Education
            </h2>
            <div className="space-y-10">
              {education.map((ed) => (
                <div key={ed.year} className="flex flex-col gap-2 md:flex-row md:gap-10">
                  <span className="shrink-0 text-xs font-medium text-subtle tabular-nums md:w-20 md:pt-1">
                    {ed.year}
                  </span>
                  <div>
                    <h3 className="font-medium text-foreground">{ed.degree}</h3>
                    <p className="mt-2 max-w-[56ch] text-sm leading-relaxed text-pretty text-muted-foreground">
                      {ed.detail}
                    </p>
                    {ed.href ? (
                      <a
                        href={ed.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-sm font-medium underline decoration-border-strong underline-offset-4 transition-colors hover:text-muted-foreground"
                      >
                        {ed.hrefLabel}
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-border bg-card/50 px-6 py-20">
          <div className="mx-auto max-w-screen-lg">
            <h2 className="mb-12 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {skills.map((s) => (
                <div key={s.group} className="space-y-3">
                  <h3 className="font-medium text-foreground">{s.group}</h3>
                  <p className="max-w-[48ch] text-sm leading-relaxed text-pretty text-muted-foreground">
                    {s.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-screen-lg">
            <h2 className="mb-8 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              Contact
            </h2>
            <a
              href="mailto:georgecretek@gmail.com"
              className="font-serif text-2xl underline decoration-border-strong underline-offset-8 transition-colors hover:text-muted-foreground md:text-3xl"
            >
              georgecretek@gmail.com
            </a>
          </div>
        </section>

        <footer className="border-t border-border bg-card/50 px-6 py-12">
          <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-xs text-subtle italic">
              Typeset in Geist and Source Serif 4. Built for the web.
            </p>
            <div className="flex gap-8">
              <a
                href="https://github.com/GiorgosKritikakis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="https://www.tomsawyer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Tom Sawyer Software
              </a>
              <a
                href="mailto:georgecretek@gmail.com"
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
