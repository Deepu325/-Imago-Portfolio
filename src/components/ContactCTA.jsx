import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const ContactCTA = () => {
    return (
        <section className="section bg-imago-gold relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-imago-green/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-imago-green/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="container-imago relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl text-imago-charcoal mb-12">
                        Ready to elevate your brand's <span className="italic">visual story?</span>
                    </h2>

                    <Link
                        to="/contact"
                        className="group inline-flex items-center gap-4 bg-imago-green text-imago-gold px-12 py-6 text-sm uppercase tracking-[0.2em] font-medium transition-all hover:pr-10"
                    >
                        Let's Create Together
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactCTA
