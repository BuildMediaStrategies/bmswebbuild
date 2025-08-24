import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import MonoGlyph from "./MonoGlyph";

export default function SystemCard({ title, tagline, to, icon }: { title: string; tagline: string; to: string; icon?: string }) {
  return (
    <Link to={to} aria-label={`${title} details`}>
      <motion.div 
        initial={{ opacity: 0, y: 8 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        <Card className="group h-full">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                {icon && (
                  <div className="hidden md:block">
                    <MonoGlyph name={icon} />
                  </div>
                )}
                <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
              </div>
              <p className="mt-1 text-sm text-foreground/70">{tagline}</p>
            </div>
            <ArrowRight className="size-5 mt-1 transition-transform group-hover:translate-x-1" />
          </div>
          <div className="mt-4 h-[2px] w-0 bg-foreground/80 transition-all group-hover:w-full" />
        </Card>
      </motion.div>
    </Link>
  );
}