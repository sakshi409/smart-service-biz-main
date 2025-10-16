import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { 
  Star, 
  MapPin, 
  Clock, 
  Shield, 
  Award, 
  CheckCircle2,
  ArrowLeft,
  Calendar as CalendarIcon
} from "lucide-react";
import { toast } from "sonner";

const ServiceDetail = () => {
  const { id } = useParams();
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mock data - connect to your Spring backend
  const service = {
    id: id,
    name: "John's Plumbing Services",
    category: "Plumber",
    rating: 4.8,
    reviews: 124,
    experience: "8 years",
    price: "₹500/hr",
    location: "Mumbai, Maharashtra",
    availability: "Available Today",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop",
    description: "Professional plumbing services with 8 years of experience. Specialized in residential and commercial plumbing repairs, installations, and maintenance.",
    services: [
      "Pipe Installation & Repair",
      "Drain Cleaning",
      "Water Heater Installation",
      "Bathroom Fixtures",
      "Kitchen Plumbing",
      "Emergency Services"
    ],
    verified: true,
    backgroundChecked: true,
  };

  const reviews = [
    {
      id: 1,
      name: "Raj Kumar",
      rating: 5,
      date: "2 days ago",
      comment: "Excellent service! Fixed my leaking pipe quickly and professionally. Highly recommend!",
      avatar: "RK"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 4,
      date: "1 week ago",
      comment: "Good work and reasonable pricing. Arrived on time and completed the job efficiently.",
      avatar: "PS"
    },
    {
      id: 3,
      name: "Amit Patel",
      rating: 5,
      date: "2 weeks ago",
      comment: "Very knowledgeable and courteous. Will definitely use his services again!",
      avatar: "AP"
    }
  ];

  const handleBooking = () => {
    // Connect to your Spring backend API
    toast.success("Booking request sent! The service provider will confirm shortly.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-0">
                <div className="relative h-96 rounded-t-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-card/90 backdrop-blur">
                    {service.category}
                  </Badge>
                </div>
                
                <div className="p-6 space-y-6">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-foreground mb-2">{service.name}</h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-secondary text-secondary" />
                            <span className="font-medium text-foreground">{service.rating}</span>
                            <span>({service.reviews} reviews)</span>
                          </div>
                          <span>•</span>
                          <span>{service.experience} experience</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Starting at</p>
                        <p className="text-3xl font-bold text-primary">{service.price}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {service.verified && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          Verified Provider
                        </Badge>
                      )}
                      {service.backgroundChecked && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Shield className="h-3 w-3" />
                          Background Checked
                        </Badge>
                      )}
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        Top Rated
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{service.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{service.availability}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">About</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Services Offered</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.services.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews ({reviews.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-border last:border-0 pb-6 last:pb-0">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarFallback>{review.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-semibold text-foreground">{review.name}</p>
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "fill-secondary text-secondary"
                                        : "text-muted"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  Book This Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Select Date & Time</h4>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border border-border"
                    disabled={(date) => date < new Date()}
                  />
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Time Slots</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"].map((time) => (
                      <Button key={time} variant="outline" size="sm">
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service Fee</span>
                    <span className="font-medium text-foreground">{service.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Platform Fee</span>
                    <span className="font-medium text-foreground">₹50</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-bold text-lg text-primary">₹550</span>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleBooking}
                >
                  Book Now
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By booking, you agree to our terms and conditions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
