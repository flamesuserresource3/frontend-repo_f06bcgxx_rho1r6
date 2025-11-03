import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, HelpCircle } from 'lucide-react';

export default function AssistantBubble() {
  const [open, setOpen] = useState(false);
  const tips = useMemo(
    () => [
      'Try "Plan a 3-step research task about quantum batteries"',
      'Create a custom agent in the builder with web + docs access',
      'Open Analytics to see goals completed in real time',
      'Switch themes in Settings for neon glass or pure dark',
    ],
    []
  );

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        aria-label="AI Guide"
        onClick={() => setOpen((v) => !v)}
        className="group mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-violet-600 px-4 py-3 text-white shadow-[0_12px_30px_rgba(56,189,248,0.4)] transition hover:brightness-110"
      >
        <Bot className="h-5 w-5" />
        <span className="hidden text-sm font-semibold md:inline">AI Guide</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-[92vw] max-w-sm overflow-hidden rounded-2xl border border-cyan-300/25 bg-white/10 p-4 text-cyan-50 backdrop-blur-xl"
          >
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 rounded-full bg-white/10 p-1 text-cyan-100 transition hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-cyan-200" />
              <p className="text-sm font-semibold">Getting started</p>
            </div>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-cyan-100/90">
              {tips.map((t, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="pointer-events-none absolute -inset-px bg-[radial-gradient(120%_60%_at_10%_-20%,rgba(99,102,241,0.18),transparent)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
