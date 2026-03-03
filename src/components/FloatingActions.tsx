import { useEffect, useState } from "react";
import { ArrowUp, X } from "lucide-react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsapp = () => {
    const phone = "916303914124";
    const message = "Hi, I need help regarding perfumes.";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">

      {/* WhatsApp Section */}
      {showWhatsapp && (
        <div className="flex items-center gap-3">

          {/* Need Help Bubble */}
          <div className="bg-background border border-border shadow-lg rounded-full px-4 py-2 flex items-center gap-3 animate-in fade-in">
            <span className="text-sm font-light">Need help?</span>

            {/* Close Button */}
            <button
              onClick={() => setShowWhatsapp(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X size={16} />
            </button>
          </div>

          {/* WhatsApp Icon */}
          <button
            onClick={openWhatsapp}
            className="w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-all duration-300 overflow-hidden"
          >
            <img
              src="https://logospng.org/download/whatsapp/logo-whatsapp-4096.png"
              alt="WhatsApp"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      )}

      {/* Scroll To Top */}
      {showTop && (
        <button
          onClick={handleScrollTop}
          className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center shadow-xl hover:bg-primary transition-all duration-300"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
