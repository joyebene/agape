import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "px-5 sm:px-8 py-2 md:py-3 rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300";

  const variantClasses = {
    primary:
      "bg-linear-to-r from-[#E8B923] to-[#D4AF37] text-[#0A2540] hover:scale-105 shadow-xl",
    secondary:
      "border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;