import React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const problems = [
    "Inconsistent brand messaging across digital platforms",
    "Low audience retention on video content",
    "Visual identity that feels outdated or misaligned",
    "Complexity in communicating high-concept ideas",
    "Lack of professional post-production quality"
]

const Problems = () => {
    return (
        <section className="section bg-imago-charcoal">
            <div className="container-imago">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <p className="subheading">The Challenge</p>
                        <h2 className="section-heading mt-4">Why brands <span className="text-imago-gold italic">struggle</span> to connect</h2>
                        <p className="text-imago-cream/60 mt-8 mb-12 max-w-lg">
                            In a world of constant visual noise, being heard requires more than just high-quality pixels—it requires intentional narrative and precise execution.
                        </p>

                        <div className="space-y-4">
                            {problems.map((problem, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-5 h-5 flex-shrink-0 text-imago-gold transition-transform group-hover:scale-125">
                                        <CheckCircle2 strokeWidth={3} size={20} />
                                    </div>
                                    <span className="text-imago-cream/80 group-hover:text-imago-cream transition-colors">{problem}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/3] bg-imago-green p-1 border border-white/10">
                            <div className="w-full h-full border border-imago-gold/20 flex items-center justify-center p-12">
                                <blockquote className="text-3xl text-center leading-relaxed italic text-imago-cream">
                                    "Good design is obvious. <br />
                                    <span className="text-imago-gold">Great design is invisible.</span>"
                                    <cite className="block not-italic text-[10px] uppercase tracking-[0.5em] text-imago-cream/30 mt-8">— Joe Sparano</cite>
                                </blockquote>
                            </div>
                        </div>
                        {/* Decorative Dots */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-imago-gold/10 grid grid-cols-4 gap-2 p-4">
                            {[...Array(16)].map((_, i) => <div key={i} className="w-1 h-1 bg-imago-gold rounded-full" />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Problems
