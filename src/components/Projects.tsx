import { useReveal } from '@/hooks/useIntersectionObserver';
import { Github, ExternalLink, Brain } from 'lucide-react';

const project = {
  title: 'CareerPilot AI',
  tagline: 'AI-Powered Placement Preparation Platform',
  description:
    'A full-stack AI platform that helps students prepare for placements with personalized roadmaps, AI-powered mock interviews, resume analysis, and smart question recommendations based on skill gaps.',
  tags: ['React.js', 'Node.js', 'Express.js', 'LangChain', 'MySQL', 'ChromaDB', 'Tailwind CSS'],
  github: 'https://github.com/buildwithvishal/careerpilot-ai',
  icon: Brain,
  accent: 'from-[#E50914] to-[#ff5252]',
};

export default function Projects() {
  useReveal();

  return (
    <section id="projects" className="relative py-24 px-6 bg-[#141414] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#E50914]/40 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal mb-16 text-center">
          <span className="text-[#E50914] text-sm font-bold tracking-[0.3em] uppercase mb-3 block">
            Featured Work
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-white">
            My <span className="text-[#E50914]">Projects</span>
          </h2>
        </div>

        {/* Featured project */}
        <div className="reveal">
          <div className="relative rounded-2xl overflow-hidden glass-card group">
            <div className={`h-2 bg-gradient-to-r ${project.accent}`} />
            <div className="grid md:grid-cols-2 gap-0">
              {/* Visual side */}
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center p-8 overflow-hidden">
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E50914]/15 rounded-full blur-[80px]" />

                <div className="relative z-10 text-center">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${project.accent} flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-[#E50914]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <project.icon size={44} className="text-white" />
                  </div>
                  <div className="font-bebas text-3xl text-white tracking-wider">{project.title}</div>
                  <div className="text-[#808080] text-sm mt-1">Featured Project</div>
                </div>
              </div>

              {/* Info side */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-[#E50914] text-xs font-bold tracking-widest uppercase mb-3">
                  <span className="w-8 h-px bg-[#E50914]" />
                  Flagship Project
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-[#E50914] text-sm font-medium mb-4">{project.tagline}</p>
                <p className="text-[#b3b3b3] text-base leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#E50914] hover:bg-[#b20710] text-white text-sm font-semibold px-5 py-2.5 rounded transition-all duration-200 hover:scale-105"
                  >
                    <Github size={16} /> View Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white text-sm font-semibold px-5 py-2.5 rounded transition-all duration-200 hover:bg-white/5"
                  >
                    <ExternalLink size={16} /> Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
