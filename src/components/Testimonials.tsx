import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    rating: 5,
    ratingText: "Excellent",
    image:
      "https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png",
    feedback:
      "Absolutely luxurious! The fragrance lasts all day and feels incredibly premium. I receive compliments everywhere I go.",
  },
  {
    name: "Sneha Kapoor",
    rating: 4,
    ratingText: "Very Good",
    image:
      "https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png",
    feedback:
      "Rare Bloom is elegant and soft. Long-lasting and beautifully balanced.",
  },
  {
    name: "Rahul Verma",
    rating: 5,
    ratingText: "Premium Quality",
    image:
      "https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png",
    feedback:
      "Packaging, scent and overall experience feels very premium. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="mt-24 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground font-light max-w-xl mx-auto">
          Discover why fragrance lovers choose Rare Pheromone for their
          signature scent.
        </p>
      </div>

      {/* ===== AUTO SCROLL ALL DEVICES ===== */}
      <div className="overflow-hidden">
        <div className="flex gap-6 md:gap-8 animate-testimonial-scroll">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[85%] sm:min-w-[60%] md:min-w-[350px] bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium">{t.name}</h4>

                  {/* Stars + Text */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-2">
                      {t.ratingText}
                    </span>
                  </div>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                “{t.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}