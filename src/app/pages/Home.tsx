import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Gamepad2, Users, Zap, Coffee, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Gamepad2,
      title: "Brætspil",
      description: "Stort udvalg af brætspil, f.eks Catan, Ludo og Uno.",
      image: "https://images.unsplash.com/photo-1677094365560-9f88ce594e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwcGxheWluZyUyMGJvYXJkJTIwZ2FtZXN8ZW58MXx8fHwxNzczNDExMjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/board-games",
    },
    {
      icon: Users,
      title: "D&D Sessions",
      description: "Oplev den magiske verden i Dungeons & Dragons. Prøv med vores rutineret Gamemaster eller styr spillet selv.",
      image: "https://images.unsplash.com/photo-1696197819150-9645c9256577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW5nZW9ucyUyMGRyYWdvbnMlMjB0YWJsZXRvcCUyMGdhbWluZ3xlbnwxfHx8fDE3NzM0OTYwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/dnd",
    },
    {
      icon: Zap,
      title: "VR - Stop the Bomb",
      description: "Prøv den ultimative oplevelse at stoppe en bombe i den virtualle verden sammen.",
      image: "https://images.unsplash.com/photo-1640823127518-65e1ad563576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMHZpcnR1YWwlMjByZWFsaXR5JTIwZ2FtaW5nfGVufDF8fHx8MTc3MzQ3OTQ0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/vr",
    },
    {
      icon: Coffee,
      title: "Drikkevarer & Snacks",
      description: "Nyd en kold øl eller sodavand eller en varm kop kaffe imens i spiller.",
      image: "https://images.unsplash.com/photo-1641913221341-717c981643b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBkcmlua3MlMjBjYWZlJTIwYmV2ZXJhZ2VzfGVufDF8fHx8MTc3MzQ5NjAyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/prices/drinks",
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Ugentlige turneringer, spilaftener og særlige events. Tjek vores kalender for kommende aktiviteter!",
      image: "https://images.unsplash.com/photo-1532457573542-37fe94c98cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29wZXJhdGl2ZSUyMHRlYW0lMjBnYW1lJTIwcGxheWluZ3xlbnwxfHx8fDE3NzM0OTYwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/opening-hours",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30">
              <span className="text-sm text-foreground/80">🎮 Velkommen til Københavns hyggeliste Café</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 text-foreground leading-tight">
               Brætspil, D&D og VR
              <br />
              <span className="text-primary">I hjerte af København</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kom og hyg med et brætspil, hvad enten du er ekspert eller blot begynder til spil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <Button size="lg" className="text-lg px-8">
                  Book 
                </Button>
              </Link>
              <Link to="/board-games">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Se spil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Hvad vi tilbyder</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oplev alle de spændende aktiviteter og oplevelser, der venter på dig på vores spilcafé
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link to={feature.link} key={index}>
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/50">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-white">Klar til at spille?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Book dit bord nu og nyd en fantastisk spiloplevelse med venner og familie
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Reserver din plads
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎲</span>
            </div>
            <h3 className="mb-2">100+ Spil</h3>
            <p className="text-muted-foreground">
              Fra klassikere til moderne mesterværker, find dit perfekte spil
            </p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">👥</span>
            </div>
            <h3 className="mb-2">Venligt personale</h3>
            <p className="text-muted-foreground">
              Vores erfarne spilguider hjælper dig med at finde og lære nye spil
            </p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">☕</span>
            </div>
            <h3 className="mb-2">Hyggelig atmosfære</h3>
            <p className="text-muted-foreground">
              Slap af i vores komfortable rum med god mad og drikke
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
