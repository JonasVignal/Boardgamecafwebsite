import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Users, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function BoardGames() {
  const categories = [
    {
      title: "Strategi Games",
      description: "Taktiske strategi spil, til at udfordre hjernen.",
      icon: "🧠",
      count: "150+",
      image: "https://images.unsplash.com/photo-1763875067516-e947790c74ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMGJvYXJkJTIwZ2FtZSUyMHBpZWNlc3xlbnwxfHx8fDE3NzMzOTE1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Party spil",
      description: "Sjove sociale spil",
      icon: "🎉",
      count: "100+",
      image: "https://images.unsplash.com/photo-1762690717420-d709efb15e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNhcmQlMjBnYW1lcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MzQ5NjAyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Familie spil",
      description: "Sjove spil til alle aldre",
      icon: "👨‍👩‍👧‍👦",
      count: "120+",
      image: "https://images.unsplash.com/photo-1677094365560-9f88ce594e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwcGxheWluZyUyMGJvYXJkJTIwZ2FtZXN8ZW58MXx8fHwxNzczNDExMjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Samarbejdsspil",
      description: "Arbejde sammen for at vinde",
      icon: "🤝",
      count: "80+",
      image: "https://images.unsplash.com/photo-1532457573542-37fe94c98cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29wZXJhdGl2ZSUyMHRlYW0lMjBnYW1lJTIwcGxheWluZ3xlbnwxfHx8fDE3NzM0OTYwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const stats = [
    { icon: Users, label: "Tilgængelige spil", value: "100+" },
    { icon: Clock, label: "Spilletid", value: "15 min - 4 timer" },
    { icon: TrendingUp, label: "Nye spil hver måned", value: "10+" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🎲</div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Brætspils kollektion</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Udforsk vores 100+ spil. Fra hurtige party spil til strategiske spil, har vi noget for en hver spiller.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Spil Kategorier</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se vores forskellige spil for at finde netop dit nye favoritspil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/50">
              <div className="relative h-64">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-2xl mb-2">{category.title}</h3>
                  <p className="text-white/90 mb-2">{category.description}</p>
                  <div className="text-sm text-white/70">{category.count} Spil</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/board-games/categories">
            <Button size="lg" className="group">
              Se alle spil
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Hvordan fungere det</h2>
            <p className="text-lg text-muted-foreground">Nem måde til at starte med at spille</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="mb-2">Book et bord</h3>
              <p className="text-sm text-muted-foreground">Reserver jeres spot online eller kom bare forbi</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="mb-2">Vælg dit spil</h3>
              <p className="text-sm text-muted-foreground">Se vores udvalg eller spørg efter anbefalinger</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="mb-2">Lær & spil</h3>
              <p className="text-sm text-muted-foreground">Vores personale kan lære jer alle spil</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="mb-2">Hyg!</h3>
              <p className="text-sm text-muted-foreground">Spil så længe I har lyst</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
