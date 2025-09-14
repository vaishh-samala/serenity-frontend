import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  MapPin,
  Video,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sessions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [sessionsData, setSessionsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = new URLSearchParams(location.search);
  const selectedTherapy = query.get("therapy");

  useEffect(() => {
    const fetchTherapyData = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }

        const response = await fetch("https://serenity-backend-beige.vercel.app/therapy", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const formattedData = data.reduce((acc, session) => {
          const therapyType = session.type
            .toLowerCase()
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          const isUpcoming = new Date(session.scheduledAt) > new Date();

          const sessionObj = {
            id: session.id,
            title: session.title,
            therapist: {
              name: session.therapist.fullName || session.therapist.email,
              experience: "Experienced Therapist",
            },
            date: session.scheduledAt,
            time: new Date(session.scheduledAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            type: session.type.includes("GROUP") ? "in-person" : "video",
            status: isUpcoming ? "pending" : "completed",
            paymentStatus: session.booked ? "paid" : "unpaid",
            duration: session.duration
              ? `${session.duration} minutes`
              : "60 minutes",
            price: session.cost ? `$${session.cost}` : "$100",
            features: session.description.split("\n"),
            notes: isUpcoming
              ? null
              : session.description
                  .split("\n")
                  .join(" "),
          };

          const existingTherapy = acc.find((t) => t.therapy === therapyType);
          if (existingTherapy) {
            if (isUpcoming) {
              existingTherapy.upcoming.push(sessionObj);
            } else {
              existingTherapy.past.push(sessionObj);
            }
          } else {
            acc.push({
              therapy: therapyType,
              upcoming: isUpcoming ? [sessionObj] : [],
              past: isUpcoming ? [] : [sessionObj],
            });
          }
          return acc;
        }, []);

        const filteredData = selectedTherapy
          ? formattedData.filter(
              (t) => t.therapy.toLowerCase() === selectedTherapy.toLowerCase(),
            )
          : formattedData;

        setSessionsData(filteredData);
      } catch (error) {
        console.error("Error fetching therapy data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTherapyData();
  }, [selectedTherapy]);

  const getStatusBadge = (status) => {
    const variants = {
      confirmed: "default",
      pending: "secondary",
      completed: "outline",
    };
    return <Badge variant={variants[status] || "secondary"}>{status}</Badge>;
  };

  const getPaymentBadge = (status) => {
    const variants = {
      paid: "default",
      pending: "secondary",
      unpaid: "destructive",
    };
    const icons = {
      paid: <CheckCircle className="h-3 w-3 mr-1" />,
      pending: <Clock className="h-3 w-3 mr-1" />,
      unpaid: <CreditCard className="h-3 w-3 mr-1" />,
    };
    return (
      <Badge
        variant={variants[status] || "secondary"}
        className="flex items-center"
      >
        {icons[status]}
        {status}
      </Badge>
    );
  };

  const handleViewDetails = (sessionId) => {
    navigate(`/session/${sessionId}`);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex justify-start">
          <Link to="/therapies">
            <Button variant="outline">← Back to Therapies</Button>
          </Link>
        </div>
        {isLoading ? (
          <Card className="border-border/50">
            <CardContent className="text-center py-12">
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
              <p className="text-muted-foreground mt-4">Loading sessions...</p>
            </CardContent>
          </Card>
        ) : sessionsData.length > 0 ? (
          sessionsData.map((therapyData, index) => (
            <div key={index} className="mb-12">
              <div className="text-center mb-12 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                  {therapyData.therapy} Sessions
                </h1>
                <p className="text-muted-foreground text-lg">
                  Manage your {therapyData.therapy.toLowerCase()} sessions and
                  track your progress
                </p>
              </div>
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="space-y-6"
              >
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                  <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
                  <TabsTrigger value="past">Past Sessions</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming" className="space-y-6">
                  {therapyData.upcoming.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {therapyData.upcoming.map((session) => (
                        <Card key={session.id} className="border-border/50">
                          <CardHeader>
                            <div className="flex flex-col gap-2">
                              <div className="flex justify-end gap-2">
                                {getStatusBadge(session.status)}
                                {getPaymentBadge(session.paymentStatus)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <CardTitle className="text-xl font-heading">
                                  {session.title}
                                </CardTitle>
                                <p className="text-sm text-muted-foreground mt-1">
                                  with {session.therapist.name} -{" "}
                                  {session.therapist.experience}
                                </p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {new Date(session.date).toLocaleDateString()}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {session.time}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {session.duration}
                              </div>
                              <div className="flex items-center">
                                <CreditCard className="h-4 w-4 mr-1" />
                                {session.price}
                              </div>
                            </div>
                            {session.features.length > 0 && (
                              <div className="space-y-2 mt-4">
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                  Includes:
                                </p>
                                <ul className="space-y-1">
                                  {session.features.map((feature, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm text-muted-foreground flex items-start"
                                    >
                                      <span className="text-primary mr-2">
                                        •
                                      </span>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <div className="flex gap-2 mt-4">
                              <Button
                                variant="secondary"
                                onClick={() => handleViewDetails(session.id)}
                              >
                                View Details
                              </Button>
                              {session.paymentStatus === "unpaid" && (
                                <Button
                                  variant="outline"
                                  onClick={() => handleViewDetails(session.id)}
                                >
                                  Pay Now
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="border-border/50">
                      <CardContent className="text-center py-12">
                        <p className="text-muted-foreground mb-4">
                          No upcoming sessions scheduled
                        </p>
                        <Button onClick={() => navigate("/therapies")}>
                          Book a Session
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
                <TabsContent value="past" className="space-y-6">
                  {therapyData.past.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {therapyData.past.map((session) => (
                        <Card key={session.id} className="border-border/50">
                          <CardHeader>
                            <div className="flex flex-col gap-2">
                              <div className="flex justify-end gap-2">
                                {getStatusBadge(session.status)}
                                {getPaymentBadge(session.paymentStatus)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <CardTitle className="text-xl font-heading">
                                  {session.title}
                                </CardTitle>
                                <p className="text-sm text-muted-foreground mt-1">
                                  with {session.therapist.name} -{" "}
                                  {session.therapist.experience}
                                </p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {new Date(session.date).toLocaleDateString()}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {session.time}
                              </div>
                              <div className="flex items-center">
                                {session.type === "video" ? (
                                  <>
                                    <Video className="h-4 w-4 mr-1" />
                                    Video Call
                                  </>
                                ) : (
                                  <>
                                    <MapPin className="h-4 w-4 mr-1" />
                                    In-Person
                                  </>
                                )}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {session.duration}
                              </div>
                              <div className="flex items-center">
                                <CreditCard className="h-4 w-4 mr-1" />
                                {session.price}
                              </div>
                            </div>
                            {session.features.length > 0 && (
                              <div className="space-y-2 mt-4">
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                  Includes:
                                </p>
                                <ul className="space-y-1">
                                  {session.features.map((feature, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm text-muted-foreground flex items-start"
                                    >
                                      <span className="text-primary mr-2">
                                        •
                                      </span>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {session.notes && (
                              <div className="bg-muted/50 rounded-lg p-3 mt-4">
                                <p className="text-sm text-muted-foreground">
                                  <span className="font-medium">Notes:</span>{" "}
                                  {session.notes}
                                </p>
                              </div>
                            )}
                            <Button
                              variant="outline"
                              onClick={() => handleViewDetails(session.id)}
                              className="mt-4"
                            >
                              View Session Details
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="border-border/50">
                      <CardContent className="text-center py-12">
                        <p className="text-muted-foreground mb-4">
                          No past sessions found
                        </p>
                        <Button onClick={() => navigate("/therapies")}>
                          Book a Session
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          ))
        ) : (
          <Card className="border-border/50">
            <CardContent className="text-center py-12">
              <h1 className="text-muted-foreground text-xl mb-4">
                No sessions found
              </h1>
            </CardContent>
          </Card>
        )}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-soft">
            <CardContent className="py-8">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Ready for Your Next Session?
              </h2>
              <p className="text-muted-foreground mb-6">
                Book your next therapy session and continue your journey to
                wellness.
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/therapies")}
                className="shadow-medium"
              >
                Book New Session
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sessions;
