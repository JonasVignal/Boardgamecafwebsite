import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-8xl mb-6">🎲</div>
          <h1 className="text-6xl md:text-8xl mb-4 text-foreground">404</h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-foreground">Side ikke fundet</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Det ser ud til, at du har slået en kritisk fiasko! Siden du leder efter findes ikke.
          </p>
          <Link to="/">
            <Button size="lg" className="text-lg px-8">
              <Home className="w-5 h-5 mr-2" />
              Tilbage til forsiden
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
