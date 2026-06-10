import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/common/ImageWithFallback";

export function History() {
  const timeline = [
    {
      year: "2014",
      title: "Starten",
      description: "Operatøren i Tårnet står klar på Refshaleøen",
      icon: ""
    },
    {
      year: "2015",
      title: "Ekspansion",
      description: "Lokalerne på Nørre Farimagsgade 7 lejes, The Psychotic Janitor, The Terrorist Cell og The Solitary Munk åbner",
      icon: ""
    },
    {
      year: "2016",
      title: "Ny Lokation lejes",
      description: "Lokalerne på Nørre Voldgade 18 lejes",
      icon: ""
    },
    {
      year: "2017",
      title: "VR Introduktion",
      description: "Vi tilføjede VR-oplevelser til vores tilbud, Startenede med Cosmos, Danmarks første VR Team Escape Room",
      icon: ""
    },
    {
      year: "2017",
      title: "Fællesskabsvækst",
      description: "Vikings og Enter the Mind åbner, Vores første dobbeltspil",
      icon: ""
    },
    {
      year: "2018",
      title: "Teambuilding",
      description: "Stop The Bomb, VR Teambuilding udbydes til kunderne, hvor samarbejde er i højsædet",
      icon: ""
    },
    {
      year: "2019",
      title: "Morderjagt & VR",
      description: "Herredfodgen på Frilandsmuseet, Dr. Evils Plan og Ny VR spil ser dagens lys",
      icon: ""
    },
    {
      year: "2020",
      title: "Nye spil og Covid-19",
      description: "The Rouge general åbner og Print+klip escape spil introduceres under Covid-19",
      icon: ""
    },
    {
      year: "2021",
      title: "Videreudvikling af Konceptet",
      description: "Rum to af The Psychotic Janitor og The Terrorist Cell åbner",
      icon: ""
    },
    {
      year: "2022",
      title: "Gådejagt",
      description: "Stormen 1659 åbner, en historisk gådejagt igennem indre København",
      icon: ""
    },
    {
      year: "2023",
      title: "Cyber Security",
      description: "Hacked! har premiere både som Escape Room og som mobilt escape room",
      icon: ""
    },
    {
      year: "2026",
      title: "Bræt spil",
      description: "Brætspils Caféen åbner med over 100 forskellige spil til at spille i caféen.",
      icon: ""
    }
  ];

  return (
    <div>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/about">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Tilbage til Om os
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Vores Historie</h1>
            <p className="text-lg text-muted-foreground">
              Rejsen fra et escape room til 11 escape room og en hyggelig spilbræts cafe.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-foreground">Begyndelsen</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I 2014 havde en gruppe venner en drøm: at skabe et sted hvor folk kunne mødes, afbryde fra den digitale verden og nyde magien med spil og leg sammen.
                </p>
                <p>
                  Det startede som et escape room i det optiske tårn på Refshaleøen. Men kærligheden til spil og fællesskabet der opstod omkring dem var umiddelbar.
                </p>
                <p>
                  Hvad der gjorde os anderledes var ikke bare spillene - det var atmosfæren. Vi ønskede at skabe et sted hvor alle følte sig velkomne, uanset om de var erfarne gamers eller helt nye til spillere.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677094365560-9f88ce594e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwcGxheWluZyUyMGJvYXJkJTIwZ2FtZXN8ZW58MXx8fHwxNzczNDExMjY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Venner spiller brætspil"
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
            <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Vores Rejse</h2>
            <p className="text-lg text-muted-foreground">
              Fra 2014 til i dag - milepæle der formede os
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
                <h3 className="text-2xl mb-4 text-center">Vores Mission</h3>
                <p className="text-muted-foreground text-center">
                  At sprede glæden ved spil og skabe et rart sted hvor venskaber skabes, historier fortælles, og minder dannes omkring spilbordet.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl mb-4 text-center">🔮</div>
                <h3 className="text-2xl mb-4 text-center">Vores Vision</h3>
                <p className="text-muted-foreground text-center">
                  At være Skandinaviens førende destination for bordspilsoplevelser, hvor både begyndere og veteraner finder deres helt eget spilhjem.
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
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground">Hvad driver os</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hver dag arbejder vi for at skabe oplevelser der går ud over bare at spille. Vi tror på kraften i menneskelig forbindelse, glæden ved at lære noget nyt, og magien der sker når folk samles omkring et spil.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-4xl mb-3">❤️</div>
                <h3 className="mb-2">Passion</h3>
                <p className="text-sm text-muted-foreground">
                  Vi elsker spil og det viser sig i alt hvad vi gør
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="mb-2">Fællesskab</h3>
                <p className="text-sm text-muted-foreground">
                  Vores gæster er mere end kunder - de er familie
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Vi stræber efter de bedste spil og oplevelser
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Vær en del af vores historie</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Kom og oplev magien selv. Dit næste yndlingsspil venter!
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
