import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function DnDWithoutGM() {
  const features = [
    "Private gaming tables with comfortable seating",
    "Access to our collection of miniatures and terrain",
    "Battle maps and grid mats available",
    "Whiteboards and markers for planning",
    "Dedicated space for 3-4 hours minimum",
    "Food and drink service at your table",
    "Storage for your campaign materials",
    "Free Wi-Fi for digital tools and music",
  ];

  const tableTypes = [
    {
      name: "Standard Table",
      capacity: "Up to 6 players",
      price: "100 DKK/hour",
      features: ["Large gaming table", "Comfortable chairs", "Good lighting"],
    },
    {
      name: "Premium Room",
      capacity: "Up to 8 players",
      price: "150 DKK/hour",
      features: ["Private room", "Sound system", "Projector available", "Mini fridge"],
      badge: "Popular",
    },
  ];

  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/dnd">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to D&D
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="text-6xl mb-6">🎲✨</div>
          <h1 className="text-4xl md:text-5xl mb-6 text-foreground">D&D without Game Master</h1>
          <p className="text-lg text-muted-foreground">
            Bring your own adventure! Book our gaming spaces for your personal D&D campaigns with friends.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-12">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1532457573542-37fe94c98cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29wZXJhdGl2ZSUyMHRlYW0lMjBnYW1lJTIwcGxheWluZ3xlbnwxfHx8fDE3NzM0OTYwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="D&D without Game Master"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </section>

      {/* What's Included */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">What's Included</h2>
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Table Options */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Table Options</h2>
            <p className="text-lg text-muted-foreground">Choose the perfect space for your group</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tableTypes.map((table, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-xl transition-all relative">
                {table.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                      {table.badge}
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{table.name}</CardTitle>
                  <CardDescription>{table.capacity}</CardDescription>
                  <div className="text-3xl mt-4 text-primary">{table.price}</div>
                  <div className="text-sm text-muted-foreground">3-hour minimum booking</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {table.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/book">
                    <Button className="w-full" variant={table.badge ? "default" : "outline"}>
                      Book {table.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Items */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">
            Additional Rentals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🎲</div>
                <CardTitle>Dice Sets</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl mb-2">25 DKK</div>
                <p className="text-sm text-muted-foreground">per set, per session</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">⚔️</div>
                <CardTitle>Miniature Set</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl mb-2">50 DKK</div>
                <p className="text-sm text-muted-foreground">per session</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <CardTitle>Terrain Kit</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl mb-2">75 DKK</div>
                <p className="text-sm text-muted-foreground">per session</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Adventure?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your gaming space today. We recommend booking at least 3 days in advance, especially for weekend slots.
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book a Table
            </Button>
          </Link>
        </div>
      </section>

      {/* Tips */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">Tips for Your Session</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📋 Come Prepared</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Bring your character sheets, campaign notes, and any personal dice or materials you prefer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">⏰ Plan Your Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Most sessions run 3-4 hours. Book extra time if you're in the middle of an epic battle!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🍕 Order Food</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We serve snacks and drinks. You can also order from our café menu for delivery to your table.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📸 Capture Memories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Feel free to take photos! Many groups love documenting their epic moments and critical rolls.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
