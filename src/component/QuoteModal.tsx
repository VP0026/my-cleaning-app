"use client";

import React, { useState } from "react";
import {
  X,
  Sparkles,
  Waves,
  Bug,
  Leaf,
  Check,
  BedDouble,
  Layers,
  Hammer,
  Sofa,
  Droplets,
  LifeBuoy,
  Truck,
  Dumbbell,
  Building2,
  Wine,
  ShoppingBag,
} from "lucide-react";

interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const SERVICES: Service[] = [
  { id: "bond", name: "Bond Cleaning", icon: <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "carpet", name: "Carpet Steam Cleaning", icon: <Waves className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "spring", name: "Spring Cleaning", icon: <Leaf className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "pest", name: "Pest Control / Flea", icon: <Bug className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "airbnb", name: "AirBnB Cleaning", icon: <BedDouble className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "deep", name: "Deep Cleaning", icon: <Layers className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "builder", name: "Builder Cleaning", icon: <Hammer className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "upholstery", name: "Upholstery Cleaning", icon: <Sofa className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "pressure", name: "Pressure Washing", icon: <Droplets className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "pool", name: "Pool Maintenance", icon: <LifeBuoy className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "removalist", name: "Removalist", icon: <Truck className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "gym", name: "Gym Clean", icon: <Dumbbell className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "office", name: "Office Cleaning", icon: <Building2 className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "pub", name: "Pub & Bar Clean", icon: <Wine className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { id: "retail", name: "Retail Store Clean", icon: <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" /> },
];

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    selectedServices: [] as string[],
    agree: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => {
      const selected = prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter((id) => id !== serviceId)
        : [...prev.selectedServices, serviceId];
      return { ...prev, selectedServices: selected };
    });
    if (errors.services) setErrors(prev => ({ ...prev, services: "" }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleCheckboxChange = () => {
    setFormData((prev) => ({ ...prev, agree: !prev.agree }));
    if (errors.agree) setErrors(prev => ({ ...prev, agree: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Failed to submit quote');
        alert("Failed to send quote request. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      selectedServices: [],
      agree: false,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[650px] overflow-hidden bg-[#c5c6c8] rounded-[32px] shadow-2xl animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-1 text-slate-700 hover:text-slate-900 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-4 sm:p-5">
          <h3 className="text-xl sm:text-[26px] font-bold text-center text-[#1a2b4b] mb-3 sm:mb-4 font-heading">
            Quick Request
          </h3>

          {submitted ? (
            <div className="text-center py-6 flex flex-col items-center justify-center gap-3">
              <div className="h-12 w-12 sm:h-14 sm:w-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <Check className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#1a2b4b]">
                Thank you, {formData.name}!
              </h4>
              <p className="text-sm sm:text-base text-slate-700">
                Your quote request has been received. Our team will contact you
                shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-5 py-2 bg-[#1a2b4b] text-white rounded-xl text-sm font-semibold hover:bg-opacity-90 transition-colors"
              >
                Request Another Quote
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-2 sm:space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`flex h-9 sm:h-10 w-full rounded-xl px-3 sm:px-4 py-1.5 text-[#1a2b4b] placeholder:text-[#8ba0c9] focus:outline-none transition-all text-sm sm:text-base font-medium ${errors.name
                      ? "border-2 border-red-500 bg-white"
                      : formData.name ? "border-2 border-[#1a2b4b] bg-[#f8f9fa] focus:ring-4 focus:ring-[#1a2b4b]/10 shadow-[0_0_10px_rgba(26,43,75,0.2)]" : "border border-transparent bg-[#e4e5e7] focus:bg-[#f8f9fa] focus:border-[#1a2b4b]"
                      }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`flex h-9 sm:h-10 w-full rounded-xl px-3 sm:px-4 py-1.5 text-[#1a2b4b] placeholder:text-[#8ba0c9] focus:outline-none transition-all text-sm sm:text-base font-medium ${errors.email
                      ? "border-2 border-red-500 bg-white"
                      : formData.email ? "border-2 border-[#1a2b4b] bg-[#f8f9fa] focus:ring-4 focus:ring-[#1a2b4b]/10 shadow-[0_0_10px_rgba(26,43,75,0.2)]" : "border border-transparent bg-[#e4e5e7] focus:bg-[#f8f9fa] focus:border-[#1a2b4b]"
                      }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`flex h-9 sm:h-10 w-full rounded-xl px-3 sm:px-4 py-1.5 text-[#1a2b4b] placeholder:text-[#8ba0c9] focus:outline-none transition-all text-sm sm:text-base font-medium ${errors.phone
                      ? "border-2 border-red-500 bg-white"
                      : formData.phone ? "border-2 border-[#1a2b4b] bg-[#f8f9fa] focus:ring-4 focus:ring-[#1a2b4b]/10 shadow-[0_0_10px_rgba(26,43,75,0.2)]" : "border border-transparent bg-[#e4e5e7] focus:bg-[#f8f9fa] focus:border-[#1a2b4b]"
                      }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Location */}
                <div>
                  <input
                    type="text"
                    name="location"
                    placeholder="Suburb / Location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`flex h-9 sm:h-10 w-full rounded-xl px-3 sm:px-4 py-1.5 text-[#1a2b4b] placeholder:text-[#8ba0c9] focus:outline-none transition-all text-sm sm:text-base font-medium ${errors.location
                      ? "border-2 border-red-500 bg-white"
                      : formData.location ? "border-2 border-[#1a2b4b] bg-[#f8f9fa] focus:ring-4 focus:ring-[#1a2b4b]/10 shadow-[0_0_10px_rgba(26,43,75,0.2)]" : "border border-transparent bg-[#e4e5e7] focus:bg-[#f8f9fa] focus:border-[#1a2b4b]"
                      }`}
                  />
                  {errors.location && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.location}</p>}
                </div>
              </div>

              {/* Services */}
              <div className="pt-1">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-2.5">
                  {SERVICES.map((service) => {
                    const isSelected = formData.selectedServices.includes(
                      service.id
                    );
                    return (
                      <button
                        type="button"
                        key={service.id}
                        onClick={() => handleServiceToggle(service.id)}
                        className={`rounded-xl p-1 flex flex-col items-center justify-center gap-1 text-center transition-all duration-200 min-h-[44px] sm:min-h-[50px] cursor-pointer ${isSelected
                          ? "bg-[#1a2b4b] text-white shadow-md"
                          : "bg-[#e4e5e7] text-[#1a2b4b] hover:bg-[#d6d8db]"
                          }`}
                      >
                        <div className="mb-0.5 sm:mb-1 scale-90 sm:scale-100">{service.icon}</div>
                        <span className="text-[10px] sm:text-xs font-bold leading-[1.1] sm:leading-tight">
                          {service.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {errors.services && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.services}</p>}
              </div>

              {/* Terms */}
              <div className="pt-2 pb-1 px-1">
                <div className="flex items-center gap-2 sm:gap-3">
                  <input
                    type="checkbox"
                    id="modal-agree"
                    checked={formData.agree}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 sm:h-5 sm:w-5 rounded sm:rounded-md border-2 border-[#1a2b4b] bg-transparent text-[#1a2b4b] focus:ring-[#1a2b4b] focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer appearance-none checked:bg-[#1a2b4b] checked:after:content-['✓'] checked:after:text-white checked:after:block checked:after:text-center checked:after:text-[10px] sm:checked:after:text-sm checked:after:leading-[14px] sm:checked:after:leading-4"
                  />
                  <label
                    htmlFor="modal-agree"
                    className="text-xs sm:text-sm text-slate-700 leading-tight sm:leading-normal"
                  >
                    I agree to the{" "}
                    <a
                      className="underline hover:text-[#1a2b4b] transition-colors"
                      href="/terms"
                    >
                      Terms &amp; Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      className="underline hover:text-[#1a2b4b] transition-colors"
                      href="/privacy"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
                {errors.agree && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.agree}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-lg sm:text-xl font-bold py-2.5 sm:py-3 px-6 rounded-xl text-white shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:opacity-90 bg-gradient-to-r from-[#0f1f3a] via-[#1a2b4b] to-[#99aabf] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Sending..." : "Get Free Quote"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
