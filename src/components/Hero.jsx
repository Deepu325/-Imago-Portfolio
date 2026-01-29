import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    }

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Subtle Element */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(183,154,0,0.1),transparent_70%)]" />
            </div>

            <div className="container-imago px-6 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="text-center max-w-5xl mx-auto"
                >
                    <motion.div variants={item} className="mb-12">
                        <h1 className="font-logo text-8xl md:text-9xl lg:text-[12rem] text-imago-gold mb-8 tracking-tight">
                            Imago
                        </h1>
                    </motion.div>

                    <motion.h2 variants={item} className="text-3xl md:text-5xl lg:text-6xl font-medium text-imago-cream mb-6 leading-[1.15] max-w-4xl mx-auto">
                        We craft visuals that <span className="text-imago-gold italic">empower</span> brands to communicate with clarity, purpose, and impact.
                    </motion.h2>

                    <motion.p variants={item} className="text-lg md:text-xl text-imago-cream/70 mb-12 max-w-2xl mx-auto">
                        Premium motion graphics and visual design for brands that demand excellence.
                    </motion.p>

                    <motion.div variants={item} className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link to="/work" className="btn-gold w-full md:w-auto">
                            View Our Work
                        </Link>
                        <Link to="/contact" className="btn-outline w-full md:w-auto">
                            Contact Us
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-px h-16 bg-gradient-to-b from-imago-gold to-transparent" />
            </motion.div>
        </section>
    )
}

export default Hero
