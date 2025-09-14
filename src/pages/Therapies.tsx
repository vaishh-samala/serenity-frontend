import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Users,
  Activity,
  Star,
  Music,
  Paintbrush,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

const Therapies = () => {
  const therapies = [
    {
      icon: Brain,
      title: "Individual Therapy",
      description:
        "One-on-one sessions tailored to your personal needs and goals.",
      duration: "50 minutes",
      price: "$120",
      features: [
        "Personalized treatment plan",
        "Weekly or bi-weekly sessions",
        "Homework exercises",
      ],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Users,
      title: "Group Therapy",
      description:
        "Connect and heal with others who share similar experiences.",
      duration: "90 minutes",
      price: "$60",
      features: ["Peer support", "Shared experiences", "Group activities"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Activity,
      title: "Yoga Therapy",
      description:
        "Sessions using postures, breathing, and relaxation to enhance well-being.",
      duration: "60 minutes",
      price: "$80",
      features: [
        "Customized yoga poses",
        "Breathing exercises",
        "Relaxation techniques",
      ],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Star,
      title: "Spiritual Therapy",
      description:
        "Guided sessions to explore inner self, purpose, and emotional growth.",
      duration: "60 minutes",
      price: "$100",
      features: [
        "Meditation practices",
        "Inner exploration",
        "Emotional guidance",
      ],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Music,
      title: "Music Therapy",
      description:
        "Healing through music and rhythm to reduce stress and improve mood.",
      duration: "50 minutes",
      price: "$90",
      features: [
        "Instrumental exercises",
        "Listening therapy",
        "Mood enhancement",
      ],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Paintbrush,
      title: "Arts & Crafts Therapy",
      description:
        "Creative sessions using art and craft to relieve stress and express feelings.",
      duration: "60 minutes",
      price: "$85",
      features: [
        "Drawing & painting",
        "Craft activities",
        "Emotional expression",
      ],
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex justify-start">
          <Link to="/">
            <Button variant="outline">← Back to Home</Button>
          </Link>
        </div>
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Explore Our Therapies
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the therapy approach that resonates with you. We offer
            various modalities to support your unique healing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapies.map((therapy, index) => (
            <Card
              key={index}
              className="group hover:shadow-large transition-all duration-300 border-border/50"
            >
              <CardHeader>
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${therapy.color} mb-3`}
                >
                  <therapy.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-heading">
                  {therapy.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {therapy.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{therapy.duration}</span>
                  </div>
                  <span className="font-semibold text-primary text-lg">
                    {therapy.price}
                  </span>
                </div> */}

                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Includes:
                  </p>
                  <ul className="space-y-1">
                    {therapy.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={`/sessions?therapy=${therapy.title}`}>
                  <Button className="w-full group-hover:shadow-medium transition-all mt-5">
                    View Sessions
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Therapies;
