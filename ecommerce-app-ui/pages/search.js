import { useState } from "react";
import { SearchBar } from "../components/search/SearchBar";
import { FiltersBar } from "../components/search/FiltersBar";
import { ResultsContainer } from "../components/search/ResultsContainer";
import { ResultsSummary } from "../components/search/ResultsSummary";

const SearchPage = () => {
    const [currPage, setCurrPage] = useState(1);
    const resultsPerPage = 12;

    const onPageUpdate = (newIndex) => {
        setCurrPage(newIndex);
    }

    return (
        <div>
            <h1 className="text-xl p-4 text-center font-graphikLight">Search</h1>
            <SearchBar />
            <div className="grid grid-cols-4 h-screen">
                <div className="grid hidden sm:block col-span-1">
                    <FiltersBar />
                </div>
                <div className="m-4 col-span-4 sm:col-span-3">
                    <ResultsSummary count={120} currPage={currPage} resultsPerPage={resultsPerPage} onPageUpdate={onPageUpdate} />
                    <ResultsContainer currPage={currPage} resultsPerPage={resultsPerPage} />
                </div>
            </div>
        </div>
    )
}

export default SearchPage;