import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, Coffee, Wine, Beer, Cake } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Drinks() {
  const categories = [
    {
      title: "☕ Hot Drinks",
      icon: Coffee,
      items: [
        { name: "Espresso", price: "25 DKK" },
        { name: "Cappuccino", price: "35 DKK" },
        { name: "Latte", price: "35 DKK" },
        { name: "Hot Chocolate", price: "35 DKK" },
        { name: "Tea (selection)", price: "30 DKK" },
      ],
    },
    {
      title: "🥤 Cold Drinks",
      icon: Wine,
      items: [
        { name: "Soft Drinks", price: "25 DKK" },
        { name: "Iced Coffee", price: "40 DKK" },
        { name: "Juice", price: "30 DKK" },
        { name: "Smoothie", price: "45 DKK" },
        { name: "Water", price: "20 DKK" },
      ],
    },
    {
      title: "🍺 Beer & Wine",
      icon: Beer,
      items: [
        { name: "Draft Beer (0.4L)", price: "45 DKK" },
        { name: "Craft Beer", price: "55 DKK" },
        { name: "Cider", price: "50 DKK" },
        { name: "House Wine (glass)", price: "55 DKK" },
        { name: "House Wine (bottle)", price: "200 DKK" },
      ],
    },
    {
      title: "🍰 Snacks & Food",
      icon: Cake,
      items: [
        { name: "Sandwich", price: "55 DKK" },
        { name: "Pastry", price: "35 DKK" },
        { name: "Chips", price: "25 DKK" },
        { name: "Nuts & Trail Mix", price: "30 DKK" },
        { name: "Cake Slice", price: "45 DKK" },
      ],
    },
  ];

  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/prices">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Pricing
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="text-6xl mb-6">☕🍺</div>
          <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Drinks & Snacks Menu</h1>
          <p className="text-lg text-muted-foreground">
            Fuel your gaming sessions with our selection of drinks and snacks. All served at your table!
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-16">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1641913221341-717c981643b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBkcmlua3MlMjBjYWZlJTIwYmV2ZXJhZ2VzfGVufDF8fHx8MTc3MzQ5NjAyNHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Drinks and beverages"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-2 border-b border-border last:border-0"
                      >
                        <span className="text-muted-foreground">{item.name}</span>
                        <span className="text-foreground font-medium">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Special Offers */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Special Offers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center border-2 border-primary/30">
              <CardHeader>
                <div className="text-4xl mb-2">🎮</div>
                <CardTitle>Gamer's Combo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-primary mb-2">65 DKK</div>
                <CardDescription className="text-sm">
                  Any hot drink + sandwich
                  <br />
                  <span className="text-xs">(Save 25 DKK)</span>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/30">
              <CardHeader>
                <div className="text-4xl mb-2">🍺</div>
                <CardTitle>Beer & Bites</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-primary mb-2">90 DKK</div>
                <CardDescription className="text-sm">
                  2 beers + chips or nuts
                  <br />
                  <span className="text-xs">(Save 25 DKK)</span>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/30">
              <CardHeader>
                <div className="text-4xl mb-2">☕</div>
                <CardTitle>Sweet Break</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-primary mb-2">60 DKK</div>
                <CardDescription className="text-sm">
                  Coffee + pastry or cake
                  <br />
                  <span className="text-xs">(Save 20 DKK)</span>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Menu Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>• All drinks and food can be ordered at the counter or via our staff</p>
              <p>• We deliver directly to your gaming table</p>
              <p>• Vegetarian and vegan options available</p>
              <p>• Please let us know about any allergies or dietary restrictions</p>
              <p>• All prices include VAT</p>
              <p>• Menu items subject to availability</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Play & Enjoy?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your table and we'll make sure you're well-fed and hydrated throughout your gaming session!
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
