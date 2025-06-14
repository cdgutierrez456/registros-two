import CTA from "@/components/global/cta";
import FAQ from "@/components/global/faq";
import Form from "@/components/global/form";
import Introduction from "@/components/global/introduction";
import LearnMore from "@/components/global/learnmore";

export default function Home() {
  return (
    <div>
      <Form />
      <CTA />
      <Introduction />
      <LearnMore />
      <FAQ />
    </div>
  );
}
