export default function ValueCard({ title, desc }:{ title:string; desc:string }) {
  return (
    <div className="rounded-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] p-5 pressable hover-glow">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-foreground/70">{desc}</p>
    </div>
  );
}