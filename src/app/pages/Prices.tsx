import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export function Prices() {
  const tableRates = [
    {
      name: "Hverdage",
      time: "Mandag - Torsdag",
      price: "50 DKK/person",
      description: "Hele dagen adgang til vores brætspilsbiblioteket",
    },
    {
      name: "Weekender",
      time: "Fredag - Søndag",
      price: "75 DKK/person",
      description: "Hele dagen adgang til vores brætspilsbiblioteket",
    },
    {
      name: "Studierabat",
      time: "Alle dage (med gyldigt ID)",
      price: "40 DKK/person",
      description: "Specialpris for studerende",
    },
  ];

  const packages = [
    {
      title: "Brætspil",
      price: "50-75 DKK",
      period: "per person",
      features: [
        "Adgang til 1000+ brætspil",
        "Hele dagen adgang",
        "Anbefalinger fra personalet",
        "Reglerne forklaret til spillet",
        "Hyggelige siddepladser",
      ],
    },

    {
      title: "VR Oplevelse",
      price: "200 DKK",
      period: "per Person (2-4 spillere)",
      features: [
        "30 minutters spilletid",
        "Alt udstyr inkluderet",
        "Introduktion og vejledning",
        "Rensede VR headsets",
        "Perfekt til grupper",
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
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Priser</h1>
            <p className="text-lg text-muted-foreground">
              Enkel og transparent prissætning for alle vores aktiviteter. Betal kun for det, du nyder!
            </p>
          </div>
        </div>
      </section>

      {/* Table Access Rates */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Bord priser</h2>
          <p className="text-lg text-muted-foreground">
            Engangsbeløb for adgang til alle spillene hele dagen
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
              Se Drikkekort
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Activity Packages */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Andre Aktiviteter</h2>
            <p className="text-lg text-muted-foreground">
              Vælg mellem vores forskellige gamingoplevelser
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
            Godt at vide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">💳 Betalingsmetoder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Vi tager imod kontanter, kreditkort (Visa, Mastercard), Dankort og mobilbetaling (MobilePay).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🎁 Grupperabatter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Grupper på 8+ personer får 10% rabat. Perfekt til fødselsdagsfester og firmaarrangementer!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🎟️ Rabat kort</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Køb et 10-besøgs kort og få 15% rabat på totalprisen. Perfekt til stamkunder!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🍰 Fødselsdags Pakker</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Fejre din fødselsdag med brætspil og flag på bordet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Klar til at Spille?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book din bord nu og start dit gaming eventyr i dag!
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book jeres Bord
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
