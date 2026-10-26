import Image from "next/image";
import MobileNav from "./mobile-nav";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "PHP", "Python", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Laravel", "React", "Next.js", "FastAPI", "Tailwind CSS"],
  },
  {
    category: "Databases & Backend Platforms",
    skills: ["MySQL", "Firebase", "Supabase"],
  },
  {
    category: "Networking & Infrastructure",
    skills: ["Computer networking"],
  },
  {
    category: "Mapping & Visualization",
    skills: ["System architecture diagrams", "ER diagrams", "Data-flow diagrams", "Analytics dashboards"],
  },
  {
    category: "Tools & Methods",
    skills: ["Figma", "UI/UX design", "REST APIs", "Agile and Waterfall"],
  },
];

const projects = [
  {
    number: "01",
    title: "ThesisGuard",
    image: null,
    imageAlt: null,
    status: "In Progress",
    description:
      "A team capstone project in progress: a web-based system for monitoring thesis and capstone projects, managing document revisions, and archiving research. It also explores NLP-based proposal similarity detection and contribution analytics.",
    tags: ["Laravel", "React", "MySQL", "Python", "NLP", "Team Project"],
  },
  {
    number: "02",
    title: "Academic Programming Projects",
    image: null,
    imageAlt: null,
    status: "Coursework",
    description:
      "Programming and web development activities completed while learning Java, HTML, CSS, JavaScript, PHP, and Laravel.",
    tags: ["Java", "Web Development", "PHP"],
  },
  {
    number: "03",
    title: "PAPA: A Father's Loving Heart",
    image: "/projects/papa-short-film-poster.jpg",
    imageAlt: "Poster for PAPA: A Father's Loving Heart, a 2023 short film",
    status: "2023 Festival Entry",
    description:
      "A team short film by Kislap Productions and an official entry for the Multimedia Arts Festival 2023 Short Film Competition. The poster credits Regine Kris Cadiao as writer, director, and editor.",
    tags: ["Short Film", "Team Production", "Multimedia Arts Festival"],
  },
  {
    number: "04",
    title: "K-pop Merchandise Storefront",
    image: "/projects/kpop-merch-store.png",
    imageAlt: "Screenshot of a K-pop merchandise online storefront",
    status: "Second-Year Academic Project",
    description:
      "An academic project focused on an online K-pop merchandise storefront, with category navigation, product listings, pricing, and cart controls.",
    tags: ["E-commerce UI", "Product Catalog", "Academic Project"],
  },
];

