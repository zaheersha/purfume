import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function DiscountPopup() {
  const [open, setOpen] = useState(false);

  // show popup after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 800); // delay for smooth feel

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      
      {/* Popup Card */}
      <div className="relative w-full max-w-xl bg-background rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 bg-background/80 hover:bg-background p-2 rounded-full shadow"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Banner */}
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20231020/pngtree-natural-perfume-essence-embracing-nature-s-fragrance-against-dark-textured-backdrop-image_13684960.png"
          alt="Discount Offer"
          className="w-full h-[200px] sm:h-[260px] object-cover"
        />

        {/* Content */}
        <div className="p-6 text-center">
          <h2 className="font-serif text-3xl mb-3">🔥 Special Offer</h2>
          <p className="text-muted-foreground font-light mb-6">
            Enjoy exclusive discounts on Rare Pheromone fragrances.
            Limited time luxury deals — don’t miss out!
          </p>

          <button
            onClick={() => setOpen(false)}
            className="px-6 py-3 bg-foreground text-background hover:bg-primary transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}