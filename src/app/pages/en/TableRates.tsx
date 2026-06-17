import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { ArrowLeft, Check } from "lucide-react";

export function TableRates() {
  const rates = [
    {
      name: "Weekday",
      time: "Monday - Thursday",
      price: "80 DKK",
      priceUnit: "per person",
      description: "All-day access to our board game library",
      features: [
        "Access to 100+ board games",
        "Play all day",
        "Game recommendations from staff",
        "Rules explanation included",
        "Comfortable seating"
      ]
    },
    {
      name: "Weekend",
      time: "Friday - Sunday",
      price: "80 DKK",
      priceUnit: "per person",
      description: "All-day access to our board game library",
      features: [
        "Access to 100+ board games",
        "Play all day",
        "Game recommendations from staff",
        "Rules explanation included",
        "Comfortable seating",
        "Priority table service"
      ],
      badge: "Popular"
    },
    {
      name: "Student",
      time: "Any day (with valid ID)",
      price: "70 DKK",
      priceUnit: "per person",
      description: "Special price for students",
      features: [
        "Access to 100+ board games",
        "Play all day",
        "Game recommendations from staff",
        "Rules explanation included",
        "Valid student ID required"
      ]
    }
  ];

  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/en/prices">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Prices
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Table Rates per Hour</h1>
            <p className="text-lg text-muted-foreground">
              Simple, transparent pricing for access to our entire game library
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {rates.map((rate, index) => (
            <Card
              key={index}
              className={`border-2 hover:shadow-xl transition-all relative ${rate.badge ? "border-primary/50" : "hover:border-primary/50"
                }`}
            >
              {rate.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                    {rate.badge}
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{rate.name}</CardTitle>
                <CardDescription>{rate.time}</CardDescription>
                <div className="text-4xl text-primary mt-4">{rate.price}</div>
                <div className="text-sm text-muted-foreground">{rate.priceUnit}</div>
                <p className="text-sm text-muted-foreground mt-2">{rate.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {rate.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/en/book">
                  <Button className="w-full" variant={rate.badge ? "default" : "outline"}>
                    Book now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">🎲</span>
                    Unlimited Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Play as many games as you want all day. Take your time and explore our collection!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">👥</span>
                    Expert Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our staff are always ready to help with game recommendations and rule explanations
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">🪑</span>
                    Comfortable Facilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Large tables, comfortable chairs and good lighting for the best gaming experience
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">☕</span>
                    Café Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Order snacks and drinks directly to your table (paid separately)
                  </p>
                </CardContent>
              </Card>
            </div>
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
                <CardTitle className="text-lg">🎁 Group Discounts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Groups of 8+ get a 10% discount. Perfect for birthdays and corporate events!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🎟️ Membership Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Buy a 10-visit card and get 15% off the total price. Great for regulars!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">💳 Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We accept cash, credit cards (Visa, Mastercard), Dankort and MobilePay.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📅 Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We recommend booking in advance, especially on weekends. Walk-ins are welcome based on availability.
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
              Book a Table
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
