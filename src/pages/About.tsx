import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FinFlow
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              We're on a mission to democratize financial services and empower businesses worldwide with cutting-edge technology.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">10,000+</h3>
                <p className="text-muted-foreground">Active Clients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">150+</h3>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">$2.5B+</h3>
                <p className="text-muted-foreground">Processed Annually</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2020, FinFlow emerged from a simple observation: financial services were too complex, 
                too slow, and too expensive for modern businesses. We set out to change that.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we're proud to serve over 10,000 businesses across 150 countries, processing billions in 
                transactions while maintaining the highest standards of security and compliance.
              </p>
              
              <h2 className="text-3xl font-bold mb-4 mt-12">Our Values</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="font-semibold text-foreground mr-2">Security First:</span>
                  Your data and transactions are protected with bank-level encryption.
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-foreground mr-2">Innovation:</span>
                  We constantly push boundaries to deliver cutting-edge solutions.
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-foreground mr-2">Transparency:</span>
                  Clear pricing, honest communication, no hidden fees.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
