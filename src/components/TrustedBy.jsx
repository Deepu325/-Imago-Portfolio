import React from "react"
import { motion } from "framer-motion"
import KaagranthaLogo from "../assets/Kaagrantha.png"
import EisaLogo from "../assets/eisa.webp"

const clients = [
    {
        name: "Kalagrantha – The Art Hub",
        logo: KaagranthaLogo
    },
    {
        name: "Eagleton International School",
        logo: EisaLogo
    }
]

const TrustedBy = () => {
    return (
        <section className="py-20 bg-imago-charcoal border-y border-white/5 overflow-hidden">
            <div className="container-imago">
                <p className="text-[10px] uppercase tracking-[0.5em] text-imago-cream/30 text-center mb-16">Partners in Excellence</p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="group flex flex-col items-center gap-6"
                        >
                            <div className="relative h-20 md:h-24 w-auto flex items-center justify-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-full w-auto object-contain"
                                />
                            </div>
                            <span className="text-sm md:text-base text-imago-cream/20 group-hover:text-imago-gold transition-all duration-500 cursor-default tracking-widest text-center uppercase font-light">
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TrustedBy

