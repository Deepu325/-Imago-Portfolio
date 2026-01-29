import React from "react"
import { Helmet } from "react-helmet-async"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import Problems from "@/components/Problems"
import TrustedBy from "@/components/TrustedBy"
import FeedbackSlider from "@/components/FeedbackSlider"
import FeedbackForm from "@/components/FeedbackForm"
import FAQ from "@/components/FAQ"
import ContactCTA from "@/components/ContactCTA"
import Footer from "@/components/Footer"

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Imago | Premium Creative Studio – Motion & Visual Design</title>
                <meta name="description" content="Imago is a premium motion graphics and visual design studio." />
            </Helmet>

            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Problems />
                <TrustedBy />
                <FeedbackSlider />
                <FAQ />
                <FeedbackForm />
                <ContactCTA />
            </main>
            <Footer />
        </>
    )
}

export default Home
