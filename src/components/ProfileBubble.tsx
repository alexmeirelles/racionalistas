"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

interface ProfileData {
  name: string;
  email: string;
  photo: string | null;
  plan: "free" | "pro";
}

const DEFAULT_PROFILE: ProfileData = {
  name: "Visitante",
  email: "",
  photo: null,
  plan: "free",
};

export function ProfileBubble() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState<ProfileData>(DEFAULT_PROFILE);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data }) => {
      if (data.user) {
        setIsLoggedIn(true);
        const meta = data.user.user_metadata ?? {};
        const name: string = meta.full_name ?? meta.name ?? data.user.email?.split("@")[0] ?? "Usuário";
        const email: string = data.user.email ?? "";
        const photo: string | null = meta.avatar_url ?? meta.picture ?? null;

        // Fetch plan from profiles table (shared with Oktal)
        const { data: profileData } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", data.user.id)
          .single();

        const plan: "free" | "pro" = profileData?.role === "pro" || profileData?.role === "ultra" || profileData?.role === "founder"
          ? "pro"
          : "free";

        setProfile({ name, email, photo, plan });
      } else {
        setIsLoggedIn(false);
        setProfile(DEFAULT_PROFILE);
      }
    });
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleLogout = () => {
    window.location.href = "/api/auth/logout";
  };

  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <div style={{ position: "relative", flexShrink: 0 }} ref={panelRef}>
      {/* Avatar bubble */}
      <button
        onClick={() => (isLoggedIn ? setOpen((v) => !v) : router.push("/login"))}
        title="Perfil"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: profile.photo
            ? "transparent"
            : isLoggedIn
            ? "linear-gradient(135deg, #C8A97E, #8B6F47)"
            : "rgba(255,255,255,0.06)",
          border: open
            ? "2px solid var(--amber)"
            : "2px solid rgba(200,169,126,0.25)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: 0,
          transition: "border-color 0.2s, transform 0.15s",
          transform: open ? "scale(1.05)" : "scale(1)",
          marginLeft: 8,
        }}
      >
        {profile.photo ? (
          <img
            src={profile.photo}
            alt="avatar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : isLoggedIn ? (
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#0A0A0A",
              fontFamily: "var(--mono)",
              letterSpacing: "0.05em",
            }}
          >
            {initials || "?"}
          </span>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" fill="rgba(200,169,126,0.4)" />
            <path
              d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
              stroke="rgba(200,169,126,0.4)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 12px)",
            right: 0,
            width: 260,
            background: "rgba(20,20,20,0.97)",
            border: "1px solid rgba(200,169,126,0.12)",
            borderRadius: 14,
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            zIndex: 999,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "16px 16px 14px",
              borderBottom: "1px solid rgba(200,169,126,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            {/* Avatar large */}
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: profile.photo
                  ? "transparent"
                  : "linear-gradient(135deg, #C8A97E, #8B6F47)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
                border: "2px solid rgba(200,169,126,0.15)",
              }}
            >
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt="avatar"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#0A0A0A",
                    fontFamily: "var(--mono)",
                  }}
                >
                  {initials || "?"}
                </span>
              )}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--off-white)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {profile.name}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--gray-text)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginTop: 2,
                }}
              >
                {profile.email}
              </div>
              {/* Plan badge */}
              <div style={{ marginTop: 6 }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "2px 8px",
                    borderRadius: 99,
                    fontSize: 10,
                    fontFamily: "var(--mono)",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    background:
                      profile.plan === "pro"
                        ? "rgba(200,169,126,0.15)"
                        : "rgba(255,255,255,0.06)",
                    color:
                      profile.plan === "pro"
                        ? "var(--amber)"
                        : "var(--gray-text)",
                    border:
                      profile.plan === "pro"
                        ? "1px solid rgba(200,169,126,0.3)"
                        : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {profile.plan === "pro" ? "Pro" : "Free"}
                </span>
              </div>
            </div>
          </div>

          {/* Upgrade prompt for free users */}
          {profile.plan === "free" && (
            <div
              style={{
                padding: "12px 16px",
                borderBottom: "1px solid rgba(200,169,126,0.08)",
                background: "rgba(200,169,126,0.04)",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  color: "var(--gray-text)",
                  lineHeight: 1.5,
                  marginBottom: 8,
                }}
              >
                Desbloqueie recursos avançados no Racionalistas e no Oktal.
              </p>
              <a
                href="/#assinar"
                onClick={() => setOpen(false)}
                style={{
                  display: "inline-block",
                  padding: "6px 14px",
                  borderRadius: 6,
                  background: "rgba(200,169,126,0.12)",
                  border: "1px solid rgba(200,169,126,0.3)",
                  color: "var(--amber)",
                  fontSize: 11,
                  fontFamily: "var(--mono)",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  transition: "background 0.2s",
                }}
              >
                Ver planos →
              </a>
            </div>
          )}

          {/* Footer */}
          <div
            style={{
              padding: "10px 16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a
              href="https://oktal.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 11,
                color: "var(--gray-text)",
                textDecoration: "none",
                fontFamily: "var(--sans)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--amber)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--gray-text)")
              }
            >
              Ir para Oktal ↗
            </a>
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 11,
                color: "var(--gray-text)",
                fontFamily: "var(--sans)",
                transition: "color 0.2s",
                padding: 0,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--off-white)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--gray-text)")
              }
            >
              Sair
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
