import { Heart, ArrowUp } from 'lucide-react';

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/vishal-chaudhary-v20/' },
  { name: 'GitHub', href: 'https://github.com/buildwithvishal' },
  { name: 'LeetCode', href: 'https://leetcode.com/u/vishalwillsolve/' },
  { name: 'Codeforces', href: 'https://codeforces.com/profile/vishalwillhandle' },
  { name: 'CodeChef', href: 'https://www.codechef.com/users/vishalnotdone' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#E50914]/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-bebas text-3xl text-[#E50914] tracking-widest mb-3">Vishal Chaudhary</div>
            <p className="text-[#808080] text-sm leading-relaxed max-w-xs">
              Software Engineer & Competitive Programmer crafting intelligent, high-performance software.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Achievements', 'Education'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#808080] hover:text-[#E50914] text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider">Connect</h4>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#808080] hover:text-[#E50914] text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#404040] group-hover:bg-[#E50914] rounded-full transition-colors" />
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-[#404040] text-xs">
            © {new Date().getFullYear()} Vishal Chaudhary · Designed & Developed by Vishal
          </p>
          <a
            href="#hero"
            className="flex items-center gap-2 text-[#808080] hover:text-white text-xs transition-colors group"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#E50914] group-hover:bg-[#E50914]/10 transition-all">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
