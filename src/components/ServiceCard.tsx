import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  experience: string;
  price: string;
  location: string;
  availability: string;
  image: string;
}

const ServiceCard = ({
  id,
  name,
  category,
  rating,
  reviews,
  experience,
  price,
  location,
  availability,
  image,
}: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-large)] group">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Badge className="absolute top-3 right-3 bg-card/90 backdrop-blur">
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-5">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-card-foreground mb-1">{name}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="font-medium text-foreground">{rating}</span>
              <span>({reviews})</span>
            </div>
            <span>•</span>
            <span>{experience} exp</span>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{availability}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-sm text-muted-foreground">Starting at</span>
            <p className="text-xl font-bold text-primary">{price}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Link to={`/service/${id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
