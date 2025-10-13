// src/components/Navigation.tsx
import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  // Hero transparency only on home
  const onHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState<boolean>(() =>
    onHome ? window.scrollY > 50 : true
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // track scroll only when on home (for transparency)
  useEffect(() => {
    if (!onHome) {
      setIsScrolled(true); // force solid on non-home pages
      return;
    }
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onHome]);

  // helper: smooth scroll to an id
  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // when route has a hash (/#services), scroll after render
  useEffect(() => {
    if (hash?.startsWith("#")) {
      const id = hash.slice(1);
      // small timeout lets the page render first (esp. images/layout)
      const t = setTimeout(() => scrollToId(id), 0);
      return () => clearTimeout(t);
    }
  }, [hash, scrollToId]);

  // clicking a section link
  const handleSectionClick = useCallback(
    (href: string) => {
      const id = href.replace(/^#/, "");
      setIsMobileMenuOpen(false);

      if (onHome) {
        scrollToId(id);
        // update the URL hash (optional)
        history.replaceState(null, "", `/#${id}`);
      } else {
        // navigate home with hash, then scroll
        navigate(`/#${id}`);
        setTimeout(() => scrollToId(id), 0);
      }
    },
    [navigate, onHome, scrollToId]
  );

  const bgClasses = isScrolled
    ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
    : "bg-transparent";

  const linkColor = isScrolled ? "text-foreground" : "text-primary-foreground";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClasses}`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onHome) window.scrollTo({ top: 0, behavior: "smooth" });
                else navigate("/");
              }}
              className="flex items-center gap-2 group"
              aria-label="Go to home"
            >
              <img
                src={isScrolled ? "/logo2.png" : "/logo1.png"}
                alt="SBSIF Logo"
                className={`h-10 w-auto transition-all duration-300 ${
                  isScrolled ? "brightness-100" : "brightness-125 rounded-lg p-1"
                }`}
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleSectionClick(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${linkColor}`}
                >
                  {item.name}
                </button>
              ))}

              <Button
                onClick={() => window.open("/company-profile.pdf", "_blank")}
                size="sm"
                variant="outline"
                className="ml-4"
              >
                Company Profile
              </Button>

              <Button onClick={() => handleSectionClick("#contact")} size="sm">
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={`md:hidden p-2 ${linkColor}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-md" />
          <div className="fixed inset-x-0 top-20 p-6 space-y-4 bg-background border-b border-border shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSectionClick(item.href)}
                className="block w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => window.open("/company-profile.pdf", "_blank")}
              className="w-full"
              variant="outline"
              size="lg"
            >
              Company Profile
            </Button>
            <Button
              onClick={() => handleSectionClick("#contact")}
              className="w-full"
              size="lg"
            >
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
