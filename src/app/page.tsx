"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Code2, ExternalLink, Link2, Mail, Phone, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

const navItems = ["About", "Skills", "Experience", "Projects", "Coding Dashboard", "Contact"];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

function sectionId(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

function getUsername(url?: string) {
  if (!url) return "";
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? "";
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

export default function Home() {
  const [t, setT] = useState("");
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    setT(Date.now().toString());

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = document.querySelectorAll(".section-anchor");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const data = portfolioData;
  const githubUser = getUsername(data.codingProfiles.github) || "keshar3805"; // fallback updated to standard prefix match if needed

  const stats = [
    { title: "Projects", value: data.projects.length },
    { title: "Experience", value: data.experience.length },
    { title: "Certifications", value: data.certifications.length },
    { title: "Achievements", value: data.achievements.length },
  ];

  const contactItems = [
    data.email
      ? { label: "Email", value: data.email, href: `mailto:${data.email}`, icon: <Mail className="h-4 w-4" /> }
      : null,
    data.phone
      ? { label: "Phone", value: data.phone, href: `tel:${data.phone}`, icon: <Phone className="h-4 w-4" /> }
      : null,
    data.codingProfiles.github
      ? { label: "GitHub", value: data.codingProfiles.github, href: data.codingProfiles.github, icon: <Link2 className="h-4 w-4" /> }
      : null,
    data.codingProfiles.linkedin
      ? { label: "LinkedIn", value: data.codingProfiles.linkedin, href: data.codingProfiles.linkedin, icon: <Link2 className="h-4 w-4" /> }
      : null,
    data.codingProfiles.leetcode
      ? { label: "LeetCode", value: data.codingProfiles.leetcode, href: data.codingProfiles.leetcode, icon: <Code2 className="h-4 w-4" /> }
      : null,
  ].filter(Boolean) as Array<{ label: string; value: string; href: string; icon: React.ReactNode }>;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#30363d]/80 bg-[#0d1117]/72 shadow-[0_8px_24px_rgba(0,0,0,0.22)] backdrop-blur-lg">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5 font-mono text-sm font-semibold text-[#e6edf3]">
            {data.profileImage ? (
              <Image
                src={data.profileImage}
                alt={data.name || "Profile"}
                width={26}
                height={26}
                className="h-6.5 w-6.5 rounded-full border border-[#30363d] object-cover"
              />
            ) : (
              <div className="flex h-6.5 w-6.5 items-center justify-center rounded-full border border-[#30363d] bg-[#161b22] font-mono text-[9px] text-[#e6edf3]">
                {initials(data.name || "RD")}
              </div>
            )}
            <span>{data.name ? data.name : "portfolio"}</span>
          </a>
          <ul className="hidden items-center gap-6 text-sm text-[#9da7b3] md:flex">
            {navItems.map((item) => {
              const id = sectionId(item);
              const isActive = activeSection === id;
              return (
                <li key={item} className="relative py-1.5">
                  <a
                    href={`#${id}`}
                    className={`transition-colors duration-300 hover:text-[#e6edf3] ${
                      isActive ? "text-[#e6edf3] font-medium" : "text-[#9da7b3]"
                    }`}
                  >
                    {item}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#58a6ff]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-8 sm:px-8">

        <motion.section
          id="top"
          initial="hidden"
          animate="show"
          variants={container}
          className="section-anchor mt-10 grid gap-8 rounded-2xl border border-[#30363d] bg-[#161b22] p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <motion.div variants={fadeUp} className="space-y-5">
            {!data.name && (
              <p className="inline-flex rounded-md border border-[#30363d] bg-[#0d1117] px-3 py-1 text-xs text-[#9da7b3]">
                Resume content pending in src/data/portfolio.ts
              </p>
            )}
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#58a6ff]">Software Engineer</p>
            <h1 className="font-mono text-4xl leading-tight text-[#e6edf3] sm:text-5xl">
              {data.name || "Resume Data Pending"}
            </h1>
            <p className="text-lg text-[#c9d1d9]">{data.role}</p>
            <p className="max-w-2xl text-base leading-8 text-[#e6edf3] sm:text-lg">
              Crafting modern applications, solving complex problems, and turning ideas into impactful products.
            </p>
            <p className="max-w-2xl text-sm leading-7 text-[#9da7b3] sm:text-base">
              {data.intro || "Resume intro add karo, phir yaha clean premium hero copy render hoga."}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href={data.resumeUrl || "#"}>
                <Button size="lg">Download Resume</Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="ghost">
                  Contact
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.title} className="rounded-lg border border-[#30363d] bg-[#0d1117] px-3 py-2">
                  <p className="font-mono text-lg text-[#e6edf3]">{s.value}</p>
                  <p className="text-xs text-[#9da7b3]">{s.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4">
            <Card className="p-5">
              <div className="mb-4 flex items-center gap-3">
                {data.profileImage ? (
                  <Image
                    src={data.profileImage}
                    alt={data.name || "Profile"}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full border border-[#30363d] object-cover"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#30363d] bg-[#0d1117] font-mono text-lg text-[#e6edf3]">
                    {initials(data.name || "RD")}
                  </div>
                )}
                <div>
                  <p className="font-medium text-[#e6edf3]">{data.name || "Resume Data Pending"}</p>
                  <p className="text-xs text-[#9da7b3]">{data.location || "Location from resume"}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-[#9da7b3]">
                {data.email && <p>{data.email}</p>}
                {data.phone && <p>{data.phone}</p>}
                {data.codingProfiles.github && <p>{data.codingProfiles.github}</p>}
              </div>
            </Card>

            <Card className="overflow-hidden p-0">
              <Image src="/dev-iso.svg" alt="Developer illustration" width={720} height={560} className="h-auto w-full" />
            </Card>
          </motion.div>
        </motion.section>

        <Section id="about" title="About">
          <Card className="p-7">
            <p className="text-sm leading-7 text-[#c9d1d9] sm:text-base">
              {data.about || "About section resume se add karo, fake content nahi dikhayenge."}
            </p>
            {data.education.length > 0 && (
              <div className="mt-6 border-t border-[#30363d] pt-5">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-[#58a6ff]">Education</p>
                <div className="space-y-4">
                  {data.education.map((item) => (
                    <div key={`${item.institution}-${item.degree}`}>
                      <p className="font-semibold text-[#e6edf3]">{item.degree}</p>
                      <p className="text-sm text-[#9da7b3]">{item.institution}</p>
                      <p className="text-xs text-[#8b949e]">{item.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </Section>

        <Section id="skills" title="Tech Stack">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {data.skills.map((group) => (
              <Card key={group.title} className="p-5">
                <p className="mb-3 font-mono text-sm text-[#e6edf3]">{group.title}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-[#30363d] bg-[#0d1117] px-2.5 py-1 text-xs text-[#c9d1d9]">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-4">
            {data.experience.map((item) => (
              <Card key={`${item.company}-${item.role}`} className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-lg font-semibold text-[#e6edf3]">{item.role}</p>
                    <p className="text-sm text-[#9da7b3]">{item.company}</p>
                  </div>
                  <p className="font-mono text-xs text-[#58a6ff]">{item.duration}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[#c9d1d9]">
                  {item.responsibilities.map((line) => (
                    <li key={line}>- {line}</li>
                  ))}
                  {(item.achievements ?? []).map((line) => (
                    <li key={line}>- {line}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Selected Work">
          <div className="space-y-5">
            {data.projects.map((project) => (
              <Card key={project.title} className="overflow-hidden p-0">
                <div className="grid gap-0 md:grid-cols-[0.8fr_1.2fr]">
                  <div className="h-56 border-b border-[#30363d] bg-[#0d1117] md:h-auto md:border-b-0 md:border-r">
                    {project.image ? (
                      <Image src={project.image} alt={project.title} width={800} height={500} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-[#8b949e]">Project Preview</div>
                    )}
                  </div>
                  <div className="space-y-4 p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#58a6ff]">Featured Project</p>
                    <h3 className="text-xl font-semibold text-[#e6edf3]">{project.title}</h3>
                    <p className="text-sm leading-6 text-[#c9d1d9]">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-md border border-[#30363d] px-2 py-1 text-xs text-[#9da7b3]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer">
                          <Button variant="ghost">
                            <Link2 className="h-4 w-4" /> GitHub
                          </Button>
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer">
                          <Button variant="ghost">
                            <ExternalLink className="h-4 w-4" /> Live
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

      <Section id="coding-dashboard" title="Coding Dashboard">
        <div className="space-y-4">
          <Card className="bg-[#0d1117] border border-[#30363d] p-4 sm:p-5 rounded-xl overflow-hidden shadow-none">
            <div className="w-full overflow-x-auto overflow-y-hidden bg-transparent scrollbar-thin">
              <div className="min-w-[780px]">
                <Image
                  src={`/api/github-contributions/chart?username=${githubUser}&t=${t}`}
                  alt="GitHub contribution heatmap"
                  width={795}
                  height={112}
                  unoptimized
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#30363d] pt-3 text-xs text-[#8b949e]">
              <a 
                href="https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-on-my-profile"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#58a6ff]"
              >
                Learn how we count contributions
              </a>
              <div className="flex items-center gap-1.5 font-mono text-[10px]">
                <span>Less</span>
                <span className="h-2.5 w-2.5 rounded-sm bg-[#161b22]" />
                <span className="h-2.5 w-2.5 rounded-sm bg-[#0e4429]" />
                <span className="h-2.5 w-2.5 rounded-sm bg-[#006d32]" />
                <span className="h-2.5 w-2.5 rounded-sm bg-[#26a641]" />
                <span className="h-2.5 w-2.5 rounded-sm bg-[#39d353]" />
                <span>More</span>
              </div>
            </div>
          </Card>
        </div>
      </Section>

        <Section id="achievements" title="Achievements">
          <Card className="overflow-hidden p-0">
            <div className="grid md:grid-cols-4">
              <MetricRailItem
                icon={<Code2 className="h-4 w-4" />}
                title="Problems Solved"
                value={data.achievements.filter((a) => /problem|leetcode/i.test(a)).length}
              />
              <MetricRailItem icon={<Briefcase className="h-4 w-4" />} title="Projects Completed" value={data.projects.length} />
              <MetricRailItem icon={<Trophy className="h-4 w-4" />} title="Internship/Work" value={data.experience.length} />
              <MetricRailItem icon={<Trophy className="h-4 w-4" />} title="Certifications" value={data.certifications.length} noBorder />
            </div>
          </Card>
          {data.achievements.length > 0 && (
            <div className="mt-4 grid overflow-hidden rounded-xl border border-[#30363d] md:grid-cols-2">
              {data.achievements.map((item, index) => (
                <div
                  key={item}
                  className="border-t border-[#30363d] bg-[#161b22] px-4 py-3 text-sm text-[#c9d1d9] first:border-t-0 md:[&:nth-child(2)]:border-t-0 md:[&:nth-child(even)]:border-l"
                >
                  <span className="mr-2 font-mono text-xs text-[#58a6ff]">{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </div>
              ))}
            </div>
          )}
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="overflow-hidden p-0">
              <div className="border-b border-[#30363d] px-5 py-4">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#58a6ff]">Reach Out</p>
                <p className="mt-1 text-sm text-[#9da7b3]">Best way to reach me for roles and collaborations.</p>
              </div>
              <div className="divide-y divide-[#30363d]">
                {contactItems.map((entry) => (
                  <a
                    key={entry.label}
                    href={entry.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between px-5 py-4 transition-colors hover:bg-[#0d1117]"
                  >
                    <span className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                      <span className="text-[#58a6ff]">{entry.icon}</span>
                      {entry.label}
                    </span>
                    <span className="max-w-[60%] truncate text-sm text-[#9da7b3]">{entry.value}</span>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="flex h-full flex-col justify-between p-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#58a6ff]">Current Status</p>
                <p className="mt-3 text-lg text-[#e6edf3]">Open to full-time roles and impactful freelance builds.</p>
                <p className="mt-2 text-sm leading-6 text-[#9da7b3]">
                  If the project needs fast execution with clean engineering, I am available to discuss scope and timelines.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {data.email && (
                  <a href={`mailto:${data.email}`}>
                    <Button>Email Me</Button>
                  </a>
                )}
                <a href={data.resumeUrl || "#"}>
                  <Button variant="ghost">Resume</Button>
                </a>
              </div>
            </Card>
          </div>
        </Section>
      </main>
    </>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section id={id} className="section-anchor mt-16" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
      <motion.div variants={fadeUp} className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-[#58a6ff]">
        {title}
      </motion.div>
      <motion.div variants={fadeUp}>{children}</motion.div>
    </motion.section>
  );
}

function MetricRailItem({
  icon,
  title,
  value,
  noBorder,
}: {
  icon: React.ReactNode;
  title: string;
  value: number;
  noBorder?: boolean;
}) {
  return (
    <div className={`bg-[#161b22] px-4 py-5 md:px-5 ${noBorder ? "" : "border-b border-[#30363d] md:border-b-0 md:border-r"}`}>
      <div className="mb-2 inline-flex rounded-md border border-[#30363d] bg-[#0d1117] p-2 text-[#58a6ff]">{icon}</div>
      <p className="font-mono text-2xl text-[#e6edf3]">{value}</p>
      <p className="text-sm text-[#9da7b3]">{title}</p>
    </div>
  );
}
