const Antonym = ({ mean }) => {
  return (
    <div className="px-2 w-1/2">
      <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
        <div className="relative z-10 w-full">
          <h2 className="text-xl text-white font-medium title-font mb-2">
            Antonyms
          </h2>
          <p className="leading-relaxed columns-2 md:columns-3">
            {mean.map((val) =>
              val.meanings.map((means) =>
                means.definitions.map((def) => {
                  return def.antonyms?.map((ant) =>
                    ant ? <li key={ant}>{ant}</li> : ""
                  );
                })
              )
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Antonym;
