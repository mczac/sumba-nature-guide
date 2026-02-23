import heroImage from "@/assets/sumba-hero.jpg";

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "iconic-species", label: "Iconic Species" },
  { id: "habitats", label: "Habitats" },
  { id: "birds", label: "Birds" },
  { id: "mammals", label: "Mammals" },
  { id: "reptiles", label: "Reptiles & Marine" },
  { id: "flora", label: "Flora" },
  { id: "conservation", label: "Conservation" },
];

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <header className="relative min-h-[85vh] flex items-end overflow-hidden">
      <img
        src={heroImage}
        alt="Sumba Island aerial view with wild horses on golden savanna coastline"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

      <div className="relative z-10 container pb-12 pt-32">
        <span className="inline-block px-4 py-1.5 rounded-full bg-nature-amber/90 text-primary-foreground text-sm font-body font-semibold tracking-wide uppercase mb-6 animate-fade-in">
          Biodiversity of Sumba
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-3xl mb-6 animate-fade-up">
          Nature & Wildlife of Sumba
        </h1>
        <p className="font-body text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          From endemic birds and wild savannas to coral reefs and ancient trees,
          Sumba remains one of Indonesia's last great ecological frontiers.
        </p>

        <nav className="flex flex-wrap gap-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="px-4 py-2 rounded-full text-sm font-body font-medium bg-primary-foreground/15 text-primary-foreground backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/25 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default HeroSection;
