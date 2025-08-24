import { useState } from "react";
import { z } from "zod";
import { useSEO } from "@/lib/seo";

const schema = z.object({
  name: z.string().min(2, "Full name"),
  email: z.string().email("Valid email"),
  company: z.string().min(2, "Company"),
  system: z.string().min(2, "Pick a system"),
  timezone: z.string().min(2, "Timezone"),
  times: z.string().min(2, "Preferred times"),
  notes: z.string().min(10, "Tell us a bit more"),
  website: z.string().max(0).optional(), // honeypot
  consent: z.boolean().refine(v => v === true, "Consent required"),
});

const SYSTEMS = [
  "AI Lead Generation System","Conversion System","Call Automation System","Support System","Recruitment System",
  "AI Sales System","Project Management System","Social Media Automation System","Lead Capture System"
];

const MAKE_WEBHOOK_URL = import.meta.env.VITE_MAKE_WEBHOOK_URL || ""; // set this in env when ready

export default function BookCall(){
  useSEO();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name:"", email:"", company:"", system:SYSTEMS[0], timezone:"", times:"", notes:"",
    website:"", consent:false
  });
  const onChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm(p => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };
  async function onSubmit(e: React.FormEvent){
    e.preventDefault();
    const v = schema.safeParse(form);
    if(!v.success){ console.warn(v.error.flatten()); return; }
    setSubmitting(true);
    try{
      if(MAKE_WEBHOOK_URL){
        await fetch(MAKE_WEBHOOK_URL, {
          method:"POST",
          headers:{ "Content-Type":"application/json" },
          body: JSON.stringify({ source:"bms-book", ...v.data })
        });
      } else {
        console.log("BOOKING (dev)", v.data);
      }
      setSent(true);
      setForm({ name:"", email:"", company:"", system:SYSTEMS[0], timezone:"", times:"", notes:"", website:"", consent:false });
    } finally { setSubmitting(false); }
  }

  if(sent){
    return (
      <main className="section">
        <section className="mx-auto max-w-2xl px-4 rounded-2xl border border-[rgba(255,255,255,0.18)] p-6 bg-[rgba(255,255,255,0.03)] backdrop-blur-sm">
          <h1 className="text-2xl md:text-3xl font-bold">Thanks — your request is in.</h1>
          <p className="mt-2 text-foreground/70">We'll email you shortly to confirm a time. If it's urgent, email <a className="underline" href="mailto:buildmediastrategies@outlook.com">buildmediastrategies@outlook.com</a>.</p>
          <a href="/" className="mt-5 inline-flex rounded-xl border border-foreground px-4 py-2 hover:bg-foreground hover:text-background">Back to home</a>
        </section>
      </main>
    );
  }

  return (
    <main className="section">
      <section className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">Book a Call</h1>
        <p className="mt-3 text-foreground/70 max-w-prose">Tell us a bit about your goals and we'll suggest the system with the fastest payback — then schedule a call.</p>
      </section>

      <section className="section mx-auto max-w-3xl px-4">
        <form onSubmit={onSubmit} className="rounded-2xl border border-[rgba(255,255,255,0.12)] p-5 bg-[rgba(255,255,255,0.03)] backdrop-blur-sm space-y-4">
          {/* honeypot */}
          <input type="text" name="website" value={form.website} onChange={onChange} className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-1">Full name *</label>
              <input name="name" value={form.name} onChange={onChange} required className="w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-black px-3 py-2 focus:border-foreground focus:outline-none transition-colors" />
            </div>
            <div><label className="block text-sm font-medium mb-1">Email *</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-black px-3 py-2 focus:border-foreground focus:outline-none transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-1">Company *</label>
              <input name="company" value={form.company} onChange={onChange} required className="w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-black px-3 py-2 focus:border-foreground focus:outline-none transition-colors" />
            </div>
            <div><label className="block text-sm font-medium mb-1">System *</label>
              <select name="system" value={form.system} onChange={onChange} required className="w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-black px-3 py-2 focus:border-foreground focus:outline-none transition-colors">
                {SYSTEMS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-1">Timezone *</label>
              <input name="timezone" placeholder="e.g., Europe/London" value={form.timezone} onChange={onChange} required className="w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-black px-3 py-2 focus:border-foreground focus:outline-none transition-colors" />
            </div>
            <div><label className="block text-sm font-medium mb-1">Preferred times *</label>
              <input name="times" placeholder="e.g., Tue/Thu 2–5pm" value={form.times} onChange={onChange} required className="w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-black px-3 py-2 focus:border-foreground focus:outline-none transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Notes *</label>
            <textarea name="notes" rows={5} value={form.notes} onChange={onChange} required 
              placeholder="Tell us about your current workflow challenges and what you'd like to achieve..."
              className="w-full rounded-lg border border-[rgba(255,255,255,0.18)] bg-black px-3 py-2 focus:border-foreground focus:outline-none transition-colors resize-none" />
          </div>

          <label className="inline-flex items-center gap-2 text-sm cursor-pointer">
            <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} required
              className="h-4 w-4 rounded border border-[rgba(255,255,255,0.4)] bg-black focus:ring-2 focus:ring-foreground" />
            I consent to being contacted about this booking. *
          </label>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button 
              type="submit"
              disabled={submitting} 
              className="pressable rounded-xl bg-foreground text-background px-5 py-3 border border-foreground hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Request Call"}
            </button>
            <a 
              href="mailto:buildmediastrategies@outlook.com" 
              className="pressable inline-flex justify-center rounded-xl border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              Or email us
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}