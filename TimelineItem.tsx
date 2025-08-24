export default function TimelineItem({ year, title, desc }:{ year:string; title:string; desc:string }) {
  return (
    <div className="relative pl-6">
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-foreground" />
      <div className="text-xs text-foreground/60">{year}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-foreground/70">{desc}</div>
    </div>
  );
}