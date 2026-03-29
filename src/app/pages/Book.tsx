import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Calendar, Users, Mail, User, MessageSquare, CheckCircle2 } from "lucide-react";

export function Book() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    players: "",
    activity: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-2 border-primary/50 shadow-2xl">
            <CardContent className="pt-12 pb-12">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Booking Request Received!</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your booking request, <strong>{formData.name}</strong>! We'll confirm your reservation via email at <strong>{formData.email}</strong> within 24 hours.
              </p>
              <div className="bg-muted/50 rounded-lg p-6 mb-8 text-left">
                <h3 className="mb-4">Booking Details:</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Activity:</strong> {formData.activity}</p>
                  <p><strong>Number of Players:</strong> {formData.players}</p>
                  <p><strong>Date:</strong> {formData.date}</p>
                  <p><strong>Time:</strong> {formData.time}</p>
                  {formData.message && <p><strong>Message:</strong> {formData.message}</p>}
                </div>
              </div>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    players: "",
                    activity: "",
                    date: "",
                    time: "",
                    message: "",
                  });
                }}
              >
                Make Another Booking
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">📅</div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Book a Table</h1>
            <p className="text-lg text-muted-foreground">
              Reserve your spot at Copenhagen Game Café. Fill out the form below and we'll confirm your booking via email.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Booking Information</CardTitle>
              <CardDescription>
                Please provide your details and preferences. We'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>

                {/* Number of Players */}
                <div className="space-y-2">
                  <Label htmlFor="players" className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Number of Players *
                  </Label>
                  <Select
                    required
                    value={formData.players}
                    onValueChange={(value) => handleChange("players", value)}
                  >
                    <SelectTrigger id="players">
                      <SelectValue placeholder="Select number of players" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 player</SelectItem>
                      <SelectItem value="2">2 players</SelectItem>
                      <SelectItem value="3">3 players</SelectItem>
                      <SelectItem value="4">4 players</SelectItem>
                      <SelectItem value="5">5 players</SelectItem>
                      <SelectItem value="6">6 players</SelectItem>
                      <SelectItem value="7+">7+ players</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Activity */}
                <div className="space-y-2">
                  <Label htmlFor="activity">Activity *</Label>
                  <Select
                    required
                    value={formData.activity}
                    onValueChange={(value) => handleChange("activity", value)}
                  >
                    <SelectTrigger id="activity">
                      <SelectValue placeholder="Select your activity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="board-games">Board Games</SelectItem>
                      <SelectItem value="dnd-with-gm">D&D with Game Master</SelectItem>
                      <SelectItem value="dnd-without-gm">D&D without Game Master</SelectItem>
                      <SelectItem value="vr">VR - Stop the Bomb</SelectItem>
                      <SelectItem value="general">General Visit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Preferred Date *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Input
                      id="time"
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                    />
                  </div>
                </div>

                {/* Additional Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Additional Information (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Any special requests or questions? Let us know!"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full">
                  Submit Booking Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll respond to your booking request within 24 hours.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Walk-ins Welcome!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  While we recommend booking ahead, we also accept walk-ins based on availability. Peak hours are Friday-Sunday evenings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Please notify us at least 24 hours in advance if you need to cancel or reschedule your booking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl mb-4 text-foreground">Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            If you have questions or prefer to book by phone, we're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4512345678">
              <Button variant="outline" size="lg">
                📞 Call Us: +45 12 34 56 78
              </Button>
            </a>
            <a href="mailto:hello@gamecafe.dk">
              <Button variant="outline" size="lg">
                📧 Email: hello@gamecafe.dk
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
