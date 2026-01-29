import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import imgLogo from "../assets/new logo.png"

const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-imago-green/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-8"
                }`}
        >
            <div className="container-imago px-6 flex items-center justify-between">
                <Link to="/" className="group flex items-center gap-3">
                    <img src={imgLogo} alt="Imago Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
                    <span className="font-logo text-2xl tracking-tighter text-imago-cream border-l border-white/20 pl-3">Imago</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm uppercase tracking-[0.2em] font-medium transition-colors relative group ${location.pathname === link.path ? "text-imago-gold" : "text-imago-cream"
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-full h-px bg-imago-gold transition-transform duration-500 ${location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 translate-x-1 group-hover:translate-x-0"
                                }`} />
                        </Link>
                    ))}
                </div>

                {/* Mobile Trigger */}
                <button
                    className="md:hidden text-imago-cream"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-imago-charcoal overflow-hidden border-b border-white/10"
                    >
                        <div className="container px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-xl font-display text-imago-cream hover:text-imago-gold transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
