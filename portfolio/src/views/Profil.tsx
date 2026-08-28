import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Profil() {

    const BOOKING_LINK = "https://calendar.app.google/3uNRZK3Y4LoeGUiw5";


    return (

        <div className="w-full max-w-3xl min-h-screen mx-auto flex flex-col justify-center items-center gap-6 sm:gap-8 px-5 py-16 sm:py-24">

            {/* Animation d'apparition globale */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center w-full"
            >
                {/* Photo de profil (Tailles ajustées pour être harmonieuses sur mobile/tablette/PC) */}
                <div
                    className="rounded-full border-[3px] sm:border-4 border-white/60 backdrop-blur-sm w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center shadow-xl bg-white/20 overflow-hidden flex-shrink-0 mb-4 sm:mb-6"
                >
                    <img
                        src="/profil.jpg"
                        alt="Profile de Drustinac Berin"
                        className="rounded-full w-full h-full object-cover"
                    />
                </div>

                {/* Bloc Texte */}
                <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
                    {/* Le nom passe en h1 avec une vraie hiérarchie */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
                        Drustinac Berin
                    </h1>

                    {/* La description est plus lisible (text-base sur mobile, text-lg sur PC) */}
                    <p className="text-slate-600 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-[90%] sm:max-w-xl">
                        Software developer focused on building robust, scalable, and
                        beautifully designed applications from analysis to deployment.
                    </p>
                </div>

                {/* Bloc Boutons de contact */}
                <div className="mt-8 sm:mt-10 flex flex-col items-center gap-5 w-full">
                    {/* Icônes de contact classiques */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        <a
                            href="mailto:berin358@outlook.fr"
                            aria-label="Envoyer un email"
                            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-blue-200 group"
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="text-xl sm:text-2xl icon-gradient transition-transform group-hover:scale-110" />
                        </a>

                        <a
                            href={BOOKING_LINK}
                            aria-label="Appeler"
                            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-pink-200 group"
                        >
                            <FontAwesomeIcon icon={faPhone} className="text-xl sm:text-2xl icon-gradient transition-transform group-hover:scale-110" />
                        </a>
                    </div>

                </div>
            </motion.div>
        </div>
    );
}