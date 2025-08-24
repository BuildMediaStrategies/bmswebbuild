import { useState } from "react";
import { motion } from "framer-motion";
import { useSEO } from "@/lib/seo";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().min(2, "Company name required"),
  system: z.string().min(2, "Select a system"),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Give us a brief outline"),
  // spam honeypot
  website: z.string().max(0).optional(),
  consent: z.boolean().refine(v => v === true, "Consent is required")
});

export default function Contact() {
  useSEO();

  const jsonLd = {
    "@context":"https://schema.org",
    "@type":"ContactPage",
    "mainEntity": { "@type":"Organization", "name":"BuildMediaStrategies",
      "contactPoint": { "@type":"ContactPoint", "contactType":"sales",
        "email":"buildmediastrategies@outlook.com", "telephone":"07915 738448" } }
  };

  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name:"", email:"", company:"", system:"AI Lead Generation System", timeline:"", budget:"", message:"", website:"", consent:false
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) { 
      console.warn(parsed.error.flatten()); 
      toast({
        title: "Please check your form",
        description: "Some fields need attention before we can send your enquiry.",
      });
      return; 
    }
    setSubmitting(true);
    try {
      // TODO: wire to your backend/email. For now, log and show a toast.
      // You can later POST to a serverless endpoint or email service.
      console.log("Contact submission", parsed.data);
      toast({ 
        title:"Thanks!", 
        description:"We'll get back to you within 24 hours." 
      });
      setForm({ name:"", email:"", company:"", system:"AI Lead Generation System", timeline:"", budget:"", message:"", website:"", consent:false });
    } finally {
      setSubmitting(false);
    }
  }

  const systems = [
    "AI Lead Generation System","Conversion System","Call Automation System","Support System","Recruitment System",
    "AI Sales System","Project Management System","Social Media Automation System","Lead Capture System"
  ];

  return (
    <main className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto max-w-6xl px-4">
        <motion.h1 
          initial={{opacity:0,y:8}} 
          animate={{opacity:1,y:0}} 
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Contact
        </motion.h1>
        <motion.p 
          initial={{opacity:0,y:8}} 
          animate={{opacity:1,y:0}} 
          transition={{delay:0.1}}
          className="mt-3 text-foreground/70 max-w-prose"
        >
          Tell us about your goals. We'll suggest the system with the fastest payback.
        </motion.p>
      </section>

      <section className="section mx-auto max-w-6xl px-4 grid gap-6 md:grid-cols-2">
        {/* Info column */}
        <motion.div 
          initial={{opacity:0,x:-20}} 
          animate={{opacity:1,x:0}} 
          transition={{delay:0.2}}
          className="space-y-4"
        >
          <div className="rounded-2xl border border-[rgba(255,255,255,0.12)] p-5 pressable hover-glow">
            <h3 className="font-semibold">Direct</h3>
            <p className="mt-2 text-sm text-foreground/80">
              Email: <a className="underline hover:text-foreground transition-colors" href="mailto:buildmediastrategies@outlook.com">buildmediastrategies@outlook.com</a><br/>
              Phone: <a className="underline hover:text-foreground transition-colors" href="tel:+447915738448">07915 738448</a>
            </p>
          </div>
          <div className="rounded-2xl border border-[rgba(255,255,255,0.12)] p-5 pressable hover-glow">
            <h3 className="font-semibold">What to include</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-foreground/70 space-y-1">
              <li>Which system you need first</li>
              <li>Current stack (CRM, calendaring, channels)</li>
              <li>One metric you want to improve</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[rgba(255,255,255,0.12)] p-5 pressable hover-glow">
            <h3 className="font-semibold">Response time</h3>
            <p className="mt-2 text-sm text-foreground/70">
              We typically respond within 24 hours during business days. For urgent enquiries, call us directly.
            </p>
          </div>
        </motion.div>

        {/* Form column */}
        <motion.form 
          initial={{opacity:0,x:20}} 
          animate={{opacity:1,x:0}} 
          transition={{delay:0.3}}
          onSubmit={onSubmit} 
          className="rounded-2xl border border-[rgba(255,255,255,0.12)] p-5 bg-[rgba(255,255,255,0.03)] backdrop-blur-sm space-y-4"
        >
          {/* honeypot */}
          <input type="text" name="website" value={form.website} onChange={onChange} className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name *</label>
              <input name="name" value={form.name} onChange={onChange} required
                className="w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-black px-3 py-2 focus:border-foreground focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required
                className="w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-black px-3 py-2 focus:border-foreground focus:outline-none transition-colors" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Company *</label>
              <input name="company" value={form.company} onChange={onChange} required
                className="w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-black px-3 py-2 focus:border-foreground focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">System *</label>
              <select name="system" value={form.system} onChange={onChange} required
                className="w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-black px-3 py-2 focus:border-foreground focus:outline-none transition-colors">
                {systems.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Timeline</label>
              <input name="timeline" value={form.timeline} onChange={onChange}
                placeholder="e.g., 2–4 weeks" 
                className="w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-black px-3 py-2 focus:border-foreground focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Budget</label>
              <input name="budget" value={form.budget} onChange={onChange}
                placeholder="e.g., £2–5k /mo" 
                className="w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-black px-3 py-2 focus:border-foreground focus:outline-none transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message *</label>
            <textarea name="message" value={form.message} onChange={onChange} required rows={5}
              placeholder="Tell us about your current workflow challenges and what you'd like to achieve..."
              className="w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-black px-3 py-2 focus:border-foreground focus:outline-none transition-colors resize-none" />
          </div>

          <label className="inline-flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} required
              className="h-4 w-4 rounded border border-[rgba(255,255,255,0.4)] bg-black focus:ring-2 focus:ring-foreground" />
            I consent to being contacted about this enquiry. *
          </label>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button 
              type="submit"
              disabled={submitting} 
              className="pressable rounded-xl bg-foreground text-background px-5 py-3 border border-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send Enquiry"}
            </button>
            <a 
              href="mailto:buildmediastrategies@outlook.com" 
              className="pressable inline-flex justify-center rounded-xl border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              Or email us
            </a>
          </div>
        </motion.form>
      </section>

      {/* CTA footer */}
      <section className="section mx-auto max-w-6xl px-4">
        <motion.div 
          initial={{opacity:0,y:20}} 
          whileInView={{opacity:1,y:0}} 
          viewport={{once:true}}
          className="rounded-2xl border border-[rgba(255,255,255,0.18)] p-6 outline-sheen"
        >
          <h2 className="text-xl md:text-2xl font-semibold">Prefer to book a demo?</h2>
          <p className="mt-2 text-foreground/70">Pick a time and we'll walk you through a system that fits your goals.</p>
          <div className="mt-4">
            <a href="/book" className="pressable inline-flex rounded-xl bg-foreground text-background px-5 py-3 border border-foreground hover:bg-muted transition-colors">
              Book a Call
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}