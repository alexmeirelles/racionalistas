"use client";

import Link from "next/link";
import Image from "next/image";
import iconPic from "../app/icon.png";
import { useState } from "react";
import { ProfileBubble } from "./ProfileBubble";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="logo" style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
          <Image src={iconPic} alt="Racionalistas" width={24} height={24} style={{ filter: "brightness(0) invert(1)" }} />
          <span>Racionalistas<span>.</span></span>
        </div>
      </Link>

      <button
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link href="/#manifesto" className="nav-link" onClick={() => setIsOpen(false)}>Manifesto</Link>
        <Link href="/wiki" className="nav-link" onClick={() => setIsOpen(false)}>Wiki</Link>
        <Link href="/forum" className="nav-link" onClick={() => setIsOpen(false)}>Fórum</Link>
        <Link href="/#oktal" className="nav-link" onClick={() => setIsOpen(false)}>Oktal</Link>
        <Link href="/#assinar" className="nav-cta" onClick={() => setIsOpen(false)}>Assinar grátis</Link>
        <ProfileBubble />
      </div>
    </nav>
  );
}
