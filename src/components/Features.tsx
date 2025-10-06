import { Card } from "@/components/ui/card";
import { CreditCard, Lock, LineChart, Users, Smartphone, Globe } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Digital Payments",
    description: "Accept payments from anywhere in the world with our secure, seamless payment processing.",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "Your data is protected with enterprise-grade encryption and compliance standards.",
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    description: "Make data-driven decisions with powerful real-time analytics and reporting tools.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Manage your team with role-based access and streamlined workflow automation.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Access your financial tools anywhere with our responsive mobile applications.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Expand internationally with support for 150+ currencies and local payment methods.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to help your business thrive in the digital economy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] border-border bg-card"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
