"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Bell,
  BrainCircuit,
  Check,
  Clock,
  Download,
  Flame,
  Heart,
  HeartCrack,
  Menu,
  Shield,
  Smartphone,
  Star,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="PillMaa home">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-pillmaa-light ring-1 ring-pillmaa-primary/15">
        <svg viewBox="0 0 36 36" className="h-7 w-7" aria-hidden="true">
          <rect x="7" y="15" width="22" height="10" rx="5" fill="#1a7a4a" transform="rotate(-35 18 20)" />
          <path d="M13 23 24 15" stroke="#eaf5ef" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="12.5" cy="24" r="2" fill="#f97316" />
        </svg>
      </span>
      <span className="font-serif text-3xl leading-none text-pillmaa-primary">PillMaa</span>
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Features", "#features"],
    ["How it works", "#how-it-works"],
    ["Download", "#download"],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-pillmaa-border backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-white/92 shadow-sm" : "bg-white/45"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-slate-600 transition hover:text-pillmaa-primary">
              {label}
            </a>
          ))}
          <a
            href="/pillmaa.apk"
            className="inline-flex items-center gap-2 rounded-full bg-pillmaa-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pillmaa-primary/20 transition hover:-translate-y-0.5 hover:bg-pillmaa-dark"
          >
            <Download className="h-4 w-4" />
            Download APK
          </a>
        </div>
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="grid h-11 w-11 place-items-center rounded-full border border-pillmaa-border bg-white text-pillmaa-ink md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>
      <motion.div
        initial={false}
        animate={open ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="fixed right-0 top-0 z-[60] h-screen w-80 max-w-[86vw] border-l border-pillmaa-border bg-white p-6 shadow-2xl md:hidden"
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-pillmaa-surface">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-10 grid gap-5">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="text-lg font-semibold text-pillmaa-ink">
              {label}
            </a>
          ))}
          <a href="/pillmaa.apk" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-pillmaa-primary px-5 py-4 font-semibold text-white">
            <Download className="h-5 w-5" />
            Download APK
          </a>
        </div>
      </motion.div>
    </header>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`} aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-pillmaa-primary text-pillmaa-primary" />
      ))}
    </div>
  );
}

function AvatarStack() {
  const people = [
    ["RK", "#eaf5ef", "#1a7a4a"],
    ["SP", "#fef3c7", "#b45309"],
    ["MR", "#fee2e2", "#dc2626"],
  ];
  return (
    <div className="flex -space-x-3">
      {people.map(([name, bg, color]) => (
        <span
          key={name}
          className="grid h-10 w-10 place-items-center rounded-full border-2 border-white text-xs font-bold shadow-sm"
          style={{ backgroundColor: bg, color }}
        >
          {name}
        </span>
      ))}
    </div>
  );
}

function DashboardSvg({ variant = "dashboard" }: { variant?: "dashboard" | "alarm" | "form" }) {
  if (variant === "alarm") {
    return (
      <svg viewBox="0 0 260 520" className="h-full w-full" aria-hidden="true">
        <rect width="260" height="520" rx="34" fill="#0d4f2e" />
        <circle cx="130" cy="135" r="54" fill="#eaf5ef" opacity="0.14" />
        <path d="M102 143h56a22 22 0 0 0 0-44h-56a22 22 0 0 0 0 44Z" fill="#eaf5ef" transform="rotate(-28 130 121)" />
        <line x1="122" y1="145" x2="147" y2="96" stroke="#1a7a4a" strokeWidth="7" strokeLinecap="round" />
        <text x="130" y="224" fill="#fff" fontSize="25" fontWeight="700" textAnchor="middle">Metformin 500mg</text>
        <text x="130" y="258" fill="#ccebdd" fontSize="15" textAnchor="middle">Time for your morning dose</text>
        <rect x="34" y="336" width="192" height="52" rx="18" fill="#fff" />
        <text x="130" y="368" fill="#0d4f2e" fontSize="16" fontWeight="700" textAnchor="middle">Taken</text>
        <rect x="34" y="404" width="192" height="52" rx="18" fill="none" stroke="#eaf5ef" strokeOpacity=".5" strokeWidth="2" />
        <text x="130" y="436" fill="#fff" fontSize="16" fontWeight="700" textAnchor="middle">Snooze 10 min</text>
      </svg>
    );
  }

  if (variant === "form") {
    return (
      <svg viewBox="0 0 260 520" className="h-full w-full" aria-hidden="true">
        <rect width="260" height="520" rx="34" fill="#ffffff" />
        <rect x="22" y="28" width="216" height="64" rx="20" fill="#eaf5ef" />
        <text x="42" y="68" fill="#0d4f2e" fontSize="18" fontWeight="700">Add reminder</text>
        {[
          ["Medicine name", "Thyroid tablet", 124],
          ["Time", "07:30 AM", 194],
          ["Repeat", "Every day", 264],
          ["Snooze", "3 times", 334],
        ].map(([label, value, y]) => (
          <g key={label}>
            <text x="32" y={Number(y)} fill="#64748b" fontSize="12">{label}</text>
            <rect x="30" y={Number(y) + 12} width="200" height="44" rx="14" fill="#f8fafc" stroke="#e2e8f0" />
            <text x="46" y={Number(y) + 40} fill="#0f172a" fontSize="15" fontWeight="600">{value}</text>
          </g>
        ))}
        <rect x="30" y="430" width="200" height="54" rx="18" fill="#1a7a4a" />
        <text x="130" y="463" fill="#fff" fontSize="16" fontWeight="700" textAnchor="middle">Save reminder</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 260 520" className="h-full w-full" aria-hidden="true">
      <rect width="260" height="520" rx="34" fill="#fff" />
      <rect x="0" y="0" width="260" height="132" rx="34" fill="#1a7a4a" />
      <text x="28" y="58" fill="#eaf5ef" fontSize="13">Good morning,</text>
      <text x="28" y="86" fill="#fff" fontSize="23" fontWeight="700">Amma</text>
      <circle cx="213" cy="62" r="22" fill="#eaf5ef" opacity=".24" />
      <path d="M204 64h18" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M213 55v18" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      {[
        ["Total", "6", 25],
        ["Taken", "4", 94],
        ["Pending", "2", 163],
      ].map(([label, value, x]) => (
        <g key={label}>
          <rect x={x} y="108" width="58" height="62" rx="16" fill="#fff" filter="drop-shadow(0 8px 18px rgba(15,23,42,.12))" />
          <text x={Number(x) + 29} y="134" fill="#64748b" fontSize="10" textAnchor="middle">{label}</text>
          <text x={Number(x) + 29} y="156" fill="#0f172a" fontSize="22" fontWeight="800" textAnchor="middle">{value}</text>
        </g>
      ))}
      <text x="28" y="215" fill="#0f172a" fontSize="17" fontWeight="800">Today's medicines</text>
      {([
        ["Metformin 500mg", "8:00 AM", "#1a7a4a", 238],
        ["BP tablet", "1:00 PM", "#f97316", 316],
      ] satisfies Array<[string, string, string, number]>).map(([title, time, color, y]) => (
        <g key={title}>
          <rect x="26" y={y} width="208" height="62" rx="17" fill="#f8fafc" stroke="#e2e8f0" />
          <rect x="26" y={y} width="5" height="62" rx="3" fill={color} />
          <text x="46" y={Number(y) + 25} fill="#0f172a" fontSize="15" fontWeight="700">{title}</text>
          <text x="46" y={Number(y) + 46} fill="#64748b" fontSize="12">{time}</text>
          <circle cx="207" cy={Number(y) + 31} r="13" fill="#eaf5ef" />
          <path d={`M201 ${Number(y) + 31}l4 4 8-9`} stroke="#1a7a4a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
      <rect x="26" y="404" width="208" height="54" rx="18" fill="#eaf5ef" />
      <text x="46" y="437" fill="#0d4f2e" fontSize="15" fontWeight="800">5 day streak</text>
      <circle cx="208" cy="431" r="25" fill="#1a7a4a" />
      <path d="M208 419v24M196 431h24" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function PhoneMockup({ variant = "dashboard", small = false }: { variant?: "dashboard" | "alarm" | "form"; small?: boolean }) {
  return (
    <div className={`relative mx-auto ${small ? "h-[520px] w-[270px]" : "h-[590px] w-[306px]"} rounded-[3rem] border-[10px] border-slate-900 bg-slate-900 shadow-premium`}>
      <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-slate-950" />
      <div className="h-full w-full overflow-hidden rounded-[2.3rem] bg-white phone-screen-gradient">
        <DashboardSvg variant={variant} />
      </div>
    </div>
  );
}

function FloatingCard({ icon: Icon, text, className, delay = 0 }: { icon: LucideIcon; text: string; className: string; delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute z-20 flex items-center gap-3 rounded-xl border border-pillmaa-border border-l-[3px] border-l-pillmaa-primary bg-white/95 px-4 py-3 text-sm font-semibold text-pillmaa-ink shadow-xl shadow-slate-900/10 backdrop-blur ${className}`}
    >
      <Icon className="h-4 w-4 text-pillmaa-primary" />
      <span className="whitespace-nowrap">{text}</span>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="mx-auto grid min-h-[780px] max-w-7xl items-center gap-16 px-5 pb-20 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
          <motion.div variants={fadeUp} className="mb-7 inline-flex items-center gap-2 rounded-full border border-pillmaa-primary/15 bg-pillmaa-light px-4 py-2 text-sm font-semibold text-pillmaa-dark">
            <span className="h-2.5 w-2.5 rounded-full bg-pillmaa-primary" />
            Free to download
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-serif text-[4rem] leading-[0.94] tracking-normal text-pillmaa-ink sm:text-[5rem] lg:text-[72px]">
            Your Amma never misses a dose again.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-xl text-lg leading-8 text-pillmaa-muted sm:text-xl">
            PillMaa is a gentle, smart medicine reminder built with love for the mothers who forget, and the children who worry.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="/pillmaa.apk" className="inline-flex items-center justify-center gap-2 rounded-full bg-pillmaa-primary px-7 py-4 font-semibold text-white shadow-xl shadow-pillmaa-primary/25 transition hover:-translate-y-1 hover:bg-pillmaa-dark">
              <Download className="h-5 w-5" />
              Download APK
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 rounded-full border border-pillmaa-border bg-white px-7 py-4 font-semibold text-pillmaa-ink transition hover:-translate-y-1 hover:border-pillmaa-primary hover:text-pillmaa-primary">
              See how it works
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <AvatarStack />
            <p className="text-sm font-semibold text-slate-700">500+ families trust PillMaa</p>
            <Stars />
          </motion.div>
        </motion.div>
        <div className="relative min-h-[640px]">
          <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pillmaa-primary opacity-[0.15] blur-3xl" />
          <FloatingCard icon={Bell} text="Time for Metformin 500mg" className="-left-2 top-16 sm:left-6" delay={0.1} />
          <FloatingCard icon={Check} text="Taken! Great job Amma" className="right-0 top-52" delay={0.7} />
          <FloatingCard icon={Flame} text="5 day streak!" className="bottom-24 left-2 sm:left-10" delay={1.1} />
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="relative z-10">
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items: Array<[LucideIcon, string]> = [
    [Heart, "Built for Indian mothers"],
    [Shield, "No ads. No tracking. Ever."],
    [Bell, "Alarm rings until she takes it"],
    [Zap, "Works offline"],
    [Star, "Free forever"],
  ];
  const row = [...items, ...items, ...items, ...items];
  return (
    <section className="overflow-hidden bg-pillmaa-dark py-5">
      <div className="flex w-max animate-ticker items-center gap-12">
        {row.map(([Icon, text], i) => (
          <div key={`${text}-${i}`} className="flex items-center gap-3 text-[15px] font-medium text-white">
            <Icon className="h-5 w-5" />
            <span>{text as string}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  const cards: Array<[LucideIcon, string, string, string]> = [
    [BrainCircuit, "She forgets", "Elderly parents often miss doses simply because life gets busy and habits are hard to form.", "text-orange-500"],
    [Clock, "You're not always there", "You can't call every day to remind her. You have work, life, and guilt.", "text-amber-500"],
    [HeartCrack, "Missed doses = real risk", "For BP, diabetes, and thyroid medicines, missing even one dose can cause serious health complications.", "text-red-500"],
  ];
  return (
    <section className="bg-pillmaa-surface py-24 sm:py-32">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger} className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.h2 variants={fadeUp} className="mx-auto max-w-4xl text-center font-serif text-5xl leading-tight text-pillmaa-ink sm:text-[52px]">
          She raised you without forgetting a thing. Help her not forget this.
        </motion.h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(([Icon, title, body, color]) => (
            <motion.div key={title as string} variants={fadeUp} className="rounded-[20px] border border-pillmaa-border bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-premium">
              <Icon className={`h-10 w-10 ${color}`} />
              <h3 className="mt-6 text-2xl font-bold text-pillmaa-ink">{title as string}</h3>
              <p className="mt-4 leading-7 text-pillmaa-muted">{body as string}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FeatureBlock({
  tag,
  heading,
  body,
  bullets,
  variant,
  reverse,
}: {
  tag: string;
  heading: string;
  body: string;
  bullets: string[];
  variant: "dashboard" | "alarm" | "form";
  reverse?: boolean;
}) {
  const phone = (
    <motion.div variants={fadeUp} className="relative">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pillmaa-light blur-3xl" />
      <div className="relative">
        <PhoneMockup variant={variant} small />
      </div>
    </motion.div>
  );
  const text = (
    <motion.div variants={fadeUp} className="max-w-xl">
      <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-pillmaa-primary">{tag}</span>
      <h3 className="mt-4 font-serif text-5xl leading-tight text-pillmaa-ink">{heading}</h3>
      <p className="mt-5 text-lg leading-8 text-pillmaa-muted">{body}</p>
      <div className="mt-7 grid gap-3">
        {bullets.map((bullet) => (
          <div key={bullet} className="flex items-center gap-3 font-semibold text-slate-700">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-pillmaa-light">
              <Check className="h-4 w-4 text-pillmaa-primary" />
            </span>
            {bullet}
          </div>
        ))}
      </div>
    </motion.div>
  );
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger} className="grid items-center gap-12 lg:grid-cols-2">
      {reverse ? text : phone}
      {reverse ? phone : text}
    </motion.div>
  );
}

function Features() {
  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div id="how-it-works" className="mx-auto grid max-w-7xl gap-24 px-5 sm:px-8">
        <FeatureBlock
          tag="Smart Alarm"
          heading="Rings until she actually takes it."
          body="No silent notifications that get ignored. PillMaa plays a loud alarm that keeps ringing with snooze options until she confirms she took her medicine."
          bullets={["Loud alarm sound", "Snooze up to 3 times", "Full screen takeover"]}
          variant="alarm"
        />
        <FeatureBlock
          tag="Daily Dashboard"
          heading="Everything at a glance."
          body="See today's medicines, track what's been taken, and build a streak that keeps her motivated. Simple enough for any age."
          bullets={["Swipe to mark taken", "Medicine history log", "Day streak tracker"]}
          variant="dashboard"
          reverse
        />
        <FeatureBlock
          tag="Easy Setup"
          heading="You set it up once. It works forever."
          body="Add any medicine in under 30 seconds. Set the time, pick repeat days, configure snooze, then hand the phone to Amma."
          bullets={["Repeat daily or custom days", "Multiple medicines", "No tech skills needed"]}
          variant="form"
        />
      </div>
    </section>
  );
}

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(value === "0" ? "0" : "0");

  useEffect(() => {
    if (!inView) return;
    const target = parseInt(value, 10);
    const suffix = value.replace(String(target), "");
    const start = performance.now();
    const duration = 1200;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${Math.round(target * eased)}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

function Stats() {
  const stats = [
    ["500+", "Families using PillMaa"],
    ["98%", "Never miss a dose rate"],
    ["3x", "Snooze before alarm stops"],
    ["0", "Ads. Ever."],
  ];
  return (
    <section className="bg-gradient-to-br from-pillmaa-primary to-pillmaa-dark py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 text-center sm:px-8 md:grid-cols-4">
        {stats.map(([num, label]) => (
          <div key={label}>
            <div className="font-serif text-6xl leading-none text-white sm:text-[64px]">
              <CountUp value={num} />
            </div>
            <p className="mt-4 text-base text-white/70">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    ["RK", "#eaf5ef", "#1a7a4a", "Ravi Kumar, Hyderabad", "Son, manages his mother's medicines", "My mother has diabetes and BP. Before PillMaa she would forget almost every other day. Now she hasn't missed a single dose in 3 weeks. This app is a blessing."],
    ["SP", "#fef3c7", "#b45309", "Sneha Patel, Bengaluru", "Daughter, lives away from parents", "I used to call Amma twice a day just to remind her. Now PillMaa does it for me. I sleep better knowing she's taken her medicine."],
    ["MR", "#fee2e2", "#dc2626", "Meena Reddy, Vijayawada", "Using PillMaa herself", "My son installed this for me. The alarm is loud and doesn't stop until I take my tablet. Very useful for old people like me who forget easily."],
  ];
  return (
    <section className="bg-white py-24 sm:py-32">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={stagger} className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.h2 variants={fadeUp} className="text-center font-serif text-5xl text-pillmaa-ink sm:text-[56px]">What families are saying</motion.h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map(([initials, bg, color, name, role, quote]) => (
            <motion.div key={name} variants={fadeUp} className="relative overflow-hidden rounded-[20px] border border-pillmaa-border bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-premium">
              <span className="absolute -left-1 top-0 font-serif text-8xl leading-none text-pillmaa-light">“</span>
              <div className="relative z-10">
                <div className="grid h-14 w-14 place-items-center rounded-full text-sm font-extrabold" style={{ backgroundColor: bg, color }}>{initials}</div>
                <Stars className="mt-6" />
                <p className="mt-5 leading-7 text-slate-700">"{quote}"</p>
                <div className="mt-6 border-t border-pillmaa-border pt-5">
                  <p className="font-bold text-pillmaa-ink">{name}</p>
                  <p className="mt-1 text-sm text-pillmaa-muted">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function DownloadCta() {
  const badges: Array<[LucideIcon, string]> = [
    [Shield, "Safe & Secure"],
    [Smartphone, "Android 8.0+"],
    [Zap, "Only 15MB"],
  ];
  return (
    <section id="download" className="bg-pillmaa-ink py-24 text-center sm:py-32">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div variants={fadeUp} className="inline-flex rounded-full border border-pillmaa-primary/20 bg-pillmaa-primary/10 px-4 py-2 text-sm font-semibold text-green-200">
          Available now — Free download
        </motion.div>
        <motion.h2 variants={fadeUp} className="mt-7 font-serif text-5xl leading-tight text-white sm:text-[64px]">Download PillMaa today.</motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
          Install directly on any Android phone. No Play Store needed. Just download, install, and set it up for Amma in 2 minutes.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9">
          <a href="/pillmaa.apk" className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-pillmaa-primary px-8 text-lg font-semibold text-white shadow-2xl shadow-pillmaa-primary/30 transition hover:-translate-y-1 hover:bg-green-600">
            <Download className="h-6 w-6" />
            Download APK
          </a>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-3">
          {badges.map(([Icon, label]) => (
            <div key={label as string} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white">
              <Icon className="h-4 w-4 text-green-200" />
              {label as string}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-pillmaa-ink text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-white/55">Never miss a dose again.</p>
        </div>
        <div className="flex gap-6 text-sm font-medium text-white/65">
          <a href="#" className="transition hover:text-white">Privacy Policy</a>
          <a href="mailto:hello@pillmaa.app" className="transition hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/65">
          Made with love for Indian mothers
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
        </div>
      </div>
      <div className="border-t border-white/[0.08] py-5 text-center text-sm text-white/45">© 2025 PillMaa. Free forever.</div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Ticker />
      <Problem />
      <Features />
      <Stats />
      <Testimonials />
      <DownloadCta />
      <Footer />
    </main>
  );
}
