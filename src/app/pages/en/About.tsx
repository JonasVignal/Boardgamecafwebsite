import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Heart, Users, Trophy, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../../components/common/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in bringing people together through the joy of playing games",
    },
    {
      icon: Users,
      title: "A Place for Everyone",
      description: "Everyone is welcome, from beginners to experienced players",
    },
    {
      icon: Trophy,
      title: "Quality Selection",
      description: "A curated selection of the best board games",
    },
    {
      icon: Sparkles,
      title: "Experiences for Life",
      description: "Creating lasting memories through play and community",
    },
  ];



  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">About Us</h1>
            <p className="text-lg text-muted-foreground">
              More than just a café - we're a community of gamers, dreamers and adventurers
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
                  BoardGame Café started on July 1st, 2026, founded by a group of passionate board game enthusiasts who wanted to create a place where people could meet, switch off from the digital world and enjoy the magic of board games.
                </p>
                <p>
                  What started as an escape room business has since grown with new experiences, and now we're bringing the board game café to the menu. We offer over 100 games and monthly events.
                </p>
                <p>
                  Our mission is simple: to spread the joy of playing games and create a cozy space where friendships are formed, stories are told and memories are made around the game table.
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
              What drives us every day at the BoardGame Café.
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
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">The Café</h2>
            <p className="text-lg text-muted-foreground">
              A cozy atmosphere with room for everyone
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
                  <p className="text-muted-foreground">Board Games</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">80m²</div>
                  <p className="text-muted-foreground">The Space</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">40</div>
                  <p className="text-muted-foreground">Seats</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>



      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Join our community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're a solo gamer looking for new friends, or bringing your own group, you're always welcome at BoardGame Café.
          </p>
          <Link to="/en/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book your visit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
