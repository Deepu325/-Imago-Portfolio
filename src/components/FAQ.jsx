import React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqData = [
    {
        id: "item-1",
        question: "What is your typical project timeline?",
        answer: "Project timelines vary depending on complexity. A standard motion graphics piece typically takes 2-3 weeks, while full brand identity packages range from 4-6 weeks."
    },
    {
        id: "item-2",
        question: "How do you handle revisions?",
        answer: "We include two rounds of major revisions in every project. We believe in getting it right, so we focus on deep alignment during the discovery phase to minimize friction later."
    },
    {
        id: "item-3",
        question: "Do you offer post-production only services?",
        answer: "Yes! We specialize in professional video editing, color grading, and motion design for already-shot footage."
    },
    {
        id: "item-4",
        question: "What industries do you specialize in?",
        answer: "While we are creative generalists, we have deep experience in fintech, luxury branding, and educational institutions."
    }
]

const FAQ = () => {
    return (
        <section className="section bg-green/95">
            <div className="container-imago max-w-4xl">
                <div className="mb-12 md:mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="subheading"
                    >
                        Capabilities & Clarity
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-heading"
                    >
                        Frequently asked <span className="text-gold italic">questions</span>
                    </motion.h2>
                    <div className="accent-line" />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqData.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-b border-cream/10 px-2"
                            >
                                <AccordionTrigger className="text-cream hover:text-gold hover:no-underline text-lg md:text-xl py-6 transition-colors">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-cream/70 text-base leading-relaxed pb-6">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}

export default FAQ
