import { useRef } from "react";
import Profil from "./react/Profil";
import SelectionCard from "./react/SelectionCard";
import { motion } from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Main() {
    const mainRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="min-h-screen flex flex-col items-center"
            style={{ background: "radial-gradient(circle at center top, #F5C1C5 0%, #D4EBF3 30%, #F3F8FC 70%, white 100%)" }}
        >
            <motion.header
                className="w-full max-w-3xl h-screen flex flex-col justify-center items-center gap-7 px-6 pt-20 pb-12 sm:pt-28 sm:pb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <Profil />

                {/* Bouton scroll vers main */}
                <motion.button
                    onClick={() => mainRef.current?.scrollIntoView({ behavior: "smooth" })}
                    className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors hover:cursor-pointer"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                >
                    <span className="text-sm tracking-widest uppercase">See works</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </motion.button>
            </motion.header>

            <motion.main
                ref={mainRef}
                className="w-full min-h-screen mx-auto px-6 pb-16 flex-1 flex flex-col justify-center pt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <SelectionCard />
            </motion.main>

            <motion.footer
                className="w-full text-center text-sm text-gray-400 py-8 border-t border-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={sectionVariants}
            >
                <p>© 2026 My Portfolio. All rights reserved.</p>
            </motion.footer>
        </div>
    );
}