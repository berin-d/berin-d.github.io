import { useRef } from "react";
import Profil from "../views/Profil";
import SelectionCard from "../views/SelectionCard";
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
                className="w-full max-w-3xl h-screen flex flex-col justify-center items-center gap-7 px-6 pt-20 pb-28 sm:pt-28 sm:pb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <Profil />
            </motion.header>
            <motion.main
                ref={mainRef}
                className="w-full min-h-screen mx-auto px-6 pb-16 justify-center pt-20"
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