import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Phone, Mail, Calendar, Star } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [phone, setPhone] = useState("+91 9876543210");
  const [email, setEmail] = useState("john@example.com");
  const [location, setLocation] = useState("Mumbai, Maharashtra");

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect to your Spring backend API
    toast.success("Profile updated successfully!");
  };

  const bookings = [
    {
      id: 1,
      service: "John's Plumbing Services",
      category: "Plumber",
      date: "2024-10-20",
      time: "10:00 AM",
      status: "Upcoming",
      price: "₹500"
    },
    {
      id: 2,
      service: "Sarah's Math Tutoring",
      category: "Tutor",
      date: "2024-10-15",
      time: "4:00 PM",
      status: "Completed",
      price: "₹800"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <Avatar className="h-24 w-24 border-4 border-primary/20">
              <AvatarImage src="" />
              <AvatarFallback className="text-2xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                JD
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-1">{name}</h1>
              <p className="text-muted-foreground">Member since October 2024</p>
            </div>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateProfile} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          <User className="h-4 w-4 inline mr-2" />
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          <Phone className="h-4 w-4 inline mr-2" />
                          Mobile Number
                        </Label>
                        <Input
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          <Mail className="h-4 w-4 inline mr-2" />
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">
                          <MapPin className="h-4 w-4 inline mr-2" />
                          Location
                        </Label>
                        <Input
                          id="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-3">
                      <Button type="button" variant="outline">
                        Cancel
                      </Button>
                      <Button type="submit">
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle>My Bookings</CardTitle>
                  <CardDescription>View and manage your service bookings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div 
                        key={booking.id} 
                        className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-foreground">{booking.service}</h4>
                            <Badge variant={booking.status === "Completed" ? "secondary" : "default"}>
                              {booking.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {booking.date}
                            </span>
                            <span>{booking.time}</span>
                            <span className="font-medium text-primary">{booking.price}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          {booking.status === "Completed" && (
                            <Button size="sm">
                              Rate Service
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>My Reviews</CardTitle>
                  <CardDescription>Reviews you've left for service providers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-muted-foreground">
                    <Star className="h-12 w-12 mx-auto mb-4 text-muted" />
                    <p>No reviews yet</p>
                    <p className="text-sm">Book a service and leave your first review!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
