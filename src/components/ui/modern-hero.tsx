import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowRight, FiMapPin, FiAward } from "react-icons/fi";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-[#0d090a] relative overflow-hidden">
      <Nav />
      <Hero />
      <Schedule />
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 text-white max-w-5xl mx-auto">
      <div className="flex items-center gap-2">
        <FiAward className="text-xl text-rose-400" />
        <span className="font-mono text-xs text-slate-300 font-semibold uppercase tracking-wider">
          Experience & Certifications
        </span>
      </div>
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1.5 text-xs text-rose-300 hover:text-white font-mono transition-all"
      >
        MILESTONE TIMELINE <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 800;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 60vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#0d090a]" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 800], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 800], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 300],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[100px] relative z-10 space-y-12">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
        alt="Software Architecture & Engineering"
        start={-100}
        end={100}
        className="w-1/3 rounded-xl border border-rose-950/60 shadow-2xl"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
        alt="AI Agents & Workflows"
        start={100}
        end={-150}
        className="mx-auto w-2/3 rounded-xl border border-rose-950/60 shadow-2xl"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop"
        alt="MongoDB Database Systems"
        start={-100}
        end={100}
        className="ml-auto w-1/3 rounded-xl border border-rose-950/60 shadow-2xl"
      />
    </div>
  );
};

interface ParallaxImgProps {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}

const ParallaxImg: React.FC<ParallaxImgProps> = ({ className, alt, src, start, end }) => {
  const ref = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.9]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  const timeline = [
    { title: "MongoDB Basics for Students", date: "April 2026", location: "MongoDB, Inc. Certified" },
    { title: "THREX Hackathon Contributor", date: "Feb 2026", location: "Zoho x Gritscape" },
    { title: "Introduction to Artificial Intelligence", date: "Jan 2026", location: "Adobe Learning Manager" },
    { title: "Intro to Operating Systems", date: "Jul–Sep 2025", location: "NPTEL IIT Madras (Elite)" },
    { title: "Code Wars ASIMOV '25", date: "Aug 2025", location: "Easwari Eng. College" },
    { title: "Python & Java Skills Verified", date: "Oct 2025", location: "HackerRank" }
  ];

  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-24 text-white relative z-20"
    >
      <motion.h3
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-12 text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white"
      >
        Verified Milestones
      </motion.h3>

      <div className="space-y-6">
        {timeline.map((item, idx) => (
          <ScheduleItem key={idx} title={item.title} date={item.date} location={item.location} />
        ))}
      </div>
    </section>
  );
};

interface ScheduleItemProps {
  title: string;
  date: string;
  location: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="flex items-center justify-between border-b border-rose-950/40 p-4 rounded-xl bg-rose-950/20 hover:bg-rose-950/40 transition-all"
    >
      <div>
        <p className="text-base sm:text-lg font-bold text-white">{title}</p>
        <p className="text-xs uppercase text-rose-400 font-mono mt-1">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-xs uppercase text-slate-400 font-mono">
        <p>{location}</p>
        <FiMapPin className="text-rose-400" />
      </div>
    </motion.div>
  );
};
