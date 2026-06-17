import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { ArrowLeft, MapPin, Train, Bus, Bike } from "lucide-react";

export function Directions() {
  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/en/about">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to About Us
          </Button>
        </Link>
      </div>

      {/* Header */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="text-6xl mb-6">📍</div>
          <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Directions</h1>
          <p className="text-lg text-muted-foreground">
            Located in the heart of Copenhagen on Nørre Voldgade
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-2 mb-12">
            <CardContent className="p-0">
              {/* Embedded Map Placeholder */}
              <div className="relative w-full h-96 md:h-[600px] bg-muted flex items-center justify-end pr-4 md:pr-16">
                <div className="absolute inset-0 w-full h-full">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=N%C3%B8rre%20Voldgade%2018,%201358%20K%C3%B8benhavn%20K+(Br%C3%A6tspils%20Caf%C3%A9)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="relative bg-background/90 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center max-w-sm mx-4">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">BoardGame Café</h3>
                  <p className="text-muted-foreground mb-6">
                    Nørre Voldgade 18<br />
                    1358 Copenhagen K
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://www.google.com/maps/place/Escape+Copenhagen+I+-+v.+N%C3%B8rreport+St./@55.6798253,12.5649698,481m/data=!3m3!1e3!4b1!5s0x4652530fadb2973f:0x1ea0667c2859e954!4m6!3m5!1s0x4652530fadb1d42d:0x2472d29a8a7ebb2f!8m2!3d55.6798223!4d12.5675447!16s%2Fg%2F11dyrbb430?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full">Open in Google Maps</Button>
                    </a>
                    <a
                      href="https://maps.apple.com/place?address=N%C3%B8rre+Voldgade+18%2C+1358+K%C3%B8benhavn+K%2C+Danmark&coordinate=55.679816%2C12.567435&name=N%C3%B8rre+Voldgade+18"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full">Open in Apple Maps</Button>
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

                  <strong className="text-foreground block mb-2">Nørreport Station (5 min walk)</strong>
                  Lines: Metro M1, M2 + S-train
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
                  <strong className="text-foreground block mb-2">Nearest stop:</strong>
                  Nørre Voldgade (Lines 5A, 350S)
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
                  <CardTitle>Bike</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  <strong className="text-foreground block mb-2">Bike parking available</strong>
                  Racks across the street
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
          <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">Parking Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🚗 Street Parking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Limited paid street parking available on Nørre Voldgade and surrounding streets.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Price:</strong> ~44 DKK/hour (varies by zone)
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
                  5 minute walk from the café
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-accent/10 border-2 border-accent/30">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground text-center">
                💡 <strong>Tip:</strong> We recommend using public transport or a bike when visiting Copenhagen. It's faster, cheaper and more environmentally friendly!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8 text-foreground">Nearby Restaurants</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl mb-2"></div>
                <div className="font-medium">Cocks and Cows</div>
                <div className="text-muted-foreground text-xs">2 min walk</div>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl mb-2"></div>
                <div className="font-medium">Restaurant Dan´sk</div>
                <div className="text-muted-foreground text-xs">1 min walk</div>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl mb-2"></div>
                <div className="font-medium">Cafe Venner</div>
                <div className="text-muted-foreground text-xs">2 min walk</div>
              </div>
              <div className="p-4 bg-card rounded-lg border">
                <div className="text-2xl mb-2"></div>
                <div className="font-medium">Restaurant Vækst</div>
                <div className="text-muted-foreground text-xs">4 min walk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">See you soon!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Now that you know where to find us, book your table and come play!
          </p>
          <Link to="/en/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book a table
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
