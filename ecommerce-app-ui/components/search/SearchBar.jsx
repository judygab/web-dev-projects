import Search from "../../assets/icons/search.svg";

export const SearchBar = () => {
    return (
        <div className="flex justify-center">
            <input type="text" placeholder="Search" className="bg-slate-300 p-2 rounded-md"/>
            <button className="transparent border border-2 border-black w-10 h-10 mx-4 flex items-center justify-center">
                <Search />
            </button>
        </div>
    )
}