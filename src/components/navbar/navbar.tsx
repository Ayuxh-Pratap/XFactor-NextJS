"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ScrollProgressProvider,
  ScrollProgress,
} from "@/components/animate-ui/primitives/animate/scroll-progress"

type NavItem = {
    label: string
    href: string
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
    { label: "Why XFractor", href: "#why-xfractor" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Our Approach", href: "#our-approach" },
    { label: "Our Work", href: "#our-work" },
    { label: "Our Collective", href: "#our-collective" },
]

type NavbarProps = {
    /**
     * Primary navigation items.
     * Defaults to the XFractor sections from the design.
     */
    items?: NavItem[]
    /**
     * CTA configuration – set to undefined to hide the button.
     */
    cta?: {
        label: string
        href: string
    }
}

function BrandMark() {
    return (
        <Link
            href="/"
            aria-label="XFractor home"
            className="flex items-center gap-2"
        >
            <span className="text-xl font-semibold tracking-tight">
                <span className="bg-gradient-to-tr from-[#b441ff] via-[#d44bff] to-[#7347ff] bg-clip-text text-transparent">
                    X
                </span>
                <span className="text-foreground/90">Fractor</span>
            </span>
        </Link>
    )
}

function NavLinks({ items }: { items: NavItem[] }) {
    if (!items.length) return null

    return (
        <nav aria-label="Primary">
            <ul className="hidden gap-8 text-sm font-medium text-foreground/70 md:flex">
                {items.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className="transition-all duration-200 hover:text-foreground hover:opacity-100"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

function CtaButton({
    cta,
}: {
    cta?: {
        label: string
        href: string
    }
}) {
    if (!cta) return null

    return (
        <Button
            asChild
            size="lg"
            className="rounded-full bg-[#9F54E6] px-6 text-sm font-semibold text-white shadow-none transition-colors hover:bg-[#7d2fbe]"
        >
            <Link href={cta.href} className="inline-flex items-center gap-2">
                <span>{cta.label}</span>
                <ArrowRight className="size-4" />
            </Link>
        </Button>
    )
}

export function Navbar({
    items = DEFAULT_NAV_ITEMS,
    cta = {
        label: "Let's talk",
        href: "#contact",
    },
}: NavbarProps) {
    return (
        <ScrollProgressProvider global>
            <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-4 md:px-8">
                <div className="mx-auto flex max-w-7xl items-center justify-center">
                    <div className="inline-flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-white/80 via-white/50 to-white/80 px-4 py-2 shadow-[0_8px_20px_rgba(43,16,95,0.15)] backdrop-blur-xl ring-1 ring-white/60 dark:from-white/10 dark:via-white/5 dark:to-white/10 dark:ring-white/15 md:px-6 md:py-3">
                        <BrandMark />

                        <div className="flex flex-1 items-center justify-center">
                            <NavLinks items={items} />
                        </div>

                        <div className="flex shrink-0 items-center justify-end">
                            <CtaButton cta={cta} />
                        </div>
                    </div>
                </div>
                {/* Scroll Progress Indicator */}
                <div className="absolute left-0 right-0 h-[3px] overflow-hidden rounded-b-xl mx-11">
                    <ScrollProgress
                        mode="width"
                        className="h-full bg-gradient-to-r from-[#7c2cff] via-[#9F54E6] to-[#7c2cff]"
                    />
                </div>
            </header>
        </ScrollProgressProvider>
    )
}

export default Navbar


