import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export function Prices() {
  const tableRates = [
    {
      name: "Weekday Rate",
      time: "Monday - Thursday",
      price: "50 DKK/person",
      description: "All-day access to our board game library",
    },
    {
      name: "Weekend Rate",
      time: "Friday - Sunday",
      price: "75 DKK/person",
      description: "All-day access to our board game library",
    },
    {
      name: "Student Discount",
      time: "Any day (with valid ID)",
      price: "40 DKK/person",
      description: "Special rate for students",
    },
  ];

  const packages = [
    {
      title: "Board Game Access",
      price: "50-75 DKK",
      period: "per person",
      features: [
        "Access to 500+ board games",
        "All-day play",
        "Game recommendations from staff",
        "Rules explanation included",
        "Comfortable seating",
      ],
    },
    {
      title: "D&D with GM",
      price: "150 DKK",
      period: "per person/session",
      features: [
        "3-4 hour session",
        "Professional Game Master",
        "All materials provided",
        "Miniatures and maps",
        "Complimentary refreshments",
      ],
      badge: "Popular",
    },
    {
      title: "VR Experience",
      price: "200 DKK",
      period: "per group (2-4 players)",
      features: [
        "30 minutes gameplay",
        "All equipment included",
        "Tutorial and guidance",
        "Sanitized VR headsets",
        "Perfect for groups",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">💰</div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Pricing</h1>
            <p className="text-lg text-muted-foreground">
              Simple, transparent pricing for all our activities. Pay only for what you enjoy!
            </p>
          </div>
        </div>
      </section>

      {/* Table Access Rates */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Table Access Rates</h2>
          <p className="text-lg text-muted-foreground">
            One-time fee for all-day access to our complete game library
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {tableRates.map((rate, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary/50 hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-xl">{rate.name}</CardTitle>
                <CardDescription>{rate.time}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl text-primary mb-2">{rate.price}</div>
                <p className="text-sm text-muted-foreground">{rate.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/prices/drinks">
            <Button size="lg" variant="outline" className="group">
              View Drinks Menu
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Activity Packages */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Activity Packages</h2>
            <p className="text-lg text-muted-foreground">
              Choose from our different gaming experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`border-2 hover:shadow-xl transition-all relative ${
                  pkg.badge ? "border-primary/50" : "hover:border-primary/50"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                      {pkg.badge}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{pkg.title}</CardTitle>
                  <div className="text-3xl text-primary mb-1">{pkg.price}</div>
                  <CardDescription>{pkg.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/book">
                    <Button className="w-full" variant={pkg.badge ? "default" : "outline"}>
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
            Good to Know
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">💳 Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We accept cash, credit cards (Visa, Mastercard), Dankort, and mobile payment (MobilePay).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🎁 Group Discounts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Groups of 8+ people get 10% off. Perfect for birthday parties and corporate events!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🎟️ Membership Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Buy a 10-visit card and get 15% off total price. Great for regular visitors!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🍰 Birthday Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Special birthday packages available with private room, decorations, and cake. Contact us for details!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Play?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your table now and start your gaming adventure today!
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book a Table
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
