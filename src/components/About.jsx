import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import imgLogo from "../assets/new logo.png"

const About = () => {
    return (
        <section className="section bg-imago-green">
            <div className="container-imago">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column: Vision Statement */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <p className="subheading">Our Identity</p>
                        <h2 className="section-heading mt-4">Where vision meets <span className="text-imago-gold italic">precision</span></h2>

                        <div className="space-y-6 mt-8">
                            <p className="text-lg leading-relaxed text-imago-cream font-light">
                                Imago is a creative studio specializing in post-production, motion design, and visual branding. We partner with brands and creators who understand that visual excellence is essential.
                            </p>
                            <p className="text-imago-cream/70">
                                Every project receives our full attention. We don't chase trends; we craft timeless visuals that communicate with clarity and purpose. Our commitment: exceptional quality and work that genuinely serves your brand.
                            </p>

                            <div className="pt-6">
                                <Link to="/about" className="btn-outline">
                                    The Imago Method
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Decorative Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                        className="relative aspect-square"
                    >
                        <div className="absolute inset-0 bg-imago-charcoal border border-white/5 overflow-hidden">
                            {/* Grid Pattern */}
                            <div
                                className="absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                                    backgroundSize: '40px 40px'
                                }}
                            />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-45 h-45 flex items-center justify-center mb-6 mx-auto">
                                        <img src={imgLogo} alt="Imago Logo" className="w-full h-full object-contain drop-shadow-2xl" />
                                    </div>
                                    <p className="text-[10px] uppercase tracking-[0.5em] text-imago-cream/40">Since 2024</p>
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-imago-gold/20" />
                            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-imago-gold/20" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
