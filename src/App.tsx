/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  Clock, 
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
  DollarSign,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TOURS, DESTINATIONS, type Tour } from './types';

// --- Components ---

const Navbar = ({ onNavigate, currentPage }: { onNavigate: (page: string) => void, currentPage: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Tours', id: 'tours' },
    { name: 'Destinations', id: 'destinations' },
    { name: 'About', id: 'about' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg">
            <Compass className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-display font-black tracking-tighter ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
            YALLA<span className="text-brand-teal">TRIP</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                currentPage === link.id 
                  ? 'text-brand-teal' 
                  : isScrolled ? 'text-brand-blue hover:text-brand-teal' : 'text-white hover:text-brand-teal'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${isScrolled ? 'border-brand-blue/20 text-brand-blue' : 'border-white/20 text-white'}`}>
            <Globe className="w-4 h-4" />
            <span className="text-xs font-bold">EN / USD</span>
          </div>
          <button className="btn-primary py-2 px-6 text-sm">Book Now</button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-brand-blue' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-brand-blue' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-bold ${currentPage === link.id ? 'text-brand-teal' : 'text-brand-blue'}`}
              >
                {link.name}
              </button>
            ))}
            <button className="btn-primary w-full">Book Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-blue text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <Compass className="text-brand-blue w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-black tracking-tighter">
            YALLA<span className="text-brand-teal">TRIP</span>
          </span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Your premium gateway to the wonders of Egypt. We specialize in luxury excursions, private tours, and unforgettable Red Sea experiences.
        </p>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition-colors cursor-pointer">
            <Instagram className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition-colors cursor-pointer">
            <Facebook className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition-colors cursor-pointer">
            <Twitter className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li className="hover:text-brand-teal cursor-pointer">About Us</li>
          <li className="hover:text-brand-teal cursor-pointer">All Tours</li>
          <li className="hover:text-brand-teal cursor-pointer">Destinations</li>
          <li className="hover:text-brand-teal cursor-pointer">Travel Blog</li>
          <li className="hover:text-brand-teal cursor-pointer">Contact Support</li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-brand-teal" />
            <span>Hurghada Marina, Red Sea, Egypt</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-brand-teal" />
            <span>+20 123 456 7890</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-brand-teal" />
            <span>hello@yallatrip.com</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6">Newsletter</h4>
        <p className="text-slate-400 text-sm mb-4">Subscribe for special offers and travel tips.</p>
        <div className="flex gap-2">
          <input 
            type="email" 
            placeholder="Your email" 
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-teal"
          />
          <button className="bg-brand-teal p-2 rounded-lg hover:bg-brand-teal/80 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-slate-500 text-xs">© 2026 YALLATRIP. All rights reserved.</p>
      <div className="flex gap-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
      </div>
    </div>
  </footer>
);

