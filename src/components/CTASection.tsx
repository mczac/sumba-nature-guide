import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-nature-deep">
      <div className="container text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
          Explore Sumba's Nature
        </h2>
        <p className="font-body text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
          Discover experiences inspired by the island's landscapes and wildlife.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/things-to-do"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-nature-amber text-foreground font-body font-semibold hover:brightness-110 transition-all"
          >
            Things to Do <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/plan-your-trip"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold hover:bg-primary-foreground/10 transition-all"
          >
            Plan Your Trip
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
