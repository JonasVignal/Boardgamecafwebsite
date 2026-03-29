import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Scroll, Sparkles, Users, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function DnD() {
  const sessions = [
    {
      title: "With Game Master",
      description: "Join guided campaigns led by our experienced Dungeon Masters",
      icon: Scroll,
      image: "https://images.unsplash.com/photo-1696197819150-9645c9256577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW5nZW9ucyUyMGRyYWdvbnMlMjB0YWJsZXRvcCUyMGdhbWluZ3xlbnwxfHx8fDE3NzM0OTYwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/dnd/with-gm",
      features: [
        "Professional Dungeon Masters",
        "Pre-made campaigns and one-shots",
        "Perfect for beginners",
        "All materials provided",
      ],
    },
    {
      title: "Without Game Master",
      description: "Bring your own campaign and use our private gaming spaces",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1532457573542-37fe94c98cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29wZXJhdGl2ZSUyMHRlYW0lMjBnYW1lJTIwcGxheWluZ3xlbnwxfHx8fDE3NzM0OTYwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/dnd/without-gm",
      features: [
        "Private gaming tables",
        "Miniatures and terrain available",
        "Bring your own adventure",
        "Lower hourly rate",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🎲⚔️</div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">
              Dungeons & Dragons Sessions
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Embark on epic adventures in our dedicated D&D spaces. Whether you're a seasoned adventurer or a curious beginner, we have the perfect session for you.
            </p>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sessions.map((session, index) => {
            const Icon = session.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/50"
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    src={session.image}
                    alt={session.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-3 shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl text-white mb-2">{session.title}</h3>
                  </div>
                </div>
                <CardHeader>
                  <CardDescription className="text-base">{session.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {session.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={session.link}>
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Why D&D at Our Café */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Why Play D&D With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need for an unforgettable adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">Expert DMs</h3>
              <p className="text-sm text-muted-foreground">
                Our Dungeon Masters have years of experience creating memorable campaigns
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mb-2">Regular Sessions</h3>
              <p className="text-sm text-muted-foreground">
                Weekly campaigns and drop-in one-shots available
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏰</span>
              </div>
              <h3 className="mb-2">Immersive Setup</h3>
              <p className="text-sm text-muted-foreground">
                Themed tables, miniatures, and terrain for full immersion
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="mb-2">All Materials</h3>
              <p className="text-sm text-muted-foreground">
                Dice, character sheets, rulebooks - everything provided
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Ready for Adventure?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your D&D session today and experience the magic of tabletop roleplaying
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book Your Session
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
