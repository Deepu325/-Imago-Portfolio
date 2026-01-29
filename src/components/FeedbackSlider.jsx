import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { feedbackData } from "./feedbackData"

const FeedbackSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [feedback, setFeedback] = useState(feedbackData)
    const [loading, setLoading] = useState(true)

    // Fetch approved feedback from Google Sheets
    useEffect(() => {
        const fetchApprovedFeedback = async () => {
            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbwPi9DBeYLHzpRplu1eJBg12CkYY5SfHSYPPvbPWPYa-cvgNbzyCBasxbbk9S8gpC9xmA/exec')
                
                if (response.ok) {
                    const data = await response.json()
                    console.log('Fetched data:', data)
                    
                    // Filter out empty objects and validate data
                    const validFeedback = data.filter(item => 
                        item && 
                        item.name && 
                        item.message && 
                        item.name.trim() !== '' && 
                        item.message.trim() !== ''
                    )
                    
                    if (validFeedback.length > 0) {
                        setFeedback(validFeedback)
                        console.log('Using Google Sheets data:', validFeedback)
                    } else {
                        console.log('No valid feedback found, using fallback data')
                    }
                } else {
                    console.error('Failed to fetch:', response.status)
                }
            } catch (error) {
                console.error('Fetch error:', error)
            } finally {
                setLoading(false)
            }
        }
        
        fetchApprovedFeedback()
    }, [])

    useEffect(() => {
        if (!isPaused && feedback.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === feedback.length - 1 ? 0 : prevIndex + 1
                )
            }, 5000)

            return () => clearInterval(interval)
        }
    }, [isPaused, feedback.length])

    if (loading) {
        return (
            <section className="py-20 md:py-32 bg-imago-charcoal border-y border-white/5">
                <div className="container-imago">
                    <div className="text-center">
                        <div className="w-8 h-0.5 bg-imago-gold mx-auto animate-pulse" />
                    </div>
                </div>
            </section>
        )
    }

    if (feedback.length === 0) {
        return null
    }

    return (
        <section className="py-20 md:py-32 bg-imago-charcoal border-y border-white/5">
            <div className="container-imago">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="text-center mb-16"
                >
                    <p className="text-[10px] uppercase tracking-[0.5em] text-imago-cream/30 mb-4">Client Voices</p>
                    <h2 className="section-heading">What our partners say</h2>
                </motion.div>

                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="relative h-64 md:h-48 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="text-center px-8">
                                    {/* Quote accent */}
                                    <div className="w-8 h-0.5 bg-imago-gold mx-auto mb-8" />

                                    <blockquote className="text-xl md:text-2xl text-imago-cream font-light leading-relaxed mb-8 max-w-3xl">
                                        "{feedback[currentIndex].message}"
                                    </blockquote>

                                    <div className="space-y-1">
                                        <p className="text-imago-cream font-medium text-lg">
                                            {feedback[currentIndex].name}
                                        </p>
                                        <p className="text-imago-cream/60 text-sm">
                                            {feedback[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Slide indicators */}
                    <div className="flex justify-center space-x-2 mt-12">
                        {feedback.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-imago-gold'
                                    : 'bg-imago-cream/20 hover:bg-imago-cream/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeedbackSlider