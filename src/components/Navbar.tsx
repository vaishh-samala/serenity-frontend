import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import MoodTracker from "./MoodTracker";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showMoodTracker, setShowMoodTracker] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/therapies", label: "Explore Therapies" },
    { href: "/blogs", label: "Blogs" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  useEffect(() => {
    const storedFullName = localStorage.getItem("fullName");
    const storedToken = localStorage.getItem("token");

    if (storedFullName && storedToken) {
      setIsLoggedIn(true);
      setFullName(storedFullName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("fullName");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setFullName("");
    navigate("/");
    navigate(0);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-heading text-xl font-bold">
              Serenity Springs
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {isLoggedIn ? (
              <Button onClick={handleLogout} variant="outline" size="sm">
                Logout ({fullName})
              </Button>
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link to="/login">Login / Signup</Link>
              </Button>
            )}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-body text-sm transition-colors ${
                      isActive(link.href)
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                {isLoggedIn ? (
                  <Button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    variant="outline"
                    size="sm"
                  >
                    Logout ({fullName})
                  </Button>
                ) : (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/login">Login / Signup</Link>
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* <Button
        onClick={() => setShowMoodTracker(true)}
        className="fixed bottom-6 right-6 rounded-full shadow-lg hover:shadow-xl transition-shadow z-40"
        size="lg"
      >
        <Sparkles className="mr-2 h-4 w-4" />
        Track Mood
      </Button> */}
    </>
  );
};

export default Navbar;
