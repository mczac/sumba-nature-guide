const mammals = ["Fruit Bats", "Palm Civet", "Timor Deer", "Sumba Pony", "Water Buffalo"];
const reptilesMarine = ["Saltwater Crocodile", "Komodo Dragon (historical presence)", "Manta Ray", "Sea Turtles", "Whale Sharks"];

const WildlifeListSection = () => {
  return (
    <>
      <section id="mammals" className="py-20">
        <div className="container">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center">
            Mammals of Sumba
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {mammals.map((m) => (
              <span
                key={m}
                className="px-6 py-3 rounded-full bg-card border border-border font-body text-foreground hover:border-nature-sage transition-colors"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="reptiles" className="py-20 bg-card">
        <div className="container">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-10 text-center">
            Reptiles & Marine Life
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {reptilesMarine.map((r) => (
              <span
                key={r}
                className="px-6 py-3 rounded-full bg-nature-ocean/10 border border-nature-ocean/20 font-body text-foreground hover:bg-nature-ocean/20 transition-colors"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WildlifeListSection;
