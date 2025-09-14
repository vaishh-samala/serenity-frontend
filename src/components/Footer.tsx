import { Link } from "react-router-dom";
import { Sparkles, Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-heading font-semibold text-xl text-foreground">
                Serenity Springs
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your journey to mental wellness starts here. Professional therapy
              in a calm, supportive environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/therapies"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Therapies
                </Link>
              </li>
              <li>
                <Link
                  to="/sessions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Book a Session
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@serenitysprings.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Members
            </h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Vaishnavi Samala</li>
              <li>Gangotri Choudekar</li>
              <li>Chandana Kuthadi</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Serenity Springs. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart className="h-3 w-3 mx-1 text-primary" /> for your
              wellness
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
