"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/component/Header";
import {
  Phone,
  Calendar,
  Menu,
  X,
  MapPin,
  Mail,
  Clock,
  Sparkles,
  Waves,
  Bug,
  Leaf,
  Check,
  Flame,
  BedDouble,
  Layers,
  Hammer,
  Sofa,
  Droplets,
  LifeBuoy,
  Truck
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

const FORM_SERVICES = [
  { id: "bond", name: "Bond Cleaning", icon: <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 group-hover:text-primary" /> },
  { id: "carpet", name: "Carpet Steam Cleaning", icon: <Waves className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 group-hover:text-primary" /> },
  { id: "spring", name: "Spring Cleaning", icon: <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 group-hover:text-primary" /> },
  { id: "pest", name: "Pest Control / Flea", icon: <Bug className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 group-hover:text-primary" /> },
  { id: "oven", name: "Oven & BBQ Cleaning", icon: <Flame className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 group-hover:text-primary" /> },
  { id: "airbnb", name: "AirBnB Cleaning", icon: <BedDouble className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 group-hover:text-primary" /> },
  { id: "deep", name: "Deep Cleaning", icon: <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 group-hover:text-primary" /> },
  { id: "builder", name: "Builder Cleaning", icon: <Hammer className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 group-hover:text-primary" /> },
  { id: "upholstery", name: "Upholstery Cleaning", icon: <Sofa className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 group-hover:text-primary" /> },
  { id: "pressure", name: "Pressure Washing", icon: <Droplets className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 group-hover:text-primary" /> },
  { id: "pool", name: "Pool Maintenance", icon: <LifeBuoy className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 group-hover:text-primary" /> },
  { id: "removalist", name: "Removalist", icon: <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 group-hover:text-primary" /> },
];

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => {
      const selected = prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId];
      return { ...prev, selectedServices: selected };
    });
    if (errors.services) setErrors(prev => ({ ...prev, services: "" }));
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
      <Header activePage="contact" />

      {/* Main Content */}
      <main className="flex-grow pt-16 pb-20 md:pb-0">
        <div className="pt-20 pb-16 sm:pt-28 sm:pb-24 bg-slate-50 relative overflow-hidden flex flex-col">
          {/* Decorative blur elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-400/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="container mx-auto px-4 relative z-10 max-w-6xl flex-grow">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 font-heading mb-4">
                Get in Touch
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Ready for a sparkling clean property? Contact us today for a free, no-obligation quote. We're here to answer any questions you may have.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form Column */}
              <div className="lg:col-span-2">
                <div className="backdrop-blur-xl bg-white/80 border border-slate-200 shadow-xl rounded-3xl overflow-hidden p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>

                  {submitted ? (
                    <div className="text-center py-12 flex flex-col items-center justify-center gap-4">
                      <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-inner">
                        <Check className="h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">Thank you, {formData.name}!</h4>
                      <p className="text-slate-600">Your quote request has been received. Our team will contact you shortly.</p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 px-8 py-3 bg-primary text-white rounded-full text-sm font-semibold hover:bg-slate-900 transition-colors shadow-md hover:-translate-y-0.5 duration-200"
                      >
                        Request Another Quote
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`flex h-11 w-full rounded-xl px-3 py-2 text-slate-900 focus:outline-none transition-all text-sm shadow-sm ${
                              errors.name ? "border-2 border-red-500 bg-white" : "border border-slate-200 bg-white/60 focus:bg-white focus:border-primary placeholder:text-slate-400"
                            }`}
                          />
                          {errors.name && <p className="text-red-500 text-xs mt-1 text-left">{errors.name}</p>}
                        </div>
                        <div>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`flex h-11 w-full rounded-xl px-3 py-2 text-slate-900 focus:outline-none transition-all text-sm shadow-sm ${
                              errors.email ? "border-2 border-red-500 bg-white" : "border border-slate-200 bg-white/60 focus:bg-white focus:border-primary placeholder:text-slate-400"
                            }`}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1 text-left">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`flex h-11 w-full rounded-xl px-3 py-2 text-slate-900 focus:outline-none transition-all text-sm shadow-sm ${
                              errors.phone ? "border-2 border-red-500 bg-white" : "border border-slate-200 bg-white/60 focus:bg-white focus:border-primary placeholder:text-slate-400"
                            }`}
                          />
                          {errors.phone && <p className="text-red-500 text-xs mt-1 text-left">{errors.phone}</p>}
                        </div>
                        <div>
                          <input
                            type="text"
                            name="location"
                            placeholder="Suburb / Location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className={`flex h-11 w-full rounded-xl px-3 py-2 text-slate-900 focus:outline-none transition-all text-sm shadow-sm ${
                              errors.location ? "border-2 border-red-500 bg-white" : "border border-slate-200 bg-white/60 focus:bg-white focus:border-primary placeholder:text-slate-400"
                            }`}
                          />
                          {errors.location && <p className="text-red-500 text-xs mt-1 text-left">{errors.location}</p>}
                        </div>
                      </div>

                      {/* Service Grid Selection */}
                      <div className="space-y-1 pt-2">
                        <label className="text-xs font-semibold text-slate-700">Services Needed:</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {FORM_SERVICES.map(service => {
                            const isSelected = formData.selectedServices.includes(service.id);
                            return (
                              <button
                                type="button"
                                key={service.id}
                                onClick={() => handleServiceToggle(service.id)}
                                className={`group cursor-pointer rounded-xl border p-2 flex flex-col items-center justify-center gap-1.5 text-center transition-all duration-200 h-20 sm:h-24 ${isSelected
                                  ? "border-primary bg-primary/10 text-primary font-bold shadow-sm"
                                  : "border-slate-200 hover:border-primary/50 bg-white/50 text-slate-700 hover:bg-white"
                                  }`}
                              >
                                <div className={`${isSelected ? "text-primary" : "text-slate-500 group-hover:text-primary"}`}>
                                  {service.icon}
                                </div>
                                <span className="text-[10px] sm:text-xs font-semibold leading-[1.2]">{service.name}</span>
                              </button>
                            );
                          })}
                        </div>
                        {errors.services && <p className="text-red-500 text-xs mt-1 text-left">{errors.services}</p>}
                      </div>

                      {/* Terms & Conditions Checkbox */}
                      <div className="pt-2 pb-1">
                        <div className="flex items-start gap-2.5 px-1">
                          <input
                            type="checkbox"
                            id="agree"
                            checked={formData.agree}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary mt-0.5 cursor-pointer"
                          />
                          <label htmlFor="agree" className="text-[10px] sm:text-xs text-slate-600 leading-normal cursor-pointer select-none">
                            I agree to the <a className="underline hover:text-primary transition-colors font-medium" href="/terms">Terms &amp; Conditions</a> and <a className="underline hover:text-primary transition-colors font-medium" href="/privacy">Privacy Policy</a>.
                          </label>
                        </div>
                        {errors.agree && <p className="text-red-500 text-xs mt-1 ml-1 text-left">{errors.agree}</p>}
                      </div>

                      <button
                        type="submit"
                        className="group relative overflow-hidden w-full text-base font-bold py-3.5 px-4 rounded-xl bg-primary text-white hover:bg-primary/95 shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:shadow-xl hover:-translate-y-0.5 duration-200"
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full animate-invert-sweep"></div>
                        <span>Get Free Quote</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="space-y-6">
                {/* Contact Card */}
                <div className="border border-slate-200 shadow-md rounded-3xl bg-white p-6 relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform duration-700"></div>
                  <div className="relative z-10 space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-slate-900 leading-tight">Contact Details</h3>
                      <div className="mt-2 h-0.5 w-8 bg-primary"></div>
                    </div>
                    <div className="space-y-4">
                      <a href="tel:0756201066" className="flex items-center gap-3 group text-slate-600 hover:text-primary transition-colors">
                        <Phone className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-slate-700 group-hover:text-primary">099XXXXXXXX</span>
                      </a>
                      <div className="flex flex-col gap-2">
                        <a href="mailto:support@bondclean.au" className="flex items-center gap-3 group text-slate-600 hover:text-primary transition-colors">
                          <Mail className="h-5 w-5 text-primary shrink-0" />
                          <span className="text-sm font-medium break-all">support@bondclean.au</span>
                        </a>
                        <a href="mailto:bondcleanau@hotmail.com" className="flex items-center gap-3 group text-slate-600 hover:text-primary transition-colors">
                          <Mail className="h-5 w-5 text-primary shrink-0 opacity-0" />
                          <span className="text-sm font-medium break-all">bondcleanau@hotmail.com</span>
                        </a>
                      </div>
                      <div className="flex items-start gap-3 text-slate-600">
                        <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">Unit 501, 18 Cypress Avenue, Surfers Paradise 4217</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="border border-slate-200 shadow-md rounded-3xl bg-white p-6 relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform duration-700"></div>
                  <div className="relative z-10 space-y-6">
                    <div>
                      <h3 className="font-bold text-xl text-slate-900 leading-tight">Business Hours</h3>
                      <div className="mt-2 h-0.5 w-8 bg-primary"></div>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-slate-900">Monday - Sunday</p>
                        <p className="text-sm text-slate-500">6:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Area */}
            <div className="w-full h-[350px] sm:h-[450px] relative mt-12 bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                title="Bond Clean Specialist Location on Google Maps"
                src="https://maps.google.com/maps?q=18%20Cypress%20Avenue,%20Surfers%20Paradise%204217&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
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










