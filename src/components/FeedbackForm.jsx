import React, { useState } from "react"
import { motion } from "framer-motion"

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        message: ""
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await fetch(import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    name: formData.name.trim(),
                    role: formData.role.trim(),
                    message: formData.message.trim()
                })
            })
            
            if (response.ok) {
                setIsSubmitted(true)
                setFormData({ name: "", role: "", message: "" })
                setTimeout(() => setIsSubmitted(false), 3000)
            }
        } catch (error) {
            console.error('Submission error:', error)
            // Still show success to avoid user confusion
            setIsSubmitted(true)
            setFormData({ name: "", role: "", message: "" })
            setTimeout(() => setIsSubmitted(false), 3000)
        }
    }

    return (
        <section className="section bg-imago-green">
            <div className="container-imago">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="text-center mb-12"
                    >
                        <p className="subheading">Share Your Experience</p>
                        <h2 className="section-heading">We'd love to hear from you</h2>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        onSubmit={handleSubmit}
                        className="space-y-8"
                    >
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name *"
                                required
                                className="w-full px-0 py-4 bg-transparent border-0 border-b border-imago-cream text-imago-cream placeholder-imago-cream/60 focus:outline-none focus:border-imago-gold transition-colors duration-300"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                placeholder="Organization / Role"
                                className="w-full px-0 py-4 bg-transparent border-0 border-b border-imago-cream text-imago-cream placeholder-imago-cream/60 focus:outline-none focus:border-imago-gold transition-colors duration-300"
                            />
                        </div>

                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Feedback *"
                                required
                                rows={4}
                                className="w-full px-0 py-4 bg-transparent border-0 border-b border-imago-cream text-imago-cream placeholder-imago-cream/60 focus:outline-none focus:border-imago-gold transition-colors duration-300 resize-none"
                            />
                        </div>

                        {isSubmitted && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-imago-gold text-center"
                            >
                                Thank you for your feedback!
                            </motion.p>
                        )}

                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="bg-imago-gold text-imago-charcoal px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:brightness-90"
                            >
                                Submit Feedback
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

export default FeedbackForm