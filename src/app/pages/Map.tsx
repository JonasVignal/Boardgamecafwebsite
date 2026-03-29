import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, MapPin, Train, Bus, Bike } from "lucide-react";

export function Map() {
  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/opening-hours">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Opening Hours
          </Button>
        </Link>
      </div>

      {/* Header */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="text-6xl mb-6">📍</div>
          <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Find Us</h1>
          <p className="text-lg text-muted-foreground">
            Located in the heart of Copenhagen on Nørrebrogade
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-2 mb-12">
            <CardContent className="p-0">
              {/* Embedded Map Placeholder */}
              <div className="relative w-full h-96 md:h-[600px] bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl mb-2">Copenhagen Game Café</h3>
                  <p className="text-muted-foreground mb-4">
                    Nørrebrogade 123, 2200 Copenhagen N
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <a
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>Open in Google Maps</Button>
                    </a>
                    <a
                      href="https://maps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">Open in Apple Maps</Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Getting Here */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">How to Get Here</h2>
            <p className="text-lg text-muted-foreground">
              Easy to reach by public transport or bike
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Train className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Metro & S-Train</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  <strong className="text-foreground block mb-2">Nørrebro Station (5 min walk)</strong>
                  Lines: S-train (A, B, C, E, H)
                  <br />
                  <br />
                  <strong className="text-foreground block mb-2">Nørreport Station (10 min walk)</strong>
                  Lines: Metro M1, M2 + S-trains
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Bus className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Bus</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  <strong className="text-foreground block mb-2">Nearest stops:</strong>
                  Nørrebrogade (Lines 5A, 350S)
                  <br />
                  <br />
                  <strong className="text-foreground block mb-2">Alternative:</strong>
                  Nørrebros Runddel (Line 3A)
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Bike className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Bike</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  <strong className="text-foreground block mb-2">Bike parking available</strong>
                  Racks directly in front of the café
                  <br />
                  <br />
                  <strong className="text-foreground block mb-2">Bike-friendly route</strong>
                  Direct access via Nørrebrogade bike lane
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parking */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">Parking Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🚗 Street Parking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Limited paid street parking available on Nørrebrogade and surrounding streets.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Cost:</strong> ~20 DKK/hour (varies by zone)
                  <br />
                  <strong>Payment:</strong> EasyPark app or parking meters
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🅿️ Public Parking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Nearest public parking garage:
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Q-Park Nørreport</strong>
                  <br />
                  Frederiksborggade 11
                  <br />
                  10 minutes walk from café
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-accent/10 border-2 border-accent/30">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground text-center">
                💡 <strong>Tip:</strong> We recommend using public transport or bike when visiting Copenhagen. It's faster, cheaper, and more environmentally friendly!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8 text-foreground">Nearby Landmarks</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl mb-2">🌳</div>
                <div className="font-medium">Assistens Cemetery</div>
                <div className="text-muted-foreground text-xs">5 min walk</div>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl mb-2">🍺</div>
                <div className="font-medium">Mikkeller Bar</div>
                <div className="text-muted-foreground text-xs">3 min walk</div>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl mb-2">🏛️</div>
                <div className="font-medium">The Lakes</div>
                <div className="text-muted-foreground text-xs">10 min walk</div>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl mb-2">🎭</div>
                <div className="font-medium">Nørrebro Theatre</div>
                <div className="text-muted-foreground text-xs">7 min walk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">See You Soon!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Now that you know where to find us, book your table and come play!
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
