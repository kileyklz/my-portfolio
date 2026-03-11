import React, { useMemo, useState, useEffect } from 'react';
import Aurora from './Aurora';


export default function PastelLuxuryPortfolio() {
  const navItems = ["Portfolio", "About", "Creative", "Contact"];
  const [currentPage, setCurrentPage] = useState("Portfolio");
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [aboutTab, setAboutTab] = useState("Who I Am");
  const [creativeScore, setCreativeScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameActive, setGameActive] = useState(false);
  const [orbPosition, setOrbPosition] = useState({ x: 120, y: 120 });
  const orbSize = 80;
  const gameWidth = 900;
  const gameHeight = 420;
  

  
  /* 
  const [orbX, setOrbX] = useState(24);
  const [orbY, setOrbY] = useState(24);
  const [dx, setDx] = useState(2.4);
  const [dy, setDy] = useState(2.1);
  const orbSize = 64;
  const gameWidth = 900; prob dont even need this and is causing weird scaling issues.
  const gameHeight = 420;
  */

  const projects = useMemo(
  () => [
    {
      title: "Home",
      type: "Interactive Guide",
      year: "2026",
      description:
        "Hover over each tab to preview a project, then click to open it below. This section is meant to feel playful, tactile, and more interactive than a standard portfolio grid.",
      previewTitle: "How it works",
      previewText:
        "Each tab reveals a smooth preview on hover and opens a fuller panel when selected.",
    },
    {
      title: "Brand System",
      type: "Identity / Art Direction",
      year: "2026",
      description:
        "A refined visual identity and launch system designed to feel polished, warm, and quietly expressive.",
      previewTitle: "Editorial branding",
      previewText:
        "Soft luxury visuals, refined typography, and a calm art direction system.",
    },
    {
      title: "Landing Page",
      type: "Web Design / UI",
      year: "2025",
      description:
        "A soft, high-end landing page concept balancing calm whitespace, elegant type, and subtle motion.",
      previewTitle: "Luxury web concept",
      previewText:
        "Minimal layouts, gentle interactions, and a premium digital presentation.",
    },
    {
      title: "Social Content",
      type: "Campaign / Motion",
      year: "2025",
      description:
        "A modular campaign kit for social storytelling with premium layouts and a playful visual rhythm.",
      previewTitle: "Campaign system",
      previewText:
        "Flexible social assets built for cohesive storytelling and motion-ready use.",
    },
  ],
  []
);


  const aboutSections = {
    "Who I Am": {
      title: "About Me",
      body:
        "I’m a creative who loves polished design that still feels personal. I enjoy building thoughtful visual stories, collecting inspiration from luxury branding, and making work that feels calm, elevated, and memorable.",
      extras: ["Warm and detail-oriented", "Interested in digital design + storytelling", "Loves balancing professionalism with softness"],
    },
    "Personal": {
      title: "A Little More Personal",
      body:
        "Outside of work, I love cozy hobbies, spending time with my two dogs, finding beautiful visual references, and making things feel a little more special than they need to be in the best way.",
      extras: ["Hobbies: creative projects, moodboarding, design inspiration", "Two dogs 🐶🐶", "A soft spot for cute details and elegant presentation"],
    },
    Education: {
      title: "Education",
      body:
        "Add your school, program, years, notable coursework, studio experience, or academic highlights here.",
      extras: ["School / Program", "Years attended", "Awards, projects, or honors"],
    },
    Certifications: {
      title: "Certifications",
      body:
        "Add any certifications, short courses, workshops, or platform credentials here when you are ready.",
      extras: ["Certification name", "Issuing organization", "Completion date"],
    },
  };

  const getRandomOrbPosition = () => {
    const maxX = gameWidth - orbSize;
    const maxY = gameHeight - orbSize;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  const startGame = () => {
    setCreativeScore(0);
    setTimeLeft(10);
    setGameActive(true);
    setOrbPosition(getRandomOrbPosition());
  };

  const handleOrbClick = () => {
    if (!gameActive || timeLeft <= 0) return;

    setCreativeScore((prev) => {
    const nextScore = prev + 1;
    setHighScore((prevHigh) => Math.max(prevHigh, nextScore));
    return nextScore;
  });

    setOrbPosition(getRandomOrbPosition());
  };

  useEffect(() => {
    if (!gameActive) return;
    if (timeLeft <= 0) {
      setGameActive(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [gameActive, timeLeft]);


useEffect(() => {
  window.scrollTo(0, 0);
}, [currentPage]);

/* 
useEffect(() => {
  if (currentPage !== "Creative") return;

  const interval = setInterval(() => {
    setOrbX((prevX) => {
      const nextX = prevX + dx;
      if (nextX <= 0 || nextX >= gameWidth - orbSize) {
        setDx((oldDx) => -oldDx);
      }
      return Math.max(0, Math.min(nextX, gameWidth - orbSize));
    });

    setOrbY((prevY) => {
      const nextY = prevY + dy;
      if (nextY <= 0 || nextY >= gameHeight - orbSize) {
        setDy((oldDy) => -oldDy);
      }
      return Math.max(0, Math.min(nextY, gameHeight - orbSize));
    });
  }, 16);

  return () => clearInterval(interval);
}, [currentPage, dx, dy]);
*/

  const ProjectTab = ({ project, index, onClick, active = false, onHover, onLeave }) => {
  const tabTones = [
    "from-[#eef6ff] to-[#dcecff]",
    "from-[#e3f0ff] to-[#cfe3ff]",
    "from-[#d7e8ff] to-[#bfd9ff]",
    "from-[#cadfff] to-[#aecdff]",
  ];

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative min-h-[185px] w-full rounded-t-[2rem] border border-white/70 bg-gradient-to-b ${tabTones[index % tabTones.length]} px-6 pb-6 pt-5 text-left transition-all duration-300 ${
        active
          ? "translate-y-1 shadow-[0_20px_50px_rgba(113,144,196,0.18)]"
          : "shadow-[0_10px_30px_rgba(113,144,196,0.10)] hover:-translate-y-1"
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 h-6 rounded-b-[1.2rem] bg-white/20 blur-md" />

      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
        {project.type}
      </p>
      <h3 className="mt-3 font-serif text-3xl text-slate-800">
        {project.title}
      </h3>
      <p className="mt-3 max-w-[24ch] text-sm leading-7 text-slate-600">
        {project.previewText}
      </p>

      <div
        className={`pointer-events-none absolute left-1/2 top-[105%] z-30 w-[92%] -translate-x-1/2 rounded-[1.5rem] border border-white/80 bg-white/88 p-5 shadow-[0_20px_50px_rgba(113,144,196,0.18)] backdrop-blur-xl transition-all duration-300 ${
          hoveredProject === index
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          Preview
        </p>
        <p className="mt-2 font-serif text-2xl text-slate-800">
          {project.previewTitle}
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          {project.previewText}
        </p>
      </div>
    </button>
  );
};

const AboutTab = ({ project, index, onClick, active = false, onHover, onLeave }) => {
  const tabTones = [
    "from-[#eef6ff] to-[#dcecff]",
    "from-[#e3f0ff] to-[#cfe3ff]",
    "from-[#d7e8ff] to-[#bfd9ff]",
    "from-[#cadfff] to-[#aecdff]",
  ];

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative min-h-[135px] w-full rounded-t-[2rem] border border-white/70 bg-gradient-to-b ${tabTones[index % tabTones.length]} px-6 pb-5 pt-4 text-left transition-all duration-300 ${
        active
          ? "translate-y-1 shadow-[0_20px_50px_rgba(113,144,196,0.18)]"
          : "shadow-[0_10px_30px_rgba(113,144,196,0.10)] hover:-translate-y-1"
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 h-6 rounded-b-[1.2rem] bg-white/20 blur-md" />

      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
        {project.type}
      </p>
      <h3 className="mt-2 font-serif text-2xl text-slate-800">
        {project.title}
      </h3>
      <p className="mt-2 max-w-[24ch] text-xs leading-6 text-slate-600">
        {project.previewText}
      </p>

      <div
        className={`pointer-events-none absolute left-1/2 top-[105%] z-30 w-[92%] -translate-x-1/2 rounded-[1.5rem] border border-white/80 bg-white/88 p-5 shadow-[0_20px_50px_rgba(113,144,196,0.18)] backdrop-blur-xl transition-all duration-300 ${
          hoveredProject === index
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          Preview
        </p>
        <p className="mt-2 font-serif text-2xl text-slate-800">
          {project.previewTitle}
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          {project.previewText}
        </p>
      </div>
    </button>
  );
};



  const MainNav = () => (
    <div className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-3 py-2 shadow-[0_18px_40px_rgba(123,150,196,0.12)] backdrop-blur-xl">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setCurrentPage(item)}
            className={`rounded-full px-4 py-2 text-sm tracking-[0.18em] font-conso transition ${
              currentPage === item
                ? "bg-[#dfeeff] text-slate-700"
                : "text-slate-500 hover:bg-white/60 hover:text-slate-700"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );

  const PortfolioPage = () => (
    <div>
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-10 pt-28 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[#dff1ff]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,252,255,0.95),rgb(232, 245, 255),rgb(192, 228, 254),rgb(177, 216, 245),transparent_72%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-55">
            <Aurora
              colorStops={["#f7fcff", "#d9f1ff", "#bfe7ff"]}
              blend={0.15}
              amplitude={0.25}
              speed={0.8}
            />
          </div>
          <div className="absolute right-[-4rem] top-20 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
          <div className="absolute bottom-12 left-[-3rem] h-56 w-56 rounded-full bg-[#dcecff]/60 blur-3xl" />


        <div className="relative mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-slate-500">A glimpse into my life</p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] text-slate-800 md:text-7xl">
              Hello, <br />
              <span className="block text-slate-600">
                <span className="font-patung text-7xl md:text-9xl">I’m Kiley.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              Aspiring designer and creative with an interest in project management, currently studying Digital Enterprise Management <br /> at the Univeristy of Toronto.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => window.scrollTo({ top: window.innerHeight * 0.95, behavior: "smooth" })}
                className="rounded-full border border-white/70 bg-white px-6 py-3 text-sm tracking-[0.2em] text-slate-700 shadow-sm transition hover:-translate-y-0.5"
              >
                View Work
              </button>
              <button
                onClick={() => setCurrentPage("Contact")}
                className="rounded-full border border-[#bfd9ff] bg-[#dcebff] px-6 py-3 text-sm tracking-[0.2em] text-slate-700 transition hover:-translate-y-0.5"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-[2rem] border border-white/70 bg-white/55 p-4 shadow-[0_30px_80px_rgba(123,150,196,0.14)] backdrop-blur-xl">
              <div className="rounded-[1.8rem] bg-gradient-to-br from-[#edf6ff] via-[#dcebff] to-[#c8dcff] p-6">
                <div className="mb-6 flex items-center justify-between text-slate-500">
                  <span className="text-xs uppercase tracking-[0.35em]">Selected Moodboard</span>
                  <span className="text-lg">✦</span>
                </div>
              <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
                <div className="grid gap-4">
                  <div className="rounded-[1.5rem] bg-white/65 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Colour</p>
                    <p className="mt-3 font-serif text-3xl text-slate-700">Pastel Blue</p>
                  </div>

                  <div className="rounded-[1.5rem] bg-white/50 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Aesthetic</p>
                    <p className="mt-3 font-serif text-3xl text-slate-700">Minimal, Soft, Luxurious</p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] bg-white/55 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Portrait</p>

                  <div className="mt-4 flex h-full min-h-[260px] items-center justify-center overflow-hidden rounded-[1.3rem] border border-white/70 bg-[#eaf4ff]">
                    <img
                      src="/kiley.jpg"
                      alt="Portrait"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-slate-500">Learn more about my work</p>
              <h2 className="mt-3 font-patung text-7xl text-slate-800 md:text-7xl">
                Projects
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-slate-600">
              Explore selected work by clicking a tab to open the section below.
            </p>
          </div>

          <div className="relative">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-3">
              {projects.map((project, index) => (
                <ProjectTab
                  key={project.title}
                  project={project}
                  index={index}
                  active={activeProject === index}
                  onClick={() => setActiveProject(index)}
                  onHover={() => setHoveredProject(index)}
                  onLeave={() => setHoveredProject(null)}
                />
              ))}
            </div>

            <div className="relative z-10 -mt-1 rounded-[2.2rem] border border-white/70 bg-white/78 p-8 shadow-[0_24px_60px_rgba(113,144,196,0.14)] backdrop-blur-xl">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    Open Tab
                  </p>
                  <h3 className="mt-3 font-serif text-4xl text-slate-800">
                    {projects[activeProject].title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-slate-500">
                    <span>{projects[activeProject].type}</span>
                    <span>•</span>
                    <span>{projects[activeProject].year}</span>
                  </div>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                    {projects[activeProject].description}
                  </p>
                </div>

                <div className="rounded-[1.8rem] bg-gradient-to-br from-[#edf5ff] to-[#bfd9ff] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Preview Panel
                  </p>
                  <div className="mt-4 rounded-[1.4rem] border border-white/70 bg-white/65 p-5">
                    <p className="font-serif text-3xl text-slate-800">
                      {projects[activeProject].previewTitle}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {projects[activeProject].previewText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );

  const AboutPage = () => {
  const tabs = Object.keys(aboutSections);
  const section = aboutSections[aboutTab];

  return (
    <section className="min-h-screen px-6 pb-20 pt-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-slate-500">Who I am</p>
            <h1 className="mt-3 font-patung text-8xl text-slate-800 md:text-8xl">
              About me
            </h1>
          </div>
          <p className="max-w-lg text-sm leading-7 text-slate-600">
            Explore different parts of my background by hovering over each tab, then click to open the section below.
          </p>
        </div>

        <div className="relative">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-3">
            {tabs.map((tab, index) => {
              const tabSection = aboutSections[tab];

              return (
                <AboutTab
                  key={tab}
                  project={{
                    title: tab,
                    type: "About Section",
                    year: "",
                    description: tabSection.body,
                    previewTitle: tabSection.title,
                    previewText: tabSection.extras[0],
                  }}
                  index={index}
                  active={aboutTab === tab}
                  onClick={() => setAboutTab(tab)}
                  onHover={() => setHoveredProject(index)}
                  onLeave={() => setHoveredProject(null)}
                />
              );
            })}
          </div>

          <div className="relative z-10 -mt-1 rounded-[2.2rem] border border-white/70 bg-white/78 p-8 shadow-[0_24px_60px_rgba(113,144,196,0.14)] backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  Open Tab
                </p>
                <h2 className="mt-3 font-serif text-4xl text-slate-800">
                  {section.title}
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
                  {section.body}
                </p>
              </div>

              <div className="rounded-[1.8rem] bg-gradient-to-br from-[#edf5ff] to-[#bfd9ff] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Highlights
                </p>
                <div className="mt-4 grid gap-4">
                  {section.extras.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.4rem] border border-white/70 bg-white/65 p-5 text-sm leading-7 text-slate-600"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


/*
const CreativePage = () => (
  <section className="min-h-screen px-6 pb-20 pt-32 md:px-12 lg:px-20">
    <div className="mx-auto max-w-6xl">
      <div className="rounded-[2.2rem] border border-white/70 bg-white/70 p-8 shadow-[0_18px_50px_rgba(113,144,196,0.12)] md:p-10">
        <p className="text-xs uppercase tracking-[0.45em] text-slate-500">Creative</p>
        <h1 className="mt-3 font-serif text-5xl text-slate-800 md:text-6xl">
          This page is not ready yet! :(
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
          For now, here’s a tiny game: catch the glowing orb as many times as you can.
        </p>

        <div className="mt-10 rounded-[2rem] bg-gradient-to-br from-[#edf6ff] to-[#cadfff] p-4 md:p-6">
          <div className="mb-4 text-sm text-slate-600">
            <p>
              Score: <span className="font-semibold">{creativeScore}</span>
            </p>
          </div>

          <div
            className="relative h-[420px] overflow-hidden rounded-[1.7rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(226,239,255,0.85))]"
            style={{ maxWidth: `${gameWidth}px` }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_55%)]" />

            <div
              onMouseDown={() => {
                setCreativeScore((s) => s + 1);
                setDx((oldDx) => oldDx * 1.08);
                setDy((oldDy) => oldDy * 1.08);
              }}
              className="absolute z-10 h-16 w-16 cursor-pointer rounded-full border border-white/80 bg-white/90 shadow-[0_0_60px_rgba(255,255,255,0.95)]"
              style={{
                left: `${orbX}px`,
                top: `${orbY}px`,
              }}
              aria-label="Catch orb"
            >
              <div className="h-full w-full rounded-full bg-gradient-to-br from-[#fdfefe] via-[#dceeff] to-[#bdd8ff]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
*/

const CreativePage = () => (
  <section className="min-h-screen px-6 pb-20 pt-32 md:px-12 lg:px-20">
    <div className="mx-auto max-w-6xl">
      <div className="rounded-[2.2rem] border border-white/70 bg-white/70 p-8 shadow-[0_18px_50px_rgba(113,144,196,0.12)] md:p-10">
        <p className="text-xs uppercase tracking-[0.45em] text-slate-500">Creative</p>
        <h1 className="mt-3 font-patung text-7xl text-slate-800 md:text-7xl">
          This page is not ready yet! :(
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
          For now, here’s a simple game: click the glowing orb as many times as you can in 10 seconds.
        </p>

        <div className="mt-10 rounded-[2rem] bg-gradient-to-br from-[#edf6ff] to-[#cadfff] p-4 md:p-6">
          <div
            className="mx-auto mb-4 flex w-full flex-wrap items-center justify-between gap-4 text-sm text-slate-600"
            style={{ maxWidth: `${gameWidth}px` }}
          >
            <p>
              Score: <span className="font-semibold">{creativeScore}</span>
            </p>
            <p>
              High Score: <span className="font-semibold">{highScore}</span>
            </p>
            <p>
              Time Left: <span className="font-semibold">{timeLeft}s</span>
            </p>
          </div>

          <div className="block md:hidden">
            <div className="mx-auto rounded-[1.7rem] border border-white/70 bg-white/60 p-10 text-center">
              <h2 className="font-serif text-3xl text-slate-800">Mobile version coming soon</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                This little game works best on a larger screen for now.
              </p>
            </div>
          </div>

          <div
            className="relative mx-auto hidden h-[420px] w-full overflow-hidden rounded-[1.7rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(226,239,255,0.85))] md:block"
            style={{ maxWidth: `${gameWidth}px` }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_55%)]" />

            {!gameActive && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-white/20 backdrop-blur-[1px]">
                <p className="text-center text-lg text-slate-700">
                  {timeLeft === 0 ? "Time’s up!" : "Ready to play?"}
                </p>
                <button
                  type="button"
                  onClick={startGame}
                  className="rounded-full border border-white/80 bg-white/90 px-6 py-3 text-sm tracking-[0.18em] text-slate-700 transition hover:scale-105"
                >
                  {timeLeft === 0 ? "Play Again" : "Start Game"}
                </button>
              </div>
            )}

            {gameActive && (
              <button
                type="button"
                onClick={handleOrbClick}
                className="absolute z-10 h-20 w-20 cursor-pointer rounded-full border border-white/80 bg-white/90 shadow-[0_0_60px_rgba(255,255,255,0.95)] transition hover:scale-110 active:scale-95"
                style={{
                  left: `${orbPosition.x}px`,
                  top: `${orbPosition.y}px`,
                }}
                aria-label="Catch orb"
              >
                <span className="pointer-events-none block h-full w-full rounded-full bg-gradient-to-br from-[#fdfefe] via-[#dceeff] to-[#bdd8ff]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formSending, setFormSending] = useState(false);

  return (
    <section className="min-h-screen px-6 pb-20 pt-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.45em] text-slate-500">Contact</p>
          <h1 className="mt-3 font-patung text-8xl text-slate-800 md:text-8xl">
            Let’s connect.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Whether you want to collaborate, ask a question, or just say hi, feel free to send me a message.
          </p>
        </div>

        <div className="rounded-[2.2rem] border border-white/70 bg-white/70 p-6 shadow-[0_18px_50px_rgba(113,144,196,0.12)] md:p-8">
          {!submitted ? (
            <form
              action="https://formsubmit.co/kileyzheng@gmail.com"
              method="POST"
              target="hidden_iframe"
              onSubmit={() => setFormSending(true)}
              className="space-y-5"
            >
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-[1rem] border border-slate-200 bg-white/80 px-5 py-4 text-lg text-slate-700 outline-none transition placeholder:font-serif placeholder:text-slate-400 focus:border-[#bfd9ff] focus:ring-2 focus:ring-[#dcebff]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-[1rem] border border-slate-200 bg-white/80 px-5 py-4 text-lg text-slate-700 outline-none transition placeholder:font-serif placeholder:text-slate-400 focus:border-[#bfd9ff] focus:ring-2 focus:ring-[#dcebff]"
              />

              <textarea
                name="message"
                rows="3"
                placeholder="Message"
                required
                className="w-full rounded-[1rem] border border-slate-200 bg-white/80 px-5 py-4 text-lg text-slate-700 outline-none transition placeholder:font-serif placeholder:text-slate-400 focus:border-[#bfd9ff] focus:ring-2 focus:ring-[#dcebff]"
              />

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="rounded-full border border-[#bfd9ff] bg-[#dcebff] px-6 py-3 text-sm tracking-[0.2em] text-slate-700 transition hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </div>
            </form>
          ) : (
            <div className="rounded-[1.5rem] bg-gradient-to-br from-[#edf6ff] to-[#dcebff] p-8 text-center">
              <h2 className="font-serif text-4xl text-slate-800">Thank you!</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Your message has been sent successfully. I will get back to you as soon as I can.
              </p>
            </div>
          )}

          <iframe
            name="hidden_iframe"
            style={{ display: "none" }}
            onLoad={() => {
              if (formSending) {
                setSubmitted(true);
                setFormSending(false);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};

  return (
    <div
      className="min-h-screen bg-[#f7fbff] text-slate-800"
      style={{
        fontFamily: '"Inter", "Avenir Next", "Helvetica Neue", sans-serif',
        backgroundImage:
          "linear-gradient(180deg, rgba(248,252,255,1) 0%, rgba(237,246,255,1) 48%, rgba(231,242,255,1) 100%)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      <MainNav />

      {currentPage === "Portfolio" && <PortfolioPage />}
      {currentPage === "About" && <AboutPage />}
      {currentPage === "Creative" && <CreativePage />}
      {currentPage === "Contact" && <ContactPage />}

      {/* Future React Bits ideas:
          - Replace hero panel or folder open transitions with animated reveal components.
          - Add magnetic buttons, text pressure/blur reveal, or smooth card hover effects.
          - Integrate only the specific components you want instead of a full library install.
      */}
    </div>
  );
}
