import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, Clock, Users, Star, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function DnDWithGM() {
  const campaigns = [
    {
      title: "Lost Mine of Phandelver",
      type: "Beginner-Friendly Campaign",
      duration: "4-6 sessions",
      players: "3-5 players",
      level: "Levels 1-5",
      description: "A classic starter adventure perfect for new players. Explore dungeons, battle monsters, and uncover ancient secrets.",
      schedule: "Tuesdays 18:00-21:00",
    },
    {
      title: "Curse of Strahd",
      type: "Gothic Horror Campaign",
      duration: "8-12 sessions",
      players: "4-6 players",
      level: "Levels 1-10",
      description: "Enter the mist-shrouded land of Barovia and face the legendary vampire lord Strahd von Zarovich.",
      schedule: "Thursdays 18:00-22:00",
    },
    {
      title: "One-Shot Adventures",
      type: "Drop-in Sessions",
      duration: "Single session (3-4 hours)",
      players: "3-6 players",
      level: "Any level",
      description: "Complete adventures perfect for trying D&D or fitting into a busy schedule. New story every week!",
      schedule: "Saturdays 14:00-18:00",
    },
  ];

  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/dnd">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to D&D
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="text-6xl mb-6">⚔️🎲</div>
          <h1 className="text-4xl md:text-5xl mb-6 text-foreground">D&D with Game Master</h1>
          <p className="text-lg text-muted-foreground">
            Join professionally-led campaigns and one-shot adventures. Perfect for beginners and experienced players alike!
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-12">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1696197819150-9645c9256577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdW5nZW9ucyUyMGRyYWdvbnMlMjB0YWJsZXRvcCUyMGdhbWluZ3xlbnwxfHx8fDE3NzM0OTYwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="D&D with Game Master"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </section>

      {/* Available Campaigns */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Available Campaigns</h2>
          <p className="text-lg text-muted-foreground">
            Choose from our rotating selection of campaigns and one-shots
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {campaigns.map((campaign, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  {campaign.type}
                </Badge>
                <CardTitle>{campaign.title}</CardTitle>
                <CardDescription>{campaign.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{campaign.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{campaign.players}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4" />
                  <span>{campaign.level}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{campaign.schedule}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🎭</span>
                    Professional DM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Experienced Dungeon Masters who create engaging stories and help everyone have fun
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">📚</span>
                    All Materials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Dice sets, character sheets, rulebooks, and reference materials provided
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🗺️</span>
                    Maps & Miniatures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Beautiful battle maps and painted miniatures for immersive combat
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">☕</span>
                    Refreshments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complimentary drinks and snacks available throughout your session
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">Pricing</h2>
          <Card className="border-2 border-primary/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Session with Game Master</CardTitle>
              <CardDescription>Per person, per session</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">150 DKK</div>
                <p className="text-sm text-muted-foreground">Includes all materials and refreshments</p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between py-2 border-t border-border">
                  <span className="text-sm text-muted-foreground">One-shot (3-4 hours)</span>
                  <span>150 DKK</span>
                </div>
                <div className="flex items-center justify-between py-2 border-t border-border">
                  <span className="text-sm text-muted-foreground">Campaign session (3-4 hours)</span>
                  <span>150 DKK</span>
                </div>
                <div className="flex items-center justify-between py-2 border-t border-b border-border">
                  <span className="text-sm text-muted-foreground">Full campaign package (6 sessions)</span>
                  <span className="text-primary">800 DKK <span className="text-xs line-through text-muted-foreground">900</span></span>
                </div>
              </div>
              <Link to="/book">
                <Button className="w-full" size="lg">
                  Book Your Session
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center text-foreground">New to D&D?</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do I need experience?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Not at all! Our DMs are experienced with teaching new players. We recommend starting with a one-shot to learn the basics.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What should I bring?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Just yourself! We provide everything you need. If you have your own dice or character, feel free to bring them.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I join with friends?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! You can book as a group or join solo and make new friends. We match players for campaign sessions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
