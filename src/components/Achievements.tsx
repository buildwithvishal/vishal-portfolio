import { useReveal } from '@/hooks/useIntersectionObserver';
import { Trophy, Medal, Target, TrendingUp, Award, Star, Flag } from 'lucide-react';

const platforms = [
  {
    name: 'Codeforces',
    handle: 'vishalwillhandle',
    rating: '1456',
    rank: 'Specialist (Max)',
    href: 'https://codeforces.com/profile/vishalwillhandle',
    icon: TrendingUp,
    color: 'text-blue-400',
    accent: 'from-blue-500/20 to-blue-700/10',
    border: 'border-blue-500/30',
  },
  {
    name: 'LeetCode',
    handle: 'vishalwillsolve',
    rating: '75+ Questions Solved',
    rank: 'Problem Solver',
    href: 'https://leetcode.com/u/vishalwillsolve/',
    icon: Target,
    color: 'text-amber-400',
    accent: 'from-amber-500/20 to-orange-700/10',
    border: 'border-amber-500/30',
  },
  {
    name: 'CodeChef',
    handle: 'vishalnotdone',
    rating: '1553',
    rank: '2★ (Max)',
    href: 'https://www.codechef.com/users/vishalnotdone',
    icon: Trophy,
    color: 'text-green-400',
    accent: 'from-green-500/20 to-emerald-700/10',
    border: 'border-green-500/30',
  },
];

const achievements = [
  {
    title: 'Codeforces Specialist',
    detail: 'Achieved Specialist rank with a maximum rating of 1456 on Codeforces.',
    icon: Award,
  },
  {
    title: 'CodeChef 2★',
    detail: 'Reached 2★ rating with a maximum of 1553 on CodeChef.',
    icon: Trophy,
  },
  {
    title: '200+ DSA Problems Solved',
    detail: 'Solved 200+ problems across LeetCode, Codeforces, and CodeChef covering all core topics.',
    icon: Medal,
  },
  {
    title: 'Global Rank 586 — CodeChef Starters 244',
    detail: 'Achieved a global rank of 586 in CodeChef Starters 244 contest.',
    icon: Flag,
  },
  {
    title: 'JEE Main 98.67 Percentile',
    detail: 'Scored 98.67 percentile in JEE Main and qualified for JEE Advanced.',
    icon: Star,
  },
];

export default function Achievements() {
  useReveal();

  return (
    <section id="achievements" className="relative py-24 px-6 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#E50914]/8 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="reveal mb-16 text-center">
          <span className="text-[#E50914] text-sm font-bold tracking-[0.3em] uppercase mb-3 block">
            Competitive Record
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-white">
            Achieve<span className="text-[#E50914]">ments</span>
          </h2>
        </div>

        {/* Platform cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {platforms.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal netflix-card group glass-card rounded-xl p-6 border ${p.border} bg-gradient-to-br ${p.accent}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center ${p.color}`}>
                  <p.icon size={22} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#808080] font-semibold">View Profile</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
              <p className="text-[#808080] text-sm mb-4">@{p.handle}</p>
              <div className="flex items-end justify-between">
                <div>
                  <div className={`font-bebas text-3xl ${p.color}`}>{p.rating}</div>
                  <div className="text-[#b3b3b3] text-xs mt-0.5">{p.rank}</div>
                </div>
                <p.icon
                  size={20}
                  className="text-[#404040] group-hover:text-[#E50914] group-hover:translate-x-1 transition-all"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Achievements list */}
        <div className="grid md:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className="reveal-left flex gap-5 p-6 rounded-xl glass-card netflix-card group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#E50914]/15 border border-[#E50914]/30 flex items-center justify-center text-[#E50914] group-hover:scale-110 group-hover:bg-[#E50914]/25 transition-all">
                <a.icon size={22} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">{a.title}</h3>
                <p className="text-[#808080] text-sm leading-relaxed">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
