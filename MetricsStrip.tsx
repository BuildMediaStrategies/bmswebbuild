import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, dur = 1200) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let s = 0, st = performance.now();
    const r = (t: number) => {
      const e = t - st;
      const p = Math.min(1, e / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(r);
    };
    requestAnimationFrame(r);
  }, [target, dur]);
  return v;
}

export default function MetricsStrip({ 
  items = [
    { label: "Avg reply rate lift", value: 32, suffix: "%" },
    { label: "Time saved /wk", value: 14, suffix: "h" },
    { label: "Lower CPA", value: 27, suffix: "%" },
    { label: "Faster time-to-first-value", value: 5, suffix: "x" },
  ] 
}: { 
  items?: { label: string; value: number; suffix?: string }[] 
}) {
  const counts = items.map(i => useCountUp(i.value));
  
  return (
    <div className="section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] p-4 text-center pressable">
              <div className="text-3xl font-bold">{counts[i]}{it.suffix ?? ""}</div>
              <div className="mt-1 text-sm text-foreground/70">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}