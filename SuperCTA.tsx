import { Link } from "react-router-dom";

export default function SuperCTA({
  title = "Stop firefighting. Start compounding.",
  bullets = ["More revenue per lead", "Lower ops cost", "Hours back every week"],
  primaryHref = "/book",
  primaryLabel = "Book a Call",
  secondaryHref = "/book",
  secondaryLabel = "Talk to Us",
}: {
  title?: string; 
  bullets?: string[]; 
  primaryHref?: string; 
  primaryLabel?: string; 
  secondaryHref?: string; 
  secondaryLabel?: string;
}) {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.04)] outline-sheen">
          {/* animated grid backdrop */}
          <div 
            aria-hidden 
            className="absolute inset-0 opacity-[.12]" 
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,.25) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,.25) 1px, transparent 1px)`,
              backgroundSize: "24px 24px"
            }} 
          />
          <div className="relative z-10 p-6 md:p-10 grid gap-6 md:grid-cols-[1.5fr,1fr] items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">{title}</h2>
              <ul className="mt-4 space-y-2 text-foreground/80">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-foreground/80" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-end">
              <Link 
                to={primaryHref} 
                className="pressable inline-flex justify-center rounded-xl bg-foreground text-background px-5 py-3 border border-foreground hover:bg-muted"
              >
                {primaryLabel}
              </Link>
              <Link 
                to={secondaryHref} 
                className="pressable inline-flex justify-center rounded-xl border border-foreground px-5 py-3 hover:bg-foreground hover:text-background"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}