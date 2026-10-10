interface Props {
  title: string;
  description: string;
  icon: string;
  image: string;
  tags: string[];
  github?: string;
}

export default function Card({ title, description, icon, image, tags, github }: Props) {
  return (
    <div className="relative w-full max-w-5xl mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      
      {/* Image de fond très subtile */}
      <div className="absolute top-0 right-0 bottom-0 w-1/3 pointer-events-none z-0">
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.04] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
      </div>

      <div className="relative z-10 p-8 sm:p-12">
        
        {/* Header : Titre + Icone GitHub sur la même ligne */}
        <div className="flex flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 shrink-0 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
              <img 
                src={icon || "/database-solid-full.svg"} 
                alt="" 
                className="w-6 h-6 object-contain" 
              />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
              {title}
            </h2>
          </div>

          <a
            href={github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-12 h-12 rounded-lg ${
              github ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
          </a>
        </div>

        {/* Corps de la carte */}
        <div className="max-w-3xl">
          <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-10">
            {description}
          </p>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium uppercase tracking-widest rounded-lg border border-[#E5E7EB]/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}