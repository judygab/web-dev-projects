import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import ChevronLeft from "../../assets/icons/chevron-left.svg";
import ChevronRight from "../../assets/icons/chevron-right.svg";
import clsx from 'clsx';
import { Pagination } from './Pagination';

export const ResultsSummary = ({ count, currPage, resultsPerPage, onPageUpdate }) => {
    const router = useRouter();
    const { categories, color } = router.query;
    const totalPages = Math.ceil(count / resultsPerPage);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (totalPages < 8) {
            setIsExpanded(true)
        }
    }, [totalPages])

    const pageNumberStyle = {
        current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600",
        default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
    }

    const defaultPageNumberStyle = 
        "relative inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20"

    return (
        <div className='sm:flex sm:flex-1 sm:items-center sm:justify-between my-2'>
            <div>
                <p className="text-slate-600 text-center">{`Showing ${count} product results`}</p>
            </div>
            <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <button className={clsx(pageNumberStyle.default, defaultPageNumberStyle)} onClick={() => onPageUpdate(currPage - 1)} disabled={currPage == 1}>
                        <span className="sr-only">Previous</span>
                        <ChevronLeft width={24}/>
                    </button> 
                    <Pagination
                        pagesTotal={totalPages}
                        onClickPage={onPageUpdate}
                        currentPage={currPage}
                        isExpanded={false}
                        />
                     <button className={clsx(pageNumberStyle.default, defaultPageNumberStyle)} onClick={() => onPageUpdate(currPage + 1)} disabled={currPage == totalPages}>
                        <span className="sr-only">Next</span>
                        <ChevronRight width={24} />
                     </button>
                </nav>
            </div>
        </div>
    )
}