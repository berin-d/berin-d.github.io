import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{
        background: 'radial-gradient(circle at center top, #F5C1C5 0%, #D4EBF3 30%, #F3F8FC 70%, white 100%)',
      }}
    >
      <header className="flex flex-col items-center justify-center gap-6">

        <div className="flex items-center justify-center">
          <div className="rounded-full border-2 border-white/50 backdrop-blur-sm p-2 w-24 h-24 flex items-center justify-center shadow-lg bg-white/20">
            <span className="text-xs text-gray-400">Image</span>
          </div>
        </div>

        <div className="text-center max-w-2xl">
          <p className="text-gray-800 text-lg font-light leading-relaxed">
            Software developer focused on building robust, scalable, and beautifully designed applications.
          </p>
        </div>

        <div>
          <button className="bg-black hover:bg-gray-800 hover:cursor-pointer animation hover:scale-102 text-white px-6 py-2 rounded-xl transition-all font-medium shadow-md">
            Contact
          </button>
        </div>
      </header>

      <main>
        <div>
          <ul className="flex items-center justify-center gap-8">
            <li className="text-gray-700 hover:text-black cursor-pointer transition-colors font-medium">
              Experiences
            </li>
            <li className="text-gray-700 hover:text-black cursor-pointer transition-colors font-medium">
              Projects
            </li>
            <li className="text-gray-700 hover:text-black cursor-pointer transition-colors font-medium">
              Credentials
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

