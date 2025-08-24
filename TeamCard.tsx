export default function TeamCard({
  name, role, bio, avatar
}:{ name:string; role:string; bio:string; avatar?:string }) {
  return (
    <div className="rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] p-5 pressable hover-glow">
      <div className="flex items-start gap-4">
        <div className="h-14 w-14 rounded-full overflow-hidden border border-[rgba(255,255,255,0.18)] bg-black">
          {avatar ? <img src={avatar} alt={name} className="h-full w-full object-cover" /> : null}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-foreground/70">{role}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-foreground/80">{bio}</p>
    </div>
  );
}