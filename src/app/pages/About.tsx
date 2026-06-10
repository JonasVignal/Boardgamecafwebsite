import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Heart, Users, Trophy, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/common/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Fællesskabet først",
      description: "Vi tror på at bringe mennesker sammen gennem glæden ved at spille spil",
    },
    {
      icon: Users,
      title: "Et sted for alle",
      description: "Alle er velkomne, fra begyndere til erfarne spillere",
    },
    {
      icon: Trophy,
      title: "Kvalitets udvalg",
      description: "Kurateret udvalg af de bedste brætspil",
    },
    {
      icon: Sparkles,
      title: "Oplevelser for livet",
      description: "Skaber varige minder gennem leg og fællesskab",
    },
  ];



  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Om os</h1>
            <p className="text-lg text-muted-foreground">
              Mere end bare en café - vi er et fællesskab af gamere, drømmere og eventyrere
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-foreground">Vores Historie</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Brætspils Café startede d. 1. Juli 2026 af en gruppe passionerede Brætspil Entusiaster der ønskede at skabe et sted hvor folk kunne mødes, slukke fra den digitale verden og nyde magien af brætspil.
                </p>
                <p>
                  Hvad der startede som en escape room virksomhed er siden vokset med oplevelser, og nu bringer vi brætspils cafeen til menuen. Vi tilbyder over 100 spil og månedlige events.
                  <p>
                    Vores mission er enkel: at sprede glæden ved at spille spil og skabe et hyggeligt rum hvor venskaber bliver dannet, historier bliver fortalt og minder bliver skabt rundt om spillebordet.
                  </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770206124597-801bdd953e2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3BlbmhhZ2VuJTIwY2FmZSUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzczNDk2MDI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Copenhagen café atmosphere"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Vores værdier</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hvad der driver os hver dag i Brætspils Café
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Space */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Caféen</h2>
            <p className="text-lg text-muted-foreground">
              Hyggelig stemning med plads til alle
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="relative h-80 w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677094365560-9f88ce594e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwcGxheWluZyUyMGJvYXJkJTIwZ2FtZXN8ZW58MXx8fHwxNzczNDExMjY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gaming space"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white text-xl"></h3>
                <p className="text-white/80 text-sm"></p>
              </div>
            </div>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">100+</div>
                  <p className="text-muted-foreground">Brætspil</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">80m²</div>
                  <p className="text-muted-foreground">Stedet</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">40</div>
                  <p className="text-muted-foreground">Pladser</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>



      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Vær med i vores fællesskab</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Uanset om du er en solo gamer der søger nye venner, eller kommer med egen gruppe, er du altid velkommen hos Brætspils Café.
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book dit besøg
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
