"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/component/Header";
import { useParams } from "next/navigation";
import {
  Phone,
  Calendar,
  Menu,
  X,
  MapPin,
  Tag,
  ArrowLeft,
  ChevronRight
} from "lucide-react";
import { BLOG_POSTS, BlogPost } from "../blogData";

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

export default function BlogDetailPage() {
  const params = useParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);

  const slug = params?.slug as string;

  useEffect(() => {
    if (slug) {
      const found = BLOG_POSTS.find(p => p.slug === slug);
      if (found) {
        setPost(found);
        // Find related
        const relatedList = BLOG_POSTS.filter(p => found.relatedSlugs.includes(p.slug));
        setRelated(relatedList);
      }
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800">Article not found</h2>
          <a href="/blog" className="mt-4 inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <Header activePage="blog" />

      {/* Main Content */}
      <main className="flex-grow pt-16 pb-20 md:pb-0">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
          {/* Back link */}
          <a href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-semibold mb-8 group transition-colors">
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </a>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 font-heading leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-8 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full text-slate-700">
              <Tag className="w-3.5 h-3.5 text-primary" />
              <span>{post.category}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.date}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-lg mb-10 bg-slate-100">
            <Image
              alt={post.title}
              src={post.image}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Post Content */}
          <div className="prose prose-slate max-w-none text-slate-600 text-base md:text-lg leading-relaxed space-y-6">
            {post.content.map((block, idx) => {
              if (block.type === "heading") {
                return (
                  <h3 key={idx} className="text-xl md:text-2xl font-bold text-slate-900 pt-6 pb-2 font-heading">
                    {block.text}
                  </h3>
                );
              }
              return (
                <p key={idx} className="mb-6">
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-8 font-heading text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map(item => (
                  <a
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="bg-white border border-slate-200/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group p-4 flex flex-col hover:-translate-y-0.5"
                  >
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors flex-grow">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs mt-3 line-clamp-2">
                      {item.intro}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}
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










