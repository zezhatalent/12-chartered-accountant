import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';

function BalanceSheet() {
  const { theme } = useTheme();
  const debits = [125000, 48000, 32000, 21500];
  const credits = [98000, 60000, 40500, 30000];
  const totalDebit = debits.reduce((a, b) => a + b, 0);
  const totalCredit = credits.reduce((a, b) => a + b, 0);
  const balance = totalDebit - totalCredit; // balances to zero

  return (
    <div
      className="w-full max-w-sm rounded-xl border border-[#00000022] p-5 shadow-2xl"
      style={{ background: theme.surface }}
    >
      <div className="mb-3 flex items-center justify-between border-b pb-2" style={{ borderColor: theme.border }}>
        <span className="font-medium" style={{ color: theme.text }}>Trial Balance</span>
        <span className="font-mono text-xs" style={{ color: theme.accent }}>FY 2024</span>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
        <span className="font-mono text-xs" style={{ color: theme.muted }}>Debit</span>
        <span className="font-mono text-xs" style={{ color: theme.muted }}>Credit</span>
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.span
            key={`d${i}`}
            className="font-mono text-sm"
            style={{ color: theme.text }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.3 }}
          >
            {debits[i].toLocaleString()}
          </motion.span>
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.span
            key={`c${i}`}
            className="font-mono text-sm"
            style={{ color: theme.text }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.3 }}
          >
            {credits[i].toLocaleString()}
          </motion.span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between border-t pt-3" style={{ borderColor: theme.border }}>
        <span className="font-mono text-sm font-bold" style={{ color: theme.text }}>Balance =</span>
        <motion.span
          className="font-mono text-lg font-extrabold"
          style={{ color: theme.accent }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
        >
          ₹{balance.toLocaleString()}
        </motion.span>
      </div>
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: theme.bg }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: 0.5, backgroundImage: `radial-gradient(${theme.accent}0a 1px, transparent 1px)`, backgroundSize: '26px 26px' }}
      />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 py-28 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: theme.accent }}
          >
            Chartered Accountant
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3 text-5xl font-bold md:text-6xl"
            style={{ color: theme.text }}
          >
            {content.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-3 text-xl font-light italic"
            style={{ color: theme.muted }}
          >
            {content.tagline}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded px-8 py-3 font-semibold"
              style={{ background: theme.accent, color: '#fff' }}
            >
              Services & work
            </a>
            <a
              href="#contact"
              className="rounded border-2 px-8 py-3 font-semibold"
              style={{ borderColor: theme.accent, color: theme.accent }}
            >
              Book a consultation
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center"
        >
          <BalanceSheet />
        </motion.div>
      </div>
    </section>
  );
}
