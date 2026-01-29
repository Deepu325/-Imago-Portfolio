import React, { useState } from "react"
import { motion } from "framer-motion"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSent(true)
        }, 2000)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    if (isSent) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
            >
                <div className="w-20 h-20 bg-imago-gold flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-imago-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="section-heading">Message Sent.</h3>
                <p className="text-imago-cream/60">We will get back to you within 24 hours.</p>
                <button
                    onClick={() => setIsSent(false)}
                    className="mt-8 text-imago-gold uppercase tracking-widest text-sm font-medium"
                >
                    Send another message
                </button>
            </motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-imago-gold">Your Name</label>
                    <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="input-imago"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-imago-gold">Email Address</label>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="input-imago"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-imago-gold">Subject</label>
                <input
                    required
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="New Project Inquiry"
                    className="input-imago"
                />
            </div>

            <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-imago-gold">Your Message</label>
                <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your brand vision..."
                    className="input-imago resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold w-full disabled:opacity-50"
            >
                {isSubmitting ? "Initiating..." : "Send Inquiry"}
            </button>
        </form>
    )
}

export default ContactForm
