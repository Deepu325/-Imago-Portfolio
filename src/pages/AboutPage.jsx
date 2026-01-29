import React from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Sparkles, Film, Palette } from "lucide-react"

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Imago Creative Studio</title>
                <meta name="description" content="Learn about Imago - a premium post-production and design studio crafting visuals that help brands communicate with clarity and impact." />
            </Helmet>

            <Navbar />

            <main className="bg-imago-green">
                {/* Hero Section */}
                <section className="section pt-32">
                    <div className="container-imago max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="font-logo text-7xl md:text-8xl lg:text-9xl text-imago-gold mb-8">
                                Imago
                            </h1>
                            <p className="text-2xl md:text-3xl text-imago-cream/90 leading-relaxed max-w-3xl mx-auto">
                                At Imago, we craft visuals that help brands communicate with <span className="text-imago-gold italic">clarity</span> and <span className="text-imago-gold italic">impact</span>.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="section bg-imago-charcoal">
                    <div className="container-imago max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-16"
                        >
                            {/* Who We Are */}
                            <div className="border-l-2 border-imago-gold pl-8 md:pl-12">
                                <h2 className="text-3xl md:text-4xl text-imago-cream mb-6">Who We Are</h2>
                                <p className="text-lg md:text-xl text-imago-cream/80 leading-relaxed">
                                    We are a premium post-production and design studio, working with companies, organizations, and businesses to transform ideas and moments into powerful digital content.
                                </p>
                            </div>

                            {/* Our Expertise - Video */}
                            <div className="grid md:grid-cols-12 gap-8 items-start">
                                <div className="md:col-span-2 flex justify-center md:justify-start">
                                    <div className="w-16 h-16 bg-imago-gold/10 border border-imago-gold/30 flex items-center justify-center">
                                        <Film className="w-8 h-8 text-imago-gold" />
                                    </div>
                                </div>
                                <div className="md:col-span-10">
                                    <h3 className="text-2xl md:text-3xl text-imago-cream mb-4">Video Production Excellence</h3>
                                    <p className="text-lg text-imago-cream/70 leading-relaxed">
                                        Our expertise includes <span className="text-imago-gold">motion graphics</span>, <span className="text-imago-gold">corporate video editing</span>, <span className="text-imago-gold">event films</span>, function highlights, <span className="text-imago-gold">commercials</span>, and celebration edits — all produced with professional precision and creative direction.
                                    </p>
                                </div>
                            </div>

                            {/* Our Expertise - Design */}
                            <div className="grid md:grid-cols-12 gap-8 items-start">
                                <div className="md:col-span-2 flex justify-center md:justify-start">
                                    <div className="w-16 h-16 bg-imago-gold/10 border border-imago-gold/30 flex items-center justify-center">
                                        <Palette className="w-8 h-8 text-imago-gold" />
                                    </div>
                                </div>
                                <div className="md:col-span-10">
                                    <h3 className="text-2xl md:text-3xl text-imago-cream mb-4">Visual Branding & Design</h3>
                                    <p className="text-lg text-imago-cream/70 leading-relaxed mb-4">
                                        Beyond video, we also specialize in <span className="text-imago-gold">poster design</span> and <span className="text-imago-gold">visual branding</span>.
                                    </p>
                                    <p className="text-lg text-imago-cream/70 leading-relaxed">
                                        From advertisement posters and promotional creatives to event posters, campaign designs, and commercial ad visuals, we build designs that help brands stand out and leave a lasting impression.
                                    </p>
                                </div>
                            </div>

                            {/* Our Promise */}
                            <div className="border-l-2 border-imago-gold pl-8 md:pl-12">
                                <h2 className="text-3xl md:text-4xl text-imago-cream mb-6">Our Promise</h2>
                                <p className="text-lg md:text-xl text-imago-cream/80 leading-relaxed">
                                    Every project we deliver is <span className="text-imago-gold italic">purpose-driven</span>, <span className="text-imago-gold italic">polished</span>, and designed to represent businesses with <span className="text-imago-gold italic">excellence</span>.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="section bg-imago-green">
                    <div className="container-imago max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="section-heading text-center mb-16">What Drives Us</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: Sparkles,
                                        title: "Creative Excellence",
                                        description: "We approach every project with artistic vision and technical mastery."
                                    },
                                    {
                                        icon: Film,
                                        title: "Professional Precision",
                                        description: "Attention to detail and commitment to quality in every frame."
                                    },
                                    {
                                        icon: Palette,
                                        title: "Brand Alignment",
                                        description: "Visuals that authentically represent your brand's identity and values."
                                    }
                                ].map((value, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="text-center p-8 bg-imago-charcoal border border-white/5"
                                    >
                                        <value.icon className="w-12 h-12 text-imago-gold mx-auto mb-6" />
                                        <h3 className="text-xl text-imago-cream mb-4">{value.title}</h3>
                                        <p className="text-imago-cream/60 leading-relaxed">{value.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default AboutPage
