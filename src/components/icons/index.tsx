import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function ArrowRightIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

export function MinusIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function PlusIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function PhoneIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.97.72 2.9a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.18-1.27a2 2 0 0 1 2.11-.45c.93.35 1.9.59 2.9.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function MailIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

export function MenuIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function DropletIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M12 3s7 7 7 12a7 7 0 1 1-14 0c0-5 7-12 7-12Z" />
    </svg>
  );
}
