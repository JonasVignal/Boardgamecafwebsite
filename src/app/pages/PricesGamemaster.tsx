import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

export function PricesGamemaster() {
  // Redirect to D&D with GM page
  return (
    <div>
      <div className="container mx-auto px-4 py-6">
        <Link to="/prices">
          <Button variant="ghost" className="group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Tilbage til Priser
          </Button>
        </Link>
      </div>
      
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="text-6xl mb-6">⚔️</div>
          <h1 className="text-3xl md:text-4xl mb-4 text-foreground">Spil med Gamemaster</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Du omdirigeres til vores D&D med Game Master side for detaljerede priser og information.
          </p>
          <Link to="/dnd/with-gm">
            <Button size="lg" className="text-lg px-8">
              Se D&D med Game Master
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
