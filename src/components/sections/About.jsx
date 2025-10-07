import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Material-UI",
    "Redux",
    "Next.js",
    "Github",
    "Vercel"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mb-8">
            <p className="text-gray-300 mb-6 text-center">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-center">Frontend Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-6 text-center">🎓 Education</h3>
            <div className="space-y-4 text-gray-300">
              <div className="p-4 rounded-lg bg-white/5">
                <p className="font-semibold text-white mb-1">B.Tech in Computer Science</p>
                <p className="text-sm text-gray-400">REGENT EDUCATION AND RESEARCH FOUNDATION</p>
                <p className="text-sm">2019-2023 • CGPA: 9.45</p>
              </div>

              <div className="p-4 rounded-lg bg-white/5">
                <p className="font-semibold text-white mb-1">Higher Secondary Education</p>
                <p className="text-sm text-gray-400">UTTARPARA GOVT. HIGH SCHOOL</p>
                <p className="text-sm">2019 • Percentage: 62%</p>
              </div>

              <div className="p-4 rounded-lg bg-white/5">
                <p className="font-semibold text-white mb-1">Secondary Education</p>
                <p className="text-sm text-gray-400">UTTARPARA MODEL HIGH SCHOOL</p>
                <p className="text-sm">2017 • Percentage: 67%</p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};