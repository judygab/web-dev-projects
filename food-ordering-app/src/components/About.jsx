import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                    beatae! Doloribus fuga aperiam magni ipsum repellat voluptates
                    itaque error, atque, exercitationem fugit ab, modi ut voluptatum
                    sequi ad eum! Rerum! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Minus quia suscipit deserunt, neque nemo veniam
                    adipisci deleniti culpa dolor dolores omnis, rem veritatis assumenda
                    eaque dignissimos ut, nam debitis numquam!
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}