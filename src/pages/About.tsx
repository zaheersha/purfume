// import heroImg from "../assets/images/hero.png";
import logoImg from "../assets/images/logo.png";
import FloatingActions from "@/components/FloatingActions";

import Image from "../assets/images/bg2.png";
import heroImg from "../assets/images/image3.png";

export default function About() {
  return (
    <div className="animate-in fade-in duration-700">

            {/* Philosophy Banner */}
<section
  className="relative py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center"
  style={{
    backgroundImage: "url('/background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative max-w-3xl mx-auto text-white z-10">
    <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
      "A perfume is like a piece of clothing, a message, a way of presenting oneself, 
      a costume that differs according to the woman who wears it."
    </h2>
    <p className="tracking-widest uppercase text-sm font-medium text-amber-300">
      Paloma Picasso
    </p>
  </div>
</section>



      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">








          
          <div className="text-center mb-16">
            <div className="flex flex-col items-center mb-12">
              <img src={logoImg} alt="Rare Pheromone Logo" className="h-40 w-auto mb-6 dark:invert-0 animate-in  zoom-in duration-1000" />
              <h2 className="font-sans text-[12px] tracking-[0.6em] text-primary font-bold uppercase">
                Rare Pheromone
              </h2>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 tracking-tight">Our Story</h1>
            <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Founded on the belief that luxury should be an accessible daily ritual, Rare Pheromone brings together traditional craftsmanship and modern sensibilities.
            </p>
          </div>

          <div className="aspect-[21/9] w-full overflow-hidden mb-16">
            <img 
              src={Image} 
              alt="Aura Perfumery Studio" 
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl mb-6 text-foreground">The Vision</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Aura was born from a desire to demystify the world of fine fragrances. We believe that a signature scent is an invisible yet powerful extension of your personality.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                By stripping away the unnecessary and focusing purely on the quality of ingredients, we've created a collection that speaks directly to the senses without the traditional retail markup.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-8 rounded-lg border border-border/50">
              <h2 className="font-serif text-2xl mb-6 text-foreground">Our Promise</h2>
              <ul className="space-y-4 text-muted-foreground font-light">
                <li className="flex gap-4">
                  <span className="text-primary font-serif italic text-xl">01</span>
                  <span><strong>Ethical Sourcing.</strong> We partner directly with growers to ensure sustainable harvesting of raw materials.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-serif italic text-xl">02</span>
                  <span><strong>Small Batch Production.</strong> Every bottle is blended and aged in limited quantities to guarantee maximum freshness.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-serif italic text-xl">03</span>
                  <span><strong>Cruelty-Free.</strong> We never test on animals and are committed to 100% vegan formulations where possible.</span>
                </li>
              </ul>
            </div>
          </div>


{/* ================= CRAFTSMANSHIP ================= */}
<div className="mt-24 grid md:grid-cols-2 gap-16 items-center">
  <div className="aspect-[4/5] overflow-hidden rounded-lg">
    <img
      src={heroImg}
      alt="Perfume Craftsmanship"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
    />
  </div>

  <div>
    <h2 className="font-serif text-3xl mb-6">The Craft Behind Every Drop</h2>
    <p className="text-muted-foreground font-light leading-relaxed mb-6">
      Each Rare Pheromone fragrance is crafted with precision, balancing rare ingredients
      and modern artistry. We believe a fragrance should evolve with you throughout the day,
      revealing layers of character and emotion.
    </p>
    <p className="text-muted-foreground font-light leading-relaxed">
      Our perfumers focus on harmony — creating scents that feel personal, timeless,
      and unforgettable.
    </p>
  </div>
</div>



<FloatingActions />


        </div>
      </div>
    </div>
  );
}
