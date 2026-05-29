import { mandir } from '../assets/imageConstants';

interface LiveDarshanCardProps {
  onOpen: () => void;
}

const LiveDarshanCard = ({ onOpen }: LiveDarshanCardProps) => {
  return (
    <div
      onClick={onOpen}
      className="container-lg max-w-[1600px] mx-auto relative w-full h-96 rounded-2xl overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mandir.mataji})`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
        {/* LIVE Badge */}
        <div className="absolute top-6 left-6 flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
          <span className="text-white font-bold text-sm tracking-wider">LIVE</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
          माँ बगलामुखी माता मंदिर
        </h2>
        <p className="text-white/90 text-lg text-center mb-8">Live Darshan</p>

        {/* Play Button */}
        <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-xl">
          <svg
            className="w-12 h-12 text-red-600 ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default LiveDarshanCard;
