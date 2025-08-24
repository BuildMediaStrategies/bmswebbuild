import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Clock } from 'lucide-react';
import { fadeUp, fadeIn, scaleIn, staggerContainer, viewportSettings, fadeUpSmall } from '@/lib/anim';
import { Card, IconRound } from '@/components/ui/Card';
import SystemCard from '@/components/SystemCard';
import { useSEO } from '@/lib/seo';
import GlitchText from '@/components/GlitchText';

// Animated Grid Background Component
function AnimatedGrid() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -30]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 opacity-[0.03] gpu"
        animate={{
          y: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          className="w-full h-full"
          style={{ transform: 'translateZ(0)' }}
        >
          <defs>
            <pattern
              id="grid1"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid1)" />
        </svg>
      </motion.div>
      
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 opacity-[0.02] gpu"
        animate={{
          y: [0, -3, 0, 4, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          className="w-full h-full"
          style={{ transform: 'translateZ(0)' }}
        >
          <defs>
            <pattern
              id="grid2"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid2)" />
        </svg>
      </motion.div>
    </div>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedGrid />
      
      <div className="container relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "tween",
                ease: "easeOut"
              }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <GlitchText as="span">
                We build ROI-driven
                <br />
                Systems.
                </GlitchText>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "tween",
                ease: "easeOut"
              }}
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-ink/80">
                <GlitchText as="span">
                More customers. Less cost.
                <br />
                Your time back.
                </GlitchText>
              </p>
            </motion.div>
          </div>

          <motion.p
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto prose-tight k"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            Not just automation, systems that generate leads, close sales, and save hours.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            <Link
              to="/systems/ai-lead-generation"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-semibold hover:bg-muted transition-colors focus:outline-none focus:outline-1 focus:outline-background focus:outline-offset-2"
            >
              Explore Systems
              <motion.div
                className="overflow-hidden"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </Link>
            
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 border-2 border-foreground text-foreground px-8 py-4 font-semibold hover:bg-foreground hover:text-background transition-colors focus:outline-none focus:outline-1 focus:outline-white focus:outline-offset-2"
            >
              Book a Call
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// PAS Section
function PASSection() {
  const cards = [
    {
      icon: Target,
      title: "Pain",
      description: "You're drowning in manual tasks while competitors scale effortlessly."
    },
    {
      icon: Zap,
      title: "Agitate", 
      description: "Every day without systems costs you leads, sales, and precious time."
    },
    {
      icon: Clock,
      title: "Solution",
      description: "AI systems that work 24/7 to grow your business while you focus on strategy."
    }
  ];

  return (
    <section className="section section-muted">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={fadeUpSmall}
              transition={{ delay: index * 0.06 }}
            >
              <Card className="text-center group">
                <div className="mb-6">
                  <IconRound>
                    <card.icon size={24} strokeWidth={1.5} />
                  </IconRound>
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{card.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Systems Preview Section
function SystemsSection() {
  const systems = [
    { title: "AI Lead Generation System", tagline: "3x more qualified leads", to: "/systems/ai-lead-generation", icon: "lead" },
    { title: "Conversion System", tagline: "40% higher close rates", to: "/systems/conversion", icon: "conversion" },
    { title: "Call Automation System", tagline: "Save 20 hours/week", to: "/systems/call-automation", icon: "call" },
    { title: "Support System", tagline: "24/7 customer service", to: "/systems/support", icon: "support" },
    { title: "Recruitment System", tagline: "Find talent 5x faster", to: "/systems/recruitment", icon: "recruitment" },
    { title: "AI Sales System", tagline: "Automate follow-ups", to: "/systems/ai-sales", icon: "sales" },
    { title: "Project Management System", tagline: "Never miss deadlines", to: "/systems/project-management", icon: "project" },
    { title: "Social Media Automation System", tagline: "Consistent posting", to: "/systems/social-media-automation", icon: "social" },
    { title: "Lead Capture System", tagline: "Capture every visitor", to: "/systems/lead-capture", icon: "capture" }
  ];

  return (
    <section className="section">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          className="text-center mb-16 prose-tight k"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Systems</h2>
          <p className="text-foreground/70 text-lg">Choose the system that transforms your business.</p>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => (
            <SystemCard
              key={system.title}
              title={system.title}
              tagline={system.tagline}
              to={system.to}
              icon={system.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Trust Section
function TrustSection() {
  const tools = [
    "n8n", "Make.com", "Voiceflow", "Convocore", "Supabase"
  ];

  return (
    <section className="section section-muted">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                className="px-4 py-2 border border-line text-foreground/60 font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(255,255,255,0.4)",
                  transition: { type: "spring", stiffness: 400, damping: 30 }
                }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-foreground/50 prose-tight k">Trusted stack. Built for reliability.</p>
        </motion.div>
      </div>
    </section>
  );
}

// Final CTA Section
function CTASection() {
  return (
    <section className="section">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <motion.div
          className="max-w-2xl mx-auto space-y-8 prose-tight k"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Stop firefighting.
            <br />
            Start compounding.
          </h2>
          
          <Link
            to="/book"
           className="inline-flex items-center gap-2 bg-foreground text-background px-12 py-6 text-lg font-semibold hover:bg-muted transition-colors focus:outline-none focus:outline-1 focus:outline-background focus:outline-offset-2"
          >
            Book a Call
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <ArrowRight size={24} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  useSEO();

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="overflow-hidden"
    >
      <HeroSection />
      <PASSection />
      <SystemsSection />
      <TrustSection />
      <CTASection />
    </motion.div>
  );
}