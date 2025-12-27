interface TeamCardProps {
  name: string;
  position: string;
  description: string;
}

export default function TeamCard({ name, position, description }: TeamCardProps) {
  return (
    <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 hover:border-accent-turquoise/50 border border-gray-700">
      <div className="w-24 h-24 bg-gradient-to-br from-accent-green to-accent-turquoise rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-dark-primary">
        {name.charAt(0)}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-accent-green mb-3 font-medium">{position}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

