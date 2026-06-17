import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../../components/common/ImageWithFallback";

export function History() {
  const timeline = [
    {
      year: "2014",
      title: "The Beginning",
      description: "The Operator in the Tower is ready on Refshaleøen",
      icon: ""
    },
    {
      year: "2015",
      title: "Expansion",
      description: "The premises on Nørre Farimagsgade 7 are leased, The Psychotic Janitor, The Terrorist Cell and The Solitary Monk open",
      icon: ""
    },
    {
      year: "2016",
      title: "New Location Leased",
      description: "The premises on Nørre Voldgade 18 are leased",
      icon: ""
    },
    {
      year: "2017",
      title: "VR Introduction",
      description: "We added VR experiences to our offerings, starting with Cosmos, Denmark's first VR Team Escape Room",
      icon: ""
    },
    {
      year: "2017",
      title: "Community Growth",
      description: "Vikings and Enter the Mind open, our first double game",
      icon: ""
    },
    {
      year: "2018",
      title: "Team Building",
      description: "Stop The Bomb, VR Team Building is offered to customers, with cooperation at the forefront",
      icon: ""
    },
    {
      year: "2019",
      title: "Murder Mystery & VR",
      description: "Manor Hunt at the Open-Air Museum, Dr. Evil's Plan and new VR games see the light of day",
      icon: ""
    },
    {
      year: "2020",
      title: "New Games and Covid-19",
      description: "The Rogue General opens and print-and-cut escape games are introduced during Covid-19",
      icon: ""
    },
    {
      year: "2021",
      title: "Concept Development",
      description: "Room two of The Psychotic Janitor and The Terrorist Cell open",
      icon: ""
    },
    {
      year: "2022",
      title: "Puzzle Hunt",
      description: "Stormen 1659 opens, a historical puzzle hunt through inner Copenhagen",
      icon: ""
    },
    {
      year: "2023",
      title: "Cyber Security",
      description: "Hacked! premieres both as an Escape Room and as a mobile escape room",
      icon: ""
    },
    {
      year: "2026",
      title: "Board Games",
      description: "BoardGame Café opens with over 100 different games to play in the café.",
      icon: ""
    }
  ];

  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/en/about">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to About Us
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Our History</h1>
            <p className="text-lg text-muted-foreground">
              The journey from one escape room to 11 escape rooms and a cozy board game café.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-foreground">The Beginning</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2014, a group of friends had a dream: to create a place where people could meet, disconnect from the digital world and enjoy the magic of games and play together.
                </p>
                <p>
                  It started as an escape room in the optical tower on Refshaleøen. But the love for games and the community that formed around them was immediate.
                </p>
                <p>
                  What made us different wasn't just the games - it was the atmosphere. We wanted to create a place where everyone felt welcome, whether they were experienced gamers or completely new to playing.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677094365560-9f88ce594e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwcGxheWluZyUyMGJvYXJkJTIwZ2FtZXN8ZW58MXx8fHwxNzczNDExMjY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Friends playing board games"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              From 2014 to today - the milestones that shaped us
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
                          {event.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-primary">{event.year}</span>
                          <div className="h-px flex-1 bg-border"></div>
                        </div>
                        <h3 className="text-xl mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl mb-4 text-center">🎯</div>
                <h3 className="text-2xl mb-4 text-center">Our Mission</h3>
                <p className="text-muted-foreground text-center">
                  To spread the joy of games and create a welcoming place where friendships are formed, stories are told, and memories are made around the game table.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl mb-4 text-center">🔮</div>
                <h3 className="text-2xl mb-4 text-center">Our Vision</h3>
                <p className="text-muted-foreground text-center">
                  To be Scandinavia's leading destination for board game experiences, where both beginners and veterans find their own gaming home.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground">What drives us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every day we work to create experiences that go beyond just playing. We believe in the power of human connection, the joy of learning something new, and the magic that happens when people gather around a game.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-4xl mb-3">❤️</div>
                <h3 className="mb-2">Passion</h3>
                <p className="text-sm text-muted-foreground">
                  We love games and it shows in everything we do
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Our guests are more than customers - they're family
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We strive for the best games and experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Be part of our story</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Come and experience the magic yourself. Your next favorite game is waiting!
          </p>
          <Link to="/en/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book a table
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
