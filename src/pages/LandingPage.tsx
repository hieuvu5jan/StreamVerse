import heroImage from "../assets/astronaut.jpg";
import eclipse from "../assets/eclipse.jpg";
import dune from "../assets/dune.jpg";
import ironheart from "../assets/ironheart.jpg";
import nova from "../assets/nova.jpg";
import { useNavigate } from "react-router-dom";
import {
    FaPlay,
    FaCheck,
    FaFilm,
    FaTv,
    FaMobileAlt,
} from "react-icons/fa";

function LandingPage() {
    const navigate = useNavigate();
    const movies = [
        {
            id: 1,
            image: eclipse,
            title: "Eclipse",
        },
        {
            id: 2,
            image: ironheart,
            title: "Iron Heart",
        },
        {
            id: 3,
            image: dune,
            title: "Dune: Part II",
        },
        {
            id: 4,
            image: nova,
            title: "Nova",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white">

            {/* NAVBAR */}
            <nav className="absolute top-0 left-0 w-full z-20 px-8 lg:px-20 xl:px-60 py-5 flex items-center justify-between">

                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center">
                        <FaPlay className="text-sm" />
                    </div>

                    <h1 className="text-xl font-bold">
                        STREAMVERSE
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate("/home")}
                        className="px-5 py-2 border border-gray-400 rounded-full hover:bg-white/10 cursor-pointer">
                        SIGN IN
                    </button>

                    <button
                        onClick={() => navigate("/home")}
                        className="px-5 py-2 bg-sky-500 hover:bg-sky-600 rounded-full font-semibold cursor-pointer">
                        GET STARTED
                    </button>
                </div>
            </nav>


            {/* HERO */}
            <section className="relative h-[700px]">

                <img
                    src={heroImage}
                    alt="StreamVerse"
                    className="w-full h-full object-cover"
                />

                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/55"></div>

                {/* gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40"></div>

                <div className="absolute inset-0 flex items-center px-8 lg:px-20 xl:px-60">

                    <div className="max-w-2xl">

                        <p className="text-sky-400 tracking-[4px] text-sm font-semibold mb-4">
                            WELCOME TO STREAMVERSE
                        </p>

                        <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                            Unlimited movies,
                            <br />
                            endless stories.
                        </h2>

                        <p className="text-gray-300 text-lg mt-6 max-w-xl">
                            Discover thousands of movies and TV shows.
                            Watch anywhere, anytime and enjoy entertainment
                            without limits.
                        </p>

                        <div className="flex gap-4 mt-8">

                            <button
                                onClick={() => navigate("/home")}
                                className="bg-sky-500 hover:bg-sky-600 px-7 py-3 rounded-full font-semibold flex items-center gap-2 cursor-pointer"
                            >
                                <FaPlay />
                                START WATCHING
                            </button>

                            <button className="border border-gray-400 hover:bg-white/10 px-7 py-3 rounded-full cursor-pointer">
                                EXPLORE MOVIES
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* POPULAR MOVIES */}
            <section className="px-8 lg:px-20 xl:px-60 py-20">

                <div className="text-center mb-10">

                    <p className="text-sky-400 text-sm font-semibold tracking-widest">
                        DISCOVER
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        Popular on StreamVerse
                    </h2>

                    <p className="text-gray-400 mt-3">
                        Explore some of the most popular movies streaming now.
                    </p>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                    {movies.map((movie) => (

                        <div
                            key={movie.id}
                            className="group cursor-pointer"
                        >

                            <div className="overflow-hidden rounded-xl">

                                <img
                                    src={movie.image}
                                    alt={movie.title}
                                    className="w-full h-96 object-cover group-hover:scale-105 transition duration-300"
                                />

                            </div>

                            <h3 className="font-semibold mt-3">
                                {movie.title}
                            </h3>

                        </div>

                    ))}

                </div>

            </section>


            {/* FEATURES */}
            <section className="bg-slate-950 px-8 lg:px-20 xl:px-60 py-20">

                <div className="text-center">

                    <p className="text-sky-400 text-sm tracking-widest font-semibold">
                        WHY STREAMVERSE
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                        Entertainment without limits
                    </h2>

                </div>


                <div className="grid md:grid-cols-3 gap-8 mt-12">

                    {/* Feature 1 */}
                    <div className="bg-slate-900 p-8 rounded-xl text-center">

                        <div className="w-14 h-14 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mx-auto text-xl">
                            <FaFilm />
                        </div>

                        <h3 className="font-semibold text-xl mt-5">
                            Unlimited Movies
                        </h3>

                        <p className="text-gray-400 text-sm mt-3">
                            Explore thousands of movies from action,
                            sci-fi, drama and much more.
                        </p>

                    </div>


                    {/* Feature 2 */}
                    <div className="bg-slate-900 p-8 rounded-xl text-center">

                        <div className="w-14 h-14 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mx-auto text-xl">
                            <FaTv />
                        </div>

                        <h3 className="font-semibold text-xl mt-5">
                            Watch Anywhere
                        </h3>

                        <p className="text-gray-400 text-sm mt-3">
                            Enjoy StreamVerse on your TV, laptop,
                            tablet or any supported device.
                        </p>

                    </div>


                    {/* Feature 3 */}
                    <div className="bg-slate-900 p-8 rounded-xl text-center">

                        <div className="w-14 h-14 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mx-auto text-xl">
                            <FaMobileAlt />
                        </div>

                        <h3 className="font-semibold text-xl mt-5">
                            Stream Anytime
                        </h3>

                        <p className="text-gray-400 text-sm mt-3">
                            Your entertainment is always ready whenever
                            and wherever you want.
                        </p>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="px-8 lg:px-20 xl:px-60 py-24">

                <div className="bg-gradient-to-r from-sky-600 to-blue-800 rounded-2xl p-12 text-center">

                    <h2 className="text-4xl font-bold">
                        Ready to start watching?
                    </h2>

                    <p className="mt-4 text-blue-100">
                        Join StreamVerse today and discover your next
                        favorite story.
                    </p>

                    <div className="flex justify-center gap-6 mt-6 text-sm">

                        <span className="flex items-center gap-2">
                            <FaCheck />
                            Unlimited streaming
                        </span>

                        <span className="flex items-center gap-2">
                            <FaCheck />
                            Watch anywhere
                        </span>

                        <span className="flex items-center gap-2">
                            <FaCheck />
                            Cancel anytime
                        </span>

                    </div>

                    <button className="mt-8 bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 cursor-pointer">
                        GET STARTED
                    </button>

                </div>

            </section>


            {/* FOOTER */}
            <footer className="bg-slate-950 px-8 lg:px-20 xl:px-60 py-10">

                <div className="flex items-center justify-between border-b border-slate-800 pb-8">

                    <div className="flex items-center gap-2">

                        <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center">
                            <FaPlay className="text-xs" />
                        </div>

                        <span className="font-bold">
                            STREAMVERSE
                        </span>

                    </div>

                    <div className="flex gap-6 text-sm text-gray-400">

                        <a href="#" className="hover:text-white">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-white">
                            Terms
                        </a>

                        <a href="#" className="hover:text-white">
                            Help Center
                        </a>

                    </div>

                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                    © 2026 StreamVerse. All rights reserved.
                </p>

            </footer>

        </div>
    );
}

export default LandingPage;