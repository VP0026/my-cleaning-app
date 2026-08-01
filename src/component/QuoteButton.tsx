"use client";

import React from "react";

interface QuoteButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function QuoteButton({ children, className }: QuoteButtonProps) {
  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  };

  return (
    <button onClick={openModal} className={className} type="button">
      {children}
    </button>
  );
}
