import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Users, Clock, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Categories() {
  const featuredGames = [
    {
      id: 1,
      name: "Catan",
      slug: "game-1",
      image: "https://images.unsplash.com/photo-1763875067516-e947790c74ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMGJvYXJkJTIwZ2FtZSUyMHBpZWNlc3xlbnwxfHx8fDE3NzMzOTE1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Byg bosættelser og handl ressourcer i dette klassiske strategispil",
      players: "3-4",
      duration: "60-120",
      difficulty: "Mellem",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Ticket to Ride",
      slug: "game-2",
      image: "https://images.unsplash.com/photo-1676482721063-75c432590cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjB0YWJsZSUyMGJvYXJkJTIwZ2FtZXxlbnwxfHx8fDE3NzM0OTYwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Byg togruter på tværs af lande i dette engagerende familiespil",
      players: "2-5",
      duration: "30-60",
      difficulty: "Let",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Pandemic",
      slug: "game-3",
      image: "https://images.unsplash.com/photo-1532457573542-37fe94c98cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29wZXJhdGl2ZSUyMHRlYW0lMjBnYW1lJTIwcGxheWluZ3xlbnwxfHx8fDE3NzM0OTYwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Arbejd sammen for at redde menneskeheden fra globale sygdomme",
      players: "2-4",
      duration: "45-60",
      difficulty: "Mellem",
      rating: 4.7,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Let":
        return "bg-green-500/10 text-green-700 border-green-500/20";
      case "Mellem":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20";
      case "Svær":
        return "bg-red-500/10 text-red-700 border-red-500/20";
      default:
        return "bg-muted";
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Udvalgte spil</h1>
            <p className="text-lg text-muted-foreground">
              Oplev vores mest populære brætspil. Klik på et spil for at lære mere og se om det er tilgængeligt!
            </p>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map((game) => (
            <Link key={game.id} to={`/board-games/categories/${game.slug}`}>
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/50">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm">{game.rating}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{game.name}</CardTitle>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{game.players} spillere</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{game.duration} minutter</span>
                    </div>
                    <Badge variant="outline" className={getDifficultyColor(game.difficulty)}>
                      {game.difficulty}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-16 bg-muted/50 border border-border rounded-lg p-8 text-center max-w-2xl mx-auto">
          <h3 className="mb-4">Kan du ikke finde det du leder efter?</h3>
          <p className="text-muted-foreground mb-6">
            Vi har over 100 spil i vores samling! Besøg os eller kontakt vores personale for personlige spilanbefalinger baseret på dine præferencer.
          </p>
          <Link to="/book">
            <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
              Book et bord
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}