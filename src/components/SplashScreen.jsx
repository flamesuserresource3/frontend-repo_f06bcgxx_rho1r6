import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-cyan-900">
      {/* Particle glow backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.span
            // Using key with index is fine for a static decorative map
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-300/60 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1.5, 1, 0],
              x: Math.cos(i) * 140 + (i % 9) * 6,
              y: Math.sin(i) * 140 + (i % 11) * 8,
            }}
            transition={{ duration: 1.6, delay: i * 0.02, ease: 'easeOut' }}
            style={{ left: '50%', top: '50%' }}
          />
        ))}
      </div>

      {/* Spinning neon sphere */}
      <motion.div
        className="relative aspect-square w-36 md:w-44"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#67e8f9,transparent_45%),radial-gradient(circle_at_70%_70%,#a78bfa,transparent_45%),radial-gradient(circle_at_60%_20%,#22d3ee,transparent_35%)] blur-[1px]" />
        <div className="absolute inset-0 animate-[spin_6s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,rgba(34,211,238,0.35),rgba(99,102,241,0.35),rgba(168,85,247,0.35),rgba(34,211,238,0.35))]" />
        <div className="absolute inset-1 rounded-full backdrop-blur-xl ring-2 ring-cyan-300/30" />
      </motion.div>

      {/* Title */}
      <motion.div
        className="absolute inset-x-0 bottom-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="bg-gradient-to-r from-indigo-200 via-cyan-200 to-violet-200 bg-clip-text text-2xl font-semibold tracking-wide text-transparent md:text-3xl">
          AI Infinity
        </h1>
        <p className="mt-1 text-sm text-cyan-100/80 md:text-base">
          Your Intelligent Companion
        </p>
      </motion.div>
    </div>
  );
}
