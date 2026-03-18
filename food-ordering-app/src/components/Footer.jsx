export const Footer = () => {
    return (
        <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 mt-20 relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-tomato/10 rounded-full blur-[100px] -z-10"></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-6">
                <div className="col-span-1 md:col-span-2 space-y-4">
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-marigold to-tomato">Foody</span>
                    <p className="text-gray-400 font-light max-w-sm">Delivering the best quality food directly to your doorstep. Fast, reliable, and incredibly delicious.</p>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold text-gray-200 uppercase tracking-wider">Company</h2>
                    <ul className="text-gray-400 space-y-4">
                        <li>
                            <a href="#" className="hover:text-marigold transition duration-300">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-marigold transition duration-300">Menu</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold text-gray-200 uppercase tracking-wider">Legal</h2>
                    <ul className="text-gray-400 space-y-4">
                        <li>
                            <a href="#" className="hover:text-marigold transition duration-300">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-marigold transition duration-300">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-marigold transition duration-300">Terms & Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="py-6 px-4 bg-black/40 border-t border-white/5 flex flex-col items-center justify-center">
                <span className="text-sm text-gray-400 font-light text-center">© 2026 Foody Delivery. All Rights Reserved.</span>
            </div>
        </footer>
    )
}