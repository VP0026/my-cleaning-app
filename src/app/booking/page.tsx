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
  Clock,
  Check,
  Building2,
  Sparkles,
  Waves,
  Bug,
  Leaf,
  Flame,
  BedDouble,
  ChevronRight,
  ChevronLeft
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

const SERVICES = [
  { id: "bond", name: "Bond Cleaning", icon: <Sparkles className="h-5 w-5" /> },
  { id: "carpet", name: "Carpet Steam Cleaning", icon: <Waves className="h-5 w-5" /> },
  { id: "pest", name: "Pest Control", icon: <Bug className="h-5 w-5" /> },
  { id: "spring", name: "Spring Cleaning", icon: <Leaf className="h-5 w-5" /> },
  { id: "oven", name: "Oven & BBQ Cleaning", icon: <Flame className="h-5 w-5" /> },
  { id: "airbnb", name: "AirBnB Cleaning", icon: <BedDouble className="h-5 w-5" /> },
];

export default function BookingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    propertyType: "House",
    bedrooms: "1",
    bathrooms: "1",
    selectedServices: [] as string[],
    preferredDate: "",
    preferredTime: "Morning",
    notes: "",
    agree: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

  const handleNextStep = () => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
      if (formData.selectedServices.length === 0) newErrors.services = "Select at least one service.";
    } else if (currentStep === 2) {
      if (!formData.suburb.trim()) newErrors.suburb = "Suburb / Location is required.";
      if (!formData.preferredDate.trim()) newErrors.preferredDate = "Preferred Date is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
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
      <Header activePage="booking" />

      {/* Main Content */}
      <main className="flex-grow pt-16 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-16 sm:py-24 max-w-3xl">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-primary font-heading leading-tight">
              Complete Your Booking
            </h1>
            <p className="text-lg text-slate-500">
              Please provide a few more details so we can give you an accurate quote and confirm your slot.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-6 md:p-10 relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center gap-4">
                <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-inner">
                  <Check className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Booking Request Received!</h2>
                <p className="text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. We've received your booking request for a {formData.bedrooms} Bed, {formData.bathrooms} Bath clean on <span className="font-semibold text-slate-800">{formData.preferredDate}</span>. Our team will verify slot availability and email you a final confirmation quote shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-8 py-3 bg-primary text-white rounded-full text-sm font-semibold hover:bg-slate-900 transition-colors shadow-md hover:-translate-y-0.5 duration-200"
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / 3) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-medium">Step {currentStep} of 3</p>
                </div>

                {currentStep === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">What do you need help with?</h2>
                      <p className="text-sm text-slate-500">Select one or more services to get started.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {SERVICES.map(service => {
                        const isSelected = formData.selectedServices.includes(service.id);
                        return (
                          <button
                            type="button"
                            key={service.id}
                            onClick={() => handleServiceToggle(service.id)}
                            className={`group cursor-pointer rounded-xl border p-4 flex flex-col items-center justify-center gap-3 text-center transition-all duration-200 h-28 ${isSelected
                              ? "border-primary bg-primary/10 text-primary font-bold shadow-sm"
                              : "border-slate-200 hover:border-primary/50 bg-white text-slate-700 hover:bg-slate-50"
                              }`}
                          >
                            <div className={`${isSelected ? "text-primary" : "text-slate-500 group-hover:text-primary"}`}>
                              {service.icon}
                            </div>
                            <span className="text-xs font-semibold leading-snug">{service.name}</span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.services && <p className="text-red-500 text-sm mt-2 text-center font-medium">{errors.services}</p>}

                    <div className="pt-6 flex justify-between items-center border-t border-slate-100 mt-8">
                      <button
                        type="button"
                        disabled
                        className="px-6 py-2.5 bg-white border border-slate-200 text-slate-300 rounded-xl text-sm font-semibold flex items-center gap-2 cursor-not-allowed"
                      >
                        <ChevronLeft className="h-4 w-4" /> Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-8 py-3 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/95 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                      >
                        Continue <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-8">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">Tell us about your space</h2>
                      <p className="text-sm text-slate-500">Please provide details for the services you selected.</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-base font-bold text-slate-900 border-b pb-2">Property Details</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Suburb / Location *</label>
                          <input
                            type="text"
                            name="suburb"
                            value={formData.suburb}
                            onChange={handleInputChange}
                            placeholder="e.g. Surfers Paradise, QLD"
                            className={`flex h-11 w-full rounded-xl px-3 py-2 text-slate-900 focus:outline-none transition-all text-sm shadow-sm ${
                              errors.suburb ? "border-2 border-red-500 bg-white" : "border border-slate-200 bg-white focus:border-primary placeholder:text-slate-400"
                            }`}
                          />
                          {errors.suburb && <p className="text-red-500 text-xs mt-1 text-left">{errors.suburb}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Property Type *</label>
                          <select
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleInputChange}
                            className="flex h-11 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 bg-white focus:border-primary focus:outline-none transition-all text-sm shadow-sm"
                          >
                            <option value="House">House</option>
                            <option value="Apartment">Apartment / Unit</option>
                            <option value="Townhouse">Townhouse</option>
                            <option value="Studio">Studio</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Bedrooms *</label>
                          <select
                            name="bedrooms"
                            value={formData.bedrooms}
                            onChange={handleInputChange}
                            className="flex h-11 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 bg-white focus:border-primary focus:outline-none transition-all text-sm shadow-sm"
                          >
                            <option value="1">1 Bed</option>
                            <option value="2">2 Bed</option>
                            <option value="3">3 Bed</option>
                            <option value="4">4 Bed</option>
                            <option value="5+">5+ Bed</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Bathrooms *</label>
                          <select
                            name="bathrooms"
                            value={formData.bathrooms}
                            onChange={handleInputChange}
                            className="flex h-11 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 bg-white focus:border-primary focus:outline-none transition-all text-sm shadow-sm"
                          >
                            <option value="1">1 Bath</option>
                            <option value="2">2 Bath</option>
                            <option value="3">3 Bath</option>
                            <option value="4+">4+ Bath</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <h3 className="text-base font-bold text-slate-900 border-b pb-2">Schedule Preference</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Preferred Date *</label>
                          <input
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            className={`flex h-11 w-full rounded-xl px-3 py-2 text-slate-900 focus:outline-none transition-all text-sm shadow-sm ${
                              errors.preferredDate ? "border-2 border-red-500 bg-white" : "border border-slate-200 bg-white focus:border-primary"
                            }`}
                          />
                          {errors.preferredDate && <p className="text-red-500 text-xs mt-1 text-left">{errors.preferredDate}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Preferred Arrival Time</label>
                          <select
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            className="flex h-11 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 bg-white focus:border-primary focus:outline-none transition-all text-sm shadow-sm"
                          >
                            <option value="Morning">Morning (6 AM - 11 AM)</option>
                            <option value="Afternoon">Afternoon (11 AM - 3 PM)</option>
                            <option value="Late Afternoon">Late Afternoon (3 PM - 7 PM)</option>
                            <option value="Any Time">Any Time</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 flex justify-between items-center border-t border-slate-100 mt-8">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
                      >
                        <ChevronLeft className="h-4 w-4" /> Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-8 py-3 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/95 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                      >
                        Continue <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">Final Details</h2>
                      <p className="text-sm text-slate-500">Where and when do you need our service?</p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                            className={`flex h-11 w-full rounded-xl px-3 py-2 text-slate-900 focus:outline-none transition-all text-sm shadow-sm ${
                              errors.name ? "border-2 border-red-500 bg-white" : "border border-slate-200 bg-white focus:border-primary placeholder:text-slate-400"
                            }`}
                          />
                          {errors.name && <p className="text-red-500 text-xs mt-1 text-left">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            className={`flex h-11 w-full rounded-xl px-3 py-2 text-slate-900 focus:outline-none transition-all text-sm shadow-sm ${
                              errors.phone ? "border-2 border-red-500 bg-white" : "border border-slate-200 bg-white focus:border-primary placeholder:text-slate-400"
                            }`}
                          />
                          {errors.phone && <p className="text-red-500 text-xs mt-1 text-left">{errors.phone}</p>}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address"
                          className={`flex h-11 w-full rounded-xl px-3 py-2 text-slate-900 focus:outline-none transition-all text-sm shadow-sm ${
                            errors.email ? "border-2 border-red-500 bg-white" : "border border-slate-200 bg-white focus:border-primary placeholder:text-slate-400"
                          }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 text-left">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Special Instructions / Property Notes (Optional)</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Provide any specific details (e.g. keys location, elevator access, pet remarks...)"
                        className="flex w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900 bg-white focus:border-primary placeholder:text-slate-400 focus:outline-none transition-all text-sm shadow-sm resize-y"
                      ></textarea>
                    </div>

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

                    <div className="pt-6 flex justify-between items-center border-t border-slate-100 mt-4">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
                      >
                        <ChevronLeft className="h-4 w-4" /> Back
                      </button>
                      <button
                        type="submit"
                        className="px-8 py-3 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary/95 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                      >
                        Submit Request
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
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










