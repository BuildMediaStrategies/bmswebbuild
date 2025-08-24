import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function QuickFAQ() {
  return (
    <section className="section">
      <div className="mx-auto max-w-3xl px-4">
        <h3 className="text-xl font-semibold mb-4">Common questions</h3>
        <Accordion type="single" collapsible className="border border-[rgba(255,255,255,0.12)] rounded-xl">
          <AccordionItem value="1">
            <AccordionTrigger>What ROI can I expect?</AccordionTrigger>
            <AccordionContent>
              We target measurable outcomes: reply/show rate lift, reduced handle time, and time saved per week. We'll baseline and report monthly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>How fast is implementation?</AccordionTrigger>
            <AccordionContent>
              Most systems ship a first version in 1–2 weeks. The workflow pages mirror your exact stack so iteration is quick.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>Do you integrate with our tools?</AccordionTrigger>
            <AccordionContent>
              Yes — we connect to your CRM, calendars, comms, and data stores. Monochrome UI, zero vendor lock-in.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}