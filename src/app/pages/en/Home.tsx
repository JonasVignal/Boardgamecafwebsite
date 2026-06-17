import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Gamepad2, Users, Zap, Coffee, Calendar } from "lucide-react";
import { ImageWithFallback } from "../../components/common/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Gamepad2,
      title: "Board Games",
      description: "A huge selection of board games, e.g. Catan, Ludo and Uno.",
      image: "https://images.unsplash.com/photo-1677094365560-9f88ce594e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwcGxheWluZyUyMGJvYXJkJTIwZ2FtZXN8ZW58MXx8fHwxNzczNDExMjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/en/board-games",
    },

    {
      icon: Zap,
      title: "VR - Stop the Bomb",
      description: "Try the ultimate experience of defusing a bomb together in the virtual world.",
      image: "https://images.unsplash.com/photo-1640823127518-65e1ad563576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMHZpcnR1YWwlMjByZWFsaXR5JTIwZ2FtaW5nfGVufDF8fHx8MTc3MzQ3OTQ0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/en/vr",
    },
    {
      icon: Coffee,
      title: "Drinks & Snacks",
      description: "Enjoy a cold beer or soda, or a hot cup of coffee while you play.",
      image: "https://images.unsplash.com/photo-1641913221341-717c981643b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBkcmlua3MlMjBjYWZlJTIwYmV2ZXJhZ2VzfGVufDF8fHx8MTc3MzQ5NjAyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/en/prices/drinks",
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Weekly tournaments, game nights and special events. Check our calendar for upcoming activities!",
      image: "https://images.unsplash.com/photo-1532457573542-37fe94c98cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29wZXJhdGl2ZSUyMHRlYW0lMjBnYW1lJTIwcGxheWluZ3xlbnwxfHx8fDE3NzM0OTYwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/en/opening-hours",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30">
              <span className="text-sm text-white/80">🎮 Welcome to Copenhagen's coziest Café</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight">
               Board Games and VR
              <br />
              <span className="text-primary">In the Heart of Copenhagen</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Come and enjoy a board game, whether you're an expert or just a beginner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/en/book">
                <Button size="lg" className="text-lg px-8">
                  Book
                </Button>
              </Link>
              <Link to="/en/board-games">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  See games
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">What we offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover all the exciting activities and experiences waiting for you at our game café
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
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-white">Ready to play?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Book your table now and enjoy a fantastic gaming experience with friends and family
          </p>
          <Link to="/en/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Reserve your spot
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
            <h3 className="mb-2">100+ Games</h3>
            <p className="text-muted-foreground">
              From classics to modern masterpieces, find your perfect game
            </p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">👥</span>
            </div>
            <h3 className="mb-2">Friendly Staff</h3>
            <p className="text-muted-foreground">
              Our experienced game guides help you find and learn new games
            </p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">☕</span>
            </div>
            <h3 className="mb-2">Cozy Atmosphere</h3>
            <p className="text-muted-foreground">
              Relax in our comfortable space with great food and drinks
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
