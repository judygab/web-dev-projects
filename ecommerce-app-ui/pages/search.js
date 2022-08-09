import { SearchBar } from "../components/search/SearchBar";
import { FiltersBar } from "../components/search/FiltersBar";
import { ResultsContainer } from "../components/search/ResultsContainer";

const SearchPage = () => {
    return (
        <div>
            <h1 className="text-xl p-4 text-center font-graphikLight">Search</h1>
            <SearchBar />
            <div className="grid grid-cols-4 h-screen">
                <div className="grid col-span-1">
                    <FiltersBar />
                </div>
                <div className="grid col-span-3">
                    <ResultsContainer />
                </div>
            </div>
        </div>
    )
}

export default SearchPage;