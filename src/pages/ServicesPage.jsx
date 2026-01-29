import React from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Sparkles, Film, Video, Camera, Image, Megaphone, Palette, ArrowRight } from "lucide-react"

const servicesData = [
    {
        icon: Sparkles,
        title: "Motion Graphics",
        description: "Dynamic animations that bring your brand story to life with visual energy."
    },
    {
        icon: Film,
        title: "Corporate Video Editing",
        description: "Professional edits that communicate your corporate message with absolute clarity."
    },
    {
        icon: Video,
        title: "Commercials & Ads",
        description: "Compelling advertisements designed to capture attention and drive measurable action."
    },
    {
        icon: Camera,
        title: "Event Films & Highlights",
        description: "Cinematic highlight reels that preserve your event's defining and emotional moments."
    },
    {
        icon: Megaphone,
        title: "Promotional & Celebration Edits",
        description: "Engaging content that celebrates milestones and promotes your brand with impact."
    },
    {
        icon: Palette,
        title: "Poster Design & Visual Branding",
        description: "Visual branding that commands attention and reinforces a premium brand identity."
    },
    {
        icon: Image,
        title: "Campaign & Social Media Creatives",
        description: "Scroll-stopping content optimized for maximum engagement across all social platforms."
    },
]

const ServicesPage = () => {
    return (
        <>
            <Helmet>
                <title>Services | Imago Creative Studio</title>
                <meta name="description" content="Explore our premium services including motion graphics, corporate video editing, commercials, and visual branding." />
            </Helmet>

            <Navbar />

            <main className="bg-imago-green min-h-screen">
                <section className="section pt-32 pb-20">
                    <div className="container-imago text-center max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="subheading mb-6">Our Expertise</p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-imago-cream mb-8 leading-tight">
                                Visual solutions for <br />
                                <span className="text-imago-gold italic">ambitious</span> brands.
                            </h1>
                        </motion.div>
                    </div>
                </section>

                <section className="section bg-imago-charcoal py-20">
                    <div className="container-imago">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {servicesData.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="service-card group flex flex-col h-full bg-imago-green/20 hover:bg-imago-green/40 border border-white/5 hover:border-imago-gold/30 transition-all duration-500 p-8 rounded-sm"
                                >
                                    <div className="mb-6">
                                        <service.icon className="w-12 h-12 text-imago-gold group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <h3 className="text-2xl text-imago-cream mb-4 group-hover:text-imago-gold transition-colors font-display">
                                        {service.title}
                                    </h3>
                                    <p className="text-imago-cream/70 leading-relaxed font-light mb-8 flex-grow">
                                        {service.description}
                                    </p>

                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-imago-gold hover:text-imago-cream transition-colors mt-auto group-hover:gap-4"
                                    >
                                        Inquire Now
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Simplified Contact CTA Section specifically for Services */}
                <section className="py-20 bg-imago-green border-t border-white/5">
                    <div className="container-imago text-center">
                        <h2 className="text-3xl md:text-4xl font-display text-imago-cream mb-8">
                            Ready to start your project?
                        </h2>
                        <Link to="/contact" className="btn-gold">
                            Get in Touch
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default ServicesPage
