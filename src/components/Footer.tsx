import {
    FaPlay,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTwitter,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-slate-950 text-white px-60 pt-12 pb-6">

            <div className="flex justify-between">

                {/* Logo + Description */}
                <div className="w-80">
                    <div className="flex items-center gap-2">
                        <div className="bg-sky-500 w-9 h-9 rounded-full flex items-center justify-center">
                            <FaPlay className="text-sm" />
                        </div>

                        <h2 className="text-xl font-bold">
                            STREAMVERSE
                        </h2>
                    </div>

                    <p className="text-sm text-gray-400 mt-4">
                        Watch your favorite movies and TV shows anytime,
                        anywhere. Discover new stories and enjoy unlimited
                        entertainment.
                    </p>
                </div>

                {/* Browse */}
                <div>
                    <h3 className="font-semibold mb-4">
                        Browse
                    </h3>

                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                        <a href="#" className="hover:text-white">Home</a>
                        <a href="#" className="hover:text-white">Movies</a>
                        <a href="#" className="hover:text-white">TV Shows</a>
                        <a href="#" className="hover:text-white">New & Popular</a>
                    </div>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-semibold mb-4">
                        Support
                    </h3>

                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                        <a href="#" className="hover:text-white">Help Center</a>
                        <a href="#" className="hover:text-white">Terms of Use</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Contact Us</a>
                    </div>
                </div>

                {/* Social */}
                <div>
                    <h3 className="font-semibold mb-4">
                        Follow Us
                    </h3>

                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500"
                        >
                            <FaYoutube />
                        </a>

                        <a
                            href="#"
                            className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800 mt-10 pt-5 text-center text-sm text-gray-500">
                © 2026 StreamVerse. All rights reserved.
            </div>

        </footer>
    );
}

export default Footer;