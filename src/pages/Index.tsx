import HeroSection from "@/components/HeroSection";
import IconicSpecies from "@/components/IconicSpecies";
import Habitats from "@/components/Habitats";
import BirdsSection from "@/components/BirdsSection";
import WildlifeListSection from "@/components/WildlifeListSection";
import FloraSection from "@/components/FloraSection";
import ConservationSection from "@/components/ConservationSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onNavigate={scrollTo} />

      {/* Overview */}
      <section id="overview" className="py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Sumba's Natural Heritage
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Located within the Wallacea region, Sumba sits at the meeting point of Asian and Australasian ecosystems.
            This transition zone explains the island's extraordinary biodiversity, including endemic birds, dry savanna
            landscapes, limestone hills, remnant forests, and thriving coastal ecosystems.
          </p>
        </div>
      </section>

      <IconicSpecies />
      <Habitats />
      <BirdsSection />
      <WildlifeListSection />
      <FloraSection />
      <ConservationSection />
      <CTASection />
    </main>
  );
};

export default Index;
