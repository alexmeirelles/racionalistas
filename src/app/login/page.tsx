"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import Image from "next/image";
import iconPic from "../icon.png";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
      },
    });
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 24px",
      background: "var(--black)",
    }}>
      <div style={{
        width: "100%",
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 32,
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image src={iconPic} alt="Racionalistas" width={28} height={28} style={{ filter: "brightness(0) invert(1)" }} />
            <span style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 700, letterSpacing: "0.02em" }}>
              Racionalistas<span style={{ color: "var(--amber)" }}>.</span>
            </span>
          </div>
        </Link>

        {/* Card */}
        <div style={{
          width: "100%",
          background: "var(--gray)",
          border: "1px solid rgba(200,169,126,0.12)",
          borderRadius: 16,
          padding: "40px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{
              fontFamily: "var(--serif)",
              fontSize: 26,
              fontWeight: 400,
              marginBottom: 8,
            }}>
              Entrar
            </h1>
            <p style={{ fontSize: 14, color: "var(--gray-text)", lineHeight: 1.6 }}>
              Acesse sua conta para salvar progresso e desbloquear recursos pro.
            </p>
          </div>

          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              width: "100%",
              padding: "14px 20px",
              background: loading ? "rgba(200,169,126,0.05)" : "rgba(200,169,126,0.08)",
              border: "1px solid rgba(200,169,126,0.25)",
              borderRadius: 10,
              color: loading ? "var(--gray-text)" : "var(--off-white)",
              fontSize: 14,
              fontFamily: "var(--sans)",
              fontWeight: 500,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "rgba(200,169,126,0.14)" }}
            onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "rgba(200,169,126,0.08)" }}
          >
            {!loading && (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            )}
            {loading ? "Redirecionando..." : "Continuar com Google"}
          </button>

          <p style={{ fontSize: 12, color: "var(--gray-text)", textAlign: "center", lineHeight: 1.6 }}>
            Ao entrar, você concorda com os nossos{" "}
            <span style={{ color: "var(--amber)", cursor: "pointer" }}>Termos de Uso</span>.
          </p>
        </div>

        <Link href="/" style={{ fontSize: 13, color: "var(--gray-text)", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--off-white)")}
          onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--gray-text)")}
        >
          ← Voltar ao início
        </Link>
      </div>
    </div>
  );
}
