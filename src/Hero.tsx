import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';
import { useEffect } from 'react';

function BalanceSheetSVG() {
  const { theme } = useTheme();
  const debits = [125000, 48000, 32000, 21500];
  const credits = [98000, 60000, 40500, 30000];
  const totalDebit = debits.reduce((a, b) => a + b, 0);
  const totalCredit = credits.reduce((a, b) => a + b, 0);
  const balance = totalDebit - totalCredit;

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <motion.svg
        viewBox="0 0 500 300"
        className="w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <defs>
          <linearGradient id="sheetGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={theme.accent} stopOpacity="0.1" />
            <stop offset="1" stopColor={theme.accent2} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Background card */}
        <motion.rect
          x="10" y="10" width="480" height="280" rx="12"
          fill="url(#sheetGrad)"
          stroke={theme.border}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        />
        {/* Header line */}
        <motion.line
          x1="30" y1="50" x2="470" y2="50"
          stroke={theme.accent}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.text
          x="250" y="40"
          textAnchor="middle"
          fill={theme.text}
          fontSize="14"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Balance Sheet
        </motion.text>
        {/* Debit column */}
        <motion.text x="80" y="75" fill={theme.accent} fontSize="12" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>DEBIT</motion.text>
        {debits.map((d, i) => (
          <motion.text
            key={`d${i}`}
            x="80"
            y={100 + i * 30}
            fill={theme.text}
            fontSize="12"
            fontFamily="monospace"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + i * 0.2 }}
          >
            ₹{d.toLocaleString()}
          </motion.text>
        ))}
        {/* Credit column */}
        <motion.text x="320" y="75" fill={theme.accent2} fontSize="12" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>CREDIT</motion.text>
        {credits.map((c, i) => (
          <motion.text
            key={`c${i}`}
            x="320"
            y={100 + i * 30}
            fill={theme.text}
            fontSize="12"
            fontFamily="monospace"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + i * 0.2 }}
          >
            ₹{c.toLocaleString()}
          </motion.text>
        ))}
        {/* Divider line */}
        <motion.line
          x1="30" y1="240" x2="470" y2="240"
          stroke={theme.accent}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        />
        {/* Balance */}
        <motion.text
          x="250" y="270"
          textAnchor="middle"
          fill={theme.accent}
          fontSize="16"
          fontWeight="bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 }}
        >
          Balance = ₹{balance.toLocaleString()}
        </motion.text>
      </motion.svg>

      {/* Animated trial balance card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-sm rounded-xl border p-5 shadow-2xl"
        style={{ background: theme.surface, borderColor: `${theme.accent}22` }}
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
      </motion.div>
    </div>
  );
}

function FloatingElements() {
  const { theme } = useTheme();
  const elements = [
    { x: '8%', y: '25%', size: 50, delay: 0, icon: '₹' },
    { x: '85%', y: '20%', size: 35, delay: 1, icon: '📊' },
    { x: '12%', y: '75%', size: 45, delay: 2, icon: '📋' },
    { x: '80%', y: '70%', size: 40, delay: 1.5, icon: '⚖️' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full flex items-center justify-center"
          style={{
            left: el.x,
            top: el.y,
            width: el.size,
            height: el.size,
            background: `radial-gradient(circle, ${theme.accent}15, transparent)`,
            border: `1px solid ${theme.accent}10`,
            fontSize: el.size * 0.4,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        >
          {el.icon}
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set(e.clientX - cx);
      mouseY.set(e.clientY - cy);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.6 + i * 0.05, duration: 0.5, ease: 'easeOut' as const },
    }),
  };

  const nameChars = content.name.split('');

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
      <FloatingElements />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 py-28 md:grid-cols-2">
        <motion.div style={{ perspective: 1000 }}>
          <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs uppercase tracking-[0.3em]"
              style={{ color: theme.accent }}
            >
              Chartered Accountant
            </motion.p>
            <motion.h1
              className="mt-3 text-5xl font-bold md:text-6xl"
              style={{ color: theme.text }}
            >
              {nameChars.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="mt-3 text-xl font-light italic"
              style={{ color: theme.muted }}
            >
              {content.tagline}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                className="rounded px-8 py-3 font-semibold"
                style={{ background: theme.accent, color: '#fff' }}
                whileHover={{ scale: 1.05, boxShadow: `0 0 25px ${theme.accent}66` }}
                whileTap={{ scale: 0.95 }}
              >
                Services & work
              </motion.a>
              <motion.a
                href="#contact"
                className="rounded border-2 px-8 py-3 font-semibold"
                style={{ borderColor: theme.accent, color: theme.accent }}
                whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${theme.accent}33` }}
                whileTap={{ scale: 0.95 }}
              >
                Book a consultation
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center"
        >
          <BalanceSheetSVG />
        </motion.div>
      </div>
    </section>
  );
}
