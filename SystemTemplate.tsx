import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Target, Settings } from 'lucide-react';
import { fadeUp, fadeIn, scaleIn, viewportSettings } from '@/lib/anim';
import { useSEO } from '@/lib/seo';

interface SystemTemplateProps {
  title: string;
  tagline: string;
  painPoints: string[];
  steps: { title: string; desc: string }[];
  features: string[];
  integrations: string[];
  kpis: string[];
}

// Animated Nodes Background Component
function AnimatedNodes() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <motion.div
        className="absolute inset-0 gpu"
        animate={{
          y: [0, -10, 0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 400 300">
          {/* Nodes */}
          <circle cx="80" cy="60" r="2" fill="currentColor" />
          <circle cx="200" cy="40" r="2" fill="currentColor" />
          <circle cx="320" cy="80" r="2" fill="currentColor" />
          <circle cx="150" cy="120" r="2" fill="currentColor" />
          <circle cx="280" cy="140" r="2" fill="currentColor" />
          <circle cx="100" cy="180" r="2" fill="currentColor" />
          <circle cx="250" cy="200" r="2" fill="currentColor" />
          <circle cx="350" cy="180" r="2" fill="currentColor" />
          
          {/* Connecting Lines */}
          <line x1="80" y1="60" x2="200" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="200" y1="40" x2="320" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="150" y1="120" x2="280" y2="140" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="100" y1="180" x2="250" y2="200" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="280" y1="140" x2="350" y2="180" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="80" y1="60" x2="150" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="320" y1="80" x2="280" y2="140" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        </svg>
      </motion.div>
    </div>
  );
}

export default function SystemTemplate({
  title,
  tagline,
  painPoints,
  steps,
  features,
  integrations,
  kpis
}: SystemTemplateProps) {
  useSEO();
  const stepIcons = [Target, Zap, Settings];

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[50vh] flex items-center">
        <AnimatedNodes />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl">
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-foreground/70 max-w-2xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              {tagline}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="section section-muted">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="max-w-3xl prose-tight k"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">The Problem</h2>
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.1 }}
                  viewport={viewportSettings}
                >
                  <div className="w-2 h-2 bg-black mt-3 flex-shrink-0" />
                  <div className="w-2 h-2 bg-foreground mt-3 flex-shrink-0" />
                  <p className="text-foreground/80 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-12 text-center prose-tight k"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            How It Works
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const Icon = stepIcons[index] || Target;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.2 }}
                  viewport={viewportSettings}
                >
                  <div className="w-16 h-16 mx-auto mb-4 border-2 border-foreground flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed prose-tight k">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="section section-muted">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-12 prose-tight k"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Features and Benefits
          </motion.h2>
          
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <CheckCircle size={20} className="mt-1 flex-shrink-0" />
                <span className="text-foreground/80">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 prose-tight k"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Integrations
          </motion.h2>
          
          <div className="flex flex-wrap gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
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
                {integration}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="section section-muted">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 prose-tight k"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            KPIs You Can Expect
          </motion.h2>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl">
            {kpis.map((kpi, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-foreground mt-3 flex-shrink-0" />
                <span className="text-foreground/80 font-medium">{kpi}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
              Ready to build this system?
            </h2>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-12 py-6 text-lg font-semibold hover:bg-muted transition-colors focus:outline-none focus:outline-1 focus:outline-background focus:outline-offset-2"
            >
              Build this System
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
    </motion.div>
  );
}