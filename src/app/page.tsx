import Hero from "@/components/hero/hero"
import PurposeSection from "@/components/purpose/purpose-section"
import ProficienciesSection from "@/components/proficiencies/proficiencies-section"
import ProcessSection from "@/components/process/process-section"
import PropositionSection from "@/components/proposition/proposition-section"

export default function Home() {
  return (
    <>
      <Hero />
      <PurposeSection />
      <ProficienciesSection />
      <ProcessSection />
      <PropositionSection />
    </>
  )
}

