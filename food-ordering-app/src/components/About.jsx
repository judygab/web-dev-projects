import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div id="about" className="relative text-white py-24 mb-10 group overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-tomato/10 rounded-full blur-[120px] -z-10 group-hover:bg-tomato/30 transition duration-1000"></div>
            
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="flex justify-center md:justify-end order-2 md:order-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-marigold/20 to-tomato/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                    <img src={aboutImage} alt="about" className="w-[400px] h-[400px] object-cover rounded-3xl shadow-2xl relative z-10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,190,11,0.2)] transition duration-500 ease-out" />
                </div>
                <div className="space-y-6 order-1 md:order-2">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                        About <span className="text-marigold">Us</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-tomato to-marigold rounded-full"></div>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    We are dedicated to revolutionizing your dining experience with the fastest, most reliable food delivery service. Our mission is to bridge the gap between hungry customers and the best local restaurants. We guarantee hot, fresh, and perfectly packaged meals every single time. 
                    </p>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                    Whether you are craving a late-night snack or hosting a feast, we deliver directly to your doorstep with incredible speed and unmatched quality. Taste the difference today!
                    </p>
                </div>
            </div>
        </div>
    )
}