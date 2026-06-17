import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export function Book() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Book a Table</h1>
            <p className="text-lg text-muted-foreground">
              Book your table below. All reservations are for 3 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 text-center py-12">
            <CardHeader>
              <CardTitle className="text-3xl mb-4">Ready to play?</CardTitle>
            </CardHeader>
            <CardContent className="p-0 overflow-hidden rounded-b-xl">
              <iframe
                src="https://book.easytable.com/book/?id=33141&lang=en"
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
                <CardTitle className="text-lg">Walk-ins are welcome!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  While we recommend booking in advance, we also welcome walk-ins based on availability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Please cancel at least 48 hours in advance if you wish to cancel or change your booking via the booking system.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl mb-4 text-foreground">Need help?</h2>
          <p className="text-muted-foreground mb-6">
            If you have questions or prefer to book a table by phone, we're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4592909191">
              <Button variant="outline" size="lg">
                📞 Call us: +45 42 90 91 91
              </Button>
            </a>
            <a href="mailto:info@boardgamecafe.dk">
              <Button variant="outline" size="lg">
                📧 Email: info@boardgamecafe.dk
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
