import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Lock, Mail, Sparkles, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    role: "user",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.role === "admin") {
      toast.error("Admin registration is not allowed.");
      return;
    }
    setIsLoading(true)
    try {
      const response = await fetch("https://serenity-backend-beige.vercel.app/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName,
          role: formData.role,
        }),
      });
      if (!response.ok) {
        throw new Error("Signup failed");
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("fullName", data.fullName);
      localStorage.setItem("role", formData.role);
      toast.success("Signup successful! Welcome to Serenity Springs.");
      setTimeout(() => {
        navigate("/");
        navigate(0);
      }, 1500);
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    } finally {
      setIsLoading(false)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if(isLoading){
    return (
      <div className="min-h-screen bg-background py-12 flex items-center justify-center">
      <Card className="border-border/50">
        <CardContent className="text-center py-12">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
          <p className="text-muted-foreground mt-4">Please wait...</p>
        </CardContent>
      </Card>
    </div>
  )
  }

  return (
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="flex items-center justify-center space-x-2 mb-8"
        >
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="font-heading font-bold text-2xl text-foreground">
            Serenity Springs
          </span>
        </Link>
        <Card className="border-border/50 shadow-large">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-heading">
              Create Account
            </CardTitle>
            <CardDescription>
              Join us to start your wellness journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select
                  name="role"
                  value={formData.role}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, role: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="therapist">Therapist</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Sign Up
              </Button>
            </form>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
