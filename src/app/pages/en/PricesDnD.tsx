import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function PricesDnD() {
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
            <div className="text-6xl mb-6">🎲⚔️</div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Dungeons & Dragons Pricing</h1>
            <p className="text-lg text-muted-foreground">
              Experience epic adventures with our D&D sessions - with or without a Game Master
            </p>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* With GM */}
            <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="text-5xl mb-4">⚔️</div>
                <CardTitle className="text-2xl mb-2">With Game Master</CardTitle>
                <CardDescription>Professionally-led campaigns and one-shots</CardDescription>
                <div className="text-4xl text-primary mt-4">150 DKK</div>
                <div className="text-sm text-muted-foreground">per person, per session</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    3-4 hour session
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Professional Dungeon Master
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    All materials included
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Miniatures and maps
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Free refreshments
                  </li>
                </ul>
                <Link to="/en/dnd/with-gm">
                  <Button className="w-full group">
                    See details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Without GM */}
            <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="text-5xl mb-4">🎲</div>
                <CardTitle className="text-2xl mb-2">Without Game Master</CardTitle>
                <CardDescription>Bring your own campaign and use our space</CardDescription>
                <div className="text-4xl text-primary mt-4">100 DKK</div>
                <div className="text-sm text-muted-foreground">per hour</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Private gaming tables
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Miniatures and terrain available
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Bring your own adventure
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    3 hour minimum booking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Food and drink service
                  </li>
                </ul>
                <Link to="/en/dnd/without-gm">
                  <Button variant="outline" className="w-full group">
                    See details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Campaign Packages</h2>
            <p className="text-lg text-muted-foreground">
              Save money by booking several sessions in advance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/30">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">6-Session Campaign</CardTitle>
                <CardDescription>With Game Master</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl text-primary mb-2">800 DKK</div>
                <p className="text-sm text-muted-foreground mb-4">
                  per person <span className="line-through">900 DKK</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Save 100 DKK and commit to a complete campaign!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">10-Hour Package</CardTitle>
                <CardDescription>Without Game Master</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl text-primary mb-2">900 DKK</div>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="line-through">1000 DKK</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Save 100 DKK with this convenient package for your campaign!
                </p>
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
              <CardTitle>Good to Know</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>• All D&D sessions must be booked in advance</p>
              <p>• We recommend booking at least 3 days ahead, especially for weekends</p>
              <p>• Groups can rotate through the table during the session</p>
              <p>• No experience required - our DMs love teaching new players!</p>
              <p>• All materials are provided, but you're welcome to bring your own</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready for Adventure?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your D&D session today and experience the magic of tabletop roleplaying!
          </p>
          <Link to="/en/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book Your Session
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
