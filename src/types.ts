import { 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Globe, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  Menu,
  X,
  ChevronRight,
  Filter,
  ShieldCheck,
  Zap,
  Heart,
  MessageSquare,
  DollarSign
} from 'lucide-react';

export type Tour = {
  id: string;
  title: string;
  destination: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description: string;
  highlights: string[];
};

export const TOURS: Tour[] = [
  {
    id: '1',
    title: 'Private Speedboat to Orange Bay',
    destination: 'Hurghada',
    price: 120,
    duration: '6 Hours',
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    category: 'Water Activities',
    description: 'Experience the ultimate luxury with a private speedboat trip to the crystal clear waters of Orange Bay.',
    highlights: ['Private Boat', 'Snorkeling Gear Included', 'Lunch on Island', 'Hotel Pickup']
  },
  {
    id: '2',
    title: 'Sunrise Quad Bike Safari',
    destination: 'Sharm El-Sheikh',
    price: 45,
    duration: '3 Hours',
    rating: 4.8,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=800',
    category: 'Adventure',
    description: 'Race across the Sinai desert as the sun rises over the mountains. A thrilling experience for adrenaline seekers.',
    highlights: ['Quad Bike', 'Bedouin Tea', 'Camel Ride', 'Professional Guide']
  },
  {
    id: '3',
    title: 'Luxor Day Trip from Hurghada',
    destination: 'Hurghada',
    price: 85,
    duration: '14 Hours',
    rating: 4.7,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800',
    category: 'Historical',
    description: 'Visit the Valley of the Kings, Karnak Temple, and Hatshepsut Temple in one comprehensive day trip.',
    highlights: ['Valley of the Kings', 'Karnak Temple', 'Lunch Included', 'Egyptologist Guide']
  },
  {
    id: '4',
    title: 'Ras Mohammed Snorkeling Boat Trip',
    destination: 'Sharm El-Sheikh',
    price: 55,
    duration: '8 Hours',
    rating: 4.9,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    category: 'Water Activities',
    description: 'Explore the world-famous coral reefs of Ras Mohammed National Park on a full-day boat excursion.',
    highlights: ['National Park Entry', '2 Snorkeling Stops', 'Buffet Lunch', 'Soft Drinks']
  }
];

export const DESTINATIONS = [
  {
    name: 'Hurghada',
    image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=800',
    toursCount: 45
  },
  {
    name: 'Sharm El-Sheikh',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    toursCount: 38
  },
  {
    name: 'Cairo',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800',
    toursCount: 22
  }
];
