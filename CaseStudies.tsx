import { motion } from 'framer-motion';

export default function CaseStudies() {
  return (
    <div className="section">
      <div className="max-w-screen-xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-8 prose-tight k"
      >
        <h1 className="text-3xl md:text-4xl font-bold">Case Studies</h1>
        <p className="text-foreground/70 leading-relaxed text-lg">
          Discover how our AI systems have transformed businesses across different industries.
          Real results, measurable ROI, and proven success stories.
        </p>
        <div className="mt-12 text-center">
          <p className="text-foreground/50">Case studies coming soon...</p>
        </div>
      </motion.div>
      </div>
    </div>
  );
}