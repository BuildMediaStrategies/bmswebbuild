export default function TrustedMarquee() {
  const tools = [
    "n8n", "Make.com", "Voiceflow", "Convocore", "Supabase", "OpenAI", "Instantly", "Clay"
  ];

  return (
    <section className="section">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
          {tools.map((tool, index) => (
            <div
              key={tool}
              className="px-4 py-2 border border-line text-foreground/60 font-medium pressable"
            >
              {tool}
            </div>
          ))}
        </div>
        <p className="text-sm text-foreground/50 prose-tight k">Trusted stack. Built for reliability.</p>
      </div>
    </section>
  );
}