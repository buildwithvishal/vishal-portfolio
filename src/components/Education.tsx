import { useReveal } from '@/hooks/useIntersectionObserver';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';

const timeline = [
  {
    period: '2022 — 2026',
    title: 'B.Tech in Computer Science (AI)',
    org: 'Indian Institute of Information Technology, Bhopal',
    detail:
      'Pursuing CSE with specialization in Artificial Intelligence. Core coursework in DSA, OS, DBMS, Computer Networks, and Machine Learning.',
    icon: GraduationCap,
    highlight: true,
  },
  {
    period: 'Ongoing',
    title: 'Competitive Programming Journey',
    org: 'Codeforces · LeetCode · CodeChef',
    detail:
      'Active competitive programmer — Codeforces Specialist (Max 1456), CodeChef 2★ (Max 1553), 200+ problems solved across platforms. Global Rank 586 in CodeChef Starters 244.',
    icon: BookOpen,
    highlight: false,
  },
  {
    period: '2024',
    title: 'Full Stack & AI Development',
    org: 'Self-Driven & Project Based',
    detail:
      'Built production-grade full-stack applications with React, Node.js, Supabase, and AI integrations. Shipped CareerPilot AI as flagship project.',
    icon: Award,
    highlight: false,
  },
];

export default function Education() {
  useReveal();

  return (
    <section id="education" className="relative py-24 px-6 bg-[#141414] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#E50914]/40 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="reveal mb-16 text-center">
          <span className="text-[#E50914] text-sm font-bold tracking-[0.3em] uppercase mb-3 block">
            My Journey
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-white">
            Education & <span className="text-[#E50914]">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#E50914] via-[#E50914]/40 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={item.title}
                className="reveal-left relative pl-20"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Node */}
                <div
                  className={`absolute left-0 top-1 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    item.highlight
                      ? 'bg-[#E50914] text-white shadow-lg shadow-[#E50914]/40'
                      : 'glass-card text-[#E50914] border border-[#E50914]/30'
                  }`}
                >
                  <item.icon size={22} />
                </div>

                {/* Card */}
                <div className="glass-card rounded-xl p-6 netflix-card group">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={14} className="text-[#E50914]" />
                    <span className="text-[#E50914] text-xs font-semibold tracking-wider uppercase">{item.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#E50914] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#b3b3b3] text-sm font-medium mb-3">{item.org}</p>
                  <p className="text-[#808080] text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
