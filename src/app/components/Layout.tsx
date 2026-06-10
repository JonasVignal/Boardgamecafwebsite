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

    { label: "VR - Stop the Bomb", path: "/vr" },
    {
      label: "Priser",
      path: "/prices",
      children: [
        { label: "Spillebord pr time", path: "/prices/table-rates" },

        { label: "Drikkevarer & Snacks", path: "/prices/drinks" },
      ],
    },
    { label: "Åbningstider", path: "/opening-hours" },
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
      <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur border-b border-white/10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white text-xl">🎲</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-semibold text-lg text-white"> Game Café</div>
                <div className="text-xs text-white/60">Brætspil • VR</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.path} className="relative group">
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-md flex items-center gap-1 transition-colors ${location.pathname === item.path || location.pathname.startsWith(item.path + "/")
                          ? "bg-primary/20 text-primary"
                          : "hover:bg-white/10 text-white/90"
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
                          className={`block px-4 py-2 hover:bg-primary/10 transition-colors ${location.pathname === child.path ? "text-primary bg-primary/5" : "text-foreground"
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
                    className={`px-4 py-2 rounded-md transition-colors ${location.pathname === item.path
                        ? "bg-primary/20 text-primary"
                        : "hover:bg-white/10 text-white/90"
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
              className="lg:hidden p-2 hover:bg-white/10 rounded-md transition-colors text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/10">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 rounded-md transition-colors ${location.pathname === item.path
                        ? "bg-primary/20 text-primary"
                        : "hover:bg-white/10 text-white/90"
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
                          className={`block px-4 py-2 rounded-md text-sm transition-colors ${location.pathname === child.path
                              ? "bg-primary/20 text-primary"
                              : "hover:bg-white/10 text-white/60"
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
      <footer className="bg-secondary text-white border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-4">Game Café</h3>
              <p className="text-sm text-white/60">
                Din hyggelige destination for brætspil and VR oplevelser i hjertet af København.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Hurtige Links</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link to="/board-games" className="hover:text-primary transition-colors">
                    Brætspil
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
              <ul className="space-y-2 text-sm text-white/60">
                <li>📍 Nørre Voldgade 18, 1358 København K</li>
                <li>📞 +45 42 90 91 91</li>
                <li>📧 info@brætspilscafe.dk</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/40">
            © 2026  Game Café. Alle rettigheder forbeholdes.
          </div>
        </div>
      </footer>
    </div>
  );
}