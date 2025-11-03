import { motion } from 'framer-motion';
import { MessageSquare, ListChecks, Cpu, Activity } from 'lucide-react';

function GlassCard({ title, icon: Icon, children, delay = 0 }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-white/5 p-5 backdrop-blur-xl shadow-[0_8px_40px_rgba(30,27,75,0.35)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="pointer-events-none absolute -inset-px bg-[radial-gradient(120%_60%_at_50%_0%,rgba(168,85,247,0.18),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 flex items-center gap-3">
        <div className="rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 p-2 ring-1 ring-cyan-300/30">
          <Icon className="h-5 w-5 text-cyan-200" />
        </div>
        <h3 className="text-base font-semibold text-cyan-50">{title}</h3>
      </div>
      <div className="relative z-10 mt-3 text-sm leading-relaxed text-cyan-100/80">{children}</div>
    </motion.div>
  );
}

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />

      <motion.h2
        className="bg-gradient-to-r from-indigo-100 via-cyan-100 to-violet-200 bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Command Center
      </motion.h2>
      <motion.p
        className="mx-auto mt-3 max-w-2xl text-center text-cyan-100/80"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Chat with your agent, plan multi-step goals, and watch it work — all in a calming, glassy workspace.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <GlassCard title="Conversational Brain" icon={MessageSquare} delay={0.05}>
          Natural conversations with tool-use and memory. Your assistant guides you through what’s possible.
        </GlassCard>
        <GlassCard title="Task Planner" icon={ListChecks} delay={0.1}>
          Break down complex objectives into actionable steps with progress and dependencies.
        </GlassCard>
        <GlassCard title="Agent Runtime" icon={Cpu} delay={0.15}>
          Secure tool execution with real-time status, retries, and guardrails.
        </GlassCard>
        <GlassCard title="Live Metrics" icon={Activity} delay={0.2}>
          Visualize throughput, goals completed, and uptime with glowing micro-charts.
        </GlassCard>
      </div>

      {/* Completion pulse animation preview */}
      <motion.div
        className="mx-auto mt-12 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 ring-2 ring-cyan-300/30"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        animate={{ boxShadow: ['0 0 0 0 rgba(56,189,248,0.6)', '0 0 0 20px rgba(56,189,248,0.0)'] }}
        transition={{ duration: 1.8, repeat: Infinity, repeatType: 'loop' }}
      >
        <div className="text-sm font-semibold text-cyan-100">Goal ✓</div>
      </motion.div>
    </section>
  );
}
