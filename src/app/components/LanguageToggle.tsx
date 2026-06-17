import { Link, useLocation } from "react-router";

export function LanguageToggle() {
  const location = useLocation();
  const isEnglish = location.pathname === "/en" || location.pathname.startsWith("/en/");

  const target = isEnglish
    ? location.pathname.slice(3) || "/"
    : "/en" + (location.pathname === "/" ? "" : location.pathname);

  return (
    <Link
      to={target}
      title={isEnglish ? "Skift til dansk" : "Switch to English"}
      aria-label={isEnglish ? "Skift til dansk" : "Switch to English"}
      className="w-9 h-9 flex items-center justify-center rounded-md text-xl hover:bg-white/10 transition-colors"
    >
      {isEnglish ? "🇩🇰" : "🇬🇧"}
    </Link>
  );
}
