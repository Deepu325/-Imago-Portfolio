import React, { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Import assets
import imgFolkFiesta from "../assets/folk fiesta.jpg"
import imgWhatsapp from "../assets/WhatsApp Image 2025-10-12 at 1.37.04 PM_20251229_223633_0000.jpg"
import imgJoinCertified from "../assets/Join our certified.jpg"
import vidLMAnnual from "../assets/LM ANNUAL DAY FINAL.mp4"
import vidSISAnnual from "../assets/SIS ANNUAL DAY.mp4"
import vidHMRAnnual from "../assets/hmr annual day 11.mp4"
import vidDanceFinal from "../assets/dance final 1.mp4"
import vidEagletonChristmas from "../assets/eagleton christmas_1.mp4"
import vidMathsDay from "../assets/maths day.mp4"
import vidNewYear from "../assets/new year celebration_1.mp4"
import vidParallax from "../assets/parallax zoom_1.mp4"
import vidSankranti from "../assets/sankranti.mp4"
import vidYogaClasses from "../assets/YOGA CLASSES.mp4"


// Full projects list for Work Page
const allProjects = [
    {
        title: "LM Annual Day",
        category: "Event Highlight",
        image: imgFolkFiesta,
        videoUrl: vidLMAnnual
    },
    {
        title: "SIS Annual Day",
        category: "School Event",
        image: imgWhatsapp,
        videoUrl: vidSISAnnual
    },
    {
        title: "HMR Annual Day",
        category: "Celebration",
        image: imgJoinCertified,
        videoUrl: vidHMRAnnual
    },
    {
        title: "Dance Final",
        category: "Performance",
        image: imgFolkFiesta, // Reusing placeholder as no specific image provided
        videoUrl: vidDanceFinal
    },
    {
        title: "Eagleton Christmas",
        category: "Seasonal Event",
        image: imgWhatsapp, // Reusing placeholder
        videoUrl: vidEagletonChristmas
    },
    {
        title: "Maths Day",
        category: "Academic Event",
        image: imgJoinCertified, // Reusing placeholder
        videoUrl: vidMathsDay
    },
    {
        title: "New Year Celebration",
        category: "Celebration",
        image: imgFolkFiesta, // Reusing placeholder
        videoUrl: vidNewYear
    },
    {
        title: "Parallax Zoom",
        category: "Motion Graphics",
        image: imgWhatsapp, // Reusing placeholder
        videoUrl: vidParallax
    },
    {
        title: "Sankranti Festival",
        category: "Cultural Event",
        image: imgJoinCertified, // Reusing placeholder
        videoUrl: vidSankranti
    },
    {
        title: "Yoga Classes",
        category: "Wellness",
        image: imgFolkFiesta, // Reusing placeholder
        videoUrl: vidYogaClasses
    }
]


const WorkPage = () => {
    const [selectedVideo, setSelectedVideo] = useState(null)

    return (
        <>
            <Helmet>
                <title>Selected Work | Imago Creative Studio</title>
                <meta name="description" content="Explore our portfolio of premium video edits, motion graphics, and visual design projects." />
            </Helmet>

            <Navbar />

            <main className="bg-imago-green min-h-screen">
                <section className="section pt-32 pb-20">
                    <div className="container-imago text-center max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="subheading mb-6">Our Portfolio</p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-imago-cream mb-8 leading-tight">
                                Visual stories that <br />
                                <span className="text-imago-gold italic">captivate.</span>
                            </h1>
                        </motion.div>
                    </div>
                </section>

                <section className="section bg-imago-charcoal py-20">
                    <div className="container-imago">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {allProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative cursor-pointer"
                                    onClick={() => setSelectedVideo(project)}
                                >
                                    <div className="aspect-video bg-imago-green/20 border border-white/5 overflow-hidden relative">
                                        <video
                                            src={project.videoUrl}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
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
                                            <h3 className="text-xl text-imago-cream">{project.title}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

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
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute -top-12 right-0 text-imago-cream hover:text-imago-gold transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>

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

            <Footer />
        </>
    )
}

export default WorkPage
