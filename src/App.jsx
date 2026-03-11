export default function PastelLuxuryPortfolio() {
  const { useMemo, useState, useEffect } = React;

  const navItems = ["Portfolio", "About", "Creative", "Contact"];
  const [currentPage, setCurrentPage] = useState("Portfolio");
  const [activeProject, setActiveProject] = useState(0);
  const [aboutTab, setAboutTab] = useState("Who I Am");
  const [creativeScore, setCreativeScore] = useState(0);
  const [orbPosition, setOrbPosition] = useState({ x: 50, y: 50 });
  const [orbsCaught, setOrbsCaught] = useState(0);

  const projects = useMemo(
    () => [
      {
        title: "Editorial Brand System",
        type: "Identity / Art Direction",
        year: "2026",
        description:
          "A refined visual identity and launch system designed to feel polished, warm, and quietly expressive.",
      },
      {
        title: "Luxury Product Landing Page",
        type: "Web Design / UI",
        year: "2025",
        description:
          "A soft, high-end landing page concept balancing calm whitespace, elegant type, and subtle motion.",
      },
      {
        title: "Social Content Suite",
        type: "Campaign / Motion",
        year: "2025",
        description:
          "A modular campaign kit for social storytelling with premium layouts and a playful visual rhythm.",
      },
      {
        title: "Packaging Storyboard",
        type: "Concept / Print",
        year: "2024",
        description:
          "A presentation-led concept exploring tactile packaging, tonal blues, and boutique-level detail.",
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

  useEffect(() => {
    if (currentPage !== "Creative") return;
    const moveOrb = () => {
      setOrbPosition({
        x: Math.floor(Math.random() * 78) + 10,
        y: Math.floor(Math.random() * 58) + 20,
      });
    };
    moveOrb();
  }, [currentPage, orbsCaught]);

  const FolderCard = ({ title, subtitle, index, onClick, active = false }) => {
    const gradients = [
      "from-[#eaf4ff] to-[#d8e9ff]",
      "from-[#dceeff] to-[#bfdcff]",
      "from-[#c7ddff] to-[#a8cbff]",
      "from-[#adcaff] to-[#7daaf3]",
    ];

    return (
      <button
        onClick={onClick}
        className={`group relative h-40 w-full rounded-[1.8rem] border border-white/70 bg-gradient-to-br ${gradients[index % gradients.length]} p-5 text-left shadow-[0_18px_50px_rgba(113,144,196,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(113,144,196,0.2)] ${
          active ? "ring-2 ring-white/90" : ""
        }`}
      >
        <div className="absolute left-5 top-[-10px] h-7 w-24 rounded-t-[1rem] border border-b-0 border-white/70 bg-white/55 backdrop-blur" />
        <div className="mt-5 flex h-full flex-col justify-between">
          <div>
            <p className="font-serif text-xl tracking-[0.08em] text-slate-700">{title}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-500">{subtitle}</p>
          </div>
          <span className="text-sm text-slate-600 transition group-hover:translate-x-1">Open folder →</span>
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
            className={`rounded-full px-4 py-2 text-sm tracking-[0.18em] transition ${
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),rgba(224,238,255,0.8),rgba(209,228,252,0.6),transparent_65%)]" />
        <div className="absolute right-[-4rem] top-20 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute bottom-12 left-[-3rem] h-56 w-56 rounded-full bg-[#dcecff]/60 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-slate-500">Portfolio / Designer / Creative</p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] text-slate-800 md:text-7xl">
              Soft luxury,
              <span className="block italic text-slate-600">with personality.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              A pastel-blue portfolio concept inspired by refined luxury websites, balanced with a warm, personal, slightly cute visual language.
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
                  <span className="text-xs uppercase tracking-[0.35em]">Selected Mood</span>
                  <span className="text-lg">✦</span>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-white/65 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Aesthetic</p>
                    <p className="mt-3 font-serif text-3xl text-slate-700">Pastel Blue</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-white/50 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Tone</p>
                    <p className="mt-3 font-serif text-3xl text-slate-700">Cute + Professional</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-white/50 p-5 md:col-span-2">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Style Notes</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Centered navigation, calm whitespace, editorial typography, folder-inspired layouts, and soft gradient accents.
                    </p>
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
              <p className="text-xs uppercase tracking-[0.45em] text-slate-500">Work</p>
              <h2 className="mt-3 font-serif text-4xl text-slate-800 md:text-5xl">Projects in folders</h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-slate-600">
              Each folder can open into a featured project, case study, or external link once your real work is ready.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, index) => (
              <FolderCard
                key={project.title}
                title={project.title}
                subtitle={project.type}
                index={index}
                active={activeProject === index}
                onClick={() => setActiveProject(index)}
              />
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/65 p-8 shadow-[0_18px_50px_rgba(113,144,196,0.12)] backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Featured Project</p>
                <h3 className="mt-3 font-serif text-4xl text-slate-800">{projects[activeProject].title}</h3>
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
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Case Study Placeholder</p>
                <div className="mt-4 rounded-[1.3rem] border border-white/70 bg-white/65 p-5 text-sm leading-7 text-slate-600">
                  Replace this panel with project images, a short process summary, outcomes, or a button to a dedicated project page.
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
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.45em] text-slate-500">About</p>
            <h1 className="mt-3 font-serif text-5xl text-slate-800 md:text-6xl">Folder-style profile</h1>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {tabs.map((tab, index) => (
              <FolderCard
                key={tab}
                title={tab}
                subtitle="About section"
                index={index}
                active={aboutTab === tab}
                onClick={() => setAboutTab(tab)}
              />
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_18px_50px_rgba(113,144,196,0.12)]">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Open Folder</p>
            <h2 className="mt-3 font-serif text-4xl text-slate-800">{section.title}</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">{section.body}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {section.extras.map((item) => (
                <div key={item} className="rounded-[1.4rem] bg-gradient-to-br from-white to-[#e7f2ff] p-5 text-sm leading-7 text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const CreativePage = () => (
    <section className="min-h-screen px-6 pb-20 pt-32 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2.2rem] border border-white/70 bg-white/70 p-8 shadow-[0_18px_50px_rgba(113,144,196,0.12)] md:p-10">
          <p className="text-xs uppercase tracking-[0.45em] text-slate-500">Creative</p>
          <h1 className="mt-3 font-serif text-5xl text-slate-800 md:text-6xl">This page is not ready yet! :(</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            For now, here’s a tiny game: catch the glowing orb as many times as you can.
          </p>

          <div className="mt-10 rounded-[2rem] bg-gradient-to-br from-[#edf6ff] to-[#cadfff] p-4 md:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
              <p>Score: <span className="font-semibold">{creativeScore}</span></p>
              <p>Orbs caught: <span className="font-semibold">{orbsCaught}</span></p>
            </div>
            <div className="relative h-[420px] overflow-hidden rounded-[1.7rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(226,239,255,0.85))]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_55%)]" />
              <button
                onClick={() => {
                  setCreativeScore((s) => s + 10);
                  setOrbsCaught((c) => c + 1);
                }}
                className="absolute h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_60px_rgba(255,255,255,0.95)] transition hover:scale-110"
                style={{ left: `${orbPosition.x}%`, top: `${orbPosition.y}%` }}
                aria-label="Catch orb"
              >
                <span className="block h-full w-full rounded-full bg-gradient-to-br from-[#fdfefe] via-[#dceeff] to-[#bdd8ff]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ContactPage = () => (
    <section className="min-h-screen px-6 pb-20 pt-32 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_18px_50px_rgba(113,144,196,0.12)]">
          <p className="text-xs uppercase tracking-[0.45em] text-slate-500">Contact</p>
          <h1 className="mt-3 font-serif text-5xl text-slate-800 md:text-6xl">Let’s create something beautiful.</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            Add your email, social links, inquiry form, or booking details here.
          </p>
        </div>
        <div className="rounded-[2rem] bg-gradient-to-br from-[#ecf5ff] to-[#c3dbff] p-8 shadow-[0_18px_50px_rgba(113,144,196,0.1)]">
          <div className="rounded-[1.6rem] border border-white/80 bg-white/75 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Info</p>
            <div className="mt-5 space-y-4 text-slate-600">
              <p>Email / hello@yourname.com</p>
              <p>Instagram / @yourhandle</p>
              <p>LinkedIn / your name</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

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

      <div className="fixed right-6 top-28 z-40 hidden rounded-full border border-white/80 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-500 shadow-sm backdrop-blur md:block">
        Pastel Blue Studio
      </div>

      {currentPage === "Portfolio" && <PortfolioPage />}
      {currentPage === "About" && <AboutPage />}
      {currentPage === "Creative" && <CreativePage />}
      {currentPage === "Contact" && <ContactPage />}

      <div className="fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-slate-500 backdrop-blur md:block">
        Designed for soft luxury + personality
      </div>

      {/* Future React Bits ideas:
          - Replace hero panel or folder open transitions with animated reveal components.
          - Add magnetic buttons, text pressure/blur reveal, or smooth card hover effects.
          - Integrate only the specific components you want instead of a full library install.
      */}
    </div>
  );
}
