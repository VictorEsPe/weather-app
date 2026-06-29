import IconSearch from "../../assets/images/icon-search.svg";

export function SearchBar() {
  return (
    <section className="text-white font-bold py-6  flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl md:text-4xl text-center">
        How's the weather looking today?
      </h1>

      <form className="w-[90%] max-w-120 flex flex-col sm:flex-row gap-2">
        <div className="relative w-full">
          <img
            src={IconSearch}
            alt="Ícone de lupa"
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search for a city..."
            className="bg-bg-gray w-full py-2 px-12 font-extralight rounded-lg"
          />
        </div>
        <button
          className="bg-btn-blue hover:bg-btn-blue-hover py-2 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out
        px-4"
        >
          Search
        </button>
      </form>
    </section>
  );
}
