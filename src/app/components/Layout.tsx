import { Link, Outlet, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Brætspil",
      path: "/board-games",
      children: [
        { label: "Kategorier", path: "/board-games/categories" },
      ],
    },
    {
      label: "D&D",
      path: "/dnd",
      children: [
        { label: "Med Game Master", path: "/dnd/with-gm" },
        { label: "Uden Game Master", path: "/dnd/without-gm" },
      ],
    },
    { label: "VR - Stop the Bomb", path: "/vr" },
    {
      label: "Priser",
      path: "/prices",
      children: [
        { label: "Spillebord pr time", path: "/prices/table-rates" },
        { label: "Dungeons & Dragons", path: "/prices/dnd" },
        { label: "Spil med Gamemaster", path: "/prices/gamemaster" },
        { label: "Drikkevarer & Snacks", path: "/prices/drinks" },
      ],
    },
    {
      label: "Åbningstider",
      path: "/opening-hours",
      children: [{ label: "Åbningstider", path: "/opening-hours/map" }],
    },
    {
      label: "Om os",
      path: "/about",
      children: [
        { label: "Find Vej", path: "/about/directions" },
        { label: "FAQ", path: "/about/faq" },
        { label: "Historie", path: "/about/history" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white text-xl">🎲</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-semibold text-lg text-foreground"> Game Café</div>
                <div className="text-xs text-muted-foreground">Brætspil • D&D • VR</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.path} className="relative group">
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-md flex items-center gap-1 transition-colors ${
                        location.pathname === item.path || location.pathname.startsWith(item.path + "/")
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted text-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    <div className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2 hover:bg-muted transition-colors ${
                            location.pathname === child.path ? "text-primary bg-primary/5" : "text-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link to="/book">
                <Button className="ml-2">Book</Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 rounded-md transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 mb-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2 rounded-md text-sm transition-colors ${
                            location.pathname === child.path
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-muted text-muted-foreground"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/book" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-4">Book et bord</Button>
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-4">Game Café</h3>
              <p className="text-sm text-muted-foreground">
                Din hyggelige destination for brætspil, D&D sessions, and VR oplevelser i hjertet af København.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Hurtige Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/board-games" className="hover:text-primary transition-colors">
                    Brætspil
                  </Link>
                </li>
                <li>
                  <Link to="/dnd" className="hover:text-primary transition-colors">
                    D&D Sessions
                  </Link>
                </li>
                <li>
                  <Link to="/vr" className="hover:text-primary transition-colors">
                    VR Oplevelser
                  </Link>
                </li>
                <li>
                  <Link to="/book" className="hover:text-primary transition-colors">
                    Book 
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📍 Nørre Voldgade 18, København</li>
                <li>📞 +45 12 34 56 78</li>
                <li>📧 spil@escape-cph.dk</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2026  Game Café. Alle rettigheder forbeholdes.
          </div>
        </div>
      </footer>
    </div>
  );
}