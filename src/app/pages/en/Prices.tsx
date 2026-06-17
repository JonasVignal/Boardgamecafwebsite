import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export function Prices() {
  const tableRates = [
    {
      name: "Weekdays",
      time: "Monday - Thursday",
      price: "80 DKK/person",
      description: "All-day access to our board game library",
    },
    {
      name: "Weekends",
      time: "Friday - Sunday",
      price: "80 DKK/person",
      description: "All-day access to our board game library",
    },
    {
      name: "Student Discount",
      time: "Any day (with valid ID)",
      price: "70 DKK/person",
      description: "Special price for students",
    },
  ];

  const packages = [
    {
      title: "Board Games",
      price: "80 DKK",
      period: "per person",
      features: [
        "Access to 100+ board games",
        "All-day access",
        "Recommendations from staff",
        "Rules explained for the game",
        "Cozy seating",
      ],
    },

    {
      title: "VR Experience",
      price: "200 DKK",
      period: "per person (2-4 players)",
      features: [
        "30 minutes of play time",
        "All equipment included",
        "Introduction and guidance",
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
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Prices</h1>
            <p className="text-lg text-muted-foreground">
              Simple and transparent pricing for all our activities. Pay only for what you enjoy!
            </p>
          </div>
        </div>
      </section>

      {/* Table Access Rates */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Table Rates</h2>
          <p className="text-lg text-muted-foreground">
            One-time fee for access to all games, all day
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
          <Link to="/en/prices/drinks">
            <Button size="lg" variant="outline" className="group">
              See Drinks Menu
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Activity Packages */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Other Activities</h2>
            <p className="text-lg text-muted-foreground">
              Choose between our different gaming experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`border-2 hover:shadow-xl transition-all relative ${pkg.badge ? "border-primary/50" : "hover:border-primary/50"
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
                  <Link to="/en/book">
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
                <CardTitle className="text-lg">Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We accept cash, credit cards (Visa, Mastercard), Dankort, and mobile payment (MobilePay).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Group Discounts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Groups of 8+ get a 10% discount. Perfect for birthday parties and corporate events!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Discount Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Buy a 10-visit card and get 15% off the total price. Perfect for regulars!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Birthday Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Celebrate your birthday with board games and flags on the table.
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
          <Link to="/en/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book Your Table
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
