interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:border-accent-green/50 border border-gray-700">
      <div className="text-accent-green mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

