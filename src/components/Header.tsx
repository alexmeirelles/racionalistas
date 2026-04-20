"use client";

import Link from "next/link";
import Image from "next/image";
import iconPic from "../app/icon.png";
import { ProfileBubble } from "./ProfileBubble";

export function Header() {
  return (
    <nav>
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="logo" style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
          <Image src={iconPic} alt="Racionalistas" width={24} height={24} style={{ filter: "grayscale(1) brightness(5)" }} />
          <span>Racionalistas<span>.</span></span>
        </div>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        <div className="nav-links">
          <Link href="/wiki" className="nav-link">Wiki</Link>
          <Link href="/forum" className="nav-link">Fórum</Link>
          <Link href="/#oktal" className="nav-link">Oktal</Link>
          <Link href="/#assinar" className="nav-cta">Assinar grátis</Link>
        </div>
        <ProfileBubble />
      </div>
    </nav>
  );
}
