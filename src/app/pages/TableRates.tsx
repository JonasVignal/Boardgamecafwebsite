import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft, Check } from "lucide-react";

export function TableRates() {
  const rates = [
    {
      name: "Hverdag",
      time: "Mandag - Torsdag",
      price: "50 DKK",
      priceUnit: "pr. person",
      description: "Hele dagen adgang til vores brætspilsbibliotek",
      features: [
        "Adgang til 100+ brætspil",
        "Spil hele dagen",
        "Spilanbefalinger fra personale",
        "Regelforklaring inkluderet",
        "Komfortable siddepladser"
      ]
    },
    {
      name: "Weekend",
      time: "Fredag - Søndag",
      price: "75 DKK",
      priceUnit: "pr. person",
      description: "Hele dagen adgang til vores brætspilsbibliotek",
      features: [
        "Adgang til 100+ brætspil",
        "Spil hele dagen",
        "Spilanbefalinger fra personale",
        "Regelforklaring inkluderet",
        "Komfortable siddepladser",
        "Prioriteret bordservice"
      ],
      badge: "Populær"
    },
    {
      name: "Studerende",
      time: "Alle dage (med gyldigt ID)",
      price: "40 DKK",
      priceUnit: "pr. person",
      description: "Særlig pris for studerende",
      features: [
        "Adgang til 100+ brætspil",
        "Spil hele dagen",
        "Spilanbefalinger fra personale",
        "Regelforklaring inkluderet",
        "Gyldigt studiekort påkrævet"
      ]
    }
  ];

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
            <div className="text-6xl mb-6">🪑</div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Spillebord pr. time</h1>
            <p className="text-lg text-muted-foreground">
              Simpel, gennemsigtig prissætning for adgang til hele vores spilbibliotek
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
              className={`border-2 hover:shadow-xl transition-all relative ${
                rate.badge ? "border-primary/50" : "hover:border-primary/50"
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
                <Link to="/book">
                  <Button className="w-full" variant={rate.badge ? "default" : "outline"}>
                    Book nu
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
              Hvad er inkluderet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">🎲</span>
                    Ubegrænset adgang
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Spil så mange spil du vil hele dagen. Tag dit tid og udforsk vores samling!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">👥</span>
                    Ekspert hjælp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Vores personale er altid klar til at hjælpe med spilanbefalinger og regelforklaringer
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">🪑</span>
                    Komfortable faciliteter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Store borde, komfortable stole og god belysning for den bedste spiloplevelse
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">☕</span>
                    Café service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Bestil mad og drikke direkte til dit bord (separat betaling)
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
            Godt at vide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🎁 Grupperabatter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Grupper på 8+ personer får 10% rabat. Perfekt til fødselsdage og firmaarrangementer!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🎟️ Medlemskort</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Køb et 10-besøgs kort og få 15% rabat på den samlede pris. Godt for stamgæster!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">💳 Betalingsmetoder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Vi accepterer kontanter, kreditkort (Visa, Mastercard), Dankort og MobilePay.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📅 Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Vi anbefaler at booke på forhånd, især i weekender. Walk-ins er velkomne baseret på ledighed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Klar til at spille?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book dit bord nu og begynd dit spiløventyr i dag!
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
