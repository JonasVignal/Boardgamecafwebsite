import { Link, useParams } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Users, Clock, Signal, ArrowLeft, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function GameDetail() {
  const { gameId } = useParams();

  const games: Record<string, any> = {
    "game-1": {
      name: "Catan",
      image: "https://images.unsplash.com/photo-1763875067516-e947790c74ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMGJvYXJkJTIwZ2FtZSUyMHBpZWNlc3xlbnwxfHx8fDE3NzMzOTE1MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "In Catan (formerly The Settlers of Catan), players try to be the dominant force on the island of Catan by building settlements, cities, and roads. On each turn dice are rolled to determine what resources the island produces. Players build by spending resources and collect these resources by having settlements and cities on hexes that produce the rolled numbers.",
      players: "3-4 players",
      playersMin: 3,
      playersMax: 4,
      duration: "60-120 minutes",
      difficulty: "Medium",
      age: "10+",
      features: [
        "Classic strategy game",
        "Resource management",
        "Trading with other players",
        "Modular board for replayability",
        "Expansion packs available",
      ],
      howToPlay: [
        "Each player starts with two settlements and two roads",
        "Roll dice to gather resources (wood, brick, wheat, sheep, ore)",
        "Trade resources with other players",
        "Build roads, settlements, and cities",
        "First player to reach 10 victory points wins",
      ],
    },
    "game-2": {
      name: "Ticket to Ride",
      image: "https://images.unsplash.com/photo-1676482721063-75c432590cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjB0YWJsZSUyMGJvYXJkJTIwZ2FtZXxlbnwxfHx8fDE3NzM0OTYwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Ticket to Ride is a cross-country train adventure game. Players collect train cards that enable them to claim railway routes connecting cities throughout North America. The longer the routes, the more points they earn. Additional points come from connecting destination cities and completing the longest continuous railway.",
      players: "2-5 players",
      playersMin: 2,
      playersMax: 5,
      duration: "30-60 minutes",
      difficulty: "Easy",
      age: "8+",
      features: [
        "Family-friendly gameplay",
        "Beautiful map design",
        "Simple rules, strategic depth",
        "Multiple map expansions",
        "Perfect gateway game",
      ],
      howToPlay: [
        "Draw train cards or claim a route on the board",
        "Collect sets of colored train cards",
        "Use card sets to claim railway routes",
        "Complete destination tickets for bonus points",
        "Player with most points at the end wins",
      ],
    },
    "game-3": {
      name: "Pandemic",
      image: "https://images.unsplash.com/photo-1532457573542-37fe94c98cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29wZXJhdGl2ZSUyMHRlYW0lMjBnYW1lJTIwcGxheWluZ3xlbnwxfHx8fDE3NzM0OTYwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "In Pandemic, several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand. Players must work together, using their individual strengths to destroy the diseases before they overwhelm the world.",
      players: "2-4 players",
      playersMin: 2,
      playersMax: 4,
      duration: "45-60 minutes",
      difficulty: "Medium",
      age: "8+",
      features: [
        "Cooperative gameplay - win or lose together",
        "Unique character roles with special abilities",
        "High replayability",
        "Adjustable difficulty levels",
        "Award-winning game design",
      ],
      howToPlay: [
        "Each player has a unique role with special abilities",
        "Work together to treat diseases and find cures",
        "Travel between cities to prevent outbreaks",
        "Share knowledge to discover cures",
        "Win by curing all four diseases before time runs out",
      ],
    },
  };

  const game = games[gameId || "game-1"];

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl mb-4">Game not found</h1>
        <Link to="/board-games/categories">
          <Button>Back to Categories</Button>
        </Link>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/10 text-green-700 border-green-500/20";
      case "Medium":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20";
      case "Hard":
        return "bg-red-500/10 text-red-700 border-red-500/20";
      default:
        return "bg-muted";
    }
  };

  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/board-games/categories">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Categories
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative h-96 lg:h-auto rounded-xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={game.image}
              alt={game.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Game Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl mb-4 text-foreground">{game.name}</h1>
            <p className="text-lg text-muted-foreground mb-6">{game.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Players</div>
                      <div className="font-medium">{game.players}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-medium">{game.duration}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Signal className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Difficulty</div>
                      <div>
                        <Badge variant="outline" className={getDifficultyColor(game.difficulty)}>
                          {game.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-xl">👶</span>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Age</div>
                      <div className="font-medium">{game.age}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Link to="/book" className="mb-6">
              <Button size="lg" className="w-full">
                Book a Table to Play
              </Button>
            </Link>

            <div className="bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                ✨ <strong>New to this game?</strong> Our friendly staff can teach you the rules and help you get started!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & How to Play */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl mb-6 text-foreground">Game Features</h2>
              <div className="space-y-3">
                {game.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Play */}
            <div>
              <h2 className="text-3xl mb-6 text-foreground">How to Play</h2>
              <div className="space-y-4">
                {game.howToPlay.map((step: string, index: number) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
