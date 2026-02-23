import { Shield, Heart } from "lucide-react";

const tips = [
  "Observe wildlife from a distance",
  "Stay on trails",
  "Support conservation organizations",
  "Choose responsible tour operators",
  "Respect nesting and breeding sites",
];

const ConservationSection = () => {
  return (
    <section id="conservation" className="py-20 bg-card">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Conservation & Responsible Travel
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Habitat loss, climate pressures, and hunting have impacted wildlife, but conservation programs,
            reforestation efforts, and community initiatives are helping preserve Sumba's ecosystems.
          </p>
        </div>

        <div className="bg-background rounded-2xl border border-border p-8">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Heart className="w-5 h-5 text-nature-amber" /> How Travelers Can Help
          </h3>
          <ul className="space-y-4">
            {tips.map((tip) => (
              <li key={tip} className="flex items-center gap-4 font-body text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ConservationSection;
