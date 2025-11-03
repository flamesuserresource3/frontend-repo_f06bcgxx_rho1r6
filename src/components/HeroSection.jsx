import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function HeroSection({ onLaunchClick }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient glow overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(56,189,248,0.18),transparent_60%)]" />

      {/* Hero content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="bg-gradient-to-r from-indigo-100 via-cyan-100 to-violet-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            AI Infinity — Your Intelligent Companion
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base text-cyan-100/90 md:text-lg"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Experience autonomous agents with immersive 3D visuals, fluid motion, and a glassmorphic interface that feels alive.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <button
              onClick={onLaunchClick}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.35)] transition hover:brightness-110 hover:shadow-[0_16px_40px_rgba(56,189,248,0.45)]"
            >
              <Rocket className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              Launch My AI Agent
            </button>

            <button
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 backdrop-blur-md transition hover:border-cyan-300/50 hover:bg-white/10"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <Sparkles className="h-5 w-5" /> Explore
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
