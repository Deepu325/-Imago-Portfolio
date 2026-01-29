import React from "react"
import { Link } from "react-router-dom"
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react"
import imgLogo from "../assets/new logo.png"

const Footer = () => {
    return (
        <footer className="py-20 bg-imago-green border-t border-white/5">
            <div className="container-imago px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    {/* Brand & About */}
                    <div className="space-y-8">
                        <Link to="/" className="flex items-center gap-3">
                            <img src={imgLogo} alt="Imago Logo" className="h-14 w-auto object-contain" />
                        </Link>
                        <p className="text-imago-cream/50 text-base max-w-sm leading-relaxed italic">
                            Designed for impact.
                        </p>
                        <div className="flex gap-6 items-center text-imago-cream/30">
                            <Instagram className="w-5 h-5 hover:text-imago-gold transition-colors cursor-pointer" />
                            <Linkedin className="w-5 h-5 hover:text-imago-gold transition-colors cursor-pointer" />
                            <Twitter className="w-5 h-5 hover:text-imago-gold transition-colors cursor-pointer" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:justify-self-center">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-imago-gold mb-10">Navigation</h4>
                        <ul className="space-y-4">
                            {['About', 'Services', 'Work', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/${item.toLowerCase()}`}
                                        className="text-imago-cream/60 hover:text-imago-gold text-sm uppercase tracking-widest transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:justify-self-end">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-imago-gold mb-10">Inquiries</h4>
                        <div className="space-y-6">
                            <a
                                href="mailto:imagoedits@gmail.com"
                                className="group flex items-center gap-4 text-imago-cream/80 hover:text-imago-gold transition-colors"
                            >
                                <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-imago-gold transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="text-lg">imagoedits@gmail.com</span>
                            </a>

                            <div className="space-y-2">
                                <a href="tel:+916364484453" className="block text-imago-cream/60 hover:text-imago-gold transition-colors text-sm tracking-widest">+91 63644 84453</a>
                                <a href="tel:+918553603359" className="block text-imago-cream/60 hover:text-imago-gold transition-colors text-sm tracking-widest">+91 85536 03359</a>
                            </div>

                            <p className="text-imago-cream/30 text-xs italic tracking-loose">
                                Currently taking bookings for Q2 2026.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-[0.4em] text-imago-cream/20">
                    <p>© 2026 Imago Creative Studio. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <span className="hover:text-imago-gold transition-colors cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-imago-gold transition-colors cursor-pointer">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
