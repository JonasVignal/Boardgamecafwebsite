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
            Vi ligger på Nørre Voldgade 18, lige i hjertet af København
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
                  <h3 className="text-xl mb-2">Brætspils Café</h3>
                  <p className="text-muted-foreground mb-4">
                    Nørre Voldgade 18, 1358 København K
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <a
                      href="https://www.google.com/maps/place/Br%C3%A6tspils+Caf%C3%A9/@55.6831042,12.5674544,14z/data=!4m17!1m11!3m7!1s0x4648535d5212a647:0xfd8628cd4a8c532!2sN%C3%B8rre+Voldgade+18,+1358+K%C3%B8benhavn+K!3b1!4m2!3d55.6831035!4d12.568687!16s%2Fm%2F02r9c0w!3m6!1s0x4648535d5212a647:0xfd8628cd4a8c532!8m2!3d55.6831035!4d12.568687!9m1!1.0!5s2026-06!10e4?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>Åben i Google Maps</Button>
                    </a>
                    <a
                      href="https://maps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">Åben i Apple Maps</Button>
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
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Sådan kommer du herhen</h2>
            <p className="text-lg text-muted-foreground">
              Let at komme til med offentlig transport eller cykel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Train className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Metro & S-Toget</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">

                  <br />
                  <strong className="text-foreground block mb-2">Nørreport Station (5 min gåtur)</strong>
                  Lines: Metro M1, M2 + S-toget
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
                  <strong className="text-foreground block mb-2">Nærmeste stoppested:</strong>
                  Nørre Voldgade  (Linje 5A, 350S)
                  <br />
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Bike className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Cykler</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  <strong className="text-foreground block mb-2">Cykel parkering tilgængelig</strong>
                  Cykelstativ lige på den anden side af vejen
                  <br />
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parking */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">Parkering</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🚗 Gade parkering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Begrænset betalt parkering på Nørre Voldgade og omkringliggende gader ellers anbefaler vi parkeringkælderen under Israels Plads.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Pris:</strong> ~44 DKK/time (varierer efter zone)
                  <br />
                  <strong>Betaling:</strong> EasyPark app eller parkeringsautomater
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🅿️ Offentlig parkering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Nærmeste offentlige parkeringskælder:
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Q-Park Nørreport</strong>
                  <br />
                  Frederiksborggade 11
                  <br />
                  5 minutters gang fra caféen
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-accent/10 border-2 border-accent/30">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground text-center">
                💡 <strong>Tip:</strong> Vi anbefaler at bruge offentlig transport eller cykel når du besøger København.
                <br />
                Det er hurtigere, billigere og mere miljøvenligt!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8 text-foreground">Nærliggende restauranter</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl mb-2"></div>
                <div className="font-medium">Cocks and Cows</div>
                <div className="text-muted-foreground text-xs">3 min walk</div>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl mb-2"></div>
                <div className="font-medium">Restaurant Dan´sk</div>
                <div className="text-muted-foreground text-xs">1 min walk</div>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl mb-2"></div>
                <div className="font-medium">Cafe Venner</div>
                <div className="text-muted-foreground text-xs">3 min walk</div>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl mb-2"></div>
                <div className="font-medium">Restaurant Vækst</div>
                <div className="text-muted-foreground text-xs">5 min walk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Vi ses snart!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Nu ved du, hvor du finder os, book dit bord og kom og spil!
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book et bord
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
