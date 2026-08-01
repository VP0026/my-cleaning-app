"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/component/Header";
import {
  Phone,
  Calendar,
  Menu,
  X,
  MapPin
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

const GOLD_COAST_SUBURBS = [
  "Carrara", "Coombabah", "Coolangatta", "Elanora", "Pimpama", "Hope Island", "Helensvale",
  "Coomera", "Upper Coomera", "Southport", "Surfers Paradise", "Paradise Point", "Broadbeach",
  "Palm Beach", "Main Beach", "Pacific Pines", "Runaway Bay", "Parkwood", "Broadbeach Waters",
  "Bundall", "Arundel", "Burleigh Heads", "Burleigh Waters", "Currumbin", "Currumbin Waters",
  "Tugun", "Advancetown", "Bonogin", "Mudgeeraba", "Reedy Creek", "Robina", "Miami",
  "Mermaid Waters", "Nerang", "Ormeau", "Oxenford", "Springbrook", "Tweed Heads", "Varsity Lakes"
];

const BRISBANE_SUBURBS = [
  "Brisbane City", "Spring Hill", "Fortitude Valley", "Chermside", "Kedron", "Stafford",
  "Aspley", "Acacia Ridge", "Alberton", "Ashgrove", "Brendale", "Carseldine", "Annerley",
  "Capalaba", "Carindale", "Clayfield", "Coorparoo", "East Brisbane", "Forest Lake", "Geebung",
  "Greenslopes", "Heathwood", "Indooroopilly", "Ipswich", "Kangaroo Point", "Kenmore",
  "Logan", "Moorooka", "Morningside", "Mount Gravatt", "Norman Park", "North Lakes", "Nundah",
  "Redcliffe", "Springfield", "Springfield Lakes", "St Lucia", "Sunnybank", "Toowong",
  "Woolloongabba", "Wynnum", "Taigum"
];

export default function SuburbsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <Header activePage="suburbs" />

      {/* Main Content */}
      <main className="flex-grow pt-16 pb-20 md:pb-0">
        <div className="pt-24 bg-slate-50 relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

          <section className="py-12 sm:py-24 max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 animate-in fade-in slide-in-from-bottom-6 duration-700">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-slate-950 font-heading leading-tight">
                Our Cleaning Service Areas
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                From the heart of the Gold Coast to all across Brisbane, our professional cleaning teams provide prompt, high-quality service wherever you are.
              </p>
            </div>

            <div className="space-y-24 sm:space-y-36">
              {/* Gold Coast Suburbs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 animate-in fade-in slide-in-from-left-6 duration-700">
                  <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    Gold Coast Suburbs
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3.5 gap-x-6">
                    {GOLD_COAST_SUBURBS.map((suburb) => (
                      <div key={suburb} className="flex items-center gap-2 group cursor-default">
                        <MapPin className="h-4 w-4 text-primary shrink-0 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm sm:text-base text-slate-600 group-hover:text-primary transition-colors font-medium">
                          {suburb}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 relative animate-in fade-in slide-in-from-right-6 duration-700">
                  <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl transform rotate-3"></div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-slate-200/50 bg-white flex items-center justify-center p-8 transition-all hover:shadow-2xl duration-300">
                    <Image
                      alt="Gold Coast Service Areas Map"
                      src="/images/reference/suburbs-map.svg"
                      width={500}
                      height={500}
                      className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Brisbane Suburbs */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1 relative animate-in fade-in slide-in-from-left-6 duration-700">
                  <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl transform -rotate-3"></div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border border-slate-200/50 bg-white flex items-center justify-center p-8 transition-all hover:shadow-2xl duration-300">
                    <Image
                      alt="Brisbane Service Areas Map"
                      src="/images/reference/suburbs-map.svg"
                      width={500}
                      height={500}
                      className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 animate-in fade-in slide-in-from-right-6 duration-700">
                  <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    Brisbane Suburbs
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3.5 gap-x-6">
                    {BRISBANE_SUBURBS.map((suburb) => (
                      <div key={suburb} className="flex items-center gap-2 group cursor-default">
                        <MapPin className="h-4 w-4 text-primary shrink-0 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm sm:text-base text-slate-600 group-hover:text-primary transition-colors font-medium">
                          {suburb}
                        </span>
                      </div>
                    ))}
                  </div>
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










