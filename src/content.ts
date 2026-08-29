import type { Content } from './components/Sections';

export const content: Content = {
  name: 'Ritu Agarwal',
  role: 'Chartered Accountant',
  tagline: 'Precision in every number',
  photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
  email: 'ritu@auraclead.co',
  phone: '+91 98765 43210',
  location: 'New Delhi, India',
  languages: ['English', 'Hindi', 'Punjabi'],
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Email', href: 'mailto:ritu@auraclead.co' },
    { label: 'Accounting Blog', href: 'https://example.com' },
  ],
  about: [
    'I am a chartered accountant with 10 years of experience across audit, taxation, financial reporting and compliance. I help businesses keep their books true and their taxes in order, so they can focus on growth.',
    'My clients range from startups to established firms. I combine technical command of accounting standards with a clear, practical approach that demystifies finance.',
  ],
  services: [
    { title: 'Audit & Assurance', desc: 'Statutory, internal and group audits that deliver clean, unmodified opinions with the least disruption.', icon: '✅' },
    { title: 'Direct Taxation', desc: 'Return filing, tax planning and litigation support that keeps liabilities legal, accurate and minimal.', icon: '📑' },
    { title: 'GST Compliance', desc: 'End-to-end GST registration, returns, audits and credit reconciliation across every state of operation.', icon: '🧾' },
    { title: 'Financial Reporting', desc: 'Ind AS / IFRS-aligned books, consolidations and disclosures that stand up to any auditor or regulator.', icon: '📊' },
    { title: 'Startup Advisory', desc: 'Entity structuring, cap tables and tax incentives — startup, angel tax, ESOP — for founding teams.', icon: '🚀' },
    { title: 'ERP & Systems', desc: 'Setting up Tally, SAP and ERP processes that keep books clean and audit-friendly from day one.', icon: '💾' },
  ],
  skills: [
    { name: 'GST Compliance', level: 97, note: 'Filing & advisory' },
    { name: 'Taxation', level: 95, note: 'Direct & indirect' },
    { name: 'Auditing', level: 94, note: 'Statutory & internal' },
    { name: 'Financial Reporting', level: 93, note: 'Ind AS / IFRS' },
    { name: 'Advisory', level: 91, note: 'Tax planning' },
  ],
  skillsIcons: [
    { name: 'Taxation', note: 'Direct & indirect', icon: '📑' },
    { name: 'Auditing', note: 'Statutory & internal', icon: '✅' },
    { name: 'GST', note: 'Compliance & filings', icon: '🧾' },
    { name: 'Financial Reporting', note: 'Ind AS / IFRS', icon: '📊' },
  ],
  stats: [
    { label: 'Clients served', value: 120, suffix: '+' },
    { label: 'Years in practice', value: 10, suffix: '' },
    { label: 'Audits completed', value: 200, suffix: '+' },
    { label: 'Returns filed', value: 5000, suffix: '+' },
  ],
  experience: [
    {
      role: 'Partner',
      company: 'Agarwal & Associates',
      period: '2018 — Present',
      desc: 'Lead a practice of 8 professionals delivering audit, tax and advisory services to 100+ business clients.',
    },
    {
      role: 'Senior Accountant',
      company: 'MetroFinance',
      period: '2015 — 2018',
      desc: 'Managed financial reporting and statutory compliance for a mid-sized manufacturing group.',
    },
    {
      role: 'Audit Associate',
      company: 'Big Four (Audit)',
      period: '2013 — 2015',
      desc: 'Executed statutory audits for large corporates, spanning diverse sectors and complex consolidations.',
    },
  ],
  education: [
    {
      degree: 'Chartered Accountant',
      school: 'Institute of Chartered Accountants of India',
      period: '2012 — 2016',
      desc: 'Cleared all three levels with distinction, specialising in audit and taxation.',
    },
    {
      degree: 'B.Com (Hons)',
      school: 'University of Delhi',
      period: '2009 — 2012',
      desc: 'Commerce with a focus on accounting, finance and corporate law.',
    },
  ],
  certificates: [
    'Chartered Accountant (ICAI)',
    'Certified Public Accountant (CPA)',
    'Certified GST Professional',
    'Certificate in IFRS (ACCA)',
  ],
  awards: [
    { title: 'Best Tax Advisory Practice', detail: 'Regional recognition for consistent tax savings delivered to startup clients.', year: '2023' },
    { title: 'ICAI Excellence in Audit', detail: 'Award for audit quality and the smooth, on-time close of a large group audit.', year: '2022' },
    { title: 'Client Excellence Star', detail: 'Top-rated advisor in the annual client satisfaction survey four years running.', year: '2021' },
  ],
  cards: [
    {
      title: 'GST Compliance Overhaul',
      desc: 'Streamlined GST filing for a retail chain, recovering ₹4.2 Cr in erroneously claimed input credit and cutting penalties.',
      stack: 'GST, ERP, Compliance',
      metric: '₹4.2 Cr recovered',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
    },
    {
      title: 'Startup Tax Advisory',
      desc: 'Advised 30+ startups on structuring and tax planning, saving an average of 25% in eligible incentives.',
      stack: 'Advisory, Structuring',
      metric: '25% avg savings',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop',
    },
    {
      title: 'Group Statutory Audit',
      desc: 'Led the statutory audit of a 14-entity group, delivering an unmodified opinion ahead of deadline.',
      stack: 'Audit, Consolidation',
      metric: 'On-time clean opinion',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=400&fit=crop',
    },
  ],
  projects: [
    {
      title: 'Startup Tax Toolkit',
      desc: 'A playbook of entity structures and incentive options deployed across 30+ founding teams.',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=500&fit=crop',
      tags: ['Advisory', 'Startups'],
    },
    {
      title: 'GST Automation Suite',
      desc: 'Automated GST return reconciliation for a retail chain, cutting errors to near zero.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      tags: ['GST', 'Automation'],
    },
    {
      title: 'Group Consolidation Model',
      desc: 'A 14-entity consolidation model that cut close time and raised audit transparency.',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop',
      tags: ['Reporting', 'Consolidation'],
    },
  ],
  hobbies: [
    { name: 'Cooking', note: 'Regional & experimental kitchens', icon: '👩‍🍳' },
    { name: 'Yoga & Meditation', note: 'Daily 6 am practice', icon: '🧘' },
    { name: 'Reading', note: 'Finance & fiction', icon: '📚' },
    { name: 'Travel', note: 'Horizon-chasing weekends', icon: '✈️' },
  ],
  testimonials: [
    {
      quote:
        'Ritu turned our chaotic accounts into something I finally understand and trust. An absolute pro.',
      author: 'Dinesh Mehta',
      role: 'Founder, Brighthome Retail',
    },
    {
      quote:
        'Meticulous, responsive and always one step ahead on compliance changes. We would not go back.',
      author: 'CFO, MetroFinance',
      role: 'Client testimonial',
    },
  ],
  footnote: '© Ritu Agarwal · React, TypeScript & Framer Motion',
  ticker: ['Audit', 'Direct Tax', 'GST', 'IFRS / Ind AS', 'Advisory', 'Compliance'],

  blogPosts: [
    { title: 'Tax Planning Strategies for SMEs', excerpt: 'Legitimate tax optimization strategies that help small businesses minimize their tax burden.', date: '2024-01-08', tags: ['Tax Planning', 'SMEs'], readTime: '9 min' },
    { title: 'Financial Reporting Best Practices', excerpt: 'Ensuring accurate and compliant financial statements under new accounting standards.', date: '2023-12-21', tags: ['Accounting', 'Compliance'], readTime: '8 min' },
  ],

  faqItems: [
    { question: 'What accounting standards do you work with?', answer: 'I work with IFRS, US GAAP, and local accounting standards, ensuring compliance across jurisdictions.' },
    { question: 'What services do you offer?', answer: 'I provide audit, tax planning, financial advisory, and CFO services for growing businesses.' },
    { question: 'How do you help with tax compliance?', answer: 'I handle tax returns, transfer pricing, and represent clients before tax authorities.' },
    { question: 'What industries do you specialize in?', answer: 'I have deep expertise in technology startups, real estate, and professional services firms.' },
  ],

  skillsDetailed: [
    { category: 'Accounting', items: [
      { name: 'IFRS', level: 95 },
      { name: 'US GAAP', level: 90 },
      { name: 'Audit', level: 92 },
    ]},
    { category: 'Tax', items: [
      { name: 'Corporate Tax', level: 90 },
      { name: 'Transfer Pricing', level: 85 },
      { name: 'Tax Planning', level: 88 },
    ]},
  ],

  contactMethods: [
    { type: 'Email', value: 'ca@accounting.com', icon: '📧', href: 'mailto:ca@accounting.com' },
    { type: 'Office', value: '+1 (555) 123-4567', icon: '📞', href: 'tel:+15551234567' },
  ],
};