const certifications = [
  {
    title: "CCNA: Introduction to Networks",
    organization: "Cisco Networking Academy",
    provider: "Davao del Norte State College",
    date: "June 9, 2025",
    description:
      "Completed networking coursework through the Cisco Networking Academy program.",
    color: "blue",
    href: "/certificates/ccna-introduction-to-networks.pdf",
  },
  {
    title: "Ignite Philippines",
    organization: "Wadhwani Foundation / Wadhwani Global Entrepreneur",
    provider: "Entrepreneurship training",
    date: "March 21, 2026",
    description:
      "Completed 42 hours of coursework covering ideation, business modeling, and financial planning.",
    color: "purple",
    href: "/certificates/ignite-philippines.pdf",
  },
  {
    title: "BSIT 413 Series Training: Artificial Intelligence for Innovation of Capstone Project",
    organization: "Davao del Norte State College, Institute of Computing",
    provider: "Advanced Seminar Series for BSIT Fourth-Year Students",
    date: "September 29, 2026",
    description:
      "Completed a two-day seminar series on artificial intelligence for capstone project innovation.",
    color: "blue",
    href: "/certificates/ai-capstone-seminar.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b14] text-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080b14]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold">
            <span className="text-blue-400">&lt;</span>
            PEG
            <span className="text-purple-400"> /&gt;</span>
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-blue-400">About</a>
            <a href="#skills" className="transition hover:text-blue-400">Skills</a>
            <a href="#projects" className="transition hover:text-blue-400">Projects</a>
            <a href="#education" className="transition hover:text-blue-400">Education</a>
            <a href="#certifications" className="transition hover:text-blue-400">Certificates</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-blue-400/40 px-4 py-2 text-sm transition hover:bg-blue-400/10 md:inline-flex"
            >
              Contact Me ↗
            </a>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[78vh] items-center px-6 py-24"
      >
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Fourth-Year BSIT Student
            </div>

            <p className="mb-3 text-lg text-slate-400">Hello, I&apos;m</p>

            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-7xl">
              Prince Earl
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Gabatino.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              A Bachelor of Science in Information Technology student at
              Davao del Norte State College, building my technical skills
              in programming, web development, and computer networking.
              I&apos;m preparing to apply what I&apos;ve learned to meaningful
              projects and professional opportunities in the IT industry.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold shadow-lg shadow-blue-900/30 transition hover:-translate-y-1"
              >
                Explore My Projects ↗
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold transition hover:border-blue-400/60 hover:bg-white/5"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
              <span>⌖ Philippines</span>
              <span>⌘ Information Technology</span>
              <span>✳ Continuous Learning</span>
            </div>
          </div>

          <div className="relative mx-auto mt-2 w-full max-w-lg lg:mt-0 lg:justify-self-end">
            <div className="pointer-events-none absolute inset-x-2 top-1/5 bottom-4 rounded-full bg-gradient-to-br from-blue-400/35 via-indigo-500/25 to-purple-500/40 blur-[85px]" />
            <Image
              src="/profile/prince-earl-gabatino.png"
              alt="Portrait of Prince Earl Gabatino"
              width={1024}
              height={1536}
              priority
              unoptimized
              className="relative z-10 aspect-[2/3] w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Get to know me
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>

            <p className="mt-6 leading-8 text-slate-400">
              I&apos;m Prince Earl Gabatino, a fourth-year BS Information
              Technology student at Davao del Norte State College.
              Throughout my studies, I&apos;ve been learning programming,
              web development, and computer networking.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              I want to continue improving my technical abilities,
              gain practical experience, and discover opportunities
              where I can contribute to real projects. I&apos;m working
              toward turning the knowledge I gain in school into
              useful skills for my future career.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#101522] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
              My objective
            </p>
            <h3 className="mt-4 text-2xl font-bold">Career Objective</h3>

            <p className="mt-4 leading-7 text-slate-400">
              To pursue an entry-level opportunity in the information
              technology field where I can apply the knowledge and
              skills gained from my BSIT studies, contribute to
              meaningful projects, learn from experienced
              professionals, and continue growing in my chosen career.
            </p>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-sm text-slate-500">Areas of interest</p>
              <p className="mt-2 font-medium text-blue-300">
                Programming · Web Development · Networking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
          My technical foundation
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">Technical Skills</h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Programming languages, frameworks, and design tools I&apos;ve used
          in my studies and while building this portfolio.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.category}
              className="rounded-2xl border border-white/10 bg-[#101522] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40"
            >
              <h3 className="font-semibold text-blue-300">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500">
          These are tools and areas I&apos;ve encountered through coursework,
          projects, and building this portfolio. I&apos;m continuing to develop
          my experience with them.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Learning through practice
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">Projects & Practice</h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Academic, technical, and creative projects that let me apply
            what I&apos;ve learned through study and teamwork.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-white/10 bg-[#101522] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-950/20"
              >
                {project.image && (
                  <a
                    href={project.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View the full ${project.title} poster`}
                    className="mb-6 block"
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={2304}
                      height={3456}
                      className="h-[28rem] w-full rounded-xl bg-black/40 object-contain"
                    />
                  </a>
                )}
                <div className="mb-7 flex items-center justify-between gap-3">
                  <span className="font-mono text-sm text-blue-400">
                    PROJECT / {project.number}
                  </span>
                  <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs text-purple-300">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
          My academic background
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">Education</h2>

        <div className="mt-10 rounded-2xl border border-white/10 bg-[#101522] p-7 sm:p-9">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-2xl">
              🎓
            </div>
            <div>
              <p className="text-sm font-medium text-blue-400">
                Undergraduate Studies
              </p>
              <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                Bachelor of Science in Information Technology
              </h3>
              <p className="mt-3 text-slate-300">
                Davao del Norte State College (DNSC)
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Fourth-Year Student
              </p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-medium text-blue-400">
                  Senior High School
                </p>
                <h4 className="mt-2 text-lg font-semibold">
                  Panabo City National High School (PCNHS)
                </h4>
                <p className="mt-2 text-sm text-slate-500">
                  Strand: Information and Communication Technology (ICT)
                </p>
                <p className="mt-2 text-sm font-medium text-purple-300">
                  Graduated with High Honors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Training & achievements
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Certifications
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {certifications.map((certificate) => (
              <article
                key={certificate.title}
                className="rounded-2xl border border-white/10 bg-[#101522] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-xl">
                  ✦
                </div>
                <p className="text-sm text-blue-400">
                  {certificate.date}
                </p>
                <h3 className="mt-3 text-xl font-bold">
                  {certificate.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {certificate.organization}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {certificate.provider}
                </p>
                <p className="mt-4 leading-7 text-slate-400">
                  {certificate.description}
                </p>
                <a
                  href={certificate.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-lg border border-blue-400/30 px-4 py-2 text-sm font-medium text-blue-300 transition hover:border-blue-400/60 hover:bg-blue-400/10"
                >
                  View certificate ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
          Let&apos;s connect
        </p>

        <h2 className="text-3xl font-bold sm:text-5xl">
          Ready for the next
          <span className="mt-2 block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            step in my IT journey.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-400">
          I&apos;m looking forward to opportunities where I can use my
          knowledge, gain practical experience, collaborate with
          others, and continue growing in the technology field.
        </p>

        <a
          href="mailto:princearlgabatino05@gmail.com"
          className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 font-semibold transition hover:-translate-y-1"
        >
          Email Me ↗
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <a
            className="transition hover:text-blue-400"
            href="https://github.com/Earl-404"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="transition hover:text-blue-400"
            href="https://www.facebook.com/prince.earl.gabatino"
            target="_blank"
            rel="noreferrer"
          >
            Facebook ↗
          </a>
          <a
            className="transition hover:text-blue-400"
            href="mailto:princearlgabatino05@gmail.com"
          >
            Email ↗
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-slate-500">
        © Prince Earl Gabatino. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}

