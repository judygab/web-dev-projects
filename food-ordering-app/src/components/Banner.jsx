import Button from "./elements/Button";

export const Banner = () => {
    return (
        <div className="banner w-full md:w-4/5 px-7 mx-auto relative flex flex-col md:flex-row items-center justify-between min-h-[70vh]">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-tomato/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-marigold/20 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="banner-deescription w-full md:w-1/2 p-4 md:p-8 space-y-6 z-10">
                <h2 className="mb-4 text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 leading-tight">
                    Food Ordering <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-marigold to-tomato">Made Easy</span>
                </h2>
                <p className="font-medium text-xl text-gray-300 py-2 max-w-lg">
                    Experience the fastest delivery with premium quality food directly to your doorstep. Satisfy your cravings today!
                </p>
                <div className="btn-container flex items-center space-x-6 pt-4">
                    <Button size="medium" className="shadow-[0_0_20px_rgba(255,190,11,0.4)] hover:shadow-[0_0_30px_rgba(255,190,11,0.6)] hover:-translate-y-1">Order Now</Button>
                    <a href="/menu" className="group flex items-center text-gray-300 hover:text-white font-bold text-lg transition duration-300">
                        See Menu
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-3 flex justify-center md:justify-end z-10 mt-10 md:mt-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-marigold/30 to-tomato/30 rounded-full blur-[60px] group-hover:blur-[80px] transition duration-700 opacity-60"></div>
                <img src={require("../assets/images/pizza_banner.png")} alt="banner" className="max-h-[500px] object-contain relative z-10 hover:scale-105 transition duration-700 hover:rotate-2 drop-shadow-2xl" />
            </div>
        </div>
    )
}