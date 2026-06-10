import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Clock, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function OpeningHours() {
  const hours = [
    { day: "Mandag", time: "10:00 - 22:00" },
    { day: "Tirsdag", time: "10:00 - 22:00" },
    { day: "Onsdag", time: "10:00 - 22:00" },
    { day: "Torsdag", time: "10:00 - 22:00" },
    { day: "Fredag", time: "10:00 - 22:00" },
    { day: "Lørdag", time: "10:00 - 22:00" },
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
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Åbningstider</h1>
            <p className="text-lg text-muted-foreground">
              Kom og besøg os eller book din bord i forvejen
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
              <h2 className="text-3xl mb-2 text-foreground">Åbningstider</h2>
              <p className="text-muted-foreground">
                Vi er åben alle ugens dage for jeres spilleglæde. Drop ind eller book bord i forvejen
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
                            I dag
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
                  <strong className="text-foreground">Vær venligst opmærksom på:</strong> Sidste indkald er 1 time før lukketid. Vi kan lukke tidligt på helligdage - tjek venligst vores sociale medier eller ring i forvejen.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl mb-2 text-foreground">Kontakt os</h2>
              <p className="text-muted-foreground">Få fat på os eller besøg os</p>
            </div>

            <div className="space-y-4">
              <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Adresse</CardTitle>
                      <CardDescription>Besøg os i København</CardDescription>
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
                      Vis kort
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
                      <CardTitle>Telefon</CardTitle>
                      <CardDescription>Ring til os når du vil</CardDescription>
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
                      <CardDescription>Send os en besked</CardDescription>
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
                      <CardTitle>Sociale Medier</CardTitle>
                      <CardDescription>Følg os for at holde dig opdateret</CardDescription>
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
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Ugentlige Events</h2>
            <p className="text-lg text-muted-foreground">
              Deltag i vores specielle events i løbet af ugen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🎲</div>
                <CardTitle>Spilaften</CardTitle>
                <CardDescription>Hver onsdag 19:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Mød andre spillere og opdag nye brætspil sammen
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">⚔️</div>
                <CardTitle>D&D One-Shots</CardTitle>
                <CardDescription>Hver lørdag 14:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Prøv D&D for en aften - nemt at komme i gang og sjovt for alle!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🏆</div>
                <CardTitle>Brætspilstuneringer</CardTitle>
                <CardDescription>Sidste søndag i måneden</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Afprøv dine evner i spændende turneringer med fede præmier! Følg med på vores sociale medier for at se hvilke spil vi spiller.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Besøg os i dag!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Walk-ins er velkomne, men vi anbefaler at booke bord i travle perioder og weekender.
          </p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book et bord
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
