"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ScrollProgress } from "./magicui/scroll-progress"
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("#home")

    const navItems = useMemo(() => [
        { href: "#home", label: "หน้าแรก" },
        { href: "#about", label: "เกี่ยวกับ" },
        { href: "#experience", label: "ประสบการณ์" },
        { href: "#skills", label: "ทักษะ" },
        { href: "#projects", label: "ผลงาน" },
        { href: "#contact", label: "ติดต่อ" },
    ], [])

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)

        // ใช้ IntersectionObserver เพื่อเช็คว่ากำลังอยู่ section ไหน
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`)
                    }
                })
            },
            { threshold: 0.6 } // ต้องเห็น 60% ของ section ถึงจะนับว่า active
        )

        navItems.forEach((item) => {
            const section = document.querySelector(item.href)
            if (section) observer.observe(section)
        })

        return () => {
            window.removeEventListener("scroll", handleScroll)
            observer.disconnect()
        }
    }, [navItems])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
    }

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md " : "bg-transparent"}`}
        >
            <ScrollProgress className="top-[64px]" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="text-2xl font-bold flex items-center gap-2">
                        Nimit&apos;s Portfolio
                        <AnimatedThemeToggler />
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => scrollToSection(item.href.slice(1))}
                                className={`transition-colors duration-200 ${activeSection === item.href
                                    ? "text-red-500"
                                    : "text-muted-foreground"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block py-2 transition-colors duration-200 ${activeSection === item.href
                                    ? "text-red-500"
                                    : "text-muted-foreground"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    )
}
