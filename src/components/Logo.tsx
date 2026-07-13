import { useId } from "react";
import "./Logo.css";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  inverted?: boolean;
};

export function Logo({ size = "md", showWordmark = true, inverted = false }: LogoProps) {
  const gradId = useId().replace(/:/g, "");

  return (
    <a href="#topo" className={`logo logo--${size} ${inverted ? "logo--inverted" : ""}`}>
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={gradId} x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0A1628" />
              <stop offset="0.55" stopColor="#1A3A5C" />
              <stop offset="1" stopColor="#E8B84A" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="30" fill={`url(#${gradId})`} />
          <path
            d="M38 14c-10 2-17 11-17 22 0 8 4 15 11 19-12-2-20-13-20-25C12 17 22 8 34 8c1.4 0 2.7.1 4 .3z"
            fill="#F2F5F8"
            opacity="0.95"
          />
          <ellipse cx="40" cy="34" rx="7" ry="11" fill="#E8B84A" opacity="0.92" />
          <ellipse cx="40" cy="34" rx="3" ry="5" fill="#0A1628" />
        </svg>
      </span>
      {showWordmark && (
        <span className="logo__word">
          <span className="logo__name">Íris Lua</span>
          <span className="logo__slogan">Sabores sob o luar</span>
        </span>
      )}
    </a>
  );
}
