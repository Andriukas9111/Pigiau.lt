import { Icon, type IconName } from "@/components/icons";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type Variant = "primary" | "ghost";

const base: Record<Variant, CSSProperties> = {
  primary: {
    background: "#B8F35A",
    color: "#09245B",
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    border: "none",
    boxShadow: "0 10px 24px rgba(184,243,90,.42)",
  },
  ghost: {
    background: "#fff",
    color: "#09245B",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    border: "1.5px solid #cfe2f7",
  },
};

function inner(children: ReactNode, icon?: IconName, iconColor = "#09245B") {
  return (
    <>
      {children}
      {icon && <Icon name={icon} c={iconColor} size={16} sw={2} />}
    </>
  );
}

export function Btn({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  fontSize = 15,
  padding,
  full = false,
  type = "button",
  style,
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  icon?: IconName;
  fontSize?: number;
  padding?: string;
  full?: boolean;
  type?: "button" | "submit";
  style?: CSSProperties;
  ariaLabel?: string;
}) {
  const pad = padding ?? (variant === "primary" ? "16px 28px" : "15px 26px");
  const css: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    fontSize,
    padding: pad,
    borderRadius: 999,
    cursor: "pointer",
    width: full ? "100%" : undefined,
    whiteSpace: "nowrap",
    ...base[variant],
    ...style,
  };
  const cls = variant === "primary" ? "nw-btn-primary" : "nw-btn-ghost";
  if (href) {
    return (
      <Link href={href} className={cls} style={css} aria-label={ariaLabel}>
        {inner(children, icon)}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} style={css} aria-label={ariaLabel}>
      {inner(children, icon)}
    </button>
  );
}
