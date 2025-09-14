import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Lightbulb, Send, Heart } from "lucide-react";
import { toast } from "sonner";

const Suggest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    therapyType: "individual",
    title: "",
    description: "",
    benefits: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your suggestion! We'll review it carefully.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      therapyType: "individual",
      title: "",
      description: "",
      benefits: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Suggest a Therapy
          </h1>
          <p className="text-muted-foreground text-lg">
            Have an idea for a new therapy approach? We'd love to hear from you!
          </p>
        </div>

        {/* Suggestion Form */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-xl font-heading">
              Share Your Idea
            </CardTitle>
            <CardDescription>
              Your suggestions help us expand our services to better serve our
              community.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Therapy Type */}
              <div className="space-y-3">
                <Label>Therapy Category</Label>
                <RadioGroup
                  value={formData.therapyType}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, therapyType: value }))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="individual" id="individual" />
                    <Label
                      htmlFor="individual"
                      className="font-normal cursor-pointer"
                    >
                      Individual Therapy
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="group" id="group" />
                    <Label
                      htmlFor="group"
                      className="font-normal cursor-pointer"
                    >
                      Group Therapy
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="alternative" id="alternative" />
                    <Label
                      htmlFor="alternative"
                      className="font-normal cursor-pointer"
                    >
                      Alternative/Holistic Therapy
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="online" id="online" />
                    <Label
                      htmlFor="online"
                      className="font-normal cursor-pointer"
                    >
                      Online/Digital Therapy
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Suggestion Details */}
              <div className="space-y-2">
                <Label htmlFor="title">Therapy Name/Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Art Therapy for Teens"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your therapy idea in detail..."
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="benefits">Expected Benefits</Label>
                <Textarea
                  id="benefits"
                  name="benefits"
                  value={formData.benefits}
                  onChange={handleChange}
                  placeholder="What benefits would this therapy provide? Who would it help?"
                  rows={3}
                  required
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Submit Suggestion
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Thank You Message */}
        <Card className="mt-8 border-primary/20 bg-gradient-soft">
          <CardContent className="py-8 text-center">
            <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-heading font-semibold mb-2">
              Your Ideas Matter
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Every suggestion helps us create a more inclusive and
              comprehensive therapy program. We review all submissions and may
              reach out to discuss your idea further.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Suggest;
