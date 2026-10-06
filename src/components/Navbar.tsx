import { FaPlay, FaSearch, FaBell } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-slate-950 text-white h-16 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-60 flex items-center justify-between ">
      <div className="flex items-center gap-30">
        <div className="flex items-center gap-4"><FaPlay className="text-sky-500 text-xl" />
          <span className="cursor-pointer text-xl font-bold">
            STREAMVERSE
          </span>
        </div>
        <div className="flex items-center gap-15 text-sm text-gray-400">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">TV Shows</span>
          <span className="cursor-pointer">Movies</span>
          <span className="cursor-pointer">New & Popular</span>
          <span className="cursor-pointer"> My List</span>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search movies, shows..."
            className="bg-slate-800 w-64 py-1 pl-4 pr-10 rounded-md outline-none"
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2" />
        </div >
        <FaBell className="cursor-pointer" />
        <div className="flex items-center gap-5 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-black font-bold">
            A
          </div>
          <span className="text-sm">Vu Duy Hieu</span>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;

