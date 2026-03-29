import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Users, Clock, Zap, Trophy } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function VR() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="text-6xl mb-6">🥽💣</div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">VR: Stop the Bomb</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The ultimate cooperative VR experience! Work together with your team to defuse a bomb before time runs out. Communication and teamwork are essential!
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1640823127518-65e1ad563576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMHZpcnR1YWwlMjByZWFsaXR5JTIwZ2FtaW5nfGVufDF8fHx8MTc3MzQ3OTQ0NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="VR Gaming"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl mb-2">Immersive Virtual Reality Experience</h3>
              <p className="text-white/90">Feel like you're really there with cutting-edge VR technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A thrilling cooperative challenge that tests your team's communication skills
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="mb-2">Get Briefed</h3>
              <p className="text-sm text-muted-foreground">
                Learn the basics and get equipped with VR headsets
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="mb-2">Enter VR</h3>
              <p className="text-sm text-muted-foreground">
                One player sees the bomb, others see the manual
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="mb-2">Communicate</h3>
              <p className="text-sm text-muted-foreground">
                Describe what you see and work together
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="mb-2">Defuse!</h3>
              <p className="text-sm text-muted-foreground">
                Cut the right wires before time runs out
              </p>
            </div>
          </div>

          <Card className="bg-accent/20 border-2 border-accent">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                <strong>The Challenge:</strong> Only one player can see the bomb in VR, while the others have the defusal manual. You must describe what you see and follow instructions carefully. One wrong move and... BOOM! 💥
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Why You'll Love It</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Teamwork</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Perfect team-building activity that requires cooperation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Adrenaline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Heart-pounding action with a ticking clock
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Multiple difficulty levels to test your skills
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Quick Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Each round is 5-10 minutes - play multiple times!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & Details */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Pricing & Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Single Session</CardTitle>
                <CardDescription>30 minutes of VR gameplay</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">200 DKK</div>
                  <p className="text-sm text-muted-foreground">per group (2-4 players)</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    30 minutes play time
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    All equipment included
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Brief tutorial included
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    2-4 players
                  </li>
                </ul>
                <Link to="/book">
                  <Button variant="outline" className="w-full">
                    Book Session
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">Best Value</span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Party Package</CardTitle>
                <CardDescription>1 hour of VR gameplay</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2 text-primary">350 DKK</div>
                  <p className="text-sm text-muted-foreground">
                    per group (2-4 players) <span className="line-through">400 DKK</span>
                  </p>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    1 hour play time
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    All equipment included
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Complimentary drinks
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Photo opportunity
                  </li>
                </ul>
                <Link to="/book">
                  <Button className="w-full">Book Package</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="mt-8 border-2">
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Recommended for ages 12+ (younger players welcome with adult supervision)</p>
              <p>• Sessions must be booked in advance</p>
              <p>• Groups can rotate through the VR headset during the session</p>
              <p>• We provide sanitized equipment and regular cleaning</p>
              <p>• Not recommended for those prone to motion sickness</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-accent py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready for the Challenge?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Test your team's skills and see if you can defuse the bomb before it's too late!
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book VR Experience
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
