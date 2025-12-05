import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-fintech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 z-10">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Trusted escrow platform - Secure & Transparent
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Secure Escrow{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Payment Solutions
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Trust-based escrow platform built with transparency and security. 
              Protect your transactions with BishwasPay - where trust meets technology.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-center">Secure</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-center">Fast</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-center">Growth</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]">
              <img
                src={heroImage}
                alt="Modern fintech dashboard interface"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-soft)]">
              <div className="text-3xl font-bold text-primary">$2.5B+</div>
              <div className="text-sm text-muted-foreground">Transactions processed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
