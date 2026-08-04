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
  Star,
  Flame,
  UtensilsCrossed,
  BedDouble,
  CalendarCheck,
  CircleCheckBig,
  Sun,
  Home as HouseIcon,
  Layers,
  Users,
  Wind,
  Target,
  Brush,
  Hammer,
  Sofa,
  LifeBuoy,
  Droplets,
  Truck,
  PackageOpen,
  Droplet,
  RefreshCcw,
  Dumbbell,
  Building2,
  Wine,
  ShoppingBag
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

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <Header activePage="services" />

      {/* Main Content */}
      <main className="flex-grow pt-16 pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="relative w-full bg-primary py-20 sm:py-28 text-center text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 font-heading leading-tight">
              Expert Bond Cleaning, Spring Cleaning &amp; Pest Control Service/Flea Treatment
            </h1>
            <p className="text-lg sm:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of cleaning and maintenance solutions tailored for the Gold Coast &amp; Brisbane.
            </p>
          </div>
        </section>

        {/* Services List */}
        <div className="divide-y divide-slate-200">
          {/* Service 1: Bond Cleaning */}
          <section id="bond-cleaning" className="py-20 sm:py-28 bg-white scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Bond Cleaning</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    We specialise in end-of-lease cleaning designed to help tenants secure their full bond refund, guaranteed. Our team follows a strict real estate approved checklist.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Real Estate Checklist Based</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">We use a comprehensive checklist approved by property managers to ensure nothing is missed.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Star className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Attention to Hidden Areas</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Our team focuses on details like inside cupboards, behind appliances, and top of door frames.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Reliable and Punctual</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">We respect your time. Our cleaners arrive on schedule and work efficiently to meet deadlines.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Competitive, Transparent Pricing</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Receive a fair, all-inclusive quote with no surprise fees. Quality service that fits your budget.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Bond Cleaning</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                    <Image
                      src="/images/services/BondCleaning.jpeg"
                      alt="A professional cleaner in an empty, spotless modern apartment."
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service 2: Carpet Steam Cleaning */}
          <section id="carpet-cleaning" className="py-20 sm:py-28 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                  <Image
                    src="/images/services/carpet-cleaning.png"
                    alt="Professional steam cleaning a luxury carpet."
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Carpet Steam Cleaning</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Over time, carpets accumulate dirt, dust, allergens, and tough stains that regular vacuuming can't handle. Our professional steam cleaning service is the solution for a truly deep clean.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Waves className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Deep Steam Cleaning</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Our powerful hot water extraction method reaches deep into carpet fibers to lift away dirt, grime, and allergens.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Advanced Stain Removal</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">We treat and remove a wide variety of tough stains, from coffee and wine to pet accidents, restoring your carpet's appearance.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Wind className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Effective Odour Removal</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Our cleaning process neutralises and eliminates unpleasant odours, leaving your carpets smelling fresh and clean.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Carpet Steam Cleaning</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Service 3: Spring Cleaning */}
          <section id="spring-cleaning" className="py-20 sm:py-28 bg-white scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Spring Cleaning</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Our Spring Cleaning service involves a complete refresh of your home. We air out, dust, and make your space feel new again.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Sun className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Seasonal Refresh</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">The perfect way to reset your home. We air out, dust, and clean to make your space feel new again.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <HouseIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Complete Home Reset</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Ideal before a special event or anytime you need a more intensive clean than your regular routine.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Layers className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Detailed Dusting</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">We go beyond surface cleaning to tackle areas that are often missed, such as behind furniture and on top of cabinets.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Spring Cleaning</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                    <Image
                      src="/images/services/SpringCleaning.jpeg"
                      alt="Sunlight streaming into a beautifully organized and sparkling clean bedroom."
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service 4: Pest Control */}
          <section id="pest-control" className="py-20 sm:py-28 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                  <Image
                    src="/images/services/PestControl.jpeg"
                    alt="Professional pest control technician inspecting a home."
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Pest Control Service/Flea Treatment</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Protect your home from unwanted guests with our professional pest control service/flea treatment. We offer safe, reliable treatments to keep your property bug-free.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Comprehensive Inspection</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Thorough assessment to identify pest types, entry points, and nesting areas.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Bug className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Targeted Treatments</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Safe and effective solutions tailored for specific pests like ants, spiders, cockroaches, and termites.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Leaf className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Family &amp; Pet Safe</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Using environmentally responsible and safe products to protect your loved ones.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Pest Control</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Service 5: Oven & BBQ Cleaning */}
          <section id="oven-bbq-cleaning" className="py-20 sm:py-28 bg-white scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Oven &amp; BBQ Cleaning</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Restore your oven and BBQ to like-new condition with our professional degreasing service. We remove heavy build-up, carbon residue, and stubborn grease using powerful food-safe cleaning agents.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Flame className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Deep Degreasing</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Powerful, safe degreasers break down heavy carbon build-up, grease, and baked-on residue.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <UtensilsCrossed className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Rack &amp; Grill Cleaning</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Thorough scrubbing of all racks, grates, burners, and internal surfaces to restore shine.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Food-Safe Products</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">We use non-toxic, food-safe cleaning agents so your appliances are safe the moment we finish.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Oven &amp; BBQ Cleaning</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                    <Image
                      src="/images/services/oven-bbq-cleaning-v2.jpg"
                      alt="A sparkling clean oven interior and stainless steel BBQ grill after professional cleaning."
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service 6: AirBnB Cleaning */}
          <section id="airbnb-cleaning" className="py-20 sm:py-28 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                  <Image
                    src="/images/services/AirbnbCleaning.png"
                    alt="A beautifully prepared AirBnB property with fresh linen and immaculate surfaces."
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">AirBnB Cleaning</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Keep your short-stay property in perfect condition with our fast, reliable AirBnB turnaround cleans. We work around your booking schedule to ensure every guest arrives to a spotless property.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <BedDouble className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Turnover Ready</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Swift, thorough cleans between guest stays to ensure your property is always guest-ready on time.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <CalendarCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Flexible Scheduling</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">We work around your booking calendar with same-day and next-day turnaround availability.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Guest-Ready Standards</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Hotel-quality presentation including fresh linen setup, restocking, and detailed surface cleaning.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book AirBnB Cleaning</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Service 7: Deep Cleaning */}
          <section id="deep-cleaning" className="py-20 sm:py-28 bg-white scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Deep Cleaning</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Far more detailed than a standard clean. We focus on the accumulated dust and grime in all the hard-to-reach places for a hygienic environment.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Target className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Intensive Focus</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Targeting areas that are typically overlooked during regular cleaning to remove deep-seated grime.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Brush className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Heavy Grime Removal</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Cutting through tough build-up in kitchens, bathrooms, and high-traffic areas.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Complete Restoration</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Restoring surfaces, floors, and fixtures to look as pristine as possible.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Deep Cleaning</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                    <Image
                      src="/images/services/deep-cleaning-v2.jpg"
                      alt="A professional cleaner deep cleaning a luxury kitchen."
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service 8: Builder Cleaning */}
          <section id="builder-cleaning" className="py-20 sm:py-28 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                  <Image
                    src="/images/services/BuilderClean.jpeg"
                    alt="Spotless newly constructed modern home after builders clean."
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Builder Cleaning</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Post-construction cleaning requires specific attention to detail. We remove all traces of construction materials, dust, and paint leaving your new space immaculate.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Hammer className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Debris Removal</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Clearing construction dust, paint splatters, and material remnants from all surfaces.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <CircleCheckBig className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Detailed Cleaning</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Meticulous cleaning of windows, floors, fixtures, and hidden crevices.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Ready for Move-In</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Ensuring the newly built or renovated space is spotless and completely ready for occupancy.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Builder Cleaning</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="upholstery-cleaning" className="py-20 sm:py-28 bg-white scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Upholstery Cleaning</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Revitalize your furniture with our specialized upholstery cleaning. We safely remove stains, odors, and allergens from all types of fabrics.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Sofa className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Fabric Protection</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Gentle yet highly effective cleaning methods to protect the integrity of your fabrics.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Droplet className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Stain &amp; Odor Removal</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Eliminates deep-set stains, pet dander, and trapped odors from your furniture.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <RefreshCcw className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Extends Furniture Life</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Regular professional cleaning prevents wear and preserves the look of your couches and chairs.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Upholstery Cleaning</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>

                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                  <Image
                    src="/images/services/upholstery-cleaning-v2.jpg"
                    alt="Professional upholstery cleaning in a bright living room."
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="pressure-washing" className="py-20 sm:py-28 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                  <Image
                    src="/images/services/pressure-washing.jpg"
                    alt="High-powered pressure washing removing grime from a driveway."
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Pressure Washing</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Transform the exterior of your property with our high-powered pressure washing. Perfect for driveways, patios, and exterior walls to blast away years of dirt and grime.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Droplets className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Deep Exterior Clean</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Powerful water pressure blasts away stubborn dirt, mold, and mildew from hard surfaces.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Surface Safe</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">We adjust the pressure for different materials to ensure safe, damage-free cleaning.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Pressure Washing</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="pool-maintenance" className="py-20 sm:py-28 bg-white scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Pool Maintenance</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Keep your pool crystal clear and ready to use year-round. Our pool maintenance service covers everything from chemical balancing to debris removal.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Waves className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Water Balancing</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Testing and adjusting chemicals to keep your pool water safe, clean, and crystal clear.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <LifeBuoy className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Equipment Checks</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Regular checks and maintenance of pool pumps, filters, and skimmers.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Pool Maintenance</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>

                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                  <Image
                    src="/images/services/pool-maintenance-v2.jpg"
                    alt="A sparkling clean outdoor pool on a sunny day."
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="removalist" className="py-20 sm:py-28 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                  <Image
                    src="/images/services/removalist-v2.jpg"
                    alt="A modern moving truck and neatly stacked boxes outside a home."
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Removalist</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Moving house doesn't have to be stressful. Our professional removalist team carefully packs, transports, and unloads your belongings with the utmost care, ensuring a smooth transition to your new home.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <PackageOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Careful Handling</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">We treat your belongings like our own, ensuring fragile items are packed and moved safely.</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Truck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 mb-1 text-base">Efficient Transport</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">Reliable and prompt moving services tailored to fit your schedule and relocation needs.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Removalist</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Service 13: Gym Clean */}
          <section id="gym-cleaning" className="py-20 sm:py-28 bg-white scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="mb-2">
                <span className="text-primary font-bold tracking-wider text-sm uppercase">GYM CLEANING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Professional Gym & Fitness Centre Cleaning</h2>
              <div className="text-slate-600 text-lg mb-8 leading-relaxed space-y-4">
                <p>Maintaining a clean and hygienic environment is essential for any gym or fitness facility. With high foot traffic and shared equipment, professional gym cleaning is required regularly to ensure the safety and comfort of members.</p>
                <p>At KM Mittal Cleaning Services, we provide professional Gym Cleaning Services designed to keep fitness centres clean, sanitized, and welcoming. Our experienced cleaning team focuses on high-touch areas, equipment, and workout spaces to maintain the highest hygiene standards.</p>
                <p>Gym cleaning is essential to maintain hygiene and prevent the spread of bacteria and viruses. According to Healthdirect Australia, proper hygiene practices help reduce health risks in shared spaces.</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="space-y-6 mb-8 text-slate-600">
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">Professional Gym Cleaning</h3>
                      <p className="text-sm leading-relaxed">Our team works efficiently to ensure your pub remains clean, safe, and ready for customers.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">Experienced commercial cleaning team</h3>
                      <p className="text-sm leading-relaxed">Our trained team delivers reliable cleaning for gyms and fitness centres.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">Thorough cleaning of high-touch surfaces</h3>
                      <p className="text-sm leading-relaxed">We carefully disinfect machines, benches, handles, and other frequently touched surfaces.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">Professional cleaning equipment and products</h3>
                      <p className="text-sm leading-relaxed">We use commercial-grade equipment and safe products for effective cleaning results.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">Reliable and consistent service</h3>
                      <p className="text-sm leading-relaxed">Our team follows structured processes to deliver consistent and dependable cleaning every visit.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Gym Clean</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                    <Image
                      src="/images/services/GymCleaning.png"
                      alt="Professional Gym & Fitness Centre Cleaning"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service 14: Office Cleaning */}
          <section id="office-cleaning" className="py-20 sm:py-28 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="mb-2">
                <span className="text-primary font-bold tracking-wider text-sm uppercase">OFFICE CLEANING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Professional Office Cleaning for a Healthy Workplace</h2>
              <div className="text-slate-600 text-lg mb-8 leading-relaxed space-y-4">
                <p>A clean and well-maintained office creates a professional environment for employees and visitors. Regular office cleaning helps improve workplace hygiene, productivity, and overall comfort.</p>
                <p>At KM Mittal Cleaning Services, we provide reliable and professional Office Cleaning Services tailored to the needs of businesses. Our experienced cleaning team ensures your workplace remains clean, organized, and presentable at all times.</p>
                <p>Maintaining a clean workplace improves employee health and productivity. According to Safe Work Australia, proper cleaning practices help reduce workplace risks.</p>
                
                <div className="mt-8 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide font-heading">WHY CHOOSE US</h3>
                  <p className="font-bold text-slate-800 mt-2">Your Trusted Partner for Professional Office Cleaning</p>
                  <p>Our goal is to create a clean, hygienic, and professional workspace for your team and clients.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                  <Image
                    src="/images/services/OfficeCleaning.png"
                    alt="Professional Office Cleaning"
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <div className="space-y-6 mb-8 text-slate-600">
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">Experienced commercial cleaning team</h3>
                      <p className="text-sm leading-relaxed">Our trained team understands office cleaning needs and delivers consistent service.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">High-Traffic Area Cleaning</h3>
                      <p className="text-sm leading-relaxed">We clean tables, seating areas, floors, and reception thoroughly.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">Flexible cleaning schedules</h3>
                      <p className="text-sm leading-relaxed">Our team cleans after business hours to avoid disrupting daily office operations.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">Professional Equipment & Products</h3>
                      <p className="text-sm leading-relaxed">We use commercial equipment and safe cleaning products for effective results.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Office Cleaning</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Service 15: Pub & Hospitality Clean */}
          <section id="pub-hospitality-cleaning" className="py-20 sm:py-28 bg-white scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="mb-2">
                <span className="text-primary font-bold tracking-wider text-sm uppercase">PUB & BAR CLEANING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Professional Pub & Bar Cleaning</h2>
              <div className="text-slate-600 text-lg mb-8 leading-relaxed space-y-4">
                <p>Pubs and bars experience heavy foot traffic every day, making pub & hospitality clean services essential to maintain hygiene, safety, and a welcoming environment for customers.</p>
                <p>At KM Mittal Cleaning Services, we provide professional Pub Cleaning Services designed to keep your venue clean, fresh, and presentable. Our experienced cleaning team understands the specific cleaning requirements of pubs, bars, and entertainment venues, ensuring every area is properly cleaned and maintained.</p>
                <p>We help businesses maintain high cleanliness standards that enhance customer experience and satisfaction. Following industry hygiene guidelines, such as those recommended by Safe Work Australia, ensures your venue stays compliant and safe.</p>
                
                <div className="mt-8 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide font-heading">WHY CHOOSE US</h3>
                  <p className="font-bold text-slate-800 mt-2">Your Trusted Partner for Professional Pub & Hospitality Clean</p>
                  <p>Our team works efficiently to ensure your pub remains clean, safe, and ready for customers.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="space-y-6 mb-8 text-slate-600">
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">Experienced Cleaning Professionals</h3>
                      <p className="text-sm leading-relaxed">Our trained team understands pub cleaning needs and delivers consistent service.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">High-Traffic Area Cleaning</h3>
                      <p className="text-sm leading-relaxed">We clean bar counters, seating areas, floors, and restrooms thoroughly.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">Flexible After-Hours Cleaning</h3>
                      <p className="text-sm leading-relaxed">Our team cleans after business hours to avoid disrupting daily pub operations.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">Professional Equipment & Products</h3>
                      <p className="text-sm leading-relaxed">We use commercial equipment and safe cleaning products for effective results.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Hospitality Clean</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                    <Image
                      src="/images/services/PubCleaning.jpg"
                      alt="Professional Pub & Bar Cleaning"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service 16: Retail Store Cleaning */}
          <section id="retail-store-cleaning" className="py-20 sm:py-28 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto px-4">
              <div className="mb-2">
                <span className="text-primary font-bold tracking-wider text-sm uppercase">STORE CLEANING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-heading">Professional Retail Store Cleaning</h2>
              <div className="text-slate-600 text-lg mb-8 leading-relaxed space-y-4">
                <p>A clean and well-maintained retail store with a professional retail store cleaning routine creates a welcoming environment for your customers and enhances your brand’s image. Regular retail cleaning ensures floors, displays, and surfaces remain spotless, providing a safe and pleasant shopping experience. According to Safe Work Australia guidelines, maintaining workplace cleanliness is essential for safety and hygiene.</p>
                <p>At KM Mittal Cleaning Services, we provide professional retail cleaning services designed for stores, boutiques, and commercial spaces. Our experienced cleaning team works efficiently to maintain high standards of cleanliness without disrupting your daily business operations.</p>
                <p>We help retail businesses maintain hygiene, safety, and a professional appearance at all times.</p>
                
                <div className="mt-8 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide font-heading">WHY CHOOSE US</h3>
                  <p className="font-bold text-slate-800 mt-2">Your Trusted Partner for Retail Office Cleaning</p>
                  <p>Our goal is to create a clean, hygienic, and professional workspace for your team and clients.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                  <Image
                    src="/images/services/RetailStoreCleaning.png"
                    alt="Professional Retail Store Cleaning"
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <div className="space-y-6 mb-8 text-slate-600">
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">Experienced Cleaning Professionals</h3>
                      <p className="text-sm leading-relaxed">Our trained team understands retail store cleaning needs and delivers consistent service.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">High-Traffic Area Cleaning</h3>
                      <p className="text-sm leading-relaxed">We clean store floors, shelves, counters, and fitting rooms thoroughly.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">Flexible cleaning schedules</h3>
                      <p className="text-sm leading-relaxed">Our team cleans after business hours to avoid disrupting daily pub operations.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 mb-1 text-base">Professional Equipment & Products</h3>
                      <p className="text-sm leading-relaxed">We use commercial equipment and safe cleaning products for effective results.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-900 transition-all hover:-translate-y-0.5"
                  >
                    <span>Book Retail Cleaning</span>
                    <CircleCheckBig className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
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
                <li><a className="hover:text-primary transition-colors" href="/services#oven-bbq-cleaning">Oven &amp; BBQ Cleaning</a></li>
                <li><a className="hover:text-primary transition-colors" href="/services#airbnb-cleaning">AirBnB Cleaning</a></li>
                <li><a className="hover:text-primary transition-colors" href="/services#deep-cleaning">Deep Cleaning</a></li>
                <li><a className="hover:text-primary transition-colors" href="/services#builder-cleaning">Builder Cleaning</a></li>
                <li><a className="hover:text-primary transition-colors" href="/services#gym-cleaning">Gym Clean</a></li>
                <li><a className="hover:text-primary transition-colors" href="/services#office-cleaning">Office Cleaning</a></li>
                <li><a className="hover:text-primary transition-colors" href="/services#pub-hospitality-cleaning">Pub &amp; Hospitality Clean</a></li>
                <li><a className="hover:text-primary transition-colors" href="/services#retail-store-cleaning">Retail Store Cleaning</a></li>
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










