import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Shield, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
  ];

  const categories = [
    { name: "Plumber", icon: "🔧" },
    { name: "Electrician", icon: "⚡" },
    { name: "Tutor", icon: "📚" },
    { name: "Cleaner", icon: "🧹" },
    { name: "Carpenter", icon: "🔨" },
    { name: "Painter", icon: "🎨" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Find Trusted{" "}
                  <span className="bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
                    Service Providers
                  </span>{" "}
                  Near You
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Connect with verified professionals for all your service needs. 
                  From plumbing to tutoring, find the perfect match in minutes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="What service do you need?"
                    className="pl-10 h-12"
                  />
                </div>
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Your location"
                    className="pl-10 h-12"
                  />
                </div>
                <Button variant="hero" size="lg" className="sm:w-auto">
                  Search
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Verified Pros</p>
                    <p className="text-sm text-muted-foreground">Background checked</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Quick Booking</p>
                    <p className="text-sm text-muted-foreground">Same day service</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Top Rated</p>
                    <p className="text-sm text-muted-foreground">Customer reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Popular Categories</h2>
            <p className="text-muted-foreground">Browse services by category</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/services?category=${category.name.toLowerCase()}`}
                className="flex flex-col items-center p-6 rounded-xl bg-background border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-medium)] group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <span className="text-sm font-medium text-foreground">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Professionals</h2>
              <p className="text-muted-foreground">Top-rated service providers in your area</p>
            </div>
            <Link to="/services">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[image:var(--gradient-primary)] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Join thousands of satisfied customers who found their perfect service provider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/register">
                <Button size="lg" variant="secondary">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/become-provider">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Become a Provider
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)]">
                  <span className="text-lg font-bold text-primary-foreground">S</span>
                </div>
                <span className="text-xl font-bold text-foreground">ServiceHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted platform for finding quality service providers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">For Customers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/services" className="hover:text-foreground transition-colors">Browse Services</Link></li>
                <li><Link to="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link></li>
                <li><Link to="/safety" className="hover:text-foreground transition-colors">Safety</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">For Providers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/become-provider" className="hover:text-foreground transition-colors">Become a Provider</Link></li>
                <li><Link to="/provider-benefits" className="hover:text-foreground transition-colors">Benefits</Link></li>
                <li><Link to="/resources" className="hover:text-foreground transition-colors">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 ServiceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
