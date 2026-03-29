import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function PricesDnD() {
  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/prices">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Tilbage til Priser
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🎲⚔️</div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Dungeons & Dragons Priser</h1>
            <p className="text-lg text-muted-foreground">
              Oplev episke eventyr med vores D&D sessions - med eller uden Game Master
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
                <CardTitle className="text-2xl mb-2">Med Game Master</CardTitle>
                <CardDescription>Professionelt ledede kampagner og one-shots</CardDescription>
                <div className="text-4xl text-primary mt-4">150 DKK</div>
                <div className="text-sm text-muted-foreground">pr. person pr. session</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    3-4 timers session
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Professionel Dungeon Master
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Alle materialer inkluderet
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Miniaturer og kort
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Gratis forfriskninger
                  </li>
                </ul>
                <Link to="/dnd/with-gm">
                  <Button className="w-full group">
                    Se detaljer
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Without GM */}
            <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="text-5xl mb-4">🎲</div>
                <CardTitle className="text-2xl mb-2">Uden Game Master</CardTitle>
                <CardDescription>Bring din egen kampagne og brug vores rum</CardDescription>
                <div className="text-4xl text-primary mt-4">100 DKK</div>
                <div className="text-sm text-muted-foreground">pr. time</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Private spilleborde
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Miniaturer og terræn tilgængeligt
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Bring dit eget eventyr
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    3 timers minimum booking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Mad og drikke service
                  </li>
                </ul>
                <Link to="/dnd/without-gm">
                  <Button variant="outline" className="w-full group">
                    Se detaljer
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
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Kampagne Pakker</h2>
            <p className="text-lg text-muted-foreground">
              Spar penge ved at booke flere sessioner på forhånd
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/30">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">6-Sessions Kampagne</CardTitle>
                <CardDescription>Med Game Master</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl text-primary mb-2">800 DKK</div>
                <p className="text-sm text-muted-foreground mb-4">
                  pr. person <span className="line-through">900 DKK</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Spar 100 DKK og forpligt dig til en komplet kampagne!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">10-Timers Pakke</CardTitle>
                <CardDescription>Uden Game Master</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl text-primary mb-2">900 DKK</div>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="line-through">1000 DKK</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Spar 100 DKK med denne praktiske pakke til din kampagne!
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
              <CardTitle>Nyttigt at vide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>• Alle D&D sessioner skal bookes på forhånd</p>
              <p>• Vi anbefaler at booke mindst 3 dage i forvejen, især til weekender</p>
              <p>• Grupper kan rotere gennem bordet under sessionen</p>
              <p>• Ingen erfaring påkrævet - vores DMs elsker at undervise nye spillere!</p>
              <p>• Alle materialer leveres, men du er velkommen til at medbringe dine egne</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Klar til eventyr?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book din D&D session i dag og oplev magien ved tabletop rollesp il!
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book din session
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
