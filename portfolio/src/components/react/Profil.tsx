// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Profil() {
    return (
        <div className="w-full max-w-3xl h-screen flex flex-col justify-center items-center gap-7 px-6 pt-20 pb-12 sm:pt-28 sm:pb-16">

            <div
                className="rounded-full border-2 border-white/60 backdrop-blur-sm w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center shadow-lg bg-white/20 overflow-hidden"
            >
                <img
                    src="/profil.jpg"
                    alt="Profile"
                    className="rounded-full w-full h-full object-cover"
                />
            </div>

            <p className="text-lg sm:text-2xl  leading-relaxed text-center max-w-sm sm:max-w-2xl">
                Drustinac Berin
            </p>

            <p
                className="text-gray-700 text-lg sm:text-2xl font-light leading-relaxed text-center max-w-sm sm:max-w-2xl"
            >
                Software developer focused on building robust, scalable, and
                beautifully designed applications from analysis to deployment.
            </p>



            <div className="flex gap-2">
                <a
                    href="mailto:berin358@outlook.fr"
                    className="flex w-42 items-center justify-center gap-2 bg-white shadow-sm border border-white/50 px-8 py-3 rounded-full transition-all duration-200 font-medium hover:scale-101 text-base sm:text-lg"
                >
                    <FontAwesomeIcon icon={faEnvelope} className=" text-2xl" />
                    <p>Contact</p>
                </a>

                <a
                    href="tel:+32488423140"
                     className="flex w-42 items-center justify-center gap-2 bg-white shadow-sm  border border-white/50 px-8 py-3 rounded-full transition-all duration-200 font-medium hover:scale-101 text-base sm:text-lg"
                >
                    <FontAwesomeIcon icon={faPhone} className="text-2xl" />
                    <p className="text-sm">+32488423140</p>
                </a>

            </div>

          
        </div>

    )
}