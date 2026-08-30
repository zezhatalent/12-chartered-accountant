import Navbar from './components/Navbar';
import Hero from './Hero';
import BackgroundFx from './components/BackgroundFx';
import { TickerMarquee, AboutSection, Services, StatCounters, MeterSkills, IconSkillTiles, Timeline, Education, Projects, CertGrid, Awards, Hobbies, TestimonialSection, ContactShell, BlogSection, FAQSection, EnhancedTimeline, SkillsDetailedGrid, ContactMethodsGrid, WaveDivider } from './components/Sections';
import { content } from './content';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFx />
      <Navbar content={content} />
      <Hero />
      <TickerMarquee items={content.ticker ?? [content.role, content.tagline]} />
      <WaveDivider />
      <AboutSection content={content} />
      <WaveDivider flip />
      <Services content={content} />
      <WaveDivider />
      <StatCounters content={content} />
      <WaveDivider flip />
      <MeterSkills content={content} />
      <WaveDivider />
      <IconSkillTiles content={content} />
      <SkillsDetailedGrid content={content} />
      <WaveDivider flip />
      <EnhancedTimeline content={content} />
      <WaveDivider />
      <Timeline content={content} />
      <WaveDivider flip />
      <Education content={content} />
      <WaveDivider />
      <Projects content={content} />
      <WaveDivider flip />
      <CertGrid content={content} />
      <WaveDivider />
      <Awards content={content} />
      <WaveDivider flip />
      <Hobbies content={content} />
      <BlogSection content={content} />
      <WaveDivider />
      <FAQSection content={content} />
      <WaveDivider flip />
      <TestimonialSection content={content} />
      <WaveDivider />
      <ContactMethodsGrid content={content} />
      <WaveDivider flip />
      <ContactShell content={content} />
    </div>
  );
}
