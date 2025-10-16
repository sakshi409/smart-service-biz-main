import { useState } from "react";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const mockServices = [
    {
      id: "1",
      name: "John's Plumbing Services",
      category: "Plumber",
      rating: 4.8,
      reviews: 124,
      experience: "8 years",
      price: "₹500/hr",
      location: "Mumbai, Maharashtra",
      availability: "Available Today",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop"
    },
    {
      id: "2",
      name: "Sarah's Math Tutoring",
      category: "Tutor",
      rating: 4.9,
      reviews: 89,
      experience: "5 years",
      price: "₹800/hr",
      location: "Delhi, NCR",
      availability: "Weekends Only",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop"
    },
    {
      id: "3",
      name: "Mike's Electrical Works",
      category: "Electrician",
      rating: 4.7,
      reviews: 156,
      experience: "10 years",
      price: "₹600/hr",
      location: "Bangalore, Karnataka",
      availability: "Available Now",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop"
    },
    {
      id: "4",
      name: "Clean & Shine Services",
      category: "Cleaner",
      rating: 4.6,
      reviews: 98,
      experience: "6 years",
      price: "₹400/hr",
      location: "Pune, Maharashtra",
      availability: "Available Today",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
    },
    {
      id: "5",
      name: "Expert Carpentry",
      category: "Carpenter",
      rating: 4.8,
      reviews: 145,
      experience: "12 years",
      price: "₹700/hr",
      location: "Mumbai, Maharashtra",
      availability: "Available Tomorrow",
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop"
    },
    {
      id: "6",
      name: "Pro Painters",
      category: "Painter",
      rating: 4.7,
      reviews: 112,
      experience: "9 years",
      price: "₹550/hr",
      location: "Chennai, Tamil Nadu",
      availability: "Available Now",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-8">Browse Services</h1>
          
          <div className="bg-card rounded-xl shadow-[var(--shadow-medium)] p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button className="w-full">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="plumber">Plumber</SelectItem>
                  <SelectItem value="electrician">Electrician</SelectItem>
                  <SelectItem value="tutor">Tutor</SelectItem>
                  <SelectItem value="cleaner">Cleaner</SelectItem>
                  <SelectItem value="carpenter">Carpenter</SelectItem>
                  <SelectItem value="painter">Painter</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{mockServices.length}</span> service providers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
