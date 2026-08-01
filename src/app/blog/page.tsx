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
  Tag,
  ChevronRight
} from "lucide-react";
import { BLOG_POSTS } from "./blogData";

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

export default function BlogListingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <Header activePage="blog" />

      {/* Main Content */}
      <main className="flex-grow pt-16 pb-20 md:pb-0">
        <div className="bg-slate-50 pt-20 pb-16 sm:pt-28 sm:pb-24 relative overflow-hidden">
          {/* Decorative blurs */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="container mx-auto px-4 relative z-10 text-center max-w-6xl">
            <div className="max-w-2xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 font-heading">
                Our <span className="text-primary">Blog</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                Get the latest cleaning tips, guides, and useful information to help you maintain a spotless home.
              </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {BLOG_POSTS.map(post => (
                <article
                  key={post.slug}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group text-left flex flex-col h-full hover:-translate-y-1 border border-slate-100"
                >
                  <a className="block relative h-56 md:h-64 overflow-hidden bg-slate-100" href={`/blog/${post.slug}`}>
                    <Image
                      alt={post.title}
                      src={post.image}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </a>

                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-4">
                      <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full text-slate-700">
                        <Tag className="w-3.5 h-3.5 text-primary" />
                        <span>{post.category}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h2>

                    <p className="text-slate-500 mb-8 line-clamp-3 flex-grow text-sm leading-relaxed">
                      {post.intro}
                    </p>

                    <div className="mt-auto">
                      <a
                        className="inline-flex items-center font-bold text-primary hover:text-primary/80 transition-colors text-sm"
                        href={`/blog/${post.slug}`}
                      >
                        <span>Read More</span>
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <section className="relative py-16 sm:py-24 overflow-hidden bg-primary text-center text-white">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] z-0"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 drop-shadow-md font-heading">
              Moving Out? Let Us Handle the Cleaning.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Focus on your move while we ensure your property is spotless and inspection-ready.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap font-extrabold rounded-full px-8 py-4 text-base bg-white text-primary hover:bg-slate-100 shadow-xl transition-all transform hover:-translate-y-0.5 animate-pulse-glow"
              >
                <span>Get a Free Quote</span>
                <Calendar className="h-5 w-5" />
              </button>
              <a
                href="tel:0756201066"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap font-extrabold rounded-full px-8 py-4 text-base bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-xl transition-all transform hover:-translate-y-0.5 animate-pulse-glow-white"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
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










