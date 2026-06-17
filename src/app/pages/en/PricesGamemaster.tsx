import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";

export function PricesGamemaster() {
  // Redirect to D&D with GM page
  return (
    <div>
      <div className="container mx-auto px-4 py-6">
        <Link to="/en/prices">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Prices
          </Button>
        </Link>
      </div>

      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="text-6xl mb-6">⚔️</div>
          <h1 className="text-3xl md:text-4xl mb-4 text-foreground">Play with a Gamemaster</h1>
          <p className="text-lg text-muted-foreground mb-8">
            You're being redirected to our D&D with Game Master page for detailed pricing and information.
          </p>
          <Link to="/en/dnd/with-gm">
            <Button size="lg" className="text-lg px-8">
              See D&D with Game Master
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
