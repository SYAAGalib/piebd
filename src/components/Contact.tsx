import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border shadow-card">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..." 
                    className="min-h-[150px] bg-background"
                  />
                </div>
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      01, Central Road, West Tutpara<br />
                      Khulna, Bangladesh
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@piebd.org
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      +880 1XXX-XXXXXX
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <div className="w-full h-64 rounded-xl overflow-hidden border border-border shadow-card">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d220.88866373396283!2d89.56747506325786!3d22.806686079325786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1761460579095!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="PiBD Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
