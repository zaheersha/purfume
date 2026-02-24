import { Link } from "wouter";
import { Instagram, Facebook, Twitter } from "lucide-react";
import logoImg from "../layout/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 border-t border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <img src={logoImg} alt="Rare Pheromone Logo" className="h-16 w-auto brightness-0 invert transition-transform duration-500 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold tracking-[0.2em] text-background leading-none">
                  RARE
                </span>
                <span className="font-sans text-xs tracking-[0.5em] text-primary font-bold mt-2">
                  PHEROMONE
                </span>
              </div>
            </Link>
            <p className="text-muted text-sm max-w-sm font-light leading-relaxed">
              Curating exceptional fragrances for the modern individual. 
              Elevate your presence with our luxurious collection of signature scents.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4 text-primary-foreground/90">Explore</h4>
            <ul className="space-y-3 text-sm font-light text-muted">
              <li><Link href="/categories" className="hover:text-background transition-colors">Our Collection</Link></li>
              <li><Link href="/categories?gender=Women" className="hover:text-background transition-colors">For Her</Link></li>
              <li><Link href="/categories?gender=Men" className="hover:text-background transition-colors">For Him</Link></li>
              <li><Link href="/about" className="hover:text-background transition-colors">Our Story</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4 text-primary-foreground/90">Contact</h4>
            <ul className="space-y-3 text-sm font-light text-muted">
              <li>info@RarePheromone.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="pt-4 flex gap-4">
                <a href="#" className="hover:text-background transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="hover:text-background transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="hover:text-background transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-background/10 text-center text-xs text-muted font-light">
          <p>&copy; {new Date().getFullYear()} Rare Pheromone . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
