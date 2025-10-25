import { ArrowRight, Sparkles, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "200+" },
    { icon: Zap, label: "Projects Delivered", value: "500+" },
    { icon: Shield, label: "Years Experience", value: "5+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-primary-light/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm">
              <Sparkles className="h-4 w-4" />
              <span>Transforming Ideas into Digital Reality</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Building Digital
              <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Solutions for Tomorrow
              </span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-xl leading-relaxed">
              From Khulna to the world, we design, develop, and deliver cutting-edge technology that empowers businesses and transforms visions into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white/95 hover:bg-white text-[#6B2D8F] font-semibold text-lg px-8 shadow-purple group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#6B2D8F] backdrop-blur-sm text-lg px-8 font-semibold transition-all"
              >
                View Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center lg:text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5 text-white/70" />
                    </div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative hidden lg:block animate-slide-up">
            <div className="relative h-[600px]">
              {/* Main Card */}
              <Card className="absolute top-0 right-0 w-80 bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl hover:shadow-purple transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
                  <p className="text-white/70 text-sm">
                    Cutting-edge technology stack for optimal performance and scalability.
                  </p>
                </CardContent>
              </Card>

              {/* Secondary Card */}
              <Card className="absolute top-40 right-20 w-72 bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl hover:shadow-purple transition-all duration-300 hover:-translate-y-2 animate-float" style={{ animationDelay: '1s' }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Secure & Reliable</h3>
                  <p className="text-white/70 text-sm">
                    Enterprise-grade security and 99.9% uptime guarantee.
                  </p>
                </CardContent>
              </Card>

              {/* Tertiary Card */}
              <Card className="absolute bottom-0 right-10 w-64 bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl hover:shadow-purple transition-all duration-300 hover:-translate-y-2 animate-float" style={{ animationDelay: '0.5s' }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                  <p className="text-white/70 text-sm">
                    Skilled professionals dedicated to your success.
                  </p>
                </CardContent>
              </Card>

              {/* Decorative Elements */}
              <div className="absolute top-20 left-0 w-32 h-32 bg-white/5 rounded-2xl rotate-12 animate-float" />
              <div className="absolute bottom-40 left-10 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-white/60 text-sm font-medium mb-4">Trusted by businesses across Bangladesh</p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <p className="text-white/70 text-sm">
              🇧🇩 Proudly based in Khulna, Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--secondary))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
