import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SplashScreen from './components/SplashScreen.jsx';
import HeroSection from './components/HeroSection.jsx';
import DashboardPreview from './components/DashboardPreview.jsx';
import AssistantBubble from './components/AssistantBubble.jsx';

function AmbientBackground() {
  // Subtle animated gradient backdrop
  return (
    <div className="pointer-events-none fixed inset-0 opacity-90">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1020] via-[#0d0f1a] to-[#0a1022]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_20%,rgba(56,189,248,0.10),transparent),radial-gradient(60%_50%_at_80%_30%,rgba(168,85,247,0.10),transparent),radial-gradient(70%_50%_at_50%_90%,rgba(99,102,241,0.10),transparent)]" />
    </div>
  );
}

function Navbar({ onHeroClick, onDashboardClick }) {
  return (
    <div className="fixed left-0 right-0 top-0 z-30 mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl border border-cyan-300/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500" />
        <span className="bg-gradient-to-r from-indigo-100 via-cyan-100 to-violet-200 bg-clip-text text-sm font-bold tracking-wide text-transparent md:text-base">
          AI Infinity
        </span>
      </div>
      <div className="hidden gap-2 md:flex">
        <button onClick={onHeroClick} className="rounded-xl px-3 py-2 text-sm text-cyan-100 transition hover:bg-white/10">
          Home
        </button>
        <button onClick={onDashboardClick} className="rounded-xl px-3 py-2 text-sm text-cyan-100 transition hover:bg-white/10">
          Dashboard
        </button>
        <a href="#about" className="rounded-xl px-3 py-2 text-sm text-cyan-100 transition hover:bg-white/10">
          About
        </a>
      </div>
      <a
        href="#launch"
        className="rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-violet-600 px-3 py-2 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(56,189,248,0.35)] hover:brightness-110"
      >
        Launch
      </a>
    </div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1800);
    return () => clearTimeout(t);
  }, []);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToDashboard = () => {
    const el = document.getElementById('dashboard');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-cyan-50 antialiased">
      <AmbientBackground />

      {showSplash && <SplashScreen />}

      <Navbar onHeroClick={scrollToHero} onDashboardClick={scrollToDashboard} />

      <main>
        <div ref={heroRef}>
          <HeroSection onLaunchClick={scrollToDashboard} />
        </div>

        <DashboardPreview />

        {/* About teaser */}
        <section id="about" className="relative mx-auto max-w-5xl px-6 py-20">
          <motion.h3
            className="bg-gradient-to-r from-indigo-100 via-cyan-100 to-violet-200 bg-clip-text text-2xl font-bold text-transparent md:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Built with OpenAI + LangChain + Love
          </motion.h3>
          <motion.p
            className="mt-3 max-w-2xl text-cyan-100/85"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            This demo showcases the visual identity and interaction philosophy of AI Infinity. The full experience includes an agent builder, analytics, and a glassy workspace.
          </motion.p>
        </section>
      </main>

      <AssistantBubble />

      <footer className="mx-auto max-w-6xl px-6 pb-8 pt-6 text-center text-sm text-cyan-200/70">
        © {new Date().getFullYear()} AI Infinity. All rights reserved.
      </footer>
    </div>
  );
}
