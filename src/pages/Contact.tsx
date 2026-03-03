import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import FloatingActions from "@/components/FloatingActions";

export default function Contact() {
 const handleWhatsApp = () => {
  const message = "Hi, I want to know more about the perfume. Can you let me know more about it?";
  const url = `https://wa.me/919494333702?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

  
  return (

    <div>



      <section
  className="relative w-full h-[70vh] md:h-screen bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: "url('/contact.png')"
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-6">
    <h1 className="font-serif text-3xl md:text-5xl text-white mb-6">
      Contact Us
    </h1>

    <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
      Whether you need assistance choosing a fragrance or have a question
      about your order, our dedicated team is here to help.
    </p>
  </div>
</section>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto">

        
  
<FloatingActions />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-border/50 shadow-sm">
            <CardContent className="p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h2 className="font-serif text-2xl mb-4">Direct Messaging</h2>
              <p className="text-muted-foreground font-light mb-8">
                The fastest way to reach us. Order processing and customer support are handled seamlessly via WhatsApp.
              </p>
              <Button onClick={handleWhatsApp} className="h-12 px-8 bg-[#25D366] hover:bg-[#128C7E] text-white w-full sm:w-auto">
                Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="border-border/50 shadow-sm border-l-4 border-l-primary/50 hover:border-l-primary transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground font-light text-sm mb-2">For general inquiries and press.</p>
                  <a href="mailto:hello@auraperfumes.com" className="text-primary hover:underline font-medium">rarepheromone007@gmail.com</a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm border-l-4 border-l-primary/50 hover:border-l-primary transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-foreground mb-1">Studio Address</h3>
                  <p className="text-muted-foreground font-light text-sm">
                    ngo colony ,near more supermarket,<br />
                    kadapa pincode-516002
Andhra pradesh
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm border-l-4 border-l-primary/50 hover:border-l-primary transition-colors">
              <CardContent className="p-6 flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-foreground mb-1">Operating Hours</h3>
                  <p className="text-muted-foreground font-light text-sm">
                    Monday - Friday: 9am - 8pm IST<br />
                    Weekend: 10am - 6pm IST
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
