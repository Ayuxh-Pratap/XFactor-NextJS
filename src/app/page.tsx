import Hero from "@/components/hero/hero"
import PurposeSection from "@/components/purpose/purpose-section"
import ProficienciesSection from "@/components/proficiencies/proficiencies-section"
import ProcessSection from "@/components/process/process-section"
import PropositionSection from "@/components/proposition/proposition-section"
import PresenceSection from "@/components/presence/presence-section"
import PeopleSection from "@/components/people/people-section"
import PerformanceSection from "@/components/performance/performance-section"
import PartnerSection from "@/components/partner/partner-section"
import PressReleasesSection from "@/components/press-releases/press-releases-section"
import PingSection from "@/components/ping/ping-section"

export default function Home() {
  return (
    <>
      <Hero />
      <PurposeSection />
      <ProficienciesSection />
      <ProcessSection />
      <PropositionSection />
      <PresenceSection />
      <PeopleSection />
      <PerformanceSection />
      <PartnerSection />
      <PressReleasesSection />
      <PingSection />
    </>
  )
}

