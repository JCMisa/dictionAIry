import Antonym from "./Antonym";
import Synonym from "./Synonym";

const Example = ({ mean }) => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 pb-24 mx-auto flex flex-wrap">
        <div className="lg:w-full mx-auto">
          <div className="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
            <div className="relative z-10 w-full">
              <h2 className="text-2xl text-white font-medium title-font mb-2">
                Examples
              </h2>
              <p className="leading-relaxed columns-2 md:columns-3">
                {mean.map((val) =>
                  val.meanings.map((means) =>
                    means.definitions.map((def, index) => (
                      <div key={index}>
                        {def.example ? <li>{def.example}</li> : ""}
                      </div>
                    ))
                  )
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <Synonym mean={mean} />
            <Antonym mean={mean} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Example;
