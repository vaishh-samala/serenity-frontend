import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Heart,
  Users,
  MessageCircle,
  Flower2,
  Star,
  Flower,
  Feather,
  Music,
  Palette,
} from "lucide-react";

const Index = () => {
  const featuredTherapies = [
    {
      icon: Flower,
      title: "Yoga Therapy",
      description:
        "One-on-one sessions using postures, breathing, and relaxation to improve physical and mental wellness.",
      color: "text-primary",
    },
    {
      icon: Feather,
      title: "Spiritual Therapy",
      description:
        "Guided sessions to explore inner self, purpose, and emotional-spiritual growth.",
      color: "text-primary",
    },
    {
      icon: Music,
      title: "Music Therapy",
      description:
        "Healing through music and rhythm to reduce stress and enhance emotional expression.",
      color: "text-primary",
    },
    {
      icon: Palette,
      title: "Arts & Crafts Therapy",
      description:
        "Creative activities to express feelings, relieve stress, and boost mental well-being.",
      color: "text-primary",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Serenity Springs changed my life. The therapists are compassionate and professional.",
    },
    {
      name: "David L.",
      rating: 5,
      text: "Finally found a place where I feel heard and understood. Highly recommend!",
    },
    {
      name: "Emily R.",
      rating: 5,
      text: "The online sessions are so convenient. I've made incredible progress.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-soft">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center justify-center space-y-6 animate-fade-in">
            <img
              src="/logo.png"
              className="h-24 w-28 flex items-center justify-center"
            />
            {/* <Flower2 className="h-16 w-16 text-primary mx-auto mb-4" /> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
              Find Peace at{" "}
              <span className="text-primary">Serenity Springs</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Begin your journey to mental wellness with compassionate,
              professional therapy tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/therapies">
                <Button size="lg" className="min-w-[180px] shadow-medium">
                  Explore Therapies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Therapies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Therapy Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of therapy services designed to
              support your mental health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTherapies.map((therapy, index) => (
              <Card
                key={index}
                className="group hover:shadow-large transition-all duration-300 cursor-pointer border-border/50"
              >
                <CardHeader>
                  <therapy.icon className={`h-10 w-10 ${therapy.color} mb-3`} />
                  <CardTitle className="text-lg font-heading">
                    {therapy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{therapy.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/therapies">
              <Button className="group">
                View All Therapies
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Why Choose Serenity Springs?
            </h2>
            <p className="text-muted-foreground">
              We're committed to providing a safe, supportive environment where
              you can explore your thoughts and feelings without judgment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold">
                Compassionate Care
              </h3>
              <p className="text-muted-foreground">
                Our therapists provide empathetic, non-judgmental support
                tailored to your needs.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold">
                Expert Therapists
              </h3>
              <p className="text-muted-foreground">
                Licensed professionals with years of experience in various
                therapeutic approaches.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold">
                Flexible Options
              </h3>
              <p className="text-muted-foreground">
                In-person and online sessions available to fit your schedule and
                preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from people who have found healing and growth at
              Serenity Springs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold">
                      {testimonial.name}
                    </span>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Take the first step towards better mental health. Our compassionate therapists are here
            to support you.
          </p>
          <Link to="/sessions">
            <Button size="lg" variant="secondary" className="shadow-large">
              Book Your First Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Index;
