const NumberCounter = ({ quantity, updateQuantity }) => {
    return (
        <div className="w-32">
            <label htmlFor="custom-input-number" className="w-full text-black-700 text-sm font-semibold">Quantity</label>
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button onClick={() => updateQuantity(quantity - 1)} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={quantity}></input>
                <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                    <span onClick={() => updateQuantity(quantity + 1)} className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    )
}

export default NumberCounter;