import { TreePine, Mountain, Waves } from "lucide-react";

const habitats = [
  {
    icon: Mountain,
    title: "Savanna & Grasslands",
    desc: "Dominant landscape supporting ponies, deer, and raptors.",
  },
  {
    icon: TreePine,
    title: "Forests & Valleys",
    desc: "Critical habitat for endemic birds and rare plant species.",
  },
  {
    icon: Waves,
    title: "Coasts & Reefs",
    desc: "Mangroves, coral reefs, and marine megafauna.",
  },
];

const Habitats = () => {
  return (
    <section id="habitats" className="py-20">
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          Habitats of Sumba
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {habitats.map((h) => (
            <div
              key={h.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-nature-sage/50 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <h.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{h.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habitats;
