import heroImage from "../assets/astronaut.jpg";
import sentinal from "../assets/sentinal.png";
import arcane from "../assets/arcane.jpg";
import foundation from "../assets/foundation.jpg";
import cyperpunk from "../assets/cyperpunk.jpg";
import city from "../assets/city.jpg"
import dune from "../assets/dune.jpg"
import eclipse from "../assets/eclipse.jpg"
import ironheart from "../assets/ironheart.jpg"
import nova from "../assets/nova.jpg"
import rise from "../assets/rise.jpg"
import cyper from "../assets/cyper.jpg"
import astra from "../assets/astra.jpg"
import depth from "../assets/depth.jpg"
import odyssey from "../assets/odyssey.jpg"
import shadow from "../assets/shadow.jpg"
import strangerthing from "../assets/strangerthing.jpg"
import society from "../assets/society.jpg"
import reckoning from "../assets/reckoning.jpg"





import { FaPlay, FaPlus, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
function HomePage() {
  const [currentMovie, setCurrentMovie] = useState(0);
  const [trendingIndex, setTrendingIndex] = useState(0);
  const hero = heroMovies[currentMovie];
  const nextMovie = () => {
    setCurrentMovie((currentMovie + 1) % heroMovies.length)
  };
  const prevMovie = () => {
    setCurrentMovie((currentMovie - 1 + heroMovies.length) % heroMovies.length)
  };
  const nextTrending = () => {
    if (trendingIndex < trendingMovies.length - 6) {
      setTrendingIndex(trendingIndex + 1)
    }
  }
  const prevTrending = () => {
    if (trendingIndex > 0) {
      setTrendingIndex(trendingIndex - 1)
    }
  }

  const [newReleaseIndex, setNewReleaseIndex] = useState(0);
  const nextNewRelease = () => {
    if (newReleaseIndex < newReleaseMovies.length - 6) {
      setNewReleaseIndex(newReleaseIndex + 1)
    }
  }
  const prevNewRelease = () => {
    if (newReleaseIndex > 0) {
      setNewReleaseIndex(newReleaseIndex - 1)
    }
  }
  return (
    <main className="bg-slate-900 min-h-screen text-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-60 pb-16  ">
      <section className="relative pt-10">
        <img
          src={hero.image}
          alt={hero.title}
          className="w-full h-120 object-cover rounded-xl"
        />

        <div className="absolute left-20 top-1/2 -translate-y-1/2">
          <p className="text-xm tracking-widest mb-3">PREMIUM STREAMING WEBSITE</p>
          <h1 className="text-3xl font-bold leading-tight">{hero.title}</h1>
          <div className="flex items-center gap-2 mt-4 text-sm">
            <span className="flex items-center gap-0.5">
              <span className="text-yellow-400">
                ★★★★
              </span>
              {hero.rating}
            </span>

            <span>
              |
            </span>
            <span>
              {hero.year}
            </span>
            <span>
              |
            </span>
            <span>
              {hero.genre}
            </span>
            <span>
              |
            </span>
            <span className="text-yellow-400">
              ★★★★
            </span>
          </div>
          <p className="mt-4 text-sm text-gray-250 max-w-xs">
            {hero.description}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <button className="bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-3xl font-semibold cursor-pointer flex items-center gap-2">
              <FaPlay /> PLAY NOW
            </button>
            <button className="border border-gray-400 hover:bg-white/10 px-5 py-2 rounded-3xl cursor-pointer flex items-center gap-2">
              <FaPlus /> MY LIST
            </button>
          </div>
        </div>
        <button
          onClick={nextMovie}
          className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-white/20 px-2 py-2 rounded-full ">
          <FaChevronRight />
        </button>
        <button
          onClick={prevMovie}
          className="absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-white/20 px-2 py-2 rounded-full ">
          <FaChevronLeft />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {heroMovies.map((movie, index) => (
            <button
              key={movie.id}
              onClick={() => setCurrentMovie(index)}
              className={`h-2 w-2 rounded-full cursor-pointer ${currentMovie === index ? "bg-white" : "bg-gray-500"}`}
            ></button>
          ))}
        </div>
      </section >

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Continue Watching</h2>
        <div className="flex gap-5">
          {continueWatching.map((movie) => (
            <div
              key={movie.id}
              className="w-full cursor-pointer"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-45 object-cover rounded-lg"
              />
              <div className="mt-2">
                <p className="text-2xs">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="relative mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Trending Movies
        </h2>
        <div className="overflow-hidden">
          <div className="flex items gap-5 transition-transform duration-500"
            style={{
              transform: `translateX(-${trendingIndex * 240}px)`
            }}>

            {trendingMovies.map((movie) => (
              <div
                key={movie.id}
                className="w-[calc((100%-100px)/6)] shrink-0 cursor-pointer">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-100 object-cover rounded-lg"
                />
                <h3 className="font-semibold mt-2">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-xs">
                  <span className=" text-gray-400" >{movie.year} </span>
                  <span className="text-yellow-400">{"★".repeat(movie.rating)} </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextTrending}
          className="absolute right-2 top-1/2 -transalte-y-1/2 z-10 bg-black/50 hover:black/70 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
          <FaChevronRight />
        </button>
        <button
          onClick={prevTrending}
          className="absolute left-2 top-1/2 -transalte-y-1/2 z-10 bg-black/50 hover:black/70 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
          <FaChevronLeft />
        </button>
      </section>
      <section className="relative mt-8">
        <h2 className="text-xl font-semibold mb-4">New Release TV Shows</h2>
        <div className="overflow-hidden">
          <div className="flex items gap-5 transition-transform duration-500"
            style={{
              transform: `translateX(-${newReleaseIndex * 240}px)`
            }}>
            {newReleaseMovies.map((movie) => (
              <div
                key={movie.id}
                className="w-[calc((100%-100px)/6)] shrink-0 cursor-pointer">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-100 object-cover rounded-lg"
                />
                <h3 className="font-semibold mt-2">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-xs">
                  <span className=" text-gray-400" >{movie.year} </span>
                  <span className="text-yellow-400">{"★".repeat(movie.rating)} </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextNewRelease}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
          <FaChevronRight />
        </button>
        <button
          onClick={prevNewRelease}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
          <FaChevronLeft />
        </button>

      </section>
    </main >
  );
}

const continueWatching = [
  {
    id: 1,
    image: sentinal,
    title: "The Sentinel Ep 6",
  },
  {
    id: 2,
    image: arcane,
    title: "Arcane S1 E3",
  },
  {
    id: 3,
    image: foundation,
    title: "Foundation Ep 8",
  },
  {
    id: 4,
    image: cyperpunk,
    title: "Cyperpunk E2",
  }
]

const heroMovies = [
  {
    id: 1,
    image: heroImage,
    title: "Astral Frontier",
    genre: "Sci-Fi",
    rating: 4.3,
    year: 2021,
    description: "The astral show synopsis, it is the premium streaming movie with stunning visuals and an unforgettable journey through the universe.",
  },
  {
    id: 2,
    image: sentinal,
    title: "The Sentinel",
    genre: "Sci-Fi",
    rating: 6.1,
    year: 2006,
    description: "A model moves into a sinister Brooklyn brownstone that is actually a gateway to Hell, guarded by a blind priest who serves as the sentinel",
  },
  {
    id: 3,
    image: cyperpunk,
    title: "Cyperpunk",
    genre: "Action",
    rating: 9.0,
    year: 2021,
    description: "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
  }
]

const trendingMovies = [
  {
    id: 1,
    image: eclipse,
    title: "ECLIPSE",
    year: 2023,
    rating: 3,
  },
  {
    id: 2,
    image: ironheart,
    title: "IRON HEART",
    year: 2021,
    rating: 4,
  },
  {
    id: 3,
    image: dune,
    title: "DUNE: PART II",
    year: 2023,
    rating: 4,
  },
  {
    id: 4,
    image: nova,
    title: "NOVA",
    year: 2023,
    rating: 3,
  },
  {
    id: 5,
    image: city,
    title: "THE SILENT CITY",
    year: 2021,
    rating: 4,
  },
  {
    id: 6,
    image: rise,
    title: "RISE OF AGES",
    year: 2021,
    rating: 4,
  },
  {
    id: 7,
    image: cyper,
    title: "CYPERPUNK",
    year: 2021,
    rating: 4,
  }
]

const newReleaseMovies = [
  {
    id: 1,
    image: astra,
    title: "ASTRA",
    year: 2021,
    rating: 4,
  },
  {
    id: 2,
    image: depth,
    title: "THE DEPTHS",
    year: 2021,
    rating: 4,
  },
  {
    id: 3,
    image: odyssey,
    title: "ODYSSEY",
    year: 2021,
    rating: 4,
  },
  {
    id: 4,
    image: reckoning,
    title: "RECKONING",
    year: 2025,
    rating: 3,
  },
  {
    id: 5,
    image: shadow,
    title: "SHADOW PLAY",
    year: 2021,
    rating: 4,
  },
  {
    id: 6,
    image: strangerthing,
    title: "STRANGER THINGS",
    year: 2022,
    rating: 4,
  },
  {
    id: 7,
    image: society,
    title: "SOCIETY",
    year: 2023,
    rating: 4,
  }
]

export default HomePage