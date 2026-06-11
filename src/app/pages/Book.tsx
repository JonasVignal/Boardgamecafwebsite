import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

export function Book() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Book et bord</h1>
            <p className="text-lg text-muted-foreground">
              Book jeres bord herunder. Alle reservationer er 3 timer.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 text-center py-12">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Klar til at spille?</CardTitle>
            </CardHeader>
            <CardContent className="p-0 overflow-hidden rounded-b-xl">
              <iframe
                src="https://book.easytable.com/book/?id=33141&lang=auto"
                className="w-full h-[600px] border-0"
                title="EasyTable Booking System"
                allow="geolocation; microphone; camera"
              ></iframe>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Walk-ins er velkommen!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Selvom vi anbefaler at booke i forvejen, tager vi også imod walk-ins baseret på tilgængelighed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Aflysningspolitik</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Afmeld venligst senest 48 timer i forvejen, hvis du ønsker at aflyse eller ændre din booking via bookingsystemet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl mb-4 text-foreground">Brug for hjælp?</h2>
          <p className="text-muted-foreground mb-6">
            Hvis du har spørgsmål eller foretrækker at booke bord via telefon, er vi her for at hjælpe!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4592909191">
              <Button variant="outline" size="lg">
                📞 Ring til os: +45 42 90 91 91
              </Button>
            </a>
            <a href="mailto:info@brætspilscafe.dk">
              <Button variant="outline" size="lg">
                📧 Email: info@brætspilscafe.dk
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
