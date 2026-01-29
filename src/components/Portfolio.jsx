import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X } from "lucide-react"
import { Link } from "react-router-dom"

import imgFolkFiesta from "../assets/folk fiesta.jpg"
import imgWhatsapp from "../assets/WhatsApp Image 2025-10-12 at 1.37.04 PM_20251229_223633_0000.jpg"
import imgJoinCertified from "../assets/Join our certified.jpg"
import vidLMAnnual from "../assets/LM ANNUAL DAY FINAL.mp4"
import vidSISAnnual from "../assets/SIS ANNUAL DAY.mp4"
import vidHMRAnnual from "../assets/hmr annual day 11.mp4"

const projects = [
    {
        title: "LM Annual Day",
        category: "Event Highlight",
        image: imgFolkFiesta,
        videoUrl: vidLMAnnual,
        type: "video"
    },
    {
        title: "SIS Annual Day",
        category: "School Event",
        image: imgWhatsapp,
        videoUrl: vidSISAnnual,
        type: "video"
    },
    {
        title: "HMR Annual Day",
        category: "Celebration",
        image: imgJoinCertified,
        videoUrl: vidHMRAnnual,
        type: "video"
    }
]

const Portfolio = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)

    return (
        <section className="section bg-imago-green">
            <div className="container-imago">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <p className="subheading">Selected Works</p>
                        <h2 className="section-heading mt-4">Defining the brand thru <br /><span className="text-imago-gold italic">visual narrative</span></h2>
                    </div>
                    <Link to="/work" className="btn-outline inline-block text-center">
                        Browse Catalog
                    </Link>
                </div>

                {/* Grid of 3 columns */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                            className="group relative cursor-pointer"
                            onClick={() => setSelectedVideo(project)}
                        >
                            <div className="aspect-video bg-imago-charcoal border border-white/5 overflow-hidden relative">
                                {/* Video Preview */}
                                <video
                                    src={project.videoUrl}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                                    muted
                                    loop
                                    autoPlay
                                    playsInline
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-imago-charcoal to-transparent opacity-60 z-10" />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-16 h-16 bg-imago-gold flex items-center justify-center rounded-full scale-90 group-hover:scale-100 transition-transform duration-500">
                                        <Play className="w-6 h-6 text-imago-charcoal fill-current" />
                                    </div>
                                </div>

                                {/* Info Overlay */}
                                <div className="absolute bottom-6 left-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-[10px] uppercase tracking-[0.4em] text-imago-gold mb-1">{project.category}</p>
                                    <h3 className="text-xl md:text-2xl text-imago-cream">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative w-full max-w-5xl aspect-video"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute -top-12 right-0 text-imago-cream hover:text-imago-gold transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            {/* Video Player */}
                            <video
                                src={selectedVideo.videoUrl}
                                className="w-full h-full border-2 border-imago-gold bg-black"
                                controls
                                autoPlay
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Portfolio
