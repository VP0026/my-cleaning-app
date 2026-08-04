"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/component/Header";
import {
  Sparkles,
  Waves,
  Bug,
  Leaf,
  Check,
  Phone,
  Calendar,
  Menu,
  X,
  MapPin,
  Clock,
  ThumbsUp,
  ShieldCheck,
  LayoutList,
  ChefHat,
  Bath,
  Info,
  Star,
  ChevronRight,
  ChevronLeft,
  Quote
} from "lucide-react";

// Custom SVG brand icons (removed in Lucide v1.x)
const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Types & Data
interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const SERVICES: Service[] = [
  { id: "bond", name: "Bond Cleaning", icon: <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "carpet", name: "Carpet Steam Cleaning", icon: <Waves className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "pest", name: "Pest Control", icon: <Bug className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "spring", name: "Spring Cleaning", icon: <Leaf className="h-4 w-4 sm:h-5 sm:w-5" /> },
];

const GOLD_COAST_SUBURBS = [
  "Carrara", "Coombabah", "Coolangatta", "Elanora", "Pimpama", "Hope Island",
  "Helensvale", "Coomera", "Upper Coomera", "Southport", "Surfers Paradise",
  "Paradise Point", "Broadbeach", "Palm Beach", "Main Beach", "Pacific Pines",
  "Runaway Bay", "Parkwood", "Broadbeach Waters", "Bundall", "Arundel",
  "Burleigh Heads", "Burleigh Waters", "Currumbin", "Currumbin Waters",
  "Tugun", "Advancetown", "Bonogin", "Mudgeeraba", "Reedy Creek", "Robina",
  "Taigum", "Miami", "Mermaid Waters", "Nerang", "Ormeau", "Oxenford",
  "Springbrook", "Tweed Heads", "Varsity Lakes"
];

const BRISBANE_SUBURBS = [
  "Brisbane City", "Spring Hill", "Fortitude Valley", "Chermside", "Kedron",
  "Stafford", "Aspley", "Acacia Ridge", "Alberton", "Ashgrove", "Brendale",
  "Carseldine", "Coorparoo", "Clayfield", "Greenslopes", "Geebung",
  "Heathwood", "North Lakes", "Nundah", "Moorooka", "Mount Gravatt",
  "Richmond", "Springfield Lakes", "South Brisbane", "Woolloongabba",
  "Annerley", "East Brisbane", "Kangaroo Point", "Norman Park",
  "Morningside", "Toowong", "Indooroopilly", "St Lucia", "Kenmore",
  "Logan", "Ipswich", "Springfield", "Carindale", "Sunnybank", "Redcliffe",
  "Capalaba", "Wynnum", "Forest Lake"
];

const TESTIMONIALS = [
  {
    name: "Sarah M",
    type: "Bond Cleaning",
    text: "With kids + packing, I had zero time. The team handled the entire bond clean in 1 day. Super friendly and the results were amazing. Will use again. Highly Recommended !!",
    image: "/images/testimonials/client-1.jpg"
  },
  {
    name: "Melanie P",
    type: "Bond Cleaning",
    text: "Great experience from start to finish. The cleaners arrived on time, worked efficiently and left the place looking better than I expected. They were polite, professional and very easy to deal with. It really took a weight off my shoulders during the move. Highly Recommended!!",
    image: "/images/testimonials/client-2.jpg"
  },
  {
    name: "Emily Watson",
    type: "Carpet Steam Cleaning",
    text: "Outstanding carpet steam cleaning service in Brisbane! They successfully extracted years of stubborn coffee stains and pet dander from our living room rugs. Smells fresh and dried surprisingly fast.",
    image: "/images/testimonials/client-3.jpg"
  },
  {
    name: "Marcus Vance",
    type: "Gym & Facility Disinfection",
    text: "Keeping our fitness gym disinfected is crucial for member health. Bond Clean Specialist sanitises all equipment, locker room showers, and rubber mats to hospital-grade standards. Exceptional work!",
    image: "/images/testimonials/client-4.jpg"
  }
];

const CHECKLISTS = {
  general: {
    title: "General Inclusions",
    icon: <LayoutList className="h-6 w-6 text-primary" />,
    items: [
      "Remove cobwebs, insect nests, and small pests where accessible.",
      "Clean air conditioner filters, vents, and exhaust fans.",
      "Clean light fittings (where accessible & reasonably practical).",
      "Spot cleaning of walls (We don't guarantee removing permanent marks).",
      "Clean all skirting boards and architraves.",
      "Clean internal and external of all cupboards and drawers.",
      "Clean all windows, frames, tracks, and window sills (Inside & Outside).",
      "Vacuum all floors and mop hard floors.",
      "Clean all door surfaces, handles, frames, and tracks.",
      "Blind dusting (only)."
    ]
  },
  kitchen: {
    title: "Kitchen Inclusions",
    icon: <ChefHat className="h-6 w-6 text-primary" />,
    items: [
      "Clean oven interior, racks, trays, and glass door thoroughly.",
      "Degrease stovetop, elements, and control knobs.",
      "Clean rangehood canopy, filters, and light covers.",
      "Sanitise countertops, splashbacks, and sink/taps.",
      "Wipe down dishwasher exterior and clean the filter.",
      "Clean inside and out of pantry, cupboards, and drawers.",
      "Clean refrigerator alcove space (exterior/interior if empty)."
    ]
  },
  laundry: {
    title: "Laundry Inclusions",
    icon: <Waves className="h-6 w-6 text-primary" />,
    items: [
      "Scrub laundry tub, cabinet, and tapware.",
      "Wipe down walls, splashback tiles, and power points.",
      "Wipe down washing machine and dryer surfaces.",
      "Clean cupboards inside and out.",
      "Vacuum and mop laundry floor area."
    ]
  },
  bathrooms: {
    title: "Bathrooms Inclusions",
    icon: <Bath className="h-6 w-6 text-primary" />,
    items: [
      "Scrub and sanitise shower screens, tiles, and grout.",
      "Clean and sanitise toilet bowl, seat, and cistern.",
      "Polish vanity, sink, mirror, and cabinet handles.",
      "Sanitise bathtub and wipe surrounding tiles.",
      "Clean taps, chrome fittings, and floor waste drains.",
      "Dust and wipe exhaust fans."
    ]
  }
};

