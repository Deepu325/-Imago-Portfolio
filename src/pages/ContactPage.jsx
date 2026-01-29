import React from "react"
import { Helmet } from "react-helmet-async"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import { motion } from "framer-motion"

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact | Imago Creative Studio</title>
            </Helmet>

            <Navbar />
            <main className="pt-40">
                <section className="section">
                    <div className="container-imago">
                        <div className="grid lg:grid-cols-2 gap-24">
                            {/* Left Column */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <p className="subheading">Get in touch</p>
                                <h1 className="text-5xl md:text-7xl font-display mb-8">Let's build <br /><span className="text-imago-gold italic">something great.</span></h1>

                                <div className="space-y-12 mt-16">
                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-imago-gold mb-4">Direct Inquiry</h4>
                                        <p className="text-2xl font-display text-imago-cream mb-4">imagoedits@gmail.com</p>
                                        <div className="space-y-1">
                                            <p className="text-lg text-imago-cream/60">+91 63644 84453</p>
                                            <p className="text-lg text-imago-cream/60">+91 85536 03359</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-imago-gold mb-4">Studio Hours</h4>
                                        <p className="text-imago-cream/60">Monday — Friday <br />10:00 — 19:00 IST</p>
                                    </div>

                                    <div>
                                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-imago-gold mb-4">Follow Us</h4>
                                        <div className="flex gap-6 mt-4">
                                            {['Instagram', 'LinkedIn', 'Twitter'].map(social => (
                                                <span key={social} className="text-xs tracking-widest uppercase border-b border-white/10 pb-1 hover:border-imago-gold transition-colors cursor-pointer">
                                                    {social}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column (Form) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-imago-charcoal p-10 md:p-16 border border-white/5"
                            >
                                <ContactForm />
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ContactPage