const TourCard = ({ tour, onClick }: { tour: Tour; onClick: () => void; key?: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass-card rounded-3xl overflow-hidden group cursor-pointer"
    onClick={onClick}
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={tour.image} 
        alt={tour.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-blue flex items-center gap-1">
        <MapPin className="w-3 h-3" />
        {tour.destination}
      </div>
      <div className="absolute top-4 right-4 bg-brand-teal text-white px-3 py-1 rounded-full text-xs font-bold">
        {tour.category}
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-brand-blue leading-tight group-hover:text-brand-teal transition-colors">
          {tour.title}
        </h3>
        <div className="flex items-center gap-1 text-brand-gold">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-bold text-brand-blue">{tour.rating}</span>
        </div>
      </div>
      <p className="text-slate-500 text-sm mb-6 line-clamp-2">
        {tour.description}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-slate-400">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-medium">{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <Users className="w-4 h-4" />
            <span className="text-xs font-medium">Group/Private</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 block">From</span>
          <span className="text-xl font-black text-brand-blue">${tour.price}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- Pages ---

const HomePage = ({ onNavigate, onSelectTour }: { onNavigate: (p: string) => void, onSelectTour: (t: Tour) => void }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=2000" 
            alt="Egypt Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/60 via-brand-blue/20 to-brand-blue/80"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-brand-teal/20 backdrop-blur-md border border-brand-teal/30 text-brand-teal px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
              Premium Egypt Experiences
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1]">
              Discover the Magic of <span className="text-brand-teal italic">Ancient Egypt</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Curated luxury tours, private excursions, and authentic experiences in Hurghada, Sharm El-Sheikh, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => onNavigate('tours')} className="btn-primary w-full sm:w-auto">Explore Tours</button>
              <button onClick={() => onNavigate('contact')} className="btn-secondary w-full sm:w-auto">Contact Us</button>
            </div>
          </motion.div>
        </div>

        {/* Search Bar Floating */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 hidden md:block">
          <div className="glass-card rounded-3xl p-4 flex items-center gap-4">
            <div className="flex-1 flex items-center gap-3 px-4 border-r border-slate-200">
              <MapPin className="text-brand-teal w-5 h-5" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400">Destination</span>
                <input type="text" placeholder="Where to?" className="bg-transparent text-sm font-bold focus:outline-none" />
              </div>
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 border-r border-slate-200">
              <Calendar className="text-brand-teal w-5 h-5" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400">Date</span>
                <input type="text" placeholder="When?" className="bg-transparent text-sm font-bold focus:outline-none" />
              </div>
            </div>
            <div className="flex-1 flex items-center gap-3 px-4">
              <Users className="text-brand-teal w-5 h-5" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400">Guests</span>
                <input type="text" placeholder="How many?" className="bg-transparent text-sm font-bold focus:outline-none" />
              </div>
            </div>
            <button className="bg-brand-blue text-white p-4 rounded-2xl hover:bg-brand-teal transition-colors">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4 block">Top Rated</span>
              <h2 className="text-4xl md:text-5xl text-brand-blue">Featured <span className="text-brand-teal">Experiences</span></h2>
              <p className="text-slate-500 mt-4">Handpicked tours that our guests love the most. Quality and satisfaction guaranteed.</p>
            </div>
            <button onClick={() => onNavigate('tours')} className="flex items-center gap-2 text-brand-blue font-bold hover:text-brand-teal transition-colors group">
              View All Tours <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOURS.slice(0, 3).map(tour => (
              <TourCard key={tour.id} tour={tour} onClick={() => onSelectTour(tour)} />
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4 block">Explore Egypt</span>
            <h2 className="text-4xl md:text-5xl text-brand-blue">Top <span className="text-brand-teal">Destinations</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DESTINATIONS.map((dest, idx) => (
              <motion.div 
                key={dest.name}
                whileHover={{ scale: 1.02 }}
                className="relative h-[450px] rounded-[40px] overflow-hidden group cursor-pointer"
              >
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl text-white mb-2">{dest.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">{dest.toursCount} Tours Available</span>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-brand-teal transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-48 w-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-48 w-full object-cover" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400" className="rounded-3xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card p-6 rounded-3xl text-brand-blue text-center w-48 animate-float">
              <span className="text-4xl font-black block">15k+</span>
              <span className="text-xs font-bold uppercase tracking-widest">Happy Travelers</span>
            </div>
          </div>

          <div>
            <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4 block">Our Excellence</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Why <span className="text-brand-teal italic">YallaTrip</span> is Your Best Choice</h2>
            
            <div className="space-y-8">
              {[
                { icon: ShieldCheck, title: 'Safe & Secure Booking', desc: 'Your safety is our priority. We use encrypted payments and verified guides.' },
                { icon: Zap, title: 'Instant Confirmation', desc: 'No waiting. Get your booking vouchers immediately via email and WhatsApp.' },
                { icon: Heart, title: 'Personalized Service', desc: 'From private transfers to custom itineraries, we cater to your specific needs.' },
                { icon: MessageSquare, title: '24/7 Multi-language Support', desc: 'Our team is always available to assist you in English, German, Italian, and more.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-7 h-7 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl text-brand-blue">What Our <span className="text-brand-teal">Guests Say</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Jenkins', country: 'UK', text: 'The private speedboat trip was the highlight of our holiday. The crew was professional and the snorkeling spots were breathtaking.', rating: 5 },
              { name: 'Marco Rossi', country: 'Italy', text: 'Excellent service from start to finish. The Luxor day trip was well-organized and our guide was incredibly knowledgeable.', rating: 5 },
              { name: 'Elena Schmidt', country: 'Germany', text: 'Booking was so easy. We loved the quad safari in Sharm. Highly recommend YallaTrip for anyone visiting Egypt!', rating: 5 }
            ].map((review, i) => (
              <div key={i} className="glass-card p-8 rounded-[32px] border-slate-100">
                <div className="flex gap-1 mb-6 text-brand-gold">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                  <div>
                    <h4 className="font-bold text-brand-blue">{review.name}</h4>
                    <span className="text-xs text-slate-400">{review.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ToursPage = ({ onSelectTour }: { onSelectTour: (t: Tour) => void }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Water Activities', 'Adventure', 'Historical', 'Private Tours'];

  const filteredTours = filter === 'All' ? TOURS : TOURS.filter(t => t.category === filter);

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl text-brand-blue mb-6">Explore <span className="text-brand-teal">All Tours</span></h1>
          <p className="text-slate-500 max-w-2xl">Discover the best activities, excursions, and private trips in Egypt's top destinations.</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                filter === cat ? 'bg-brand-blue text-white shadow-lg' : 'bg-white text-brand-blue hover:bg-brand-teal/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map(tour => (
            <TourCard key={tour.id} tour={tour} onClick={() => onSelectTour(tour)} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TourDetailsPage = ({ tour, onBack }: { tour: Tour, onBack: () => void }) => {
  const [bookingStep, setBookingStep] = useState(1);
  const [formData, setFormData] = useState({ date: '', guests: 1, package: 'Standard' });

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-brand-blue mb-8 transition-colors">
          <ArrowRight className="w-5 h-5 rotate-180" /> Back to Tours
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="relative h-[500px] rounded-[40px] overflow-hidden mb-10">
              <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-8 left-8 flex gap-4">
                <div className="bg-white/90 backdrop-blur-md p-2 rounded-2xl">
                  <img src={tour.image} className="w-16 h-16 rounded-xl object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="bg-white/90 backdrop-blur-md p-2 rounded-2xl">
                  <img src={tour.image} className="w-16 h-16 rounded-xl object-cover opacity-50" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-brand-teal font-bold text-sm mb-2">
                  <MapPin className="w-4 h-4" /> {tour.destination}
                </div>
                <h1 className="text-4xl md:text-5xl text-brand-blue mb-4">{tour.title}</h1>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1 text-brand-gold">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold text-brand-blue">{tour.rating}</span>
                    <span className="text-slate-400">({tour.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                <h3 className="text-2xl text-brand-blue mb-4">Overview</h3>
                <p className="text-slate-600 leading-relaxed">{tour.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-8 rounded-3xl">
                  <h4 className="text-xl font-bold text-brand-blue mb-6 flex items-center gap-2">
                    <CheckCircle2 className="text-brand-teal w-6 h-6" /> What's Included
                  </h4>
                  <ul className="space-y-4">
                    {tour.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-teal"></div>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl">
                  <h4 className="text-xl font-bold text-brand-blue mb-6 flex items-center gap-2">
                    <X className="text-red-400 w-6 h-6" /> Not Included
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                      Personal expenses
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                      Gratuities (Tipping)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card p-8 rounded-[40px] sticky top-32">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="text-xs text-slate-400 block uppercase font-bold tracking-widest">Price from</span>
                  <span className="text-3xl font-black text-brand-blue">${tour.price}</span>
                </div>
                <div className="bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-bold">
                  Best Price Guarantee
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Select Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-teal w-5 h-5" />
                    <input 
                      type="date" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-teal font-bold text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Number of Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-teal w-5 h-5" />
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-teal font-bold text-sm appearance-none">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              <button className="btn-primary w-full mb-4">Book Now</button>
              <button className="w-full flex items-center justify-center gap-2 text-brand-teal font-bold py-4 hover:bg-brand-teal/5 rounded-2xl transition-all">
                <Phone className="w-5 h-5" /> WhatsApp Booking
              </button>

              <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <ShieldCheck className="text-brand-teal w-5 h-5" />
                  Free cancellation up to 24h before
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <Zap className="text-brand-teal w-5 h-5" />
                  Instant confirmation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedTour(null);
    window.scrollTo(0, 0);
  };

  const handleSelectTour = (tour: Tour) => {
    setSelectedTour(tour);
    setCurrentPage('tour-details');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + (selectedTour?.id || '')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentPage === 'home' && (
              <HomePage onNavigate={handleNavigate} onSelectTour={handleSelectTour} />
            )}
            {currentPage === 'tours' && (
              <ToursPage onSelectTour={handleSelectTour} />
            )}
            {currentPage === 'tour-details' && selectedTour && (
              <TourDetailsPage tour={selectedTour} onBack={() => setCurrentPage('tours')} />
            )}
            {(currentPage === 'destinations' || currentPage === 'about' || currentPage === 'blog' || currentPage === 'contact') && (
              <div className="pt-40 pb-20 text-center px-6">
                <h1 className="text-5xl text-brand-blue mb-6 capitalize">{currentPage} Page</h1>
                <p className="text-slate-500 max-w-xl mx-auto mb-12">
                  This section is part of the YALLATRIP platform architecture. 
                  In a full implementation, this would contain the {currentPage} specific content.
                </p>
                <button onClick={() => handleNavigate('home')} className="btn-primary">Back to Home</button>
                
                {/* Design Guide / Documentation Overlay for User */}
                <div className="mt-20 max-w-4xl mx-auto text-left glass-card p-10 rounded-[40px]">
                  <h2 className="text-2xl mb-6">YALLATRIP System Documentation</h2>
                  <div className="space-y-8 text-sm">
                    <div>
                      <h3 className="font-bold text-brand-teal uppercase mb-2">Color System</h3>
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-12 h-12 rounded-lg bg-brand-blue"></div>
                          <span className="text-[10px]">#003366</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-12 h-12 rounded-lg bg-brand-teal"></div>
                          <span className="text-[10px]">#008080</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-12 h-12 rounded-lg bg-brand-beige"></div>
                          <span className="text-[10px]">#F5F5DC</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <div className="w-12 h-12 rounded-lg bg-brand-gold"></div>
                          <span className="text-[10px]">#D4AF37</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-brand-teal uppercase mb-2">SEO Strategy</h3>
                      <ul className="list-disc pl-4 space-y-1 text-slate-600">
                        <li><strong>Keywords:</strong> Hurghada tours, Sharm El Sheikh excursions, Egypt travel activities, Red Sea trips.</li>
                        <li><strong>Structure:</strong> /tours/[tour-name], /destinations/[city-name], /blog/[article-title]</li>
                        <li><strong>Meta:</strong> "Book Premium {`{Tour Name}`} in {`{Location}`} | YALLATRIP"</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-brand-teal uppercase mb-2">Elementor Widget Mapping</h3>
                      <ul className="list-disc pl-4 space-y-1 text-slate-600">
                        <li><strong>Hero:</strong> Section (Full Width) &gt; Video Background &gt; Heading &gt; Button</li>
                        <li><strong>Tour Grid:</strong> Archive Posts Widget (Custom Skin) or Loop Builder</li>
                        <li><strong>Filters:</strong> Search & Filter Pro or JetSmartFilters</li>
                        <li><strong>Booking:</strong> JetBooking or WooCommerce Booking integration</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-brand-teal uppercase mb-2">AI Image Prompts</h3>
                      <p className="text-slate-600 italic">"Cinematic 8k shot of a luxury speedboat in the turquoise waters of the Red Sea, Hurghada, Egypt, bright sunlight, high-end travel photography style, wide angle."</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/201234567890" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">1</span>
      </a>
    </div>
  );
}