export default function LandingPage() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Quote form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    selectedServices: [] as string[],
    agree: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Active checklist tab state
  const [activeTab, setActiveTab] = useState<keyof typeof CHECKLISTS>("general");

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => {
      const selected = prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId];
      return { ...prev, selectedServices: selected };
    });
    if (errors.services) setErrors(prev => ({ ...prev, services: "" }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = () => {
    setFormData(prev => ({ ...prev, agree: !prev.agree }));
    if (errors.agree) setErrors(prev => ({ ...prev, agree: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.location.trim()) newErrors.location = "Suburb / Location is required.";
    if (formData.selectedServices.length === 0) newErrors.services = "Select at least one service.";
    if (!formData.agree) newErrors.agree = "You must agree to the terms.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <Header activePage="home" />

      {/* Main Body */}
      <main className="flex-grow pt-16 pb-20 md:pb-0">

        {/* Section 1: Hero & Form */}
        <section id="form-section" className="relative min-h-[80vh] w-full flex flex-col overflow-hidden bg-slate-950">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-contain opacity-60 z-0"
          >
            <source src="/hero-cleaning-background-v2.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 sm:to-transparent z-10"></div>

          <div className="relative flex-1 flex items-center py-8 sm:py-16 z-20">
            <div className="container mx-auto px-4 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">

                {/* Left Column: Heading and Info */}
                <div className="max-w-2xl text-center lg:text-left mx-auto lg:ml-0 order-2 lg:order-1 text-white">
                  <div className="backdrop-blur-sm bg-black/40 border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl">
                    <div className="flex items-center gap-3 mb-4 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                      <div className="relative w-14 h-10 rounded-xl overflow-hidden shrink-0 border border-white/20">
                        <Image
                          src="/images/team-members-v2.jpg"
                          alt="Official Bond Clean Specialist Team"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Official Cleaning Team</p>
                        <p className="text-xs text-slate-200">Local Gold Coast &amp; Brisbane Specialists</p>
                      </div>
                    </div>

                    <button className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary border border-primary/50 text-white font-semibold shadow-lg text-xs sm:text-sm animate-pulse-glow">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      🎉 Special Offer: Up to 20% Off | Bond & Carpet Cleaning!
                    </button>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight drop-shadow-lg font-heading">
                      Bond Cleaning & Complete Property Care in <br className="hidden sm:block" />
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-white to-amber-400">
                        Gold Coast & Brisbane
                      </span>
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg text-slate-200 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
                      Top-rated end of lease bond cleaning, spring cleaning, and pest control service/flea treatment. Helping you secure your full bond refund, guaranteed.
                    </p>

                    <ul className="space-y-2 mb-8 text-left max-w-md mx-auto lg:mx-0">
                      <li className="flex items-center gap-3 text-slate-100">
                        <div className="bg-amber-400/20 p-1 rounded-full shrink-0">
                          <Check className="h-4 w-4 text-amber-400 font-bold" />
                        </div>
                        <span className="font-semibold text-sm sm:text-base">100% Bond Back guarantee*</span>
                      </li>
                      <li className="flex items-center gap-3 text-slate-100">
                        <div className="bg-amber-400/20 p-1 rounded-full shrink-0">
                          <Check className="h-4 w-4 text-amber-400 font-bold" />
                        </div>
                        <span className="font-semibold text-sm sm:text-base">7 days job guarantee</span>
                      </li>
                      <li className="flex items-center gap-3 text-slate-100">
                        <div className="bg-amber-400/20 p-1 rounded-full shrink-0">
                          <Check className="h-4 w-4 text-amber-400 font-bold" />
                        </div>
                        <span className="font-semibold text-sm sm:text-base">Experienced Local Cleaners</span>
                      </li>
                      <li className="flex items-center gap-3 text-slate-100">
                        <div className="bg-amber-400/20 p-1 rounded-full shrink-0">
                          <Check className="h-4 w-4 text-amber-400 font-bold" />
                        </div>
                        <span className="font-semibold text-sm sm:text-base">REIQ Approved Checklist</span>
                      </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                      <a href="tel:0756201066" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-full text-sm sm:text-base px-6 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all hover:-translate-y-0.5">
                        <Phone className="h-4 w-4 mr-1" />
                        Call: 099XXXXXXXX
                      </a>
                    </div>

                    <p className="text-[10px] text-white/50 mt-4 italic text-center lg:text-left">*Terms & conditions apply.</p>
                  </div>
                </div>

                {/* Right Column: Interactive Request Form */}
                <div className="w-full max-w-[600px] mx-auto lg:mr-0 order-1 lg:order-2">
                  <div className="w-full bg-[#c5c6c8] p-5 sm:p-6 rounded-[32px] shadow-2xl relative">
                    <h3 className="text-2xl sm:text-[28px] font-bold text-center text-[#1a2b4b] mb-4 sm:mb-5 font-heading">
                      Request a Quote
                    </h3>

                    {submitted ? (
                      <div className="text-center py-6 flex flex-col items-center justify-center gap-3">
                        <div className="h-12 w-12 sm:h-14 sm:w-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                          <Check className="h-6 w-6 sm:h-7 sm:w-7" />
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-[#1a2b4b]">Thank you, {formData.name}!</h4>
                        <p className="text-sm sm:text-base text-slate-700">Your quote request has been received. Our team will contact you shortly.</p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="mt-2 px-5 py-2 bg-[#1a2b4b] text-white rounded-xl text-sm font-semibold hover:bg-opacity-90 transition-colors"
                        >
                          Request Another Quote
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 text-left">
                        {/* Name input */}
                        <div>
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`flex h-10 sm:h-11 w-full rounded-xl px-3 sm:px-4 py-1.5 text-[#1a2b4b] placeholder:text-[#8ba0c9] focus:outline-none transition-all text-sm sm:text-base font-medium ${errors.name
                              ? "border-2 border-red-500 bg-white"
                              : formData.name ? "border-2 border-[#1a2b4b] bg-[#f8f9fa] focus:ring-4 focus:ring-[#1a2b4b]/10 shadow-[0_0_10px_rgba(26,43,75,0.2)]" : "border border-transparent bg-[#e4e5e7] focus:bg-[#f8f9fa] focus:border-[#1a2b4b]"
                              }`}
                          />
                          {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
                        </div>

                        {/* Email input */}
                        <div>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`flex h-10 sm:h-11 w-full rounded-xl px-3 sm:px-4 py-1.5 text-[#1a2b4b] placeholder:text-[#8ba0c9] focus:outline-none transition-all text-sm sm:text-base font-medium ${errors.email
                              ? "border-2 border-red-500 bg-white"
                              : formData.email ? "border-2 border-[#1a2b4b] bg-[#f8f9fa] focus:ring-4 focus:ring-[#1a2b4b]/10 shadow-[0_0_10px_rgba(26,43,75,0.2)]" : "border border-transparent bg-[#e4e5e7] focus:bg-[#f8f9fa] focus:border-[#1a2b4b]"
                              }`}
                          />
                          {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone input */}
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`flex h-10 sm:h-11 w-full rounded-xl px-3 sm:px-4 py-1.5 text-[#1a2b4b] placeholder:text-[#8ba0c9] focus:outline-none transition-all text-sm sm:text-base font-medium ${errors.phone
                              ? "border-2 border-red-500 bg-white"
                              : formData.phone ? "border-2 border-[#1a2b4b] bg-[#f8f9fa] focus:ring-4 focus:ring-[#1a2b4b]/10 shadow-[0_0_10px_rgba(26,43,75,0.2)]" : "border border-transparent bg-[#e4e5e7] focus:bg-[#f8f9fa] focus:border-[#1a2b4b]"
                              }`}
                          />
                          {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
                        </div>

                        {/* Location input */}
                        <div>
                          <input
                            type="text"
                            name="location"
                            placeholder="Suburb / Location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className={`flex h-10 sm:h-11 w-full rounded-xl px-3 sm:px-4 py-1.5 text-[#1a2b4b] placeholder:text-[#8ba0c9] focus:outline-none transition-all text-sm sm:text-base font-medium ${errors.location
                              ? "border-2 border-red-500 bg-white"
                              : formData.location ? "border-2 border-[#1a2b4b] bg-[#f8f9fa] focus:ring-4 focus:ring-[#1a2b4b]/10 shadow-[0_0_10px_rgba(26,43,75,0.2)]" : "border border-transparent bg-[#e4e5e7] focus:bg-[#f8f9fa] focus:border-[#1a2b4b]"
                              }`}
                          />
                          {errors.location && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.location}</p>}
                        </div>

                        {/* Services selector */}
                        <div className="pt-1 sm:pt-2">
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                            {SERVICES.map(service => {
                              const isSelected = formData.selectedServices.includes(service.id);
                              return (
                                <button
                                  type="button"
                                  key={service.id}
                                  onClick={() => handleServiceToggle(service.id)}
                                  className={`rounded-xl p-2 flex flex-col items-center justify-center gap-1 sm:gap-2 text-center transition-all duration-200 min-h-[70px] sm:min-h-[85px] ${isSelected
                                    ? "bg-[#1a2b4b] text-white shadow-md"
                                    : "bg-[#e4e5e7] text-[#1a2b4b] hover:bg-[#d6d8db]"
                                    }`}
                                >
                                  <div className="mb-0.5 sm:mb-1 scale-90 sm:scale-100">{service.icon}</div>
                                  <span className="text-[10px] sm:text-xs font-bold leading-[1.1] sm:leading-tight">{service.name}</span>
                                </button>
                              );
                            })}
                          </div>
                          {errors.services && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.services}</p>}
                        </div>

                        {/* Terms checkbox */}
                        <div className="pt-2 pb-1 px-1">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <input
                              type="checkbox"
                              id="hero-agree"
                              checked={formData.agree}
                              onChange={handleCheckboxChange}
                              className="h-4 w-4 sm:h-5 sm:w-5 rounded sm:rounded-md border-2 border-[#1a2b4b] bg-transparent text-[#1a2b4b] focus:ring-[#1a2b4b] focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer appearance-none checked:bg-[#1a2b4b] checked:after:content-['✓'] checked:after:text-white checked:after:block checked:after:text-center checked:after:text-[10px] sm:checked:after:text-sm checked:after:leading-[14px] sm:checked:after:leading-4"
                            />
                            <label htmlFor="hero-agree" className="text-xs sm:text-sm text-slate-700 leading-tight sm:leading-normal">
                              I agree to the <a className="underline hover:text-[#1a2b4b] transition-colors" href="/terms">Terms & Conditions</a> and <a className="underline hover:text-[#1a2b4b] transition-colors" href="/privacy">Privacy Policy</a>.
                            </label>
                          </div>
                          {errors.agree && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.agree}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          className="w-full text-lg sm:text-xl font-bold py-3 sm:py-3.5 px-6 rounded-xl text-white shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:opacity-90 bg-gradient-to-r from-[#0f1f3a] via-[#1a2b4b] to-[#99aabf]"
                        >
                          <span>Get Free Quote</span>
                        </button>
                      </form>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Why Choose Us */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left Column: Team Image and Badge */}
              <div className="relative flex flex-col items-center">
                <div className="relative aspect-[4/3] w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                  <Image
                    src="/images/team-members-v2.jpg"
                    alt="Professional Cleaning Team"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-8 flex justify-center">
                  <div className="relative w-36 h-36 md:w-44 md:h-44 transition-transform duration-500 hover:scale-105">
                    <Image
                      src="/images/satisfaction-badge.png"
                      alt="100% Satisfaction Guarantee"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Benefits Grid */}
              <div>
                <div className="text-left mb-8 sm:mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight sm:text-5xl text-slate-900 leading-tight mb-4 font-heading">
                    Why Choose <span className="text-primary">Bond Clean Specialist</span>?
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                    At Bond Clean Specialist, we understand the importance of making your property inspection-ready. Our experienced team follows a strict, real estate-approved checklist to secure your full bond refund.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Card 1 */}
                  <div className="text-card-foreground group border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 rounded-2xl bg-gradient-to-br from-white to-primary/5 p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                    <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-white">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 leading-snug group-hover:text-primary transition-colors">
                      Detailed & Thorough Cleaning
                    </h3>
                  </div>

                  {/* Card 2 */}
                  <div className="text-card-foreground group border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 rounded-2xl bg-gradient-to-br from-white to-primary/5 p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                    <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 leading-snug group-hover:text-primary transition-colors">
                      Local Gold Coast Team
                    </h3>
                  </div>

                  {/* Card 3 */}
                  <div className="text-card-foreground group border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 rounded-2xl bg-gradient-to-br from-white to-primary/5 p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                    <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-white">
                      <Star className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 leading-snug group-hover:text-primary transition-colors">
                      Transparent Pricing
                    </h3>
                  </div>

                  {/* Card 4 */}
                  <div className="text-card-foreground group border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 rounded-2xl bg-gradient-to-br from-white to-primary/5 p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                    <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-white">
                      <Clock className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 leading-snug group-hover:text-primary transition-colors">
                      On-Time Service
                    </h3>
                  </div>

                  {/* Card 5 */}
                  <div className="text-card-foreground group border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 rounded-2xl bg-gradient-to-br from-white to-primary/5 p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                    <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-white">
                      <ThumbsUp className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 leading-snug group-hover:text-primary transition-colors">
                      Satisfaction Guarantee
                    </h3>
                  </div>

                  {/* Card 6 */}
                  <div className="text-card-foreground group border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 rounded-2xl bg-gradient-to-br from-white to-primary/5 p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                    <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-white">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 leading-snug group-hover:text-primary transition-colors">
                      REIQ Approved Checklist
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Services Grid */}
        <section className="py-16 sm:py-24 bg-slate-100/50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent font-heading">
                Expert Bond Cleaning, Spring Cleaning &amp; Pest Control Service
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Specializing in comprehensive bond cleaning, detailed spring cleaning, and professional pest control service/flea treatment for Gold Coast and Brisbane properties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Service 1 */}
              <div className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5">
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src="/images/services/BondCleaning.jpeg"
                    alt="Bond Cleaning"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    Bond Cleaning
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
                    Complete end-of-lease cleaning tailored to real estate requirements, ensuring you secure your full refund.
                  </p>
                  <div className="pt-4 mt-auto border-t border-slate-100">
                    <a href="/services#bond-cleaning" className="text-primary hover:text-accent font-semibold text-sm flex items-center gap-1.5">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5">
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src="/images/services/carpet-cleaning.png"
                    alt="Carpet Cleaning"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    Carpet Steam Cleaning
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
                    Deep steam cleaning to remove tough stains, dirt, bacteria, and allergens from your carpets.
                  </p>
                  <div className="pt-4 mt-auto border-t border-slate-100">
                    <a href="/services#carpet-cleaning" className="text-primary hover:text-accent font-semibold text-sm flex items-center gap-1.5">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5">
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src="/images/services/SpringCleaning.jpeg"
                    alt="Spring Cleaning"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    Spring Cleaning
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
                    Comprehensive top-to-bottom deep clean to refresh your home, making it feel like new.
                  </p>
                  <div className="pt-4 mt-auto border-t border-slate-100">
                    <a href="/services#spring-cleaning" className="text-primary hover:text-accent font-semibold text-sm flex items-center gap-1.5">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 4 */}
              <div className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5">
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src="/images/services/PestControl.jpeg"
                    alt="Pest Control"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    Pest Control &amp; Flea Treatment
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
                    Professional, licensed pest control services to keep your property free of fleas and crawling insects.
                  </p>
                  <div className="pt-4 mt-auto border-t border-slate-100">
                    <a href="/services#pest-control" className="text-primary hover:text-accent font-semibold text-sm flex items-center gap-1.5">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>


              {/* Service 6: Airbnb */}
              <div className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5">
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src="/images/services/AirbnbCleaning.png"
                    alt="AirBnB Cleaning"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    AirBnB Cleaning
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
                    Fast, thorough turnaround cleaning services to keep your short-stay property pristine and guest-ready.
                  </p>
                  <div className="pt-4 mt-auto border-t border-slate-100">
                    <a href="/services#airbnb-cleaning" className="text-primary hover:text-accent font-semibold text-sm flex items-center gap-1.5">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Service 6: Office Cleaning */}
              <div className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5">
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src="/images/services/OfficeCleaning.png"
                    alt="Office Cleaning"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    Office Cleaning
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
                    Custom commercial office cleaning schedules for workstations, breakrooms, and corporate spaces.
                  </p>
                  <div className="pt-4 mt-auto border-t border-slate-100">
                    <a href="/services#office-cleaning" className="text-primary hover:text-accent font-semibold text-sm flex items-center gap-1.5">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a href="/services" className="inline-flex items-center justify-center gap-2 rounded-full font-bold text-white bg-primary hover:bg-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-base">
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Professional Bond Cleaning Checklist (Tabs) */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-primary font-heading">
                Professional Bond Cleaning Checklist
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our comprehensive checklist covers everything from general living areas to detailed kitchen and bathroom sanitation. We follow strict real estate standards to ensure your bond return.
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="w-full max-w-5xl mx-auto">
              <div className="flex items-center justify-center p-1 bg-slate-100 border border-slate-200/50 shadow-sm rounded-full mb-8 sm:mb-12 max-w-2xl mx-auto">
                <div className="grid grid-cols-4 w-full">
                  {(Object.keys(CHECKLISTS) as Array<keyof typeof CHECKLISTS>).map(tabKey => {
                    const isActive = activeTab === tabKey;
                    return (
                      <button
                        key={tabKey}
                        onClick={() => setActiveTab(tabKey)}
                        className={`py-3 px-3 sm:px-6 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${isActive
                          ? "bg-primary text-white shadow-md"
                          : "text-slate-600 hover:text-primary hover:bg-white/50"
                          }`}
                      >
                        {tabKey === "general" && <LayoutList className="h-4 w-4 shrink-0" />}
                        {tabKey === "kitchen" && <ChefHat className="h-4 w-4 shrink-0" />}
                        {tabKey === "laundry" && <Waves className="h-4 w-4 shrink-0" />}
                        {tabKey === "bathrooms" && <Bath className="h-4 w-4 shrink-0" />}
                        <span className="hidden sm:inline capitalize">{tabKey}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tab Panel */}
              <div className="border border-slate-100 shadow-2xl rounded-3xl overflow-hidden bg-white max-w-4xl mx-auto animate-in fade-in duration-300">
                <div className="flex items-center gap-3 p-5 sm:p-6 bg-primary/5 border-b border-primary/10">
                  {CHECKLISTS[activeTab].icon}
                  <h3 className="font-bold text-xl sm:text-2xl text-primary">{CHECKLISTS[activeTab].title}</h3>
                </div>
                <div className="p-6 sm:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                    {CHECKLISTS[activeTab].items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3.5">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5 text-green-600 font-bold" />
                        </div>
                        <span className="text-sm sm:text-base text-slate-700 font-medium leading-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services Notice */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Additional Services (Separately Quoted)</h3>
                <div className="max-w-xl mx-auto bg-amber-50 rounded-2xl p-4 flex items-start gap-3 border border-amber-200/50">
                  <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-600 text-left">
                    <strong>Attention:</strong> These specialist services are quoted separately and only included if explicitly listed in your quote contract.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Carpet steam cleaning",
                  "Pest control & flea treatment",
                  "Blinds (Venetians) cleaning",
                  "BBQ restoration",
                  "Garden maintenance",
                  "External pressure washing",
                  "Wall washing",
                  "Upholstery cleaning"
                ].map((serv, index) => (
                  <div key={index} className="group p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex items-center gap-3">
                    <div className="h-7 w-7 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary text-primary group-hover:text-white transition-colors">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">{serv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Suburbs Grid */}
        <section className="py-12 sm:py-32 bg-white overflow-hidden relative">
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-primary font-heading">
                Our Cleaning Service Areas
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From the heart of the Gold Coast to all across Brisbane, our professional cleaning teams provide prompt, high-quality service wherever you are.
              </p>
            </div>

            <div className="space-y-24 sm:space-y-40">

              {/* Gold Coast: suburb list (7 cols) + map (5 cols) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                  <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>Gold Coast Suburbs
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                    {GOLD_COAST_SUBURBS.map((sub, index) => (
                      <div key={index} className="flex items-center gap-2 group cursor-default">
                        <MapPin className="h-4 w-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-sm sm:text-base text-slate-600 group-hover:text-primary transition-colors font-medium">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5 relative">
                  <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl transform rotate-3"></div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 flex items-center justify-center p-8">
                    <Image
                      src="/images/reference/suburbs-map.svg"
                      alt="Gold Coast Service Areas Map"
                      width={500}
                      height={500}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Brisbane: map (5 cols) + suburb list (7 cols) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1 relative">
                  <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl transform -rotate-3"></div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 flex items-center justify-center p-8">
                    <Image
                      src="/images/reference/suburbs-map.svg"
                      alt="Brisbane Service Areas Map"
                      width={500}
                      height={500}
                      className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>Brisbane Suburbs
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                    {BRISBANE_SUBURBS.map((sub, index) => (
                      <div key={index} className="flex items-center gap-2 group cursor-default">
                        <MapPin className="h-4 w-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-sm sm:text-base text-slate-600 group-hover:text-primary transition-colors font-medium">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-16 p-4 bg-primary/5 rounded-2xl border border-primary/10 max-w-xl mx-auto text-center">
              <p className="text-xs sm:text-sm font-semibold text-primary">
                And surrounding suburbs! If your location isn&apos;t listed, we likely clean there too!
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Our Simple 4-Step Process */}
        <section className="py-12 sm:py-32 bg-white relative">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 mb-4 sm:mb-6 font-heading">
                Our Simple 4-Step Process
              </h2>
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
                Getting your property professionally cleaned has never been easier. We handle the details so you can focus on moving.
              </p>
            </div>

            <div className="relative">
              {/* Vertical line on desktop */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 rounded-full hidden md:block"></div>

              <div className="space-y-8 md:space-y-24">

                {/* Step 1: text left, image right */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <div className="flex-1 md:text-right text-center">
                    <div className="inline-block p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-secondary/30 backdrop-blur-sm border border-secondary hover:border-primary/30 transition-all duration-300 w-full max-w-md ml-auto">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Request a Quote</h3>
                      <p className="text-gray-600 text-base sm:text-lg">Fill out our simple form or call us directly.</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10 border-4 border-white">1</div>
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-200 md:hidden"></div>
                  </div>
                  <div className="flex-1">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/images/how-it-works-1-quote.png"
                        alt="Request a Quote"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2: image left, text right (reversed) */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 md:flex-row-reverse">
                  <div className="flex-1 md:text-left text-center">
                    <div className="inline-block p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-secondary/30 backdrop-blur-sm border border-secondary hover:border-primary/30 transition-all duration-300 w-full max-w-md mr-auto">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Get Confirmation</h3>
                      <p className="text-gray-600 text-base sm:text-lg">We confirm your booking and cleaning schedule.</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10 border-4 border-white">2</div>
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-200 md:hidden"></div>
                  </div>
                  <div className="flex-1">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/images/how-it-works-2-confirm.png"
                        alt="Get Confirmation"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 3: text left, image right */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <div className="flex-1 md:text-right text-center">
                    <div className="inline-block p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-secondary/30 backdrop-blur-sm border border-secondary hover:border-primary/30 transition-all duration-300 w-full max-w-md ml-auto">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">We Clean</h3>
                      <p className="text-gray-600 text-base sm:text-lg">Our professionals complete the job thoroughly and efficiently.</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10 border-4 border-white">3</div>
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gray-200 md:hidden"></div>
                  </div>
                  <div className="flex-1">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/images/how-it-works-3-clean.png"
                        alt="We Clean"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 4: image left, text right (reversed) */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 md:flex-row-reverse">
                  <div className="flex-1 md:text-left text-center">
                    <div className="inline-block p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-secondary/30 backdrop-blur-sm border border-secondary hover:border-primary/30 transition-all duration-300 w-full max-w-md mr-auto">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Inspection Ready</h3>
                      <p className="text-gray-600 text-base sm:text-lg">Your property is ready for final inspection.</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10 border-4 border-white">4</div>
                  </div>
                  <div className="flex-1">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/images/how-it-works-4-ready.png"
                        alt="Inspection Ready"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Testimonials Carousel */}
        <section className="py-12 sm:py-32 bg-slate-50 relative overflow-hidden">
          {/* Background glow blobs */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent font-heading">
                What Our Clients Say
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed">
                Don&apos;t just take our word for it — hear from satisfied customers across the Gold Coast.
              </p>
            </div>
          </div>

          {/* Horizontal scroll carousel */}
          <div className="relative group">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

            <div className="overflow-hidden pb-4">
              <div className="flex w-max px-6 sm:px-12 animate-marquee hover:[animation-play-state:paused]">
                {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                  <div key={idx} className="flex-shrink-0 w-[280px] sm:w-[360px] mr-4 sm:mr-6">
                    <div className="h-full rounded-2xl sm:rounded-3xl border border-primary/10 bg-white shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col relative overflow-hidden group/card">
                      {/* Top gradient bar */}
                      <div className="h-2 w-full bg-gradient-to-r from-primary to-accent"></div>

                      <div className="p-6 sm:p-8 flex flex-col gap-6 flex-grow relative">
                        {/* Decorative quote icon */}
                        <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/5 group-hover/card:text-primary/10 transition-colors duration-500 z-0" />

                        {/* Avatar + name */}
                        <div className="flex items-center gap-4 relative z-10">
                          <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                            <Image
                              src={t.image}
                              alt={t.name}
                              fill
                              className="object-contain"
                              sizes="56px"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-900 text-lg leading-tight">{t.name}</span>
                            <span className="text-xs font-medium text-primary mt-1 bg-primary/5 self-start px-2 py-0.5 rounded-md">{t.type}</span>
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="relative z-10">
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>

                        {/* Review text */}
                        <p className="text-slate-700 leading-relaxed text-base flex-grow relative z-10 italic">
                          &quot;{t.text}&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Stats Banner */}
        <section className="relative py-16 sm:py-20 overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-3 border border-white/20">
                  <ThumbsUp className="h-6 w-6 text-white" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold mb-1">3,500+</span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200">Happy Clients</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-3 border border-white/20">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold mb-1">100%</span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200">Satisfaction</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-3 border border-white/20">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold mb-1">1,000+</span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200">Projects Done</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-3 border border-white/20">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold mb-1">150+</span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200">Local Cleaners</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Last CTA Section */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-r from-primary to-slate-900 text-white text-center">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6 font-heading">
              Moving Out? Let Us Handle the Cleaning.
            </h2>
            <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed">
              Focus on your move while we ensure your property is spotless, inspection-ready, and REIQ compliant.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-500 text-primary font-bold rounded-full text-base sm:text-lg shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Get a Free Quote
              </button>
              <a
                href="tel:0756201066"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold rounded-full text-base sm:text-lg shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: 099XXXXXXXX</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white text-slate-600 border-t border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Column 1: Info */}
            <div className="flex flex-col gap-4">
              <a aria-label="Home" className="relative block w-44 h-12" href="/">
                <Image
                  src="/logos/JBC-logo-JB-with-full-name-noBG.png"
                  alt="Bond Clean Specialist Logo"
                  fill
                  className="object-contain"
                />
              </a>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your trusted partner for reliable, professional end-of-lease, spring, and pest control cleaning services across Gold Coast and Brisbane.
              </p>
              <p className="text-xs text-slate-500">ABN: 94694137874</p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-4 text-base">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a className="hover:text-primary transition-colors" href="/">Home</a></li>
                <li><a className="hover:text-primary transition-colors" href="/about">About Us</a></li>
                <li><a className="hover:text-primary transition-colors" href="/services">Services</a></li>
                <li><a className="hover:text-primary transition-colors" href="/suburbs">Suburbs</a></li>
                <li><a className="hover:text-primary transition-colors" href="/gallery">Gallery</a></li>
                <li><a className="hover:text-primary transition-colors" href="/blog">Blog</a></li>
                <li><a className="hover:text-primary transition-colors" href="/contact">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Services Links */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-4 text-base">Services</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a className="hover:text-primary transition-colors" href="/services#bond-cleaning">Bond Cleaning</a></li>
                <li><a className="hover:text-primary transition-colors" href="/services#carpet-cleaning">Carpet Steam Cleaning</a></li>
                <li><a className="hover:text-primary transition-colors" href="/services#spring-cleaning">Spring Cleaning</a></li>
                <li><a className="hover:text-primary transition-colors" href="/services#pest-control">Pest Control &amp; Flea Treatment</a></li>
                <li><a className="hover:text-primary transition-colors" href="/services#airbnb-cleaning">AirBnB Cleaning</a></li>
              </ul>
            </div>

            {/* Column 4: Contact info */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-4 text-base">Contact &amp; Hours</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Unit 10, 45 Coastal Avenue Robina, QLD 4226 Australia</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a href="tel:0756201066" className="text-base font-bold text-slate-900 hover:text-primary transition-colors">099XXXXXXXX</a>
                </li>
                <li className="space-y-1">
                  <p className="font-semibold text-slate-900">Customer Support:</p>
                  <a href="mailto:support@bondclean.au" className="block hover:text-primary transition-colors text-xs">support@bondclean.au</a>
                  <a href="mailto:bondcleanau@hotmail.com" className="block hover:text-primary transition-colors text-xs">bondcleanau@hotmail.com</a>
                </li>
                <li className="pt-2">
                  <p className="font-semibold text-slate-900">Hours:</p>
                  <p>Monday - Sunday: 6:00 AM - 7:00 PM</p>
                </li>
              </ul>

              <div className="flex items-center gap-4 mt-6">
                <a href="https://www.facebook.com/share/1FtNkUCPgM/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook" className="bg-slate-100 p-2 rounded-full hover:bg-primary hover:text-white text-slate-500 transition-all">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/bondclean?igsh=cW9nNXk2OWZ1NzF5" target="_blank" rel="noreferrer" aria-label="Instagram" className="bg-slate-100 p-2 rounded-full hover:bg-primary hover:text-white text-slate-500 transition-all">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-center md:text-left">
              <p>Copyright &copy; 2026 bondcleanspecialistptyltd. All Rights Reserved.</p>
            </div>
            <div className="flex gap-4">
              <a className="hover:text-primary transition-colors" href="/privacy">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 px-4 py-3 flex gap-3 md:hidden shadow-lg">
        <a href="tel:0756201066" className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white text-primary font-bold text-center transition-all shadow-sm">
          <Phone className="h-4 w-4" />
          <span>Call Now</span>
        </a>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary text-white font-bold text-center transition-all shadow-sm"
        >
          <Calendar className="h-4 w-4" />
          <span>Get Quote</span>
        </button>
      </div>
    </div>
  );
}










