"use client";

import { useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import gsap from "gsap";

interface TransitionLinkProps extends Omit<LinkProps, "href"> {
  href: string;
  children: ReactNode;
  className?: string;
  scroll?: boolean;
}

export function TransitionLink({ href, children, className, scroll = true, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetUrl = href.toString();
    // Don't animate for hash links or current page
    if (targetUrl.startsWith("#") || targetUrl === pathname) {
      return;
    }

    e.preventDefault();

    // GSAP Exit Animation
    // Animate the page container AND the header out smoothly before routing
    gsap.to(["#page-transition-container", "#main-header"], {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        router.push(targetUrl, { scroll });
      }
    });
  };

  return (
    <Link href={href} onClick={handleNavigation} className={className} {...props}>
      {children}
    </Link>
  );
}
