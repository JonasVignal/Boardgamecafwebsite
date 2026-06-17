import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { ArrowLeft } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "Do I need to book in advance?",
          a: "We recommend booking in advance, especially on weekends and evenings. But walk-ins are also welcome based on availability."
        },
        {
          q: "How many games do you have?",
          a: "We have over 100 board games in our collection, from classic family games to strategy games and modern masterpieces."
        },
        {
          q: "Can you help me find the right game?",
          a: "Absolutely! Our staff are experienced players and can recommend games based on your group size, experience and preferences."
        },
        {
          q: "Can I bring my own game?",
          a: "Yes, you're welcome to bring your own games. But we have a large selection, so you don't have to!"
        }
      ]
    },
    {
      category: "Prices & Payment",
      questions: [
        {
          q: "How much does it cost to play?",
          a: "Weekdays: 50 DKK per person. Weekends: 75 DKK per person. This gives access to our entire game library all day."
        },
        {
          q: "Is there a student discount?",
          a: "Yes! With a valid student ID: 40 DKK per person, any day."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept cash, credit cards (Visa, Mastercard), Dankort and MobilePay."
        },
        {
          q: "Do you offer group discounts?",
          a: "Yes, groups of 8+ get a 10% discount. Perfect for birthdays and corporate events!"
        }
      ]
    },
    /*
    {
      category: "D&D Sessions",
      questions: [
        {
          q: "Do I need experience to play D&D?",
          a: "Not at all! Our Dungeon Masters are experienced with teaching new players. We recommend starting with a one-shot to learn the basics."
        },
        {
          q: "What should I bring to D&D?",
          a: "Just yourself! We provide everything you need. If you have your own dice or character, feel free to bring them."
        },
        {
          q: "Can I join alone?",
          a: "Yes! You can book solo and make new friends. We match players for campaign sessions."
        },
        {
          q: "How long does a session last?",
          a: "One-shots typically last 3-4 hours. Campaign sessions are also 3-4 hours per session."
        }
      ]
    },
    */
    {
      category: "VR Experiences",
      questions: [
        {
          q: "How many people can play VR together?",
          a: "VR - Stop the Bomb is designed for 2-4 players working together."
        },
        {
          q: "Is there an age limit for VR?",
          a: "We recommend VR for ages 12+. Younger players are welcome with adult supervision."
        },
        {
          q: "Will I get motion sick from VR?",
          a: "Stop the Bomb is a stationary game with minimal movement, so motion sickness is rare. Let us know if you're concerned."
        },
        {
          q: "Do I need VR experience?",
          a: "No! We provide a short briefing before each session."
        }
      ]
    },
    {
      category: "Food & Drinks",
      questions: [
        {
          q: "Do you serve snacks?",
          a: "Yes, we have chips and nut mixes. The full menu is available on our Drinks & Snacks page."
        },
        {
          q: "Can I bring my own food?",
          a: "No, unfortunately!"
        },
        {
          q: "Do you serve alcohol?",
          a: "Yes, we serve various types of beer. You must be 18+ to purchase alcohol."
        }
      ]
    },
    {
      category: "Events & Groups",
      questions: [
        {
          q: "Can I book for a birthday?",
          a: "Yes! We offer special birthday packages with flags and great atmosphere. Contact us for details."
        },
        {
          q: "Do you offer corporate events?",
          a: "Yes! Board games and VR are fantastic team-building activities. We can arrange private sessions for your team."
        },
        {
          q: "How many people can you accommodate?",
          a: "We have room for around 50 people in total. For large groups, contact us to arrange a private booking."
        },
        {
          q: "Do you hold tournaments?",
          a: "Yes! We hold monthly tournaments. Check our social media for upcoming events."
        }
      ]
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
      <section className="bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6"></div>
            <h1 className="text-4xl md:text-5xl mb-6 text-foreground">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to the most common questions
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl md:text-3xl mb-6 text-foreground">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((faq, qIndex) => (
                  <Card key={qIndex} className="border-2 hover:border-primary/50 transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl mb-4 text-foreground">Still have questions?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you can't find the answer you're looking for, feel free to contact us directly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4542909191">
              <Button variant="outline" size="lg">
                📞 Call: +45 42 90 91 91
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

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to play?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your table now and come experience the best of board games, VR and good times!
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
