const TechIcon = ({ icon }) => {
  return (
    <div className="flex-none md:w-32 md:h-32 w-20 lg:h-20 h-10 bg-white flex-center gradient-border marquee-item hover:-translate-y-3 transition-all duration-700">
      {icon.image ? (
        <img src={icon.image} alt={icon.name} className="md:size-16 size-10" />
      ) : (
        <span className="text-[#0d1227] md:text-lg text-xs font-bold uppercase tracking-wide text-center px-2">
          {icon.short || icon.name}
        </span>
      )}
    </div>
  );
};

export default TechIcon;
