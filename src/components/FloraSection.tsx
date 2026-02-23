import { Leaf } from "lucide-react";

const flora = [
  "Sandalwood", "Sumba Eucalyptus", "Lontar Palm", "Suren", "Taduk", "Kesambi",
  "Pulai", "Tamarind", "Candlenut", "Forest Guava", "Mountain Pine", "Lantana",
];

const FloraSection = () => {
  return (
    <section id="flora" className="py-20">
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
          Flora of Sumba
        </h2>
        <p className="font-body text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Sumba's vegetation reflects its dry climate, dominated by savanna landscapes with pockets of forest,
          mangroves in sheltered bays, and culturally important palms and hardwood species.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {flora.map((f) => (
            <div
              key={f}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-md transition-shadow"
            >
              <Leaf className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="font-body text-sm text-foreground">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloraSection;
