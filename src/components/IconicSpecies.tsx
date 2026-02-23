import cockatooImg from "@/assets/cockatoo.jpg";
import seaTurtleImg from "@/assets/sea-turtle.jpg";
import sandalwoodImg from "@/assets/sandalwood.jpg";
import sumbaHorseImg from "@/assets/sumba-pony.jpg";

const species = [
  {
    title: "Citron-crested Cockatoo",
    desc: "Critically endangered endemic cockatoo and conservation flagship.",
    img: cockatooImg,
  },
  {
    title: "Sea Turtles",
    desc: "Remote beaches host nesting grounds for green and hawksbill turtles.",
    img: seaTurtleImg,
  },
  {
    title: "Sandalwood",
    desc: "Historically vital tree shaping Sumba's trade and identity.",
    img: sandalwoodImg,
  },
  {
    title: "Sumba Pony",
    desc: "Wild horses central to local culture and Pasola traditions.",
    img: sumbaHorseImg,
  },
];

const IconicSpecies = () => {
  return (
    <section id="iconic-species" className="py-20 bg-card">
      <div className="container">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          Iconic Species of Sumba
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {species.map((s) => (
            <article
              key={s.title}
              className="group rounded-xl overflow-hidden bg-background border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconicSpecies;
