import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Heart, Users, Trophy, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in bringing people together through the joy of gaming",
    },
    {
      icon: Users,
      title: "Inclusive Space",
      description: "Everyone is welcome, from beginners to seasoned gamers",
    },
    {
      icon: Trophy,
      title: "Quality Selection",
      description: "Carefully curated collection of the best board games",
    },
    {
      icon: Sparkles,
      title: "Memorable Experiences",
      description: "Creating lasting memories through play and connection",
    },
  ];

  const team = [
    {
      name: "Lars Nielsen",
      role: "Founder & Game Master",
      description: "20+ years of gaming experience and D&D enthusiast",
    },
    {
      name: "Emma Andersen",
      role: "Head of Events",
      description: "Tournament organizer and board game expert",
    },
    {
      name: "Oliver Jensen",
      role: "VR Specialist",
      description: "Tech wizard and VR experience designer",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🎲❤️</div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">About Us</h1>
            <p className="text-lg text-muted-foreground">
              More than just a café - we're a community of gamers, dreamers, and adventurers
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Copenhagen Game Café was founded in 2018 by a group of passionate board game enthusiasts who wanted to create a space where people could come together, disconnect from the digital world, and enjoy the magic of tabletop gaming.
                </p>
                <p>
                  What started as a small café with 50 games has grown into Copenhagen's premier destination for board games, D&D, and immersive VR experiences. We now host over 500 games and welcome thousands of visitors each month.
                </p>
                <p>
                  Our mission is simple: to spread the joy of gaming and create a welcoming space where friendships are forged, stories are told, and memories are made around the gaming table.
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
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What drives us every day at Copenhagen Game Café
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
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">The Space</h2>
            <p className="text-lg text-muted-foreground">
              A cozy and welcoming environment designed for gaming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677094365560-9f88ce594e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwcGxheWluZyUyMGJvYXJkJTIwZ2FtZXN8ZW58MXx8fHwxNzczNDExMjY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gaming space"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white text-xl">Main Gaming Area</h3>
                <p className="text-white/80 text-sm">Comfortable tables for all group sizes</p>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1696197819150-9645c9256577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW5nZW9ucyUyMGRyYWdvbnMlMjB0YWJsZXRvcCUyMGdhbWluZ3xlbnwxfHx8fDE3NzM0OTYwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="D&D room"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h3 className="text-white text-xl">D&D Private Rooms</h3>
                <p className="text-white/80 text-sm">Dedicated spaces for campaigns</p>
              </div>
            </div>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">500+</div>
                  <p className="text-muted-foreground">Board Games</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">150m²</div>
                  <p className="text-muted-foreground">Gaming Space</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">50</div>
                  <p className="text-muted-foreground">Seats</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Meet the Team</h2>
            <p className="text-lg text-muted-foreground">
              The passionate people who make it all happen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">👤</span>
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Join Our Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're a solo gamer looking to make friends or bringing your own group, you're always welcome at Copenhagen Game Café.
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book Your Visit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
