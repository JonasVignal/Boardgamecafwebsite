import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Clock, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function OpeningHours() {
  const hours = [
    { day: "Monday", time: "10:00 - 22:00" },
    { day: "Tuesday", time: "10:00 - 22:00" },
    { day: "Wednesday", time: "10:00 - 22:00" },
    { day: "Thursday", time: "10:00 - 22:00" },
    { day: "Friday", time: "10:00 - 22:00" },
    { day: "Saturday", time: "10:00 - 22:00" },
    { day: "Sunday", time: "10:00 - 22:00" },
  ];

  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const todayIndex = today === 0 ? 6 : today - 1; // Adjust to match our array (0 = Monday)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Opening Hours</h1>
            <p className="text-lg text-muted-foreground">
              Come visit us or book your table in advance
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
              <h2 className="text-3xl mb-2 text-foreground">Opening Hours</h2>
              <p className="text-muted-foreground">
                We're open every day of the week for your gaming pleasure. Drop in or book a table in advance
              </p>
            </div>
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {hours.map((schedule, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all ${index === todayIndex
                        ? "bg-primary/10 border-2 border-primary/30"
                        : "border border-transparent hover:bg-muted/50"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        {index === todayIndex && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                        <span
                          className={`font-medium ${index === todayIndex ? "text-primary" : "text-foreground"
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
                  <strong className="text-foreground">Please note:</strong> Last call is 1 hour before closing. We may close early on public holidays - please check our social media or call ahead.
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
                    Nørre Voldgade 18
                    <br />
                    1358 Copenhagen K
                    <br />
                    Denmark
                  </p>
                  <Link to="/en/opening-hours/map">
                    <Button variant="outline" className="group">
                      Show map
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
                      <CardDescription>Call us</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="tel:+4512345678" className="text-lg text-primary hover:underline">
                    +45 42 90 91 91
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
                    href="mailto:info@boardgamecafe.dk"
                    className="text-lg text-primary hover:underline"
                  >
                    info@boardgamecafe.dk
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
                      <CardDescription>Follow us to stay updated</CardDescription>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🎲</div>
                <CardTitle>Game Night</CardTitle>
                <CardDescription>Every Wednesday at 19:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Meet other players and discover new board games together
                </p>
              </CardContent>
            </Card>



            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🏆</div>
                <CardTitle>Board Game Tournaments</CardTitle>
                <CardDescription>Last Sunday of the month</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Test your skills in exciting tournaments with great prizes! Follow our social media to see which games we're playing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Visit us today!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Walk-ins are welcome, but we recommend booking a table during busy periods and weekends.
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
