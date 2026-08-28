
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

    <div className="relative w-full max-w-4xl mx-auto bg-white backdrop-blur-sm border border-gray-200/80 rounded-2xl p-8 sm:p-10 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">


      <div className="hidden sm:block absolute top-0 right-0 bottom-0 w-2/5 pointer-events-none z-0 overflow-hidden">
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
        <div className="absolute inset-0 bg-radial-[ellipse_farthest-corner_at_center] from-transparent from-30% to-white"></div>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row justify-between gap-8 items-start">


        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100/60 shadow-sm overflow-hidden">
                <img src={icon ? icon : "/database-solid-full.svg"} alt={title} className="w-full h-full object-cover" />
              </div>
        
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              {title}
            </h2>
          </div>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span className="px-4 py-1.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg border border-gray-200/70">
                {tag}
              </span>
            ))}
          </div>
        </div>


        <div className="flex gap-3 shrink-0 self-start">
            <a
              href={github ? github : "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`w-12 h-12 rounded-full flex items-center justify-center bg-gray-900 text-white shadow-sm transition-all duration-200  ${github ? 'hover:bg-gray-700 hover:scale-105' : 'opacity-50 cursor-not-allowed'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
            </a>
          
          

        </div>
      </div>
    </div>
  );
}
