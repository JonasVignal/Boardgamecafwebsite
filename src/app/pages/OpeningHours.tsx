import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Clock, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function OpeningHours() {
  const hours = [
    { day: "Mandag", time: "14:00 - 22:00" },
    { day: "Tirsdag", time: "14:00 - 22:00" },
    { day: "Onsdag", time: "14:00 - 22:00" },
    { day: "Torsdag", time: "14:00 - 23:00" },
    { day: "Fredag", time: "12:00 - 00:00" },
    { day: "Lørdag", time: "10:00 - 00:00" },
    { day: "Søndag", time: "10:00 - 22:00" },
  ];

  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const todayIndex = today === 0 ? 6 : today - 1; // Adjust to match our array (0 = Monday)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">🕐</div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Opening Hours</h1>
            <p className="text-lg text-muted-foreground">
              We're open 7 days a week for your gaming pleasure. Drop by or book ahead!
            </p>
          </div>
        </div>
      </section>

      {/* Hours & Contact */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Opening Hours */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl mb-2 text-foreground">Weekly Schedule</h2>
              <p className="text-muted-foreground">
                Our doors are open every day of the week
              </p>
            </div>
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {hours.map((schedule, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all ${
                        index === todayIndex
                          ? "bg-primary/10 border-2 border-primary/30"
                          : "border border-transparent hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {index === todayIndex && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                        <span
                          className={`font-medium ${
                            index === todayIndex ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {schedule.day}
                        </span>
                        {index === todayIndex && (
                          <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                            Today
                          </span>
                        )}
                      </div>
                      <span className="text-muted-foreground">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-accent/10 border-2 border-accent/30">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Please note:</strong> Last entry is 1 hour before closing. We may close early on public holidays - please check our social media or call ahead.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl mb-2 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground">Get in touch or visit us</p>
            </div>

            <div className="space-y-4">
              <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Address</CardTitle>
                      <CardDescription>Visit us in Copenhagen</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Nørrebrogade 123
                    <br />
                    2200 Copenhagen N
                    <br />
                    Denmark
                  </p>
                  <Link to="/opening-hours/map">
                    <Button variant="outline" className="group">
                      View Map
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Phone</CardTitle>
                      <CardDescription>Call us anytime</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="tel:+4512345678" className="text-lg text-primary hover:underline">
                    +45 12 34 56 78
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Email</CardTitle>
                      <CardDescription>Send us a message</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:hello@gamecafe.dk"
                    className="text-lg text-primary hover:underline"
                  >
                    hello@gamecafe.dk
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-xl">💬</span>
                    </div>
                    <div>
                      <CardTitle>Social Media</CardTitle>
                      <CardDescription>Follow us for updates</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">Facebook</Button>
                    <Button variant="outline" size="sm">Instagram</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Weekly Events</h2>
            <p className="text-lg text-muted-foreground">
              Join our special events throughout the week
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🎲</div>
                <CardTitle>Game Night</CardTitle>
                <CardDescription>Every Wednesday 19:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Meet fellow gamers and discover new board games together
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">⚔️</div>
                <CardTitle>D&D One-Shots</CardTitle>
                <CardDescription>Every Saturday 14:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Drop-in D&D adventures perfect for beginners and veterans
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🏆</div>
                <CardTitle>Tournaments</CardTitle>
                <CardDescription>Last Sunday of month</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Competitive tournaments with prizes. Check our social media for details
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Visit Us Today!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Walk-ins are welcome, but we recommend booking ahead during peak hours and weekends.
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book a Table
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
