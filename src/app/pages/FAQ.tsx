import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      category: "Generelt",
      questions: [
        {
          q: "Skal jeg booke på forhånd?",
          a: "Vi anbefaler at booke på forhånd, især i weekender og aftentimer. Men walk-ins er også velkomne baseret på ledighed."
        },
        {
          q: "Hvor mange spil har I?",
          a: "Vi har over 100 brætspil i vores samling, fra klassiske familiespil til strategiske spil og moderne mesterværker."
        },
        {
          q: "Kan I hjælpe med at finde det rigtige spil?",
          a: "Absolut! Vores personale er erfarne spillere og kan anbefale spil baseret på din gruppe størrelse, erfaring og præferencer."
        },
        {
          q: "Må jeg medbringe mit eget spil?",
          a: "Ja, du er velkommen til at medbringe dine egne spil. Men vi har et stort udvalg, så du behøver ikke!"
        }
      ]
    },
    {
      category: "Priser & Betaling",
      questions: [
        {
          q: "Hvad koster det at spille?",
          a: "Hverdage: 50 DKK pr. person. Weekender: 75 DKK pr. person. Dette giver adgang til hele vores spilbibliotek hele dagen."
        },
        {
          q: "Er der studierabat?",
          a: "Ja! Med gyldigt studiekort: 40 DKK pr. person på alle dage."
        },
        {
          q: "Hvilke betalingsmetoder accepterer I?",
          a: "Vi accepterer kontanter, kreditkort (Visa, Mastercard), Dankort og MobilePay."
        },
        {
          q: "Tilbyder I grupperabatter?",
          a: "Ja, grupper på 8+ personer får 10% rabat. Perfekt til fødselsdage og firmaarrangementer!"
        }
      ]
    },
    {
      category: "D&D Sessions",
      questions: [
        {
          q: "Har jeg brug for erfaring for at spille D&D?",
          a: "Slet ikke! Vores Dungeon Masters er erfarne med at undervise nye spillere. Vi anbefaler at starte med en one-shot for at lære det grundlæggende."
        },
        {
          q: "Hvad skal jeg medbringe til D&D?",
          a: "Bare dig selv! Vi leverer alt hvad du har brug for. Hvis du har dine egne terninger eller karakter, er du velkommen til at medbringe dem."
        },
        {
          q: "Kan jeg deltage alene?",
          a: "Ja! Du kan booke solo og få nye venner. Vi matcher spillere til kampagnesessioner."
        },
        {
          q: "Hvor lang tid varer en session?",
          a: "One-shots varer typisk 3-4 timer. Kampagnesessioner er også 3-4 timer pr. session."
        }
      ]
    },
    {
      category: "VR Oplevelser",
      questions: [
        {
          q: "Hvor mange personer kan spille VR sammen?",
          a: "VR - Stop the Bomb er designet til 2-4 spillere, der arbejder sammen."
        },
        {
          q: "Er der en aldersgrænse for VR?",
          a: "Vi anbefaler VR til 12+ år. Yngre spillere er velkomne med voksenopsyn."
        },
        {
          q: "Bliver jeg søsyg af VR?",
          a: "Stop the Bomb er et stationært spil med minimal bevægelse, så motion sickness er sjælden. Fortæl os hvis du er bekymret."
        },
        {
          q: "Skal jeg have erfaring med VR?",
          a: "Nej! Vi giver en kort vejledning før hver session."
        }
      ]
    },
    {
      category: "Mad & Drikke",
      questions: [
        {
          q: "Serverer I mad?",
          a: "Ja, vi har sandwiches, snacks, kage og andet. Fuld menu er tilgængelig på vores Drikkevarer & Snacks side."
        },
        {
          q: "Må jeg medbringe min egen mad?",
          a: "Vi foretrækker at du køber fra vores menu, men du er velkommen til at medbringe snacks. Ingen eksternt tilberedt mad, tak."
        },
        {
          q: "Har I vegetariske/veganske muligheder?",
          a: "Ja! Vi har flere vegetariske og veganske muligheder. Bed om vores specielle menu."
        },
        {
          q: "Serverer I alkohol?",
          a: "Ja, vi serverer øl, vin og cider. Du skal være 18+ for at købe alkohol."
        }
      ]
    },
    {
      category: "Arrangementer & Grupper",
      questions: [
        {
          q: "Kan jeg booke til en fødselsdag?",
          a: "Ja! Vi tilbyder særlige fødselsdagspakker med privat rum, dekorationer og kage. Kontakt os for detaljer."
        },
        {
          q: "Tilbyder I firmaarrangementer?",
          a: "Ja! Brætspil og D&D er fantastiske teambuilding-aktiviteter. Vi kan arrangere private sessioner for dit team."
        },
        {
          q: "Hvor mange mennesker kan I tage?",
          a: "Vi har plads til omkring 50 personer i alt. For store grupper, kontakt os for at arrangere privat booking."
        },
        {
          q: "Afholder I turneringer?",
          a: "Ja! Vi afholder månedlige turneringer. Tjek vores sociale medier for kommende events."
        }
      ]
    }
  ];

  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/about">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Tilbage til Om os
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">❓</div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Ofte Stillede Spørgsmål</h1>
            <p className="text-lg text-muted-foreground">
              Find svar på de mest almindelige spørgsmål om Copenhagen Game Café
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl md:text-3xl mb-6 text-foreground">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((faq, qIndex) => (
                  <Card key={qIndex} className="border-2 hover:border-primary/50 transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl mb-4 text-foreground">Har du stadig spørgsmål?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Hvis du ikke kan finde svaret du leder efter, er du velkommen til at kontakte os direkte!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4512345678">
              <Button variant="outline" size="lg">
                📞 Ring: +45 12 34 56 78
              </Button>
            </a>
            <a href="mailto:hello@gamecafe.dk">
              <Button variant="outline" size="lg">
                📧 Email: hello@gamecafe.dk
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Klar til at spille?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book dit bord nu og kom og oplev det bedste af brætspil, D&D og VR!
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
