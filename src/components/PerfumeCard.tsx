import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Perfume } from "@/lib/data";

interface PerfumeCardProps {
  perfume: Perfume;
}

export function PerfumeCard({ perfume }: PerfumeCardProps) {
const handleOrder = () => {
  const phoneNumber = "916303914124";

  const message = `Hi,
I want to order this perfume:

${perfume.name}
Brand: ${perfume.brand}
Price: ₹${perfume.price.toLocaleString("en-IN")}

Is it available? Please share more details.`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};
const discountPercentage = Math.round(
  ((perfume.price - perfume.actualprice) / perfume.price) * 100
);
  return (
    <Card className="overflow-hidden border-border/40 hover:border-primary/30 transition-all duration-500 group bg-card shadow-sm hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img 
          src={perfume.imageUrl} 
          alt={perfume.name} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2 flex-col items-start">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs font-normal">
            {perfume.gender}
          </Badge>
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/20 text-primary text-xs font-normal">
            {perfume.type}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{perfume.brand}</p>
            <h3 className="font-serif text-xl font-medium" data-testid={`text-perfume-name-${perfume.id}`}>
              {perfume.name}
            </h3>
          </div>
<div className="text-right">
  {/* Offer Price */}
  <p className="font-serif text-lg text-primary whitespace-nowrap">
    ₹{perfume.actualprice.toLocaleString('en-IN')}
  </p>

  {/* Actual Price (Striked) */}
  <p className="text-sm text-muted-foreground line-through">
    ₹{perfume.price.toLocaleString('en-IN')}
  </p>

  {/* Discount Badge */}
  <p className="text-xs text-green-600 font-medium">
    {discountPercentage}% OFF
  </p>
</div> 
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mt-3 mb-4 font-light leading-relaxed">
          {perfume.description}
        </p>
        
        <div className="mb-6">
          <p className="text-xs font-medium text-foreground mb-2">KEY NOTES:</p>
          <div className="flex flex-wrap gap-1.5">
            {perfume.notes.map((note) => (
              <span key={note} className="text-xs px-2 py-1 bg-secondary rounded-sm text-secondary-foreground font-light">
                {note}
              </span>
            ))}
          </div>
        </div>
        
        <Button 
          onClick={handleOrder}
          className="w-full bg-foreground text-background hover:bg-primary transition-colors h-12 text-sm tracking-wide uppercase"
          data-testid={`button-order-${perfume.id}`}
        >
          Order via WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
}
