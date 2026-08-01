import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Code2, ExternalLink } from 'lucide-react';

const roles = [
  'Software Engineer',
  'Competitive Programmer',
  'Full Stack Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((r) => (r + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [charIndex, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 bg-[#141414]">
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Red glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E50914]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#E50914]/8 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E50914]/5 rounded-full blur-[150px]" />
        {/* Scanline effect */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
          }}
        />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 hero-vignette pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-[#E50914]/15 border border-[#E50914]/30 rounded-full px-4 py-1.5 text-sm text-[#ff6b6b] font-medium mb-8 animate-fade-in"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <span className="w-2 h-2 bg-[#E50914] rounded-full animate-pulse" />
          Available for Opportunities
        </div>

        {/* Name */}
        <h1
          className="justify-center font-bebas text-[clamp(4rem,12vw,9rem)] leading-none tracking-wider mb-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          <span className="text-white">VISHAL</span>
          <span className="text-[#E50914] ml-4">CHAUDHARY</span>
        </h1>

        {/* Typewriter */}
        <div
          className="text-[clamp(1.2rem,3vw,2rem)] font-semibold text-[#b3b3b3] mb-6 h-10 flex items-center justify-center animate-fade-in opacity-0"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <span className="text-white">{displayed}</span>
          <span className="ml-0.5 w-0.5 h-7 bg-[#E50914] inline-block animate-pulse" />
        </div>

        {/* Subtitle */}
        <p
          className="text-[#808080] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in opacity-0"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          B.Tech CSE & AI @ IIIT Bhopal · Codeforces Specialist (1456) · CodeChef 2★ (1553) · 200+ DSA Problems
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
        >
          <a
            href="#projects"
            className="group relative overflow-hidden bg-[#E50914] hover:bg-[#b20710] text-white font-semibold px-8 py-3.5 rounded text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#E50914]/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ExternalLink size={16} />
            </span>
          </a>
          <a
            href="#contact"
            className="border border-white/20 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded text-sm transition-all duration-200 hover:bg-white/5 hover:scale-105 active:scale-95"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-5 animate-fade-in opacity-0"
          style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
        >
          {[
            { href: 'https://www.linkedin.com/in/vishal-chaudhary-v20/', icon: Linkedin, label: 'LinkedIn' },
            { href: 'https://github.com/buildwithvishal', icon: Github, label: 'GitHub' },
            { href: 'https://leetcode.com/u/vishalwillsolve/', icon: Code2, label: 'LeetCode' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-[#808080] hover:text-white hover:border-[#E50914] hover:bg-[#E50914]/10 transition-all duration-200 hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
          <span className="text-[#404040] text-xs ml-2">Find me online</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#404040] hover:text-[#E50914] transition-colors animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
