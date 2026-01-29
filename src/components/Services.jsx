import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Sparkles, Film, Video, Camera, Image, Megaphone, Palette, ArrowUpRight } from "lucide-react"

const services = [
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

const Services = () => {
    return (
        <section className="section bg-imago-green relative overflow-hidden">
            <div className="container-imago">
                <div className="max-w-3xl mb-20">
                    <p className="subheading">Our Core Offerings</p>
                    <h2 className="section-heading mt-4">Crafting visuals that <span className="text-imago-gold italic">move</span> audiences</h2>
                    <div className="accent-line mt-6" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.slice(0, 3).map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                            className="service-card group cursor-default"
                        >
                            <service.icon className="w-10 h-10 text-imago-gold mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                            <h3 className="text-2xl text-imago-cream mb-4 group-hover:text-imago-gold transition-colors">{service.title}</h3>
                            <p className="text-imago-cream/60 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/services" className="btn-outline group">
                        View All Services
                        <ArrowUpRight className="w-4 h-4 ml-2 inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Services
