import { useState } from "react";
import Card from "./Card.tsx";

const SECTIONS = ["experiences", "projects"] as const;

export default function SelectionCard() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <nav className="mb-10 max-w-4xl mx-auto">
                <ul className="flex items-center justify-center gap-8 sm:gap-14 border-b border-gray-200/70 pb-0">
                    {SECTIONS.map((section, index) => (
                        <li
                            key={section}
                            onClick={() => setActiveIndex(index)}
                            className={`
                                pb-4 text-base sm:text-lg font-medium capitalize transition-colors duration-200 border-b-2 -mb-px cursor-pointer
                                ${activeIndex === index
                                    ? "text-gray-800 border-gray-800"
                                    : "text-gray-400 border-transparent hover:text-gray-800"
                                }
                            `}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="w-full h-screen mx-auto overflow-hidden">
                <div className="flex gap-4">

                    {/* Texte vertical gauche */}
                    <div className="absolute hidden sm:flex items-center justify-center shrink-0   h-screen">
                        <span
                            className="text-[120px] font-bold text-gray-200 select-none leading-none"
                            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                            {SECTIONS[activeIndex].toUpperCase()}
                        </span>
                    </div>


                    {/* Contenu sliding */}
                    <div className="flex-1 overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {/* Experiences */}
                            <div className="w-full flex-shrink-0">
                                <div id="experiences" className="space-y-4">
                                    <Card
                                        title="Finrack"
                                        description="Contributed to enhancing an existing ERP by developing new interfaces, improving its architecture, implementing new features, and refining the UX/UI."
                                        icon="/finrack_logo.jpg"
                                        image="/finrack.png"
                                        tags={["Vue", "TypeScript", "Tailwind", "Figma", "Spring boot"]}
                                        github="https://github.com/berin-d/cible-app.git"
                                    />

                                    <Card
                                        title="Solution2Risk"
                                        description="Built and deployed a showcase website (Vue + Laravel) on a Hostinger VPS, then led its full migration to WordPress."
                                        tags={["Laravel", "Hostinger", "Vps", "Wordpress"]}

                                    />
                                </div>
                            </div>

                            {/* Projects */}
                            <div className="w-full flex-shrink-0">
                                <div id="projects" className="space-y-4">
                                    <Card
                                        title="Cible"
                                        description="A modern, dark graphical interface built with Tauri and React."
                                        icon="/app-icon.png"
                                        image="/app-icon.png"
                                        tags={["React", "TypeScript", "Tauri", "Rust", "Spring boot"]}
                                        github="https://github.com/berin-d/cible-app.git"
                                    />

                                    <Card
                                        title="ACW-TECH Managers"
                                        description="Invoice, customer, and service history management application."
                                        image="/acw-tech1.png"
                                        tags={["Nuxt", "Supabase"]}

                                    />
                                </div>


                            </div>

                            {/* Credentials */}
                            <div className="w-full flex-shrink-0">
                                <div id="credentials" className="space-y-4">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}