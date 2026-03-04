function Badge({ language }) {
  const name = typeof language === "object" ? language.name : language;
  const image = typeof language === "object" ? language.image : null;

  return (
    <div id="badge" className="mx-auto md:gap-5 rounded-lg px-2 flex items-center border gap-1">
      {image ? (
        <img
          src={image}
          width={28}
          height={28}
          alt={name}
          className="md:mx-auto object-contain"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      ) : null}
      <span className="text-white text-sm md:text-lg text-balance">{name}</span>
    </div>
  );
}

export default Badge;
