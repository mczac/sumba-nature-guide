import { Bird, MapPin } from "lucide-react";

const endemicBirds = [
  "Sumba Hornbill", "Sumba Boobook", "Sumba Buttonquail", "Red-naped Fruit-dove",
  "Sumba Green Pigeon", "Sumba Flycatcher", "Apricot-breasted Sunbird",
  "Sumba Eclectus Parrot", "Citron-crested Cockatoo", "Sumba Myzomela",
  "Cinnamon-banded Kingfisher",
];

const birdLocations = [
  "Lapopu Forest",
  "Manupeu–Tanah Daru National Park",
  "Coastal Scrublands",
  "Rice Paddies (wet season)",
];

const BirdsSection = () => {
  return (
    <section id="birds" className="py-20 bg-card">
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
          Birds of Sumba
        </h2>
        <p className="font-body text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Sumba hosts 11 endemic bird species found nowhere else on Earth.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Bird className="w-5 h-5 text-primary" /> Endemic Species
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {endemicBirds.map((bird) => (
                <div
                  key={bird}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-background border border-border"
                >
                  <span className="w-2 h-2 rounded-full bg-nature-amber flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{bird}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> Best Birdwatching Locations
            </h3>
            <div className="space-y-4">
              {birdLocations.map((loc, i) => (
                <div
                  key={loc}
                  className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="font-body text-foreground pt-1">{loc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirdsSection;
