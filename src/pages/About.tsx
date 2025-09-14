import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Leaf } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Vaishnavi Samala",
      title: "UI/UX Designer",
      image: "/vaishu.jpeg",
      description:
        "Vaishnavi crafted the intuitive and calming user experience, ensuring Serenity Springs feels welcoming and easy to navigate.",
    },
    {
      name: "Gangotri Choudekar",
      title: "Front-End Developer",
      image: "/Gangotri.jpg",
      description:
        "Gangotri brought the website to life with seamless functionality and responsive design, creating a fluid experience across devices.",
    },
    {
      name: "Chandana Kuthadi",
      title: "Back-End Developer",
      image: "/chandana.jpeg",
      description:
        "Chandana built the secure and scalable infrastructure, ensuring encrypted logins and smooth performance for all users.",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            About Us – Serenity Springs
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover our mission to nurture mind, body, and spirit through
            holistic healing
          </p>
        </div>

        <Card className="mb-8 border-border/50">
          <CardContent className="p-8">
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-xl font-heading font-semibold">
                Our Mission
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Serenity Springs, we believe true wellness is achieved when the
              mind, body, and spirit are nurtured together. Our platform is
              designed as a safe and supportive space where individuals can
              explore holistic healing practices guided by licensed
              professionals and expert facilitators.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We bring together a rich blend of yoga sessions, spiritual music
              therapy, creative arts & crafts workshops, and group therapy
              interactions—all carefully curated to inspire relaxation,
              emotional healing, and self-expression.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With live therapy sessions, a personalized membership model, and
              access to premium wellness resources, Serenity Springs ensures
              that every participant receives continuous guidance tailored to
              their unique journey.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-border/50">
          <CardContent className="p-8">
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-xl font-heading font-semibold">
                Our Promise
              </h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />A secure
                and private environment, with encrypted logins and safe
                payments.
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />A
                community of care, where you can connect, share, and grow.
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />A
                transformative experience, blending traditional healing with
                modern therapeutic practices.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              At Serenity Springs, our mission is simple: To empower you to find
              balance, build resilience, and embrace overall well-being.
            </p>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h3 className="text-xl font-heading font-semibold mb-6 text-center">
            Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="border-border/50">
                <CardContent className="p-6">
                  <div className="bg-gradient-soft p-4 flex items-center justify-center mb-4">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                      {/* <Heart className="h-12 w-12 text-primary" /> */}
                      <img
              src={member.image}
              className="flex items-center justify-center"
            />
                    </div>
                  </div>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium mb-2">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
