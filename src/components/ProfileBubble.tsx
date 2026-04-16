"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

interface ProfileData {
  name: string;
  email: string;
  photo: string | null;
  plan: "free" | "pro";
  userId: string | null;
}

const DEFAULT_PROFILE: ProfileData = {
  name: "Visitante",
  email: "",
  photo: null,
  plan: "free",
  userId: null,
};

async function uploadAvatar(file: File, userId: string): Promise<string> {
  const supabase = createClient();
  const ext = file.name.split(".").pop() ?? "jpg";
  const path = `${userId}.${ext}`;

  const { error } = await supabase.storage
    .from("avatars")
    .upload(path, file, { upsert: true, contentType: file.type });

  if (error) throw error;

  const { data } = supabase.storage.from("avatars").getPublicUrl(path);
  const url = `${data.publicUrl}?t=${Date.now()}`;

  await supabase.from("profiles").update({ avatar_url: url }).eq("id", userId);

  return url;
}

export function ProfileBubble() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState<ProfileData>(DEFAULT_PROFILE);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [dropdownAlign, setDropdownAlign] = useState<"right" | "left">("right");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data }) => {
      if (data.user) {
        setIsLoggedIn(true);
        const meta = data.user.user_metadata ?? {};
        const name: string = meta.full_name ?? meta.name ?? data.user.email?.split("@")[0] ?? "Usuário";
        const email: string = data.user.email ?? "";
        const googlePhoto: string | null = meta.avatar_url ?? meta.picture ?? null;

        const { data: profileData } = await supabase
          .from("profiles")
          .select("role, avatar_url")
          .eq("id", data.user.id)
          .single();

        const plan: "free" | "pro" =
          profileData?.role === "pro" || profileData?.role === "ultra" || profileData?.role === "founder"
            ? "pro"
            : "free";

        // Priority: stored avatar > Google photo
        const photo: string | null = profileData?.avatar_url ?? googlePhoto;

        setProfile({ name, email, photo, plan, userId: data.user.id });
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

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !profile.userId) return;
    setUploading(true);
    try {
      const url = await uploadAvatar(file, profile.userId);
      setProfile((p) => ({ ...p, photo: url }));
    } catch (err) {
      console.error("Erro ao enviar foto:", err);
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

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
        onClick={() => {
          if (!isLoggedIn) { router.push("/login"); return; }
          if (!open && panelRef.current) {
            const rect = panelRef.current.getBoundingClientRect();
            setDropdownAlign(rect.left < 260 ? "left" : "right");
          }
          setOpen((v) => !v);
        }}
        title="Perfil"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: profile.photo ? "transparent" : isLoggedIn ? "linear-gradient(135deg, #C8A97E, #8B6F47)" : "rgba(255,255,255,0.06)",
          border: open ? "2px solid var(--amber)" : "2px solid rgba(200,169,126,0.25)",
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
          <img src={profile.photo} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : isLoggedIn ? (
          <span style={{ fontSize: 11, fontWeight: 700, color: "#0A0A0A", fontFamily: "var(--mono)", letterSpacing: "0.05em" }}>
            {initials || "?"}
          </span>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" fill="rgba(200,169,126,0.4)" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(200,169,126,0.4)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 12px)",
            ...(dropdownAlign === "right" ? { right: 0 } : { left: 0 }),
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
          <div style={{ padding: "16px 16px 14px", borderBottom: "1px solid rgba(200,169,126,0.08)", display: "flex", alignItems: "center", gap: 12 }}>
            {/* Avatar with upload */}
            <label style={{ position: "relative", cursor: uploading ? "wait" : "pointer", flexShrink: 0 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: profile.photo ? "transparent" : "linear-gradient(135deg, #C8A97E, #8B6F47)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  border: "2px solid rgba(200,169,126,0.15)",
                  opacity: uploading ? 0.5 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                {profile.photo ? (
                  <img src={profile.photo} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#0A0A0A", fontFamily: "var(--mono)" }}>
                    {initials || "?"}
                  </span>
                )}
              </div>
              {/* Edit badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "var(--amber)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 9,
                  color: "#0A0A0A",
                  fontWeight: 700,
                }}
              >
                {uploading ? "…" : "+"}
              </div>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handlePhotoUpload}
                disabled={uploading}
                style={{ display: "none" }}
              />
            </label>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--off-white)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {profile.name}
              </div>
              <div style={{ fontSize: 11, color: "var(--gray-text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginTop: 2 }}>
                {profile.email}
              </div>
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
                    background: profile.plan === "pro" ? "rgba(200,169,126,0.15)" : "rgba(255,255,255,0.06)",
                    color: profile.plan === "pro" ? "var(--amber)" : "var(--gray-text)",
                    border: profile.plan === "pro" ? "1px solid rgba(200,169,126,0.3)" : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {profile.plan === "pro" ? "Pro" : "Free"}
                </span>
              </div>
            </div>
          </div>

          {/* Upgrade prompt */}
          {profile.plan === "free" && (
            <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(200,169,126,0.08)", background: "rgba(200,169,126,0.04)" }}>
              <p style={{ fontSize: 11, color: "var(--gray-text)", lineHeight: 1.5, marginBottom: 8 }}>
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
                }}
              >
                Ver planos →
              </a>
            </div>
          )}

          {/* Footer */}
          <div style={{ padding: "10px 16px", display: "flex", justifyContent: "space-between" }}>
            <a
              href="https://oktal.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 11, color: "var(--gray-text)", textDecoration: "none", fontFamily: "var(--sans)", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--amber)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gray-text)")}
            >
              Ir para Oktal ↗
            </a>
            <button
              onClick={handleLogout}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, color: "var(--gray-text)", fontFamily: "var(--sans)", transition: "color 0.2s", padding: 0 }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--off-white)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gray-text)")}
            >
              Sair
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
