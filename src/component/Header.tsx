"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Calendar, Menu, X, ChevronDown } from "lucide-react";
import QuoteModal from "@/component/QuoteModal";

interface HeaderProps {
  activePage?: string;
}

export default function Header({ activePage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handler = () => setQuoteModalOpen(true);
    window.addEventListener("open-quote-modal", handler);
    return () => window.removeEventListener("open-quote-modal", handler);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/50 py-3 sm:py-4 transition-all duration-300">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a aria-label="Home" className="relative block w-32 h-10 sm:w-44 sm:h-12 transition-transform duration-300 hover:scale-105" href="/">
            <Image
              src="/logos/JBC-logo-JB-with-full-name-noBG.png"
              alt="Bond Clean Specialist Logo"
              fill
              className="object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-slate-200/50 shadow-sm">
            <a
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activePage === "home"
                ? "bg-primary/10 text-primary font-semibold"
                : "text-slate-600 hover:text-primary hover:bg-slate-50"
                }`}
              href="/"
            >
              Home
            </a>
            <a
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activePage === "about"
                ? "bg-primary/10 text-primary font-semibold"
                : "text-slate-600 hover:text-primary hover:bg-slate-50"
                }`}
              href="/about"
            >
              About Us
            </a>

            {/* Services Dropdown (Desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5 outline-none ${activePage === "services"
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }`}
              >
                Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${desktopDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {desktopDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/50 p-2 py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="flex flex-col gap-1">
                    <a
                      href="/services#bond-cleaning"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Bond Cleaning
                    </a>
                    <a
                      href="/services#carpet-cleaning"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Carpet Steam Cleaning
                    </a>
                    <a
                      href="/services#spring-cleaning"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Spring Cleaning
                    </a>
                    <a
                      href="/services#pest-control"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Pest Control &amp; Flea Treatment
                    </a>
                    <a
                      href="/services#oven-bbq-cleaning"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Oven &amp; BBQ Cleaning
                    </a>
                    <a
                      href="/services#airbnb-cleaning"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      AirBnB Cleaning
                    </a>
                    <a
                      href="/services#deep-cleaning"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Deep Cleaning
                    </a>
                    <a
                      href="/services#builder-cleaning"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Builder Cleaning
                    </a>
                    <a
                      href="/services#upholstery-cleaning"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Upholstery Cleaning
                    </a>
                    <a
                      href="/services#pressure-washing"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Pressure Washing
                    </a>
                    <a
                      href="/services#pool-maintenance"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Pool Maintenance
                    </a>
                    <a
                      href="/services#removalist"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Removalist
                    </a>
                    <a
                      href="/services#gym-cleaning"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Gym Clean
                    </a>
                    <a
                      href="/services#office-cleaning"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Office Cleaning
                    </a>
                    <a
                      href="/services#pub-hospitality-cleaning"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Pub &amp; Hospitality Clean
                    </a>
                    <a
                      href="/services#retail-store-cleaning"
                      className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl transition-all"
                    >
                      Retail Store Cleaning
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activePage === "suburbs"
                ? "bg-primary/10 text-primary font-semibold"
                : "text-slate-600 hover:text-primary hover:bg-slate-50"
                }`}
              href="/suburbs"
            >
              Suburbs
            </a>
            <a
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activePage === "gallery"
                ? "bg-primary/10 text-primary font-semibold"
                : "text-slate-600 hover:text-primary hover:bg-slate-50"
                }`}
              href="/gallery"
            >
              Gallery
            </a>
            <a
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activePage === "blog"
                ? "bg-primary/10 text-primary font-semibold"
                : "text-slate-600 hover:text-primary hover:bg-slate-50"
                }`}
              href="/blog"
            >
              Blog
            </a>
            <a
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activePage === "contact"
                ? "bg-primary/10 text-primary font-semibold"
                : "text-slate-600 hover:text-primary hover:bg-slate-50"
                }`}
              href="/contact"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0756201066"
              aria-label="Call Us"
              className="justify-center whitespace-nowrap text-sm font-semibold px-4 hidden xl:flex items-center gap-3 rounded-full bg-primary text-white hover:bg-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 pl-1 pr-6 py-1 h-11 relative overflow-hidden animate-pulse-glow"
            >
              <div className="animate-shimmer-sweep-sync"></div>
              <div className="bg-white rounded-full p-2 flex items-center justify-center shadow-sm text-primary shrink-0">
                <Phone className="h-4 w-4 fill-current" />
              </div>
              <span className="text-base font-bold whitespace-nowrap">099XXXXXXXX</span>
            </a>

            <button
              onClick={() => setQuoteModalOpen(true)}
              className="group rounded-full bg-amber-400 text-primary hover:bg-primary hover:text-white font-extrabold shadow-md transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden animate-pulse-glow-amber pl-1 pr-4 py-1 h-9 sm:h-11 cursor-pointer items-center gap-2 hidden sm:flex"
            >
              <div className="animate-shimmer-sweep-sync"></div>
              <div className="bg-primary rounded-full p-1.5 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-white text-white group-hover:text-primary">
                <Calendar className="h-4 w-4" />
              </div>
              <span className="font-bold text-xs sm:text-sm whitespace-nowrap">Get a Quote</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-100 lg:hidden text-slate-900"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col p-6 animate-in slide-in-from-top duration-300 overflow-y-auto">
          <nav className="flex flex-col gap-4 text-lg font-semibold text-slate-800">
            <a onClick={() => setMobileMenuOpen(false)} href="/" className={`pb-2 border-b border-slate-100 hover:text-primary transition-colors ${activePage === "home" ? "text-primary" : ""}`}>
              Home
            </a>
            <a onClick={() => setMobileMenuOpen(false)} href="/about" className={`pb-2 border-b border-slate-100 hover:text-primary transition-colors ${activePage === "about" ? "text-primary" : ""}`}>
              About Us
            </a>

            {/* Services Dropdown (Mobile) */}
            <div className="pb-2 border-b border-slate-100">
              <button
                onClick={() => setMobileServicesOpen(prev => !prev)}
                className={`w-full flex items-center justify-between hover:text-primary transition-colors text-left ${activePage === "services" ? "text-primary font-semibold" : ""
                  }`}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-2 animate-in slide-in-from-top-1 duration-200">
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#bond-cleaning"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Bond Cleaning
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#carpet-cleaning"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Carpet Steam Cleaning
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#spring-cleaning"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Spring Cleaning
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#pest-control"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Pest Control &amp; Flea Treatment
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#oven-bbq-cleaning"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Oven &amp; BBQ Cleaning
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#airbnb-cleaning"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    AirBnB Cleaning
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#deep-cleaning"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Deep Cleaning
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#builder-cleaning"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Builder Cleaning
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#upholstery-cleaning"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Upholstery Cleaning
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#pressure-washing"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Pressure Washing
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#pool-maintenance"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Pool Maintenance
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#removalist"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Removalist
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#gym-cleaning"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Gym Clean
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#office-cleaning"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Office Cleaning
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#pub-hospitality-cleaning"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Pub &amp; Hospitality Clean
                  </a>
                  <a
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    href="/services#retail-store-cleaning"
                    className="py-1.5 text-sm font-semibold text-slate-500 hover:text-primary transition-all"
                  >
                    Retail Store Cleaning
                  </a>
                </div>
              )}
            </div>

            <a onClick={() => setMobileMenuOpen(false)} href="/suburbs" className={`pb-2 border-b border-slate-100 hover:text-primary transition-colors ${activePage === "suburbs" ? "text-primary" : ""}`}>
              Suburbs
            </a>
            <a onClick={() => setMobileMenuOpen(false)} href="/gallery" className={`pb-2 border-b border-slate-100 hover:text-primary transition-colors ${activePage === "gallery" ? "text-primary" : ""}`}>
              Gallery
            </a>
            <a onClick={() => setMobileMenuOpen(false)} href="/blog" className={`pb-2 border-b border-slate-100 hover:text-primary transition-colors ${activePage === "blog" ? "text-primary" : ""}`}>
              Blog
            </a>
            <a onClick={() => setMobileMenuOpen(false)} href="/contact" className={`pb-2 border-b border-slate-100 hover:text-primary transition-colors ${activePage === "contact" ? "text-primary" : ""}`}>
              Contact
            </a>
          </nav>
          <div className="mt-8 flex flex-col gap-4">
            <a
              href="tel:0756201066"
              className="w-full flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-primary text-white font-bold shadow-md hover:bg-slate-900 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Call: 099XXXXXXXX</span>
            </a>
          </div>
        </div>
      )}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}